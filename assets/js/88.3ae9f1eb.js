(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{399:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("p",[t._v("Sanic Extensions is an "),a("em",[t._v("officially supported")]),t._v(" plugin developed, and maintained by the SCO. The primary goal of this project is to add additional features to help Web API and Web application development easier.")]),t._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("ul",[a("li",[t._v("CORS protection")]),t._v(" "),a("li",[t._v("Template rendering with Jinja")]),t._v(" "),a("li",[t._v("Dependency injection into route handlers")]),t._v(" "),a("li",[t._v("OpenAPI documentation with Redoc and/or Swagger")]),t._v(" "),a("li",[t._v("Predefined, endpoint-specific response serializers")]),t._v(" "),a("li",[t._v("Request query arguments and body input validation")]),t._v(" "),a("li",[t._v("Auto create "),a("code",[t._v("HEAD")]),t._v(", "),a("code",[t._v("OPTIONS")]),t._v(", and "),a("code",[t._v("TRACE")]),t._v(" endpoints")])]),t._v(" "),a("h2",{attrs:{id:"minimum-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minimum-requirements"}},[t._v("#")]),t._v(" Minimum requirements")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Python")]),t._v(": 3.8+")]),t._v(" "),a("li",[a("strong",[t._v("Sanic")]),t._v(": 21.9+")])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[t._v("The best method is to just install Sanic Extensions along with Sanic itself:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("You can of course also just install it by itself.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sanic-ext\n")])])]),a("h2",{attrs:{id:"extend-your-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extend-your-application"}},[t._v("#")]),t._v(" Extend your application")]),t._v(" "),a("p",[t._v("Out of the box, Sanic Extensions will enable a bunch of features for you.")]),t._v(" "),a("div",{staticClass:"custom-block new"},[a("p",{staticClass:"custom-block-title"},[t._v("NEW in v21.12")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("To setup Sanic Extensions (v21.12+), you need to do: "),a("strong",[t._v("nothing")]),t._v(". If it is installed in the environment, it is setup and ready to go.")]),t._v(" "),a("p",[t._v("This code is the Hello, world app in the "),a("RouterLink",{attrs:{to:"/en/guide/getting-started.html"}},[t._v("Sanic Getting Started page")]),t._v(" "),a("em",[t._v("without any changes")]),t._v(".")],1)]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyHelloWorldApp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[a("strong",[a("em",[t._v("OLD DEPRECATED SETUP")])])]),t._v(" "),a("p",[t._v("In v21.9, the easiest way to get started is to instantiate it with "),a("code",[t._v("Extend")]),t._v(".")]),t._v(" "),a("p",[t._v("If you look back at the Hello, world app in the "),a("RouterLink",{attrs:{to:"/en/guide/getting-started.html"}},[t._v("Sanic Getting Started page")]),t._v(", you will see the only additions here are the two highlighted lines.")],1)]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_ext "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Extend\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyHelloWorldApp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nExtend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("Regardless of how it is setup, you should now be able to view the OpenAPI documentation and see some of the functionality in action: "),a("a",{attrs:{href:"http://localhost:8000/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8000/docs"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);