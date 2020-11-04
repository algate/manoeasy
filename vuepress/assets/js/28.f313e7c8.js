(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{557:function(s,e,t){"use strict";t.r(e);var v=t(9),_=Object(v.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),t("p",[s._v("VuePress 遵循 "),t("strong",[s._v("“约定优于配置”")]),s._v(" 的原则，推荐的目录结构如下：")]),s._v(" "),t("pre",{staticClass:"vue-container"},[t("code",[t("p",[s._v(".\n├── docs\n│   ├── .vuepress "),t("em",[s._v("("),t("strong",[s._v("可选的")]),s._v(")")]),s._v("\n│   │   ├── "),t("code",[s._v("components")]),s._v(" "),t("em",[s._v("("),t("strong",[s._v("可选的")]),s._v(")")]),s._v("\n│   │   ├── "),t("code",[s._v("theme")]),s._v(" "),t("em",[s._v("("),t("strong",[s._v("可选的")]),s._v(")")]),s._v("\n│   │   │   └── Layout.vue\n│   │   ├── "),t("code",[s._v("public")]),s._v(" "),t("em",[s._v("("),t("strong",[s._v("可选的")]),s._v(")")]),s._v("\n│   │   ├── "),t("code",[s._v("styles")]),s._v(" "),t("em",[s._v("("),t("strong",[s._v("可选的")]),s._v(")")]),s._v("\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── "),t("code",[s._v("templates")]),s._v(" "),t("em",[s._v("("),t("strong",[s._v("可选的, 谨慎配置")]),s._v(")")]),s._v("\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── "),t("code",[s._v("config.js")]),s._v(" "),t("em",[s._v("("),t("strong",[s._v("可选的")]),s._v(")")]),s._v("\n│   │   └── "),t("code",[s._v("enhanceApp.js")]),s._v(" "),t("em",[s._v("("),t("strong",[s._v("可选的")]),s._v(")")]),s._v("\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json")]),s._v("\n")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("请留意目录名的大写。")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("docs/.vuepress")]),s._v(": 用于存放全局的配置、组件、静态资源等。")]),s._v(" "),t("li",[t("code",[s._v("docs/.vuepress/components")]),s._v(": 该目录中的 Vue 组件将会被自动注册为全局组件。")]),s._v(" "),t("li",[t("code",[s._v("docs/.vuepress/theme")]),s._v(": 用于存放本地主题。")]),s._v(" "),t("li",[t("code",[s._v("docs/.vuepress/styles")]),s._v(": 用于存放样式相关的文件。")]),s._v(" "),t("li",[t("code",[s._v("docs/.vuepress/styles/index.styl")]),s._v(": 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。")]),s._v(" "),t("li",[t("code",[s._v("docs/.vuepress/styles/palette.styl")]),s._v(": 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。")]),s._v(" "),t("li",[t("code",[s._v("docs/.vuepress/public")]),s._v(": 静态资源目录。")]),s._v(" "),t("li",[t("code",[s._v("docs/.vuepress/templates")]),s._v(": 存储 HTML 模板文件。")]),s._v(" "),t("li",[t("code",[s._v("docs/.vuepress/templates/dev.html")]),s._v(": 用于开发环境的 HTML 模板文件。")]),s._v(" "),t("li",[t("code",[s._v("docs/.vuepress/templates/ssr.html")]),s._v(": 构建时基于 Vue SSR 的 HTML 模板文件。")]),s._v(" "),t("li",[t("code",[s._v("docs/.vuepress/config.js")]),s._v(": 配置文件的入口文件，也可以是 "),t("code",[s._v("YML")]),s._v(" 或 "),t("code",[s._v("toml")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("docs/.vuepress/enhanceApp.js")]),s._v(": 客户端应用的增强。")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("当你想要去自定义 "),t("code",[s._v("templates/ssr.html")]),s._v(" 或 "),t("code",[s._v("templates/dev.html")]),s._v(" 时，最好基于 "),t("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("默认的模板文件"),t("OutboundLink")],1),s._v(" 来修改，否则可能会导致构建出错。")])]),s._v(" "),t("p",[t("strong",[s._v("同时阅读:")])]),s._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/config/"}},[s._v("配置")])],1),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/theme/"}},[s._v("主题")])],1),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/theme/default-theme-config.html"}},[s._v("默认主题配置")])],1)]),s._v(" "),t("h2",{attrs:{id:"默认的页面路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认的页面路由"}},[s._v("#")]),s._v(" 默认的页面路由")]),s._v(" "),t("p",[s._v("此处我们把 "),t("code",[s._v("docs")]),s._v(" 目录作为 "),t("code",[s._v("targetDir")]),s._v(" （参考 "),t("RouterLink",{attrs:{to:"/api/cli.html#基本用法"}},[s._v("命令行接口")]),s._v("），下面所有的“文件的相对路径”都是相对于 "),t("code",[s._v("docs")]),s._v(" 目录的。在项目根目录下的 "),t("code",[s._v("package.json")]),s._v(" 中添加 "),t("code",[s._v("scripts")]),s._v(" ：")],1),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("对于上述的目录结构，默认页面路由地址如下：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("文件的相对路径")]),s._v(" "),t("th",[s._v("页面路由地址")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("/README.md")])]),s._v(" "),t("td",[t("code",[s._v("/")])])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("/guide/README.md")])]),s._v(" "),t("td",[t("code",[s._v("/guide/")])])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("/config.md")])]),s._v(" "),t("td",[t("code",[s._v("/config.html")])])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);