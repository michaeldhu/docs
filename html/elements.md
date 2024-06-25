# HTML elements

HTML is HyperText Markup Language. HTML is parsed permissively because when the web was first created, it was decided that allowing people to get their content published was more important than making sure the syntax was absolutely correct.

## Anatomy of an HTML element

![element](../assets/html-element.png)
![element with attribute](../assets/html-element-attr.png)

## Categorized according to nestable

- nesting elements
- void elements: `area, base, br, col, embed, hr, img, input, link, meta, source, track, wbr`

## Categorized according to block or not

In CSS, content that participates in block layout is called block-level content.
In CSS, content that participates in inline layout is called inline-level content.

- block(In a block layout, boxes are laid out one after the other, vertically, beginning at the top of a containing block.)
- inline-block
- inline

### Self-closing tags

Self-closing tags (`<tag />`) do not exist in HTML.
If a trailing / (slash) character is present in the start tag of an HTML element, HTML parsers ignore that slash character.
Self-closing tags are required in void elements in XML, XHTML, and SVG.

## Categorized according to function

### document

`<!DOCTYPE html>, html, head, base, meta, title, style, link, script, template, noscript, body`

The head's content is not displayed on the page. Instead, the head's job is to contain metadata about the document.

### Marking up text

- headings: `h1, h2, h3, h4, h5, h6, hgroup`
- paragraphs: `p`
- emphasis and importance: `span, em, strong, i, b, u`
- quotations: blockquote, `q`(inline quotation)
- abbreviations: `abbr`
- description lists: `dl, dt, dd`
- links: `a`
- lists: `ol, ul, li`
- computer code: `code, pre, var, kbd, samp`
- contact details: `address`
- Superscript and subscript: `sup, sub`
- times and dates: `time`

### structure

- header(usually a big strip across the top with a big heading, logo, and perhaps a tagline)
  - `header`
- navigation bar(links to the site's main sections)
  - `nav`
- main content(a big area in the center that contains most of the unique content of a given webpage)
  - `main, article, section, div`
- sidebar(peripheral info, links, quotes, ads)
  - `aside`
- footer(a strip across the bottom of the page that generally contains fine print, copyright notices, or contact info)
  - `footer`
- non-semantic element(sometimes you'll come across a situation where you can't find an ideal semantic element to group some items together or wrap some content)
  - `div, span`
- Line breaks and horizontal
  - `br, hr`

#### table

`table, caption, colgroup, col thead, tbody, tfoot, tr, th, td`

### form

`form, label, input, textarea, select, button, fieldset, meter, output, progress, object`

### media

- image: `img, figure, figcaption, picture, source, map, area`
- video & audio: `video, audio, source, track`
- Scalable Vector Graphics: `svg`
- canvas: `canvas`
- other embedding technologies: `object, embed`(*out of fashion*), `iframe`

### Transparent content model

`del, ins`

## Q & A

**Q: Why do we need structure?**

- Users looking at a web page tend to scan quickly to find relevant content, often just reading the headings, to begin with.
- Search engines indexing your page consider the contents of headings as important keywords for influencing the page's search rankings. SEO (Search Engine Optimization)
- Severely visually impaired people often don't read web pages; they listen to them instead. This is done with software called a screen reader. This software provides ways to get fast access to given text content.
- To style content with CSS, or make it do interesting things with JavaScript, you need to have elements wrapping the relevant content, so CSS/JavaScript can effectively target it.

**Q: Why do we need semantics?**

Semantics are relied on everywhere around us—we rely on previous experience to tell us what the function of an everyday object is;
