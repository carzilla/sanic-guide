(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{563:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"version-21-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version-21-3"}},[t._v("#")]),t._v(" Version 21.3")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#介绍-introduction"}},[t._v("介绍(Introduction)")])]),s("li",[s("a",{attrs:{href:"#更新内容-what-to-know"}},[t._v("更新内容(What to know)")]),s("ul",[s("li",[s("a",{attrs:{href:"#仅支持-python3-7-及以上版本-python-3-7-only"}},[t._v("仅支持 Python3.7 及以上版本(Python 3.7+ Only)")])]),s("li",[s("a",{attrs:{href:"#流式传输合并为单个流-streaming-as-first-class-citizen"}},[t._v("流式传输合并为单个流(Streaming as first class citizen)")])]),s("li",[s("a",{attrs:{href:"#全新的路由器-router-overhaul"}},[t._v("全新的路由器(Router overhaul)")])]),s("li",[s("a",{attrs:{href:"#信号-api-signals-api-⭐️"}},[t._v("信号 API(Signals API) ⭐️")])]),s("li",[s("a",{attrs:{href:"#路由名称-route-naming"}},[t._v("路由名称(Route naming)")])]),s("li",[s("a",{attrs:{href:"#全新的装饰器-new-decorators"}},[t._v("全新的装饰器(New decorators)")])]),s("li",[s("a",{attrs:{href:"#路由解码-unquote-in-route"}},[t._v("路由解码(Unquote in route)")])]),s("li",[s("a",{attrs:{href:"#可修改的-request-match-info-alter-request-match-info"}},[t._v("可修改的 Request.match_info(Alter Request.match_info)")])]),s("li",[s("a",{attrs:{href:"#路由版本-version-types-in-routes"}},[t._v("路由版本(Version types in routes)")])]),s("li",[s("a",{attrs:{href:"#安全的-body-处理方式-safe-method-handling-with-body"}},[t._v("安全的 Body 处理方式(Safe method handling with body)")])]),s("li",[s("a",{attrs:{href:"#应用-蓝图和蓝图组的奇偶校验-application-blueprint-and-blueprint-group-parity"}},[t._v("应用，蓝图和蓝图组的奇偶校验(Application, Blueprint and Blueprint Group parity)")])]),s("li",[s("a",{attrs:{href:"#放弃对-httpx-的依赖-dropped-httpx-from-dependencies"}},[t._v("放弃对 httpx 的依赖(Dropped httpx from dependencies)")])]),s("li",[s("a",{attrs:{href:"#移除测试库-removed-testing-library"}},[t._v("移除测试库(Removed testing library)")])]),s("li",[s("a",{attrs:{href:"#应用和连接级别的上下文对象-application-and-connection-level-context-ctx-objects"}},[t._v("应用和连接级别的上下文对象(Application and connection level context (ctx) objects)")])])])]),s("li",[s("a",{attrs:{href:"#新闻-news"}},[t._v("新闻(News)")]),s("ul",[s("li",[s("a",{attrs:{href:"#一个新的前端-a-new-frontpage-🎉"}},[t._v("一个新的前端(A NEW frontpage) 🎉")])]),s("li",[s("a",{attrs:{href:"#聊天室移至-discord-chat-has-moved-to-discord"}},[t._v("聊天室移至 Discord(Chat has moved to Discord)")])]),s("li",[s("a",{attrs:{href:"#资助-sanic-open-collective"}},[t._v("资助 Sanic(Open Collective)")])]),s("li",[s("a",{attrs:{href:"#_2021-发布经理-2021-release-managers"}},[t._v("2021 发布经理(2021 Release Managers)")])])])]),s("li",[s("a",{attrs:{href:"#鸣谢-thank-you"}},[t._v("鸣谢(Thank you)")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"介绍-introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍-introduction"}},[t._v("#")]),t._v(" 介绍(Introduction)")]),t._v(" "),s("p",[t._v("Sanic 现在变得更快了。")]),t._v(" "),s("p",[t._v("嗯，已经很快了。但是随着 v21 版本的第一次迭代更新，我们整合了一些重大的里程碑式的变化，并做出了一些切实的改进。这包含了一些已经酝酿多年的想法，并最终成为发行版。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("突破性变化")]),t._v(" "),s("p",[t._v("21.3 版本引入了很多新特性。同时也带来了一些突破性变化。这就是为什么这些变化要在上一个长期支持版（LTS）发布后引入的原因。如果您依赖已经被删除的内容，那么您应该继续使用 v20.12LTS 直到您可以对其进行升级。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sanic>=20.12,<20.13"')]),t._v("\npip freeze "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" requirements.txt\n")])])]),s("p",[t._v("对于大多数的安装，您可以非常轻松的升级。")])]),t._v(" "),s("h2",{attrs:{id:"更新内容-what-to-know"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新内容-what-to-know"}},[t._v("#")]),t._v(" 更新内容(What to know)")]),t._v(" "),s("p",[t._v("值得注意的新功能或突破性变化，以及更新内容...")]),t._v(" "),s("h3",{attrs:{id:"仅支持-python3-7-及以上版本-python-3-7-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仅支持-python3-7-及以上版本-python-3-7-only"}},[t._v("#")]),t._v(" 仅支持 Python3.7 及以上版本(Python 3.7+ Only)")]),t._v(" "),s("p",[t._v("新版本放弃了对 Python3.6 的支持，20.12LTS 将是最后一个支持 Python3.6 的长期支持版，直到2022 年 12 月停止维护。19.12LTS 将继续支持 Python3.6，直到 2021 年 12 月停止维护。")]),t._v(" "),s("p",[t._v("阅读我们的 "),s("RouterLink",{attrs:{to:"/zh/guide/project/policies.html#发行安排-release-schedule"}},[t._v("发行安排")]),t._v(" 以了解更多内容。")],1),t._v(" "),s("h3",{attrs:{id:"流式传输合并为单个流-streaming-as-first-class-citizen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流式传输合并为单个流-streaming-as-first-class-citizen"}},[t._v("#")]),t._v(" 流式传输合并为单个流(Streaming as first class citizen)")]),t._v(" "),s("p",[t._v("将请求/响应周期统一为单个流极大的提升了速度。以前，常规周期和流式传输周期之间存在差异。这已经简化在底层代码中， 即 Api 现在保持不变， 以兼容性的方式进行更新。令人高兴的是，现在 "),s("strong",[t._v("所有")]),t._v(" 的流式请求都合并到了单个流中。")]),t._v(" "),s("p",[t._v("阅读 "),s("RouterLink",{attrs:{to:"/zh/guide/advanced/streaming.html#response-streaming"}},[t._v("流式传输更新的内容")]),t._v(" 以了解更多")],1),t._v(" "),s("h3",{attrs:{id:"全新的路由器-router-overhaul"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全新的路由器-router-overhaul"}},[t._v("#")]),t._v(" 全新的路由器(Router overhaul)")]),t._v(" "),s("p",[t._v("旧的 Sanic 路由器是基于正则表达式的。此外，它还存在一些缺陷，使得在运行时很难修改，并导致一些性能问题。此次变化已经酝酿多年，现在在"),s("a",{attrs:{href:"https://community.sanicframework.org/t/a-fast-new-router/649/41",target:"_blank",rel:"noopener noreferrer"}},[t._v("启动时将路由器转换为编译树"),s("OutboundLink")],1),t._v("。我们也期待今年会有更多性能上的改进。")]),t._v(" "),s("p",[t._v("对外的 API 保持了向后的兼容性。然而，如果您之前调用过路由器内部的方法，您应该注意以下一些变化。比如：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("Router.get()")]),t._v(" 有了一个全新的返回值")]),t._v(" "),s("li",[s("code",[t._v("Router")]),t._v(" 现在不是 "),s("code",[t._v("namedtuple")]),t._v("，而是一个普通的对象")]),t._v(" "),s("li",[t._v("如果手动构建了路由器，您需要在最后调用 "),s("code",[t._v("Router.finalize()")]),t._v(" 方法")]),t._v(" "),s("li",[t._v("路由器有了一个新的匹配模式 "),s("code",[t._v("date:ymd")])]),t._v(" "),s("li",[t._v("您不能在没有定义任何路由的情况下启动应用")])]),t._v(" "),s("p",[t._v("新的路由器拥有独立的仓库： "),s("a",{attrs:{href:"https://github.com/sanic-org/sanic-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("sanic-org/sanic-router"),s("OutboundLink")],1),t._v(" 和自己的 "),s("a",{attrs:{href:"https://pypi.org/project/sanic-routing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyPI 项目"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"信号-api-signals-api-⭐️"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#信号-api-signals-api-⭐️"}},[t._v("#")]),t._v(" 信号 API(Signals API) ⭐️")]),t._v(" "),s("p",[t._v("当前为 "),s("em",[t._v("测试功能")]),t._v("，该 API "),s("em",[t._v("将于 v21.6 版本正式发布")]),t._v("。")]),t._v(" "),s("p",[t._v("新的 Sanic 路由器的一个好处是，它可以同时为 "),s("a",{attrs:{href:"https://github.com/sanic-org/sanic/issues/1630",target:"_blank",rel:"noopener noreferrer"}},[t._v("新的信号 API"),s("OutboundLink")],1),t._v(" 提供支持。这个特性现在被发布给公众使用，正式发布时，该接口可能保持现有用法。")]),t._v(" "),s("p",[t._v("该功能的核心思想是：")]),t._v(" "),s("ol",[s("li",[t._v("为了允许开发者更好地控制和访问请求的生命周期")]),t._v(" "),s("li",[t._v("提供一个工具来使您的响应函数协调和发送信息")]),t._v(" "),s("li",[t._v("进一步提高性能")])]),t._v(" "),s("p",[t._v("该功能提供了三种新的使用方法：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("用法")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("@app.signal(...)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用于定义一个信号处理程序，它的用法和 "),s("code",[t._v("route")]),t._v(" 十分相似，无论在何处收到信号，该程序都将被执行。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("app.event(...)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("一个可在应用程序中的任何地方使用的变量，用于暂停执行，直到事件被触发。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("app.dispatch(...)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("触发事件，并运行信号处理程序")])])])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("signal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo.bar.<thing>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("signal_handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"[signal_handler] ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("thing"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait_for_event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"> waiting"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo.bar.*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"> event found\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("after_server_start")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("after_server_start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wait_for_event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo.bar.baz"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"路由名称-route-naming"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由名称-route-naming"}},[t._v("#")]),t._v(" 路由名称(Route naming)")]),t._v(" "),s("p",[t._v("曾经，路由可以通过 "),s("code",[t._v("route.name")]),t._v(" 和 "),s("code",[t._v("route.endpoint")]),t._v(" 进行引用。虽然看起来几乎一样，但是还是存在有细微的差别。现在，所有的路由都将统一命名和使用。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<app name>.[optional:<blueprint name>.]<handler name>\n")])])]),s("p",[t._v("这个新的 “name” 将会被分配该属性 "),s("code",[t._v("route.name")]),t._v("。我们取消了 "),s("code",[t._v("route.enpoint")]),t._v(" 属性，并将在 v21.9 版本中正式停用。在此之前，它的别名仍将是 "),s("code",[t._v("route.name")]),t._v("。")]),t._v(" "),s("p",[t._v("除此之外，以前用于静态文件，websocket 和蓝图的命名前缀也将被移除。")]),t._v(" "),s("h3",{attrs:{id:"全新的装饰器-new-decorators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全新的装饰器-new-decorators"}},[t._v("#")]),t._v(" 全新的装饰器(New decorators)")]),t._v(" "),s("p",[t._v("新增数种装饰器，取代原有的装饰器，方便 IDE 进行自动补全")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Alias to @app.listener("...")')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("before_server_start")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("after_server_stop")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("before_server_start")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("after_server_stop")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Alias to @app.middleware("...")')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("on_request")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("on_response")]),t._v("\n")])])]),s("h3",{attrs:{id:"路由解码-unquote-in-route"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由解码-unquote-in-route"}},[t._v("#")]),t._v(" 路由解码(Unquote in route)")]),t._v(" "),s("p",[t._v("如果您的路由参数使用了非 ascii 码的字符，Sanic 将不再为您进行解码，您需要显式传参来告诉路由它应该为您解码。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/overload/<param>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unquote"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OK2 "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/overload/您好"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OK2 您好"')]),t._v("\n")])])]),s("p",[t._v("如果您忘了这样做，您的响应文本将是保持编码状态的文本。")]),t._v(" "),s("h3",{attrs:{id:"可修改的-request-match-info-alter-request-match-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可修改的-request-match-info-alter-request-match-info"}},[t._v("#")]),t._v(" 可修改的 "),s("code",[t._v("Request.match_info")]),t._v("(Alter "),s("code",[t._v("Request.match_info")]),t._v(")")]),t._v(" "),s("p",[s("code",[t._v("match_info")]),t._v(" 始终为匹配的路径参数提供数据。您现在可以修改它，例如在中间件中。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("on_request")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("convert_to_snake_case")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("match_info "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" to_snake"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("match_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"路由版本-version-types-in-routes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由版本-version-types-in-routes"}},[t._v("#")]),t._v(" 路由版本(Version types in routes)")]),t._v(" "),s("p",[t._v("现在，路由中的 "),s("code",[t._v("version")]),t._v(" 参数可以使用：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("str")])]),t._v(" "),s("li",[s("code",[t._v("int")])]),t._v(" "),s("li",[s("code",[t._v("float")])])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.1.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"安全的-body-处理方式-safe-method-handling-with-body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全的-body-处理方式-safe-method-handling-with-body"}},[t._v("#")]),t._v(" 安全的 Body 处理方式(Safe method handling with body)")]),t._v(" "),s("p",[t._v("默认情况下， "),s("code",[t._v("GET")]),t._v("，"),s("code",[t._v("HEAD")]),t._v("，"),s("code",[t._v("OPTIONS")]),t._v(" 和 "),s("code",[t._v("DELETE")]),t._v(" 方法将不再对请求体进行解码，您可以通过以下的方式取消这一特性：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ignore_body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"应用-蓝图和蓝图组的奇偶校验-application-blueprint-and-blueprint-group-parity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用-蓝图和蓝图组的奇偶校验-application-blueprint-and-blueprint-group-parity"}},[t._v("#")]),t._v(" 应用，蓝图和蓝图组的奇偶校验(Application, Blueprint and Blueprint Group parity)")]),t._v(" "),s("p",[s("code",[t._v("Sanic")]),t._v(" 和 "),s("code",[t._v("Blueprint")]),t._v(" 类 具有很多类似的方法，在以前，由于他们的实现策略略有不同，他们使用了很多具有重复功能的代码。既然他们都继承自同一个基类，开发者和插件应该有一个统一的 API 来进行工作。")]),t._v(" "),s("p",[t._v("此外，蓝图组也支持常见的 URL 拓展参数了，例如："),s("code",[t._v("version")]),t._v(" 和 "),s("code",[t._v("strict_slashes")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"放弃对-httpx-的依赖-dropped-httpx-from-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#放弃对-httpx-的依赖-dropped-httpx-from-dependencies"}},[t._v("#")]),t._v(" 放弃对 "),s("code",[t._v("httpx")]),t._v(" 的依赖(Dropped "),s("code",[t._v("httpx")]),t._v(" from dependencies)")]),t._v(" "),s("p",[t._v("现在 Sanic 不再依赖 "),s("code",[t._v("httpx")]),t._v(" 。")]),t._v(" "),s("h3",{attrs:{id:"移除测试库-removed-testing-library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除测试库-removed-testing-library"}},[t._v("#")]),t._v(" 移除测试库(Removed "),s("code",[t._v("testing")]),t._v(" library)")]),t._v(" "),s("p",[t._v("Sanic 原本自带的测试客户端已经被移除。该测试客户端现在拥有了独立的仓库："),s("a",{attrs:{href:"https://github.com/sanic-org/sanic-testing",target:"_blank",rel:"noopener noreferrer"}},[t._v("sanic-org/sanic-testing"),s("OutboundLink")],1),t._v(" 自己的 "),s("a",{attrs:{href:"https://pypi.org/project/sanic-testing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyPI 项目"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("如果您已经安装了 "),s("code",[t._v("sanic-testing")]),t._v(" ，那么当您创建了 "),s("code",[t._v("Sanic()")]),t._v(" 应用时测试客户端也同时可用。所以 "),s("strong",[t._v("唯一")]),t._v(" 的变化就是您需要添加 "),s("code",[t._v("sanic-testing")]),t._v(" 到您测试工具的依赖中。")]),t._v(" "),s("h3",{attrs:{id:"应用和连接级别的上下文对象-application-and-connection-level-context-ctx-objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用和连接级别的上下文对象-application-and-connection-level-context-ctx-objects"}},[t._v("#")]),t._v(" 应用和连接级别的上下文对象(Application and connection level context ("),s("code",[t._v("ctx")]),t._v(") objects)")]),t._v(" "),s("p",[t._v("19.9 版本 "),s("a",{attrs:{href:"https://github.com/sanic-org/sanic/pull/1666/files",target:"_blank",rel:"noopener noreferrer"}},[t._v("添加"),s("OutboundLink")],1),t._v(" 了 "),s("code",[t._v("request.ctx")]),t._v(" 的 API。这个对象可以轻松地将属性和数据附加到请求对象上（比如在中间件中），并在应用程序的其他地方重复使用这些信息。")]),t._v(" "),s("p",[t._v("同样的，这个概念也被拓展到了下面两处：")]),t._v(" "),s("ol",[s("li",[t._v("应用实例")]),t._v(" "),s("li",[t._v("传输连接")])]),t._v(" "),s("h4",{attrs:{id:"应用上下文-application-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用上下文-application-context"}},[t._v("#")]),t._v(" 应用上下文(Application context)")]),t._v(" "),s("p",[t._v("一个常见的使用场景是将属性附加到应用程序实例上。为了保持一致性，并避免与 Sanic 自身属性的名称冲突，"),s("code",[t._v("ctx")]),t._v(" 对象现在存在于 "),s("code",[t._v("Sanic")]),t._v(" 实例上。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("before_server_startup")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startup_db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# WRONG")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connect_to_db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CORRECT")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connect_to_db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"连接上下文-connection-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接上下文-connection-context"}},[t._v("#")]),t._v(" 连接上下文(Connection context)")]),t._v(" "),s("p",[t._v("当一个客户端发送了一个包含 keep-alive 头的请求，Sanic 将尝试保持这个传输套接字 "),s("RouterLink",{attrs:{to:"/zh/guide/deployment/configuration.html#keep-alive-timeout"}},[t._v("一段时间")]),t._v("。现在这个传输对象也有一个可用的 "),s("code",[t._v("ctx")]),t._v(" 对象了。这实际上意味着来自同一个客户端的多个请求（就在这里传输层被复用）可以共享状态。")],1),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("on_request")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment_foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conn_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conn_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conn_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count_foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"request.conn_info.ctx.foo=')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conn_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:8000 localhost:8000 localhost:8000\nrequest.conn_info.ctx.foo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nrequest.conn_info.ctx.foo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nrequest.conn_info.ctx.foo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("连接级别的上下文是一个实验性的功能，并且应该会在 v21.6 版本中被完善。")])]),t._v(" "),s("h2",{attrs:{id:"新闻-news"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新闻-news"}},[t._v("#")]),t._v(" 新闻(News)")]),t._v(" "),s("h3",{attrs:{id:"一个新的前端-a-new-frontpage-🎉"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个新的前端-a-new-frontpage-🎉"}},[t._v("#")]),t._v(" 一个新的前端(A NEW frontpage) 🎉")]),t._v(" "),s("p",[t._v("我们把文档分成了两部分，储存库中的文档将仍旧使用 ReadTheDocs 进行构建，但仅限于 API 文档。新的前端页面将使用 “Sanic 用户指南”。")]),t._v(" "),s("p",[t._v("新的站点基于 vuepress 构建，欢迎投稿，我们也会请人对文档进行翻译。")]),t._v(" "),s("p",[t._v("作为文档的一部分，我们同样更新了 ReadTheDocs 上的文档，但仅限于 API 接口文档。")]),t._v(" "),s("h3",{attrs:{id:"聊天室移至-discord-chat-has-moved-to-discord"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聊天室移至-discord-chat-has-moved-to-discord"}},[t._v("#")]),t._v(" 聊天室移至 Discord(Chat has moved to Discord)")]),t._v(" "),s("p",[t._v("Gitter 聊天室向着淘汰又迈进了一步。取而代之的将是我们新开放的 "),s("a",{attrs:{href:"https://discord.gg/FARQzAEMAA",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord 聊天室"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"资助-sanic-open-collective"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资助-sanic-open-collective"}},[t._v("#")]),t._v(" 资助 Sanic(Open Collective)")]),t._v(" "),s("p",[t._v("Sanic 社区组织在 Open Collective 上申请了捐献项目，任何愿意为 Sanic 发展提供资金支持的人可以 "),s("a",{attrs:{href:"https://opencollective.com/sanic-org",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此"),s("OutboundLink")],1),t._v(" 参与。")]),t._v(" "),s("h3",{attrs:{id:"_2021-发布经理-2021-release-managers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2021-发布经理-2021-release-managers"}},[t._v("#")]),t._v(" 2021 发布经理(2021 Release Managers)")]),t._v(" "),s("p",[t._v("感谢 @sjsadowski 和 @yunstanford 担任 2019 年和 2020 年的发布经理。今年的发布经理是 @ahopkins 和 @vltr。")]),t._v(" "),s("h2",{attrs:{id:"鸣谢-thank-you"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#鸣谢-thank-you"}},[t._v("#")]),t._v(" 鸣谢(Thank you)")]),t._v(" "),s("p",[t._v("感谢所有参与此次发布的人：👏")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/ahopkins",target:"_blank",rel:"noopener noreferrer"}},[t._v("@ahopkins"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/akshgpt7",target:"_blank",rel:"noopener noreferrer"}},[t._v("@akshgpt7"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/artcg",target:"_blank",rel:"noopener noreferrer"}},[t._v("@artcg"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/ashleysommer",target:"_blank",rel:"noopener noreferrer"}},[t._v("@ashleysommer"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/elis-k",target:"_blank",rel:"noopener noreferrer"}},[t._v("@elis-k"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/harshanarayana",target:"_blank",rel:"noopener noreferrer"}},[t._v("@harshanarayana"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/sjsadowski",target:"_blank",rel:"noopener noreferrer"}},[t._v("@sjsadowski"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/tronic",target:"_blank",rel:"noopener noreferrer"}},[t._v("@tronic"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/vltr",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vltr"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("感谢 "),s("a",{attrs:{href:"https://github.com/miss85246",target:"_blank",rel:"noopener noreferrer"}},[t._v("@ConnorZhang"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://github.com/ZinkLu",target:"_blank",rel:"noopener noreferrer"}},[t._v("@ZinkLu"),s("OutboundLink")],1),t._v(" 将文档翻译成中文。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("请务必查看更新日志以获取指向所有 PR 等的链接。")])])}),[],!1,null,null,null);a.default=e.exports}}]);