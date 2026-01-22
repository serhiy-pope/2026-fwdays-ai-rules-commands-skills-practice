# Imported Slides

You can split your `slides.md` into multiple files and organize them using the `src` attribute.

#### `slides.md`

<div class="frame frame--subtle p-5 mt-4">

```markdown
# Page 1

Page 2 from main entry.

---

## src: ./subpage.md
```

</div>

<br>

#### `subpage.md`

<div class="frame frame--subtle p-5 mt-4">

```markdown
# Page 2

Page 2 from another file.
```

</div>

[Learn more](https://sli.dev/guide/syntax.html#importing-slides)
