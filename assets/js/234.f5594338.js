(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{542:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"快速开始-getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速开始-getting-started"}},[t._v("#")]),t._v(" 快速开始(Getting Started)")]),t._v(" "),a("p",[t._v("在我们开始之前，请确保您使用的是 Python3.7 或更高版本。目前已知可以使用的 Python 版本包括：3.7，3.8 和 3.9。")]),t._v(" "),a("h2",{attrs:{id:"安装-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-install"}},[t._v("#")]),t._v(" 安装(Install)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sanic\n")])])]),a("h2",{attrs:{id:"hello-world-应用-hello-world-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-应用-hello-world-application"}},[t._v("#")]),t._v(" Hello, world 应用(Hello, world application)")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("如果您熟悉其他任意一款基于装饰器的框架，那么您可能对此感觉有些亲切。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("小提示")]),t._v(" "),a("p",[t._v("如果您来自 Flask 或其他框架，则需要指出一些重要的事情。 请记住，Sanic 旨在提高性能、灵活性和易用性。 这些指导原则对 API 及其工作方式产生了重要影响。")])])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyHelloWorldApp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"注意-important-to-note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意-important-to-note"}},[t._v("#")]),t._v(" 注意(Important to note)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("每一个请求响应函数都可以使用同步方式（"),a("code",[t._v("def hello_world")]),t._v("）和异步方式（"),a("code",[t._v("async def hello_world")]),t._v("）进行声明。除非您有一个明确的需求和完善的使用方法，否则的话，请尽量使用 "),a("code",[t._v("async")]),t._v(" 来声明响应函数。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("request")]),t._v(" 对象始终是响应函数的第一个参数。 其他框架在需要导入的上下文变量中进行传递。 在 "),a("code",[t._v("async")]),t._v(" 的世界里，如果使用隐式传递，那么它将无法完美的运行，更何况还要兼顾简洁且高效的表现形式。所以我们在这里进行显式传递。")])]),t._v(" "),a("li",[a("p",[t._v("您 "),a("strong",[t._v("必须")]),t._v(" 使用 "),a("code",[t._v("Response")]),t._v(" 或继承自 "),a("code",[t._v("Response")]),t._v(" 的类作为响应类型。在许多其他框架中，它们允许您使用诸如 "),a("code",[t._v('return "Hello World"')]),t._v(" 或者 "),a("code",[t._v('return {"foo":"bar"}')]),t._v(" 的方式来进行返回，但是为了执行这类隐式调用，需要在响应流程中的某个位置花费大量的时间来确定您到底想要表达什么意思。因此，我们以轻松调用为代价，来提升服务的响应速度，Sanic 会要求您对您的响应进行显式调用。")])])]),t._v(" "),a("h3",{attrs:{id:"运行-running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行-running"}},[t._v("#")]),t._v(" 运行(Running)")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("让我们将上面写好的文件保存为 "),a("code",[t._v("server.py")]),t._v("， 然后运行它。")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("sanic server.app\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("小提示")]),t._v(" "),a("p",[t._v("这是 "),a("strong",[t._v("另一个")]),t._v(" 重要的区别。其他框架带有一个内置的开发服务器，并明确表示它只用于开发。而 Sanic 的情况恰好相反。")]),t._v(" "),a("p",[a("strong",[t._v("可以用于生产环境的服务器已经准备就绪")])])]),t._v(" "),a("h2",{attrs:{id:"sanic-拓展-sanic-extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sanic-拓展-sanic-extensions"}},[t._v("#")]),t._v(" Sanic 拓展(Sanic Extensions)")]),t._v(" "),a("p",[t._v("Sanic 致力于构建一个简洁且没有任何偏见的特征表。该项目不想要求您以某种方式构建应用程序，并试图避免指定特定的开发模式。有许多由社区构建和维护的第三方插件，用于添加不符合核心库要求的附加功能。")]),t._v(" "),a("p",[t._v("但是，为了 "),a("strong",[t._v("帮助 API 开发者")]),t._v(" ，Sanic 组织维护了一个名为 "),a("RouterLink",{attrs:{to:"/zh/plugins/sanic-ext/getting-started.html"}},[t._v("Sanic Extensions")]),t._v(" 的项目来提供各种易用的功能，包括:")],1),t._v(" "),a("ul",[a("li",[a("strong",[t._v("OpenAPI")]),t._v(" 使用 Redoc 和/或 Swagger 的文档")]),t._v(" "),a("li",[a("strong",[t._v("CORS")]),t._v(" 保护")]),t._v(" "),a("li",[a("strong",[t._v("依赖注入")]),t._v(" 路由处理程序")]),t._v(" "),a("li",[t._v("Request 参数 "),a("strong",[t._v("检查")])]),t._v(" "),a("li",[t._v("自动创建 "),a("code",[t._v("HEAD")]),t._v(", "),a("code",[t._v("OPTIONS")]),t._v(", 和 "),a("code",[t._v("TRACE")]),t._v(" 响应函数")]),t._v(" "),a("li",[t._v("响应序列化")])]),t._v(" "),a("p",[t._v("安装它的首选方法是与 Sanic 一起安装，当然您也可以单独安装。")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ pip install sanic[ext]\n")])])])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ pip install sanic sanic-ext\n")])])])])]),t._v(" "),a("p",[t._v("从 v21.12 开始，如果在相同的环境中，Sanic 将自动设置 Sanic 扩展。您可以通过以下的两种方式来进行访问拓展功能:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("app.extend()")]),t._v(" - 用于配置 Sanic 拓展")]),t._v(" "),a("li",[a("code",[t._v("app.ext")]),t._v(" - 注入到应用程序的扩展实例")])]),t._v(" "),a("p",[t._v("请查看 "),a("RouterLink",{attrs:{to:"/zh/plugins/sanic-ext/getting-started.html"}},[t._v("插件文档")]),t._v(" 来了解如何使用拓展插件。")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);