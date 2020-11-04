(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{473:function(t,s,a){t.exports={example:"example_2DuOfB6G"}},513:function(t,s,a){"use strict";var n=a(473),e=a.n(n);s.default=e.a},541:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],mounted:function(){document.querySelector(".".concat(this.$style.example)).textContent="这个块是被内联的脚本渲染的，样式也采用了内联样式。"}},e=a(513),r=a(9);var p=Object(r.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"在-markdown-中-使用-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-markdown-中-使用-vue"}},[t._v("#")]),t._v(" 在 Markdown 中 使用 Vue")]),t._v(" "),a("h2",{attrs:{id:"浏览器的-api-访问限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的-api-访问限制"}},[t._v("#")]),t._v(" 浏览器的 API 访问限制")]),t._v(" "),a("p",[t._v("当你在开发一个 VuePress 应用时，由于所有的页面在生成静态 HTML 时都需要通过 Node.js 服务端渲染，因此所有的 Vue 相关代码都应当遵循 "),a("a",{attrs:{href:"https://ssr.vuejs.org/zh/universal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("编写通用代码"),a("OutboundLink")],1),t._v(" 的要求。简而言之，请确保只在 "),a("code",[t._v("beforeMount")]),t._v(" 或者 "),a("code",[t._v("mounted")]),t._v(" 访问浏览器 / DOM 的 API。")]),t._v(" "),a("p",[t._v("如果你正在使用，或者需要展示一个对于 SSR 不怎么友好的组件（比如包含了自定义指令），你可以将它们包裹在内置的 "),a("code",[t._v("<ClientOnly>")]),t._v(" 组件中：")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClientOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NonSSRFriendlyComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ClientOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("请注意，这并不能解决一些组件或库在"),a("strong",[t._v("导入")]),t._v("时就试图访问浏览器 API 的问题 —— 如果需要使用这样的组件或库，你需要在合适的生命周期钩子中"),a("strong",[t._v("动态导入")]),t._v("它们：")]),t._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./lib-that-access-window-on-import'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use code")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("如果你的模块通过 "),a("code",[t._v("export default")]),t._v(" 导出一个 Vue 组件，那么你可以动态注册它：")]),t._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dynamicComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":is")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dynamicComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      dynamicComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./lib-that-access-window-on-import'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dynamicComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[a("strong",[t._v("参考:")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js > 动态组件"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"模板语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板语法"}},[t._v("#")]),t._v(" 模板语法")]),t._v(" "),a("h3",{attrs:{id:"插值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插值"}},[t._v("#")]),t._v(" 插值")]),t._v(" "),a("p",[t._v("每一个 Markdown 文件将首先被编译成 HTML，接着作为一个 Vue 组件传入 "),a("code",[t._v("vue-loader")]),t._v("，这意味着你可以在文本中使用 Vue 风格的插值：")]),t._v(" "),a("p",[a("strong",[t._v("Input")])]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("{{ 1 + 1 }}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("Output")])]),t._v(" "),a("div",{staticClass:"language-text"},[a("pre",[a("code",[t._v(t._s(2))])])]),t._v(" "),a("h3",{attrs:{id:"指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),a("p",[t._v("同样地，也可以使用指令:")]),t._v(" "),a("p",[a("strong",[t._v("Input")])]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("i in 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ i }} "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("Output")])]),t._v(" "),a("div",{staticClass:"language-text"},[a("pre",[a("code",t._l(3,(function(s){return a("span",[t._v(t._s(s)+" ")])})),0)])]),t._v(" "),a("h3",{attrs:{id:"访问网站以及页面的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问网站以及页面的数据"}},[t._v("#")]),t._v(" 访问网站以及页面的数据")]),t._v(" "),a("p",[t._v("编译后的组件没有私有数据，但可以访问 "),a("RouterLink",{attrs:{to:"/theme/writing-a-theme.html#网站和页面的元数据"}},[t._v("网站的元数据")]),t._v("，举例来说：")],1),t._v(" "),a("p",[a("strong",[t._v("Input")])]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("{{ $page }}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("Output")])]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/using-vue.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Using Vue in Markdown"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"escaping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#escaping"}},[t._v("#")]),t._v(" Escaping")]),t._v(" "),a("p",[t._v("默认情况下，块级 (block) 的代码块将会被自动包裹在 "),a("code",[t._v("v-pre")]),t._v(" 中。如果你想要在内联 (inline) 的代码块或者普通文本中显示原始的大括号，或者一些 Vue 特定的语法，你需要使用自定义容器 "),a("code",[t._v("v-pre")]),t._v(" 来包裹：")]),t._v(" "),a("p",[a("strong",[t._v("Input")])]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("::: v-pre\n"),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`{{ This will be displayed as-is }}`")]),t._v("\n:::\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("Output")])]),t._v(" "),a("div",{pre:!0},[a("p",[a("code",[t._v("{{ This will be displayed as-is }}")])])]),a("h2",{attrs:{id:"使用组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用组件"}},[t._v("#")]),t._v(" 使用组件")]),t._v(" "),a("p",[t._v("所有在 "),a("code",[t._v(".vuepress/components")]),t._v(" 中找到的 "),a("code",[t._v("*.vue")]),t._v(" 文件将会自动地被注册为全局的异步组件，如：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n└─ .vuepress\n   └─ components\n      ├─ demo-1.vue\n      ├─ OtherComponent.vue\n      └─ Foo\n         └─ Bar.vue\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）：")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("demo-1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OtherComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Foo-Bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("demo-1"),t._v(" "),a("OtherComponent"),t._v(" "),a("Foo-Bar"),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("重要！")]),t._v(" "),a("p",[t._v("请确保一个自定义组件的名字包含连接符或者是 PascalCase，否则，它将会被视为一个内联元素，并被包裹在一个 "),a("code",[t._v("<p>")]),t._v(" 标签中，这将会导致 HTML 渲染紊乱，因为 HTML 标准规定， "),a("code",[t._v("<p>")]),t._v(" 标签中不允许放置任何块级元素。")])]),t._v(" "),a("h3",{attrs:{id:"在标题中使用组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在标题中使用组件"}},[t._v("#")]),t._v(" 在标题中使用组件")]),t._v(" "),a("p",[t._v("你可以在标题中使用 Vue 组件，但是请留意以下两种方式的不同：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Markdown")]),t._v(" "),a("th",[t._v("输出的 HTML")]),t._v(" "),a("th",[t._v("解析后的标题")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("pre",{pre:!0},[a("code",[t._v(" # text <Tag/> ")])])]),t._v(" "),a("td",[a("code",[t._v("<h1>text <Tag/></h1>")])]),t._v(" "),a("td",[a("code",[t._v("text")])])]),t._v(" "),a("tr",[a("td",[a("pre",{pre:!0},[a("code",[t._v(" # text `<Tag/>` ")])])]),t._v(" "),a("td",[a("code",[t._v("<h1>text <code>&lt;Tag/&gt;</code></h1>")])]),t._v(" "),a("td",[a("code",[t._v("text <Tag/>")])])])])]),t._v(" "),a("p",[t._v("被 "),a("code",[t._v("<code>")]),t._v(" 包装的 HTML 将按原样显示，只有未被包装的 HTML 才会被 Vue 解析。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("输出的 HTML 由 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),a("OutboundLink")],1),t._v(" 完成。而解析后的标题由 VuePress 完成，用于"),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#侧边栏"}},[t._v("侧边栏")]),t._v("以及文档的标题。")],1)]),t._v(" "),a("h2",{attrs:{id:"使用预处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用预处理器"}},[t._v("#")]),t._v(" 使用预处理器")]),t._v(" "),a("p",[t._v("VuePress 对以下预处理器已经内置相关的 webpack 配置："),a("code",[t._v("sass")]),t._v("、"),a("code",[t._v("scss")]),t._v("、"),a("code",[t._v("less")]),t._v("、"),a("code",[t._v("stylus")]),t._v(" 和 "),a("code",[t._v("pug")]),t._v("。要使用它们你只需要在项目中安装对应的依赖即可。例如，要使用 "),a("code",[t._v("sass")]),t._v("，需要安装：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D sass-loader node-sass\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后你就可以在 Markdown 或是组件中使用如下代码：")]),t._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  .title\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("要在组件中使用 "),a("code",[t._v('<template lang="pug">')]),t._v("，则需要安装 "),a("code",[t._v("pug")]),t._v(" 和 "),a("code",[t._v("pug-plain-loader")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D pug pug-plain-loader\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("需要指出的是，如果你是一个 "),a("code",[t._v("stylus")]),t._v(" 用户，你并不需要在你的项目中安装 "),a("code",[t._v("stylus")]),t._v(" 和 "),a("code",[t._v("stylus-loader")]),t._v("，因为 VuePress 已经内置了它们。")]),t._v(" "),a("p",[t._v("对于那些没有内置的预处理器，除了安装对应的依赖，你还需要 "),a("RouterLink",{attrs:{to:"/config/#configurewebpack"}},[t._v("拓展内部的 Webpack 配置")]),t._v("。")],1)]),t._v(" "),a("h2",{attrs:{id:"脚本和样式提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本和样式提升"}},[t._v("#")]),t._v(" 脚本和样式提升")]),t._v(" "),a("p",[t._v("有时，你可以只想在当前页面应用一些 JavaScript 或者 CSS，在这种情况下，你可以直接在 Markdown 文件中使用原生的 "),a("code",[t._v("<script>")]),t._v(" 或者 "),a("code",[t._v("<style>")]),t._v(" 标签，它们将会从编译后的 HTML 文件中提取出来，并作为生成的 Vue 单文件组件的 "),a("code",[t._v("<script>")]),t._v(" 和 "),a("code",[t._v("<style>")]),t._v(" 标签。")]),t._v(" "),a("p",{staticClass:"demo",class:t.$style.example}),t._v(" "),a("h2",{attrs:{id:"内置的组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置的组件"}},[t._v("#")]),t._v(" 内置的组件")]),t._v(" "),a("h3",{attrs:{id:"outboundlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outboundlink"}},[t._v("#")]),t._v(" OutboundLink "),a("Badge",{attrs:{text:"stable"}})],1),t._v(" "),a("p",[t._v("("),a("OutboundLink"),t._v(") 用来表明当前是一个外部链接。在 VuePress 中这个组件会紧跟在每一个外部链接后面。")],1),t._v(" "),a("h3",{attrs:{id:"clientonly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clientonly"}},[t._v("#")]),t._v(" ClientOnly "),a("Badge",{attrs:{text:"stable"}})],1),t._v(" "),a("p",[t._v("参考 "),a("a",{attrs:{href:"#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6"}},[t._v("浏览器的 API 访问限制")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[t._v("#")]),t._v(" Content")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Props")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pageKey")]),t._v(" - string, 要渲染的 "),a("RouterLink",{attrs:{to:"/guide/global-computed.html#page"}},[t._v("page")]),t._v(" 的 hash key, 默认值是当前页面的 key.")],1),t._v(" "),a("li",[a("code",[t._v("slotKey")]),t._v(" - string, 页面的 "),a("RouterLink",{attrs:{to:"/guide/markdown-slot.html"}},[t._v("markdown slot")]),t._v(" 的 key. 默认值是 "),a("RouterLink",{attrs:{to:"/guide/markdown-slot.html#default-slot-content"}},[t._v("default slot")]),t._v(".")],1)])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Usage")]),t._v("：")])])]),t._v(" "),a("p",[t._v("指定一个指定页面的特定 slot 用于渲染，当你使用 "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#特定页面的自定义布局"}},[t._v("自定义布局")]),t._v(" 或者自定义主题时，这将非常有用。")],1),t._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("参考:")])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/global-computed.html#page"}},[t._v("全局计算属性 > $page")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/guide/markdown-slot.html"}},[t._v("Markdown 插槽")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/theme/writing-a-theme.html#获取渲染内容"}},[t._v("开发主题 > 获取渲染内容")])],1)]),t._v(" "),a("h3",{attrs:{id:"badge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#badge"}},[t._v("#")]),t._v(" Badge "),a("Badge",{attrs:{text:"beta",type:"warning"}}),t._v(" "),a("Badge",{attrs:{text:"默认主题"}})],1),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Props")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("text")]),t._v(" - string")]),t._v(" "),a("li",[a("code",[t._v("type")]),t._v(" - string, 可选值： "),a("code",[t._v('"tip"|"warning"|"error"')]),t._v("，默认值是： "),a("code",[t._v('"tip"')])]),t._v(" "),a("li",[a("code",[t._v("vertical")]),t._v(" - string, 可选值： "),a("code",[t._v('"top"|"middle"')]),t._v("，默认值是： "),a("code",[t._v('"top"')])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Usage")]),t._v(":")])])]),t._v(" "),a("p",[t._v("你可以在标题中，使用这个组件来为某些 API 添加一些状态：")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(' Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("参考:")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%9C%A8%E6%A0%87%E9%A2%98%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6"}},[t._v("在标题中使用组件")])])])],1)}),[],!1,(function(t){this.$style=e.default.locals||e.default}),null,null);s.default=p.exports}}]);