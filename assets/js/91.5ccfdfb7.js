(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{402:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-methods"}},[t._v("#")]),t._v(" HTTP Methods")]),t._v(" "),a("h2",{attrs:{id:"auto-endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-endpoints"}},[t._v("#")]),t._v(" Auto-endpoints")]),t._v(" "),a("p",[t._v("The default behavior is to automatically generate "),a("code",[t._v("HEAD")]),t._v(" endpoints for all "),a("code",[t._v("GET")]),t._v(" routes, and "),a("code",[t._v("OPTIONS")]),t._v(" endpoints for all\nroutes. Additionally, there is the option to automatically generate "),a("code",[t._v("TRACE")]),t._v(" endpoints. However, these are not enabled by\ndefault.")]),t._v(" "),a("tabs",[a("tab",{attrs:{name:"HEAD"}},[a("ul",[a("li",[a("strong",[t._v("Configuration")]),t._v(": "),a("code",[t._v("AUTO_HEAD")]),t._v(" (default "),a("code",[t._v("True")]),t._v(")")]),t._v(" "),a("li",[a("strong",[t._v("MDN")]),t._v(": "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("HEAD")]),t._v(" request provides the headers and an otherwise identical response to what a "),a("code",[t._v("GET")]),t._v(" request would provide.\nHowever, it does not actually return the body.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Given the above route definition, Sanic Extensions will enable "),a("code",[t._v("HEAD")]),t._v(" responses, as seen here.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ curl localhost:8000 --head\nHTTP/1.1 200 OK\naccess-control-allow-origin: *\ncontent-length: 13\nconnection: keep-alive\ncontent-type: text/plain; charset=utf-8\n")])])])]),t._v(" "),a("tab",{attrs:{name:"OPTIONS"}},[a("ul",[a("li",[a("strong",[t._v("Configuration")]),t._v(": "),a("code",[t._v("AUTO_OPTIONS")]),t._v(" (default "),a("code",[t._v("True")]),t._v(")")]),t._v(" "),a("li",[a("strong",[t._v("MDN")]),t._v(": "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("code",[t._v("OPTIONS")]),t._v(" requests provide the recipient with details about how the client is allowed to communicate with a given\nendpoint.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Given the above route definition, Sanic Extensions will enable "),a("code",[t._v("OPTIONS")]),t._v(" responses, as seen here.")]),t._v(" "),a("p",[t._v("It is important to note that we also see "),a("code",[t._v("access-control-allow-origins")]),t._v(" in this example. This is because\nthe "),a("RouterLink",{attrs:{to:"/en/plugins/sanic-ext/http/cors.html"}},[t._v("CORS protection")]),t._v(" is enabled by default.")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ curl localhost:8000 -X OPTIONS -i\nHTTP/1.1 204 No Content\nallow: GET,HEAD,OPTIONS\naccess-control-allow-origin: *\nconnection: keep-alive\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Even though Sanic Extensions will setup these routes for you automatically, if you decide to manually create")]),t._v(" "),a("p",[t._v("an "),a("code",[t._v("@app.options")]),t._v(" route, it will "),a("em",[t._v("not")]),t._v(" be overridden.")])])]),t._v(" "),a("tab",{attrs:{name:"TRACE"}},[a("ul",[a("li",[a("strong",[t._v("Configuration")]),t._v(": "),a("code",[t._v("AUTO_TRACE")]),t._v(" (default "),a("code",[t._v("False")]),t._v(")")]),t._v(" "),a("li",[a("strong",[t._v("MDN")]),t._v(": "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("By default, "),a("code",[t._v("TRACE")]),t._v(" endpoints will "),a("strong",[t._v("not")]),t._v(" be automatically created. However, Sanic Extensions "),a("strong",[t._v("will allow")]),t._v(" you to\ncreate them if you wanted. This is something that is not allowed in vanilla Sanic.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trace"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("To enable auto-creation of these endpoints, you must first enable them when extending Sanic.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_ext "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Extend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Config\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http_auto_trace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Now, assuming you have some endpoints setup, you can trace them as shown here:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ curl localhost:8000 -X TRACE\nTRACE / HTTP/1.1\nHost: localhost:9999\nUser-Agent: curl/7.76.1\nAccept: */*\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Setting up `AUTO_TRACE` can be super helpful, especially when your application is deployed behind a proxy since")]),t._v(" "),a("p",[t._v("it will help you determine how the proxy is behaving.")])])])],1),t._v(" "),a("h2",{attrs:{id:"additional-method-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-method-support"}},[t._v("#")]),t._v(" Additional method support")]),t._v(" "),a("p",[t._v("Vanilla Sanic allows you to build endpoints with the following HTTP methods:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#get"}},[t._v("GET")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#post"}},[t._v("POST")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#put"}},[t._v("PUT")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#head"}},[t._v("HEAD")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#options"}},[t._v("OPTIONS")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#patch"}},[t._v("PATCH")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#delete"}},[t._v("DELETE")])],1)]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Web Docs"),a("OutboundLink")],1),t._v(" for more.")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v('There are, however, two more "standard" HTTP methods: '),a("code",[t._v("TRACE")]),t._v(" and "),a("code",[t._v("CONNECT")]),t._v(". Sanic Extensions will allow you to build\nendpoints using these methods, which would otherwise not be allowed.")]),t._v(" "),a("p",[t._v("It is worth pointing out that this will "),a("em",[t._v("NOT")]),t._v(" enable convenience methods: "),a("code",[t._v("@app.trace")]),t._v(" or "),a("code",[t._v("@app.connect")]),t._v(". You need to\nuse "),a("code",[t._v("@app.route")]),t._v(" as shown in the example here.")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trace"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connect"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" empty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);