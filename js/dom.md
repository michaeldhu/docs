# DOM

The Document Object Model is an interface that allows us to program the structure and content of XML and HTML documents, at the very core.

## tree traversal

Tree traversal simply means going up/down and/or left/right on the tree through the edges between adjacent nodes.

## Class hierarchy

- Object
  - EventTarget
    - Node
      - DocumentType
      - Element
        - HTMLElement
          - HTMLHtmlElement
          - HTMLHeadElement
          - HTMLTitleElement
          - HTMLBodyElement
          - HTMLDivElement
          - ...
      - Attr
      - CharacterData
        - Comment
        - Text
      - Document
      - DocumentFragment

## Node

### Properties

Note that all these properties are accessor properties.

- textContent
- nodeType
- nodeName
- nodeValue
- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling
- ownerDocument

### Methods

- appendChild(childNode)
- insertBefore(newChild, childNode)
- replaceChild(newChild, oldChild)
- removeChild(childNode)
- cloneNode(childNode)

Note that the childNode argument is required. Failing to provide will lead to an error.

### Constants

- ELEMENT_NODE 1
- ATTRIBUTE_NODE 2
- TEXT_NODE 3
- COMMENT_NODE 8
- DOCUMENT_NODE 9
- DOCUMENT_TYPE_NODE 10
- DOCUMENT_FRAGMENT_NODE 11

## Element

### Properties

- children
- firstElementChild
- lastElementChild
- nextElementSibling
- previousElementSibling
- innerHTML
- tagName

### Methods

- insertAdjacentElement()
- insertAdjacentText()
- insertAdjacentHTML()
- before()
- after()
- prepend()
- append()
- matches()

## Attributes

Watch out for the attribute value true!

- element.getAttribute(name) string
- element.setAttribute(name, value) no return
- element.setAttributeNode(Attr) Attr | null
- element.hasAttribute(name) boolean
- element.hasAttributes() boolean
- element.removeAttribute(name) no return
- element.removeAttributeNode(Attr)
- element.classList DOMTokenList
- element.dataset DOMStringMap
- element.id accessor property
- element.className
- element.attributes NamedNodeMap

### DOMTokenList

- length
- value
- add()
- remove()
- toggle()
- contains()
- forEach()

### DOMStringMap

DOMStringMap is exotic!

the corresponding property name is expressed in camel casing

### NamedNodeMap

- length
- getNamedItem()
- setNamedItem()
- removeNamedItem()

Like some NodeList instances, and all HTMLCollection instances, a NamedNodeMap instance is a live collection of nodes.

### Attr

- localName
- value
- ownerElement
- OwnerDocument

## Document

### properties

### methods

- createElement()
- createTextNode()
- createDocumentFragment()

## Selecting Elements

ele = document | element

- ele.getElementById(str) HTML instance
- ele.getElementsByClassName(str) HTMLCollection live collection
- ele.getElementsByTagName(str) HTMLCollection (element nodes) live collection
- ele.querySelector()
- ele.querySelectorAll() NodeList (arbitrary nodes)

Note that the parameter str is treated case-insensitively.

### How is a live collection implemented by engines?

All properties/methods of the HTMLCollection class are internally configured to search for the underlying set of elements, each time they are accessed.

### predefined

- document.documentElement selects the `<html>` element.
- document.head selects the `<head>` element.
- document.body selects the `<body>` element.
- document.scripts selects all `<script>` elements.
- document.links selects all the `<a>` elements.
- document.forms selects all the `<form>` elements.
- document.images selects all the `<img>` elements.
