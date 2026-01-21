import fs from 'node:fs/promises'
import path from 'node:path'

function getArg(flag) {
  const idx = process.argv.indexOf(flag)
  if (idx === -1) return null
  const val = process.argv[idx + 1]
  if (!val || val.startsWith('--')) return null
  return val
}

function slugify(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'slide'
}

function timestamp() {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function writePngFromB64(outFile, b64) {
  const buf = Buffer.from(b64, 'base64')
  await fs.writeFile(outFile, buf)
}

async function generateImage({ prompt, outFile, model = 'gpt-image-1', size = '1024x1024' }) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not set in the environment.')
  }

  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model,
      prompt,
      size,
      response_format: 'b64_json',
    }),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`OpenAI image generation failed (${res.status}): ${text}`)
  }

  const json = await res.json()
  const b64 = json?.data?.[0]?.b64_json
  if (!b64) {
    throw new Error('OpenAI response did not include data[0].b64_json.')
  }

  await writePngFromB64(outFile, b64)
}

async function main() {
  const title = getArg('--title')
  const prompt = getArg('--prompt')
  const content = getArg('--content') ?? ''

  if (!title || !prompt) {
    console.error('Usage: node scripts/create-slide-with-openai-image.mjs --title "..." --prompt "..." [--content "..."]')
    process.exit(1)
  }

  const slug = slugify(title)
  const ts = timestamp()

  const imagesDir = path.join(process.cwd(), 'public', 'images')
  const pagesDir = path.join(process.cwd(), 'pages')
  await ensureDir(imagesDir)
  await ensureDir(pagesDir)

  const imageFileName = `${slug}-${ts}.png`
  const imageDiskPath = path.join(imagesDir, imageFileName)
  const imagePublicPath = `/images/${imageFileName}`

  const slideFileName = `skills-openai-slide-image-${slug}.md`
  const slideDiskPath = path.join(pagesDir, slideFileName)

  console.log(`Generating image -> ${imageDiskPath}`)
  await generateImage({ prompt, outFile: imageDiskPath })

  const slideMd = `---\nlayout: image-right\nimage: ${imagePublicPath}\n---\n\n# ${title}\n\n${content ? content + '\n\n' : ''}- Generated via OpenAI Images API\n- Saved to \`public/images/\`\n- Embedded from \`${imagePublicPath}\`\n\n<!--\nPrompt used:\n${prompt}\n-->\n`

  await fs.writeFile(slideDiskPath, slideMd, 'utf8')

  console.log('\nSlide created:')
  console.log(`- pages/${slideFileName}`)
  console.log('\nTo include it in slides.md, add:')
  console.log('---')
  console.log(`src: ./pages/${slideFileName}`)
  console.log('---')
}

main().catch((err) => {
  console.error(err?.stack || String(err))
  process.exit(1)
})

