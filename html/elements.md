# HTML elements

HTML is HyperText Markup Language

## Anatomy of an HTML element

![element](../assets/html-element.png)
![element with attribute](../assets/html-element-attr.png)

## Categorized according to nestable

- nesting elements
- void elements: area, base, br, col, embed, hr, img, input, link, meta, source, track, wbr

### Self-closing tags

Self-closing tags (`<tag />`) do not exist in HTML.
If a trailing / (slash) character is present in the start tag of an HTML element, HTML parsers ignore that slash character.
Self-closing tags are required in void elements in XML, XHTML, and SVG.

## Categorized according to function

### document

`<!DOCTYPE html>`, html, head, meta, title, style, link, script, body

### Marking up text

- headings: h1, h2, h3, h4, h5, h6
- paragraphs: p
- lists: ol, ul, li
- links: a
- emphasis and importance: span, em, strong, i, b, u

### layout

- div
-

#### table

### media

## Q & A

**Q: Why do we need structure?**

- Users looking at a web page tend to scan quickly to find relevant content, often just reading the headings, to begin with.
- Search engines indexing your page consider the contents of headings as important keywords for influencing the page's search rankings. SEO (Search Engine Optimization)
- Severely visually impaired people often don't read web pages; they listen to them instead. This is done with software called a screen reader. This software provides ways to get fast access to given text content.
- To style content with CSS, or make it do interesting things with JavaScript, you need to have elements wrapping the relevant content, so CSS/JavaScript can effectively target it.

**Q: Why do we need semantics?**

Semantics are relied on everywhere around us—we rely on previous experience to tell us what the function of an everyday object is;
