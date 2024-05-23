# js

## js 诞生

- [Brendan Eich](https://brendaneich.com/2008/04/popularity/)
- [JS诞生记](https://www.ruanyifeng.com/blog/2011/06/birth_of_javascript.html)

### 背景

1994年，Netscape 发不了 Navigator 0.9版本，历史上第一个比较成熟的网络浏览器，轰动一时。但这个浏览器只用来浏览，并不支持用户交互。Netscape 急需一种脚本语言来实现与浏览器的互动。

公司内部对于使用现有的脚本语言还是重新设计一种新脚本语言，争执不下，高层难以决定。1995年发生了一件大事，Sun 公司将 Oak 语言更名为 Java，正式向市场推出。Sun 公司大肆宣扬并许诺这是一种 Write Once，Run Anywhere 的语言，使得 Java 在大众看来极有可能是未来的主宰。Netscape 也心动了，并与 Sun 结成联盟，允许 Java applet 直接在浏览器中运行，甚至考虑直接将 Java 作为脚本语言嵌入网页，但因为这样会使得 Html 变得极其复杂，最终才放弃。总之，此时的 Netscape 高层都是 Java 的信徒，而 Sun 公司也完全介入了网页脚本语言的决策。最后也是两家公司携手推出了网页脚本语言，被命名为 JavaScript也就不难理解。

### 诞生

1995年4月，Netscape 录用了 Brendan Eich 研究 Scheme 语言作为网页脚本语言的可能性。Brendan 本人主攻函数式编程，也以为自己进入 Netscape 后主要是和 Scheme 打交道。谁知一个月后 Netscape 做出了决策，未来网页的脚本语言必须与 Java 足够相似，但比 Java 简单，使得网页制作者能很快上手。然而 Brendan 对 Java 一点也不感兴趣，仅用了10天就将语言设计了出来。主要特点为：

- 借鉴 C 语言的基本语法
- 借鉴 Java 的数据结构和内存管理
- 借鉴 Scheme 的 First Class Function
- 借鉴 Self 的 prototype 作为继承机制

Netscape 与 Brendan 的共同决定了 javascript 注定是简化版函数式编程与简化版面向对象编程的混合产物。

### 命名

最开始被 Brendan 命名为 Mocha，后更名为 LiveScript，1996年 Netscape 为了利用 Java Community 的影响力，更名为 JavaScript。

## js 历史

- [Brief History of JavaScript](https://roadmap.sh/guides/history-of-javascript)

- 1995 诞生，Brendan 命名 Mocha，后又更名 LiveScript
- 1996 Netscape 为了利用 Java Community 而更名 JavaScript
- 1996 Netscape 提交 JavaScript 到 ECMA( European Computer Manufacturers Association) International，期望被标准化
- 1997 ES1 发布，完成标准化
- 1998 ES2
- 1999 ES3
- 1999 - 2008 发展出现了分歧，且无法统一，各浏览器厂商各自发展 ES4，大混乱时代，开发者只是添加各种 polyfills 以处理浏览器兼容问题
- 2009 ES5 mainly focusing on fixing the compatibility and security issues
- 2015 ES6/ES2015，在 TC39 的努力下，终于 ES 迎来了众多新特性的加入。
- 2016 ES7，同时 TC39 决定逐年发布新特性，并在 GitHub 维护 ECMAScript 标准。
- 2017 ES8
- Today [ESNext](https://github.com/tc39/ecma262)

## JS 小知识

### Atwood Law

Any Application that can be written by JavaScript will eventually be written by JavaScript. Coined by Jeff Atwood co-founder of StackOverflow years ago.
