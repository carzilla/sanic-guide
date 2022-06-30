(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{578:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"注入-injection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注入-injection"}},[t._v("#")]),t._v(" 注入（Injection）")]),t._v(" "),a("p",[t._v("依赖注入是一种根据定义的函数签名向响应程序中添加参数的方法。 这在许多情况下很有用，例如：")]),t._v(" "),a("ul",[a("li",[t._v("基于请求头获取对象（如当前 Session 用户）")]),t._v(" "),a("li",[t._v("将某些对象重构为指定的格式")]),t._v(" "),a("li",[t._v("通过 request 对象对数据进行预处理")]),t._v(" "),a("li",[t._v("自动注入服务")])]),t._v(" "),a("p",[t._v("当您 "),a("code",[t._v("扩展")]),t._v(" 应用程序时，响应程序上会挂载一个 "),a("code",[t._v("注入")]),t._v(" 方法。该方法接受以下参数：")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("类")]),t._v("： 一些独特的类，将成为对象的类型")]),t._v(" "),a("li",[a("em",[t._v("构造函数")]),t._v("（可选）： 将返回该类型的函数")])]),t._v(" "),a("p",[t._v("让我们通过一些例子来实际体会一下：")]),t._v(" "),a("h2",{attrs:{id:"基本实现-basic-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本实现-basic-implementation"}},[t._v("#")]),t._v(" 基本实现（Basic implementation）")]),t._v(" "),a("p",[t._v("最简单的例子就是用它来重写一个值。")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("如果您想要基于匹配的路径参数生成一个模型，这可能会很有用。")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@dataclass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IceCream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    flavor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__str__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flavor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(' (Yum!)"')])]),t._v("\n\n\next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("injection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IceCream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/<flavor:str>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ice_cream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flavor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IceCream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"You chose: ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("flavor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ curl localhost:8000/chocolate\nYou chose Chocolate (Yum!)\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"附加构造函数-additional-constructors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附加构造函数-additional-constructors"}},[t._v("#")]),t._v(" 附加构造函数（Additional constructors）")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("有时您可能还需要传递一个构造函数。这可能是一个函数，甚至可能是一个充当构造函数的类方法。在这个例子中，我们正在创建一个名为 "),a("code",[t._v("Person.create")]),t._v(" 的注入。")]),t._v(" "),a("p",[t._v("同样需要注意的是，在这个例子中，我们实际上是在注入 "),a("strong",[t._v("两个对象")]),t._v(" ！当然并不需要这样，但是我们将基于函数签名注入对象。")]),t._v(" "),a("p",[t._v("当构造函数没有传递给 "),a("code",[t._v("ext.injection")]),t._v(" 时，将通过调用该类型来创建对象。")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@dataclass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersonID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    person_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@dataclass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    person_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PersonID\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v("\n    age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@classmethod")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" person_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PersonID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noname"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("injection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("injection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PersonID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/person/<person_id:int>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("person_details")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" person_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PersonID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Person\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("person_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ curl localhost:8000/person/123\nPersonID(person_id=123)\nPerson(person_id=PersonID(person_id=123), name='noname', age=111)\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"来自-request-的对象-objects-from-the-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来自-request-的对象-objects-from-the-request"}},[t._v("#")]),t._v(" 来自 "),a("code",[t._v("Request")]),t._v(" 的对象（Objects from the "),a("code",[t._v("Request")]),t._v("）")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("有时，您可能希望从请求中提取细节并对它们进行预处理。例如，您可以将请求 JSON 转换为 Python 对象，然后基于数据库查询添加一些额外的逻辑。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("如果您计划使用这种方法，您应该注意到注入操作实际上是在 Sanic 读取请求体之前发生的。请求头应该已经被处理。因此，如果您确实想要访问请求体，您将需要手动消费，如本例所示。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("receive_body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("这可以用于以下情况:")]),t._v(" "),a("ul",[a("li",[t._v("使用中间件对 "),a("code",[t._v("request.ctx")]),t._v(" 进行预处理并添加内容")]),t._v(" "),a("li",[t._v("使用装饰器对请求处理程序进行预处理并注入参数")])])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@dataclass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserProfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" User\n    age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__json__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ujson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dumps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fake_request_to_db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    today "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("today"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    email "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("@something.com'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lower"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    difference "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" today "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromisoformat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"birthday"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("difference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("days "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("365")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" UserProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        email"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile_profile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("receive_body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    profile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" fake_request_to_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" profile\n\n\next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("injection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" compile_profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("patch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/profile"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update_profile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UserProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ curl localhost:8000/profile -X PATCH -d \'{"name": "Alice", "birthday": "2000-01-01"}\'\n{\n    "name":"Alice",\n    "age":21,\n    "email":"alice@something.com"\n}\n')])])])])]),t._v(" "),a("h2",{attrs:{id:"注入服务-injecting-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注入服务-injecting-services"}},[t._v("#")]),t._v(" 注入服务（Injecting services）")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("创建数据库连接池之类的对象并将它们存储在 "),a("code",[t._v("app.ctx")]),t._v(" 对象上是一种常见的模式。这使得它们可以在整个应用程序中使用，这是一种非常方便的做法。")]),t._v(" "),a("p",[t._v("但是这样做的缺点是您将不再拥有一个类型化的对象可以使用。您可以通过注入来解决这个问题。")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FakeConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"result"')]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("before_server_start")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup_db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db_conn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FakeConnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db_conn\n\n\next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("injection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FakeConnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" get_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FakeConnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ curl localhost:8000/\nresult\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);