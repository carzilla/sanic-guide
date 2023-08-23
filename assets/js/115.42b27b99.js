(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{436:function(t,e,a){"use strict";a.r(e);var s=a(5),o=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("Sanic Extensions can be configured in all of the same ways that "),e("RouterLink",{attrs:{to:"/en/guide/deployment/configuration.html"}},[t._v("you can configure Sanic")]),t._v(". That makes configuring Sanic Extensions very easy.")],1),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyApp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OAS_URL_PREFIX "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/apidocs"')]),t._v("\n")])])]),e("p",[t._v("However, there are a few more configuration options that should be considered.")]),t._v(" "),e("h2",{attrs:{id:"manual-extend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manual-extend"}},[t._v("#")]),t._v(" Manual "),e("code",[t._v("extend")])]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("Even though Sanic Extensions will automatically attach to your application, you can manually choose "),e("code",[t._v("extend")]),t._v(". When you do that, you can pass all of the configuration values as a keyword arguments (lowercase).")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyApp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oas_url_prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/apidocs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("Or, alternatively they could be passed all at once as a single "),e("code",[t._v("dict")]),t._v(".")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyApp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oas_url_prefix"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/apidocs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("Both of these solutions suffers from the fact that the names of the configuration settings are not discoverable by an IDE. Therefore, there is also a type annotated object that you can use. This should help the development experience.")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_ext "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Config\n\napp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyApp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oas_url_prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/apidocs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),e("h3",{attrs:{id:"cors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" "),e("code",[t._v("cors")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Whether to enable CORS protection")])]),t._v(" "),e("h3",{attrs:{id:"cors-allow-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors-allow-headers"}},[t._v("#")]),t._v(" "),e("code",[t._v("cors_allow_headers")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("str")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v('"*"')])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Value of the header: "),e("code",[t._v("access-control-allow-headers")])])]),t._v(" "),e("h3",{attrs:{id:"cors-always-send"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors-always-send"}},[t._v("#")]),t._v(" "),e("code",[t._v("cors_always_send")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Whether to always send the header: "),e("code",[t._v("access-control-allow-origin")])])]),t._v(" "),e("h3",{attrs:{id:"cors-automatic-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors-automatic-options"}},[t._v("#")]),t._v(" "),e("code",[t._v("cors_automatic_options")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Whether to automatically generate "),e("code",[t._v("OPTIONS")]),t._v(" endpoints for routes that do "),e("em",[t._v("not")]),t._v(" already have one defined")])]),t._v(" "),e("h3",{attrs:{id:"cors-expose-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors-expose-headers"}},[t._v("#")]),t._v(" "),e("code",[t._v("cors_expose_headers")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("str")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v('""')])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Value of the header: "),e("code",[t._v("access-control-expose-headers")])])]),t._v(" "),e("h3",{attrs:{id:"cors-max-age"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors-max-age"}},[t._v("#")]),t._v(" "),e("code",[t._v("cors_max_age")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("int")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("5")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Value of the header: "),e("code",[t._v("access-control-max-age")])])]),t._v(" "),e("h3",{attrs:{id:"cors-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors-methods"}},[t._v("#")]),t._v(" "),e("code",[t._v("cors_methods")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("str")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v('""')])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Value of the header: "),e("code",[t._v("access-control-access-control-allow-methods")])])]),t._v(" "),e("h3",{attrs:{id:"cors-origins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors-origins"}},[t._v("#")]),t._v(" "),e("code",[t._v("cors_origins")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("str")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v('""')])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Value of the header: "),e("code",[t._v("access-control-allow-origin")])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Be very careful if you place "),e("code",[t._v("*")]),t._v(" here. Do not do this unless you know what you are doing as it can be a security issue.")])]),t._v(" "),e("h3",{attrs:{id:"cors-send-wildcard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors-send-wildcard"}},[t._v("#")]),t._v(" "),e("code",[t._v("cors_send_wildcard")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("False")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Whether to send a wildcard origin instead of the incoming request origin")])]),t._v(" "),e("h3",{attrs:{id:"cors-supports-credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors-supports-credentials"}},[t._v("#")]),t._v(" "),e("code",[t._v("cors_supports_credentials")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("False")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Value of the header: "),e("code",[t._v("access-control-allow-credentials")])])]),t._v(" "),e("h3",{attrs:{id:"cors-vary-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors-vary-header"}},[t._v("#")]),t._v(" "),e("code",[t._v("cors_vary_header")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Whether to add the "),e("code",[t._v("vary")]),t._v(" header")])]),t._v(" "),e("h3",{attrs:{id:"http-all-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-all-methods"}},[t._v("#")]),t._v(" "),e("code",[t._v("http_all_methods")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Adds the HTTP "),e("code",[t._v("CONNECT")]),t._v(" and "),e("code",[t._v("TRACE")]),t._v(" methods as allowable")])]),t._v(" "),e("h3",{attrs:{id:"http-auto-head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-auto-head"}},[t._v("#")]),t._v(" "),e("code",[t._v("http_auto_head")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Automatically adds "),e("code",[t._v("HEAD")]),t._v(" handlers to any "),e("code",[t._v("GET")]),t._v(" routes")])]),t._v(" "),e("h3",{attrs:{id:"http-auto-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-auto-options"}},[t._v("#")]),t._v(" "),e("code",[t._v("http_auto_options")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Automatically adds "),e("code",[t._v("OPTIONS")]),t._v(" handlers to any routes without")])]),t._v(" "),e("h3",{attrs:{id:"http-auto-trace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-auto-trace"}},[t._v("#")]),t._v(" "),e("code",[t._v("http_auto_trace")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("False")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Automatically adds "),e("code",[t._v("TRACE")]),t._v(" handlers to any routes without")])]),t._v(" "),e("h3",{attrs:{id:"oas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Whether to enable OpenAPI specification generation")])]),t._v(" "),e("h3",{attrs:{id:"oas-autodoc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-autodoc"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_autodoc")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Whether to automatically extract OpenAPI details from the docstring of a route function")])]),t._v(" "),e("h3",{attrs:{id:"oas-ignore-head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-ignore-head"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_ignore_head")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": WHen "),e("code",[t._v("True")]),t._v(", it will not add "),e("code",[t._v("HEAD")]),t._v(" endpoints into the OpenAPI specification")])]),t._v(" "),e("h3",{attrs:{id:"oas-ignore-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-ignore-options"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_ignore_options")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": WHen "),e("code",[t._v("True")]),t._v(", it will not add "),e("code",[t._v("OPTIONS")]),t._v(" endpoints into the OpenAPI specification")])]),t._v(" "),e("h3",{attrs:{id:"oas-path-to-redoc-html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-path-to-redoc-html"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_path_to_redoc_html")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("Optional[str]")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("None")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Path to HTML file to override the existing Redoc HTML")])]),t._v(" "),e("h3",{attrs:{id:"oas-path-to-swagger-html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-path-to-swagger-html"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_path_to_swagger_html")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("Optional[str]")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("None")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Path to HTML file to override the existing Swagger HTML")])]),t._v(" "),e("h3",{attrs:{id:"oas-ui-default"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-ui-default"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_ui_default")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("Optional[str]")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v('"redoc"')])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Which OAS documentation to serve on the bare "),e("code",[t._v("oas_url_prefix")]),t._v(" endpoint; when "),e("code",[t._v("None")]),t._v(" there will be no documentation at that location")])]),t._v(" "),e("h3",{attrs:{id:"oas-ui-redoc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-ui-redoc"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_ui_redoc")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Whether to enable the Redoc UI")])]),t._v(" "),e("h3",{attrs:{id:"oas-ui-swagger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-ui-swagger"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_ui_swagger")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Whether to enable the Swagger UI")])]),t._v(" "),e("h3",{attrs:{id:"oas-ui-swagger-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-ui-swagger-version"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_ui_swagger_version")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("str")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v('"4.1.0"')])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Which Swagger version to use")])]),t._v(" "),e("h3",{attrs:{id:"oas-uri-to-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-uri-to-config"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_uri_to_config")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("str")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v('"/swagger-config"')])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Path to serve the Swagger configurtaion")])]),t._v(" "),e("h3",{attrs:{id:"oas-uri-to-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-uri-to-json"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_uri_to_json")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("str")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v('"/openapi.json"')])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Path to serve the OpenAPI JSON")])]),t._v(" "),e("h3",{attrs:{id:"oas-uri-to-redoc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-uri-to-redoc"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_uri_to_redoc")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("str")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v('"/redoc"')])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Path to Redoc")])]),t._v(" "),e("h3",{attrs:{id:"oas-uri-to-swagger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-uri-to-swagger"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_uri_to_swagger")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("str")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v('"/swagger"')])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Path to Swagger")])]),t._v(" "),e("h3",{attrs:{id:"oas-url-prefix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oas-url-prefix"}},[t._v("#")]),t._v(" "),e("code",[t._v("oas_url_prefix")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("str")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v('"/docs"')])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": URL prefix for the Blueprint that all of the OAS documentation witll attach to")])]),t._v(" "),e("h3",{attrs:{id:"swagger-ui-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#swagger-ui-configuration"}},[t._v("#")]),t._v(" "),e("code",[t._v("swagger_ui_configuration")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("Dict[str, Any]")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v('{"apisSorter": "alpha", "operationsSorter": "alpha", "docExpansion": "full"}')])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": The Swagger documentation to be served to the frontend")])]),t._v(" "),e("h3",{attrs:{id:"templating-enable-async"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#templating-enable-async"}},[t._v("#")]),t._v(" "),e("code",[t._v("templating_enable_async")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("bool")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("True")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Whether to set "),e("code",[t._v("enable_async")]),t._v(" on the Jinja "),e("code",[t._v("Environment")])])]),t._v(" "),e("h3",{attrs:{id:"templating-path-to-templates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#templating-path-to-templates"}},[t._v("#")]),t._v(" "),e("code",[t._v("templating_path_to_templates")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("Union[str, os.PathLike, Sequence[Union[str, os.PathLike]]]")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v("templates")])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": A single path, or multiple paths to where your template files are located")])]),t._v(" "),e("h3",{attrs:{id:"trace-excluded-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trace-excluded-headers"}},[t._v("#")]),t._v(" "),e("code",[t._v("trace_excluded_headers")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type")]),t._v(": "),e("code",[t._v("Sequence[str]")])]),t._v(" "),e("li",[e("strong",[t._v("Default")]),t._v(": "),e("code",[t._v('("authorization", "cookie")')])]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(": Which headers should be suppresed from responses to "),e("code",[t._v("TRACE")]),t._v(" requests")])])])}),[],!1,null,null,null);e.default=o.exports}}]);