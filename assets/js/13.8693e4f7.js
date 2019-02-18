(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{168:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),n("p",[t._v("实例化的过程主要进行了插件的解析和为每一种 CLI 命令指定模式，先看一下插件的解析。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),n("p",[t._v("可以将解析的插件分为4类：")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),n("p",[t._v("CLI 模式是 vue cli 中一个重要的概念，"),n("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细介绍"),n("OutboundLink")],1),t._v("可点击查看官方\n文档，在解析完插件之后就为每种插件命令指定模式，插件命令的模式可以 通过 "),n("code",[t._v("module.exports.defaultModes 以 { [commandName]: mode }")]),t._v(" 的形式来暴露：")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"new-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-service","aria-hidden":"true"}},[this._v("#")]),this._v(" new Service")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Service")]),this._v(" 的 "),s("code",[this._v("constructor")]),this._v(" 方法如下：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pkg"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inlineOptions"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useBuiltIn "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webpackChainFns "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 每一项为 chainable webpack 配置函数")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webpackRawConfigFns "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 每一项为 raw webpack 配置函数")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devServerConfigFns "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commands "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// Folder containing the target package.json for plugins")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 项目中 package.json 目录")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pkgContext "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" context\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// package.json containing the plugins")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pkg "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolvePkg")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pkg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// If there are inline plugins, they will be used instead of those")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// found in package.json.")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// When useBuiltIn === false, built-in plugins are disabled. This is mostly")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// for testing.")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果有 inline plugins 的话，就不会去加载 package.json 里 devDependencies 和 dependencies 的插件")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolvePlugins")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useBuiltIn"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// resolve the default mode to use for each command")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// this is provided by plugins as module.exports.defaultModes")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// so we can get the information without actually applying the plugin.")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 为命令指定模式")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 注册的插件可以通过 module.exports.defaultModes 指定特定的模式")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/*{\n    serve: 'development',\n    build: 'production',\n    inspect: 'development',\n    'test:unit': 'test'\n  }*/")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modes "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("reduce")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modes"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" apply"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defaultModes "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("assign")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modes"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultModes"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"resolveplugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolveplugins","aria-hidden":"true"}},[this._v("#")]),this._v(" resolvePlugins")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("resolvePlugins")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inlinePlugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useBuiltIn"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("idToPlugin")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" id "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("replace")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token regex"}},[t._v("/^.\\//")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'built-in:'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    apply"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" plugins\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 内置插件")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" builtInPlugins "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'./commands/serve'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'./commands/build'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'./commands/inspect'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'./commands/help'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// config plugins are order sensitive")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'./config/base'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'./config/css'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'./config/dev'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'./config/prod'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'./config/app'")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("map")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idToPlugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// builtInPlugins")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("//  [{ id: 'built-in:commands/serve', apply:{ [Function] defaultModes: [Object] } },...]")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inlinePlugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" useBuiltIn "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" builtInPlugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("concat")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inlinePlugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inlinePlugins\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//const pluginRE = /^(@vue\\/|vue-|@[\\w-]+\\/vue-)cli-plugin-/")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// exports.isPlugin = id => pluginRE.test(id)")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" projectPlugins "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("keys")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pkg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devDependencies "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("concat")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("keys")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pkg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dependencies "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("filter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isPlugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("map")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pkg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optionalDependencies "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n          id "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pkg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optionalDependencies\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("apply")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),n("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            apply "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token class-name"}},[t._v("e")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token function"}},[t._v("warn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`Optional dependency ")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("id"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v(" is not installed.`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n          "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" apply "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("idToPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    plugins "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builtInPlugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("concat")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("projectPlugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 内置插件和项目中的插件")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// Local plugins")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 项目本地的插件，针对于只需要在项目里直接访问插件 API 而不需要创建一个完整的插件")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pkg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuePlugins "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pkg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuePlugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" files "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pkg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuePlugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("Array"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("isArray")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("files"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`Invalid type for option 'vuePlugins.service', expected 'array' but got ")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" files"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v(".`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    plugins "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("concat")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("files"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("map")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`local:")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("file"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      apply"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("loadModule")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pkgContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" plugins\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("内置插件")]),this._v(" "),s("li",[this._v("inlinePlugins")]),this._v(" "),s("li",[this._v("package.json 插件")]),this._v(" "),s("li",[this._v("package.vuePlugins 插件")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("strong",[t._v("内置插件")]),t._v("指的是 "),n("code",[t._v("@vue/cli-service")]),t._v(" 内部提供的插件，又可以大致分为两类，"),n("code",[t._v("serve,build,inspect,help")]),t._v("这一类插件在内部动态注册新的 CLI 命令，\n开发者即可通过 npm script 的形式去启动对应的 CLI 命令服务，"),n("code",[t._v("base ,css, dev, prod, app")]),t._v(" 这一类插件主要是完成 "),n("code",[t._v("webpack")]),t._v(" 本地编译构建时的各种相关的配置。\n"),n("code",[t._v("@vue/cli-service")]),t._v(" 将 "),n("code",[t._v("webpack")]),t._v(" 的开发构建功能收敛到内部来完成。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("strong",[t._v("inlinePlugins")]),t._v(" 指的是直接在实例化 "),n("code",[t._v("Service")]),t._v(" 时传入，执行 "),n("code",[t._v("vue serve")]),t._v(" 和 "),n("code",[t._v("vue build")]),t._v(" 命令时会创建一个"),n("code",[t._v("Service")]),t._v(" 实例，并传入 "),n("code",[t._v("inlinePlugins")]),t._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("strong",[t._v("package.json 插件")]),t._v(" 指的是 "),n("code",[t._v("devDependencies")]),t._v(" 和 "),n("code",[t._v("dependencies")]),t._v(" 中的 vue 插件，比如 "),n("code",[t._v("@vue/cli-plugin-eslint")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("package.vuePlugins")]),this._v(" 也是在 "),s("code",[this._v("package.json")]),this._v(" 中的插件，不过是在 "),s("code",[this._v("vuePlugins")]),this._v(" 字段中，该类插件是针对于只需要在项目里直接访问插件 API 而不需要创建一个完整的插件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"cli-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-模式","aria-hidden":"true"}},[this._v("#")]),this._v(" CLI 模式")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" api "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  api"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("registerCommand")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'build'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultModes "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  build"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("解析命令模式利用 js 内建函数 "),s("code",[this._v("reduce")]),this._v(" 实现:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modes "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("reduce")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modes"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" apply"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defaultModes "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("assign")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modes"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultModes"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这一节大致介绍了 "),s("code",[this._v("new Service")]),this._v(" 的过程，在下一节将介绍 "),s("code",[this._v("Service")]),this._v(" 实例的 "),s("code",[this._v("run")]),this._v(" 方法。")])}],!1,null,null,null);o.options.__file="new-service.md";s.default=o.exports}}]);