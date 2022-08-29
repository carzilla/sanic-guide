(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{511:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"헤더-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#헤더-headers"}},[t._v("#")]),t._v(" 헤더(Headers)")]),t._v(" "),s("p",[t._v("요청 및 응답 헤더는 각각 "),s("code",[t._v("Request")]),t._v(" 및 "),s("code",[t._v("HTTPResponse")]),t._v(" 객체에서 사용할 수 있습니다.\n단일 키가 여러 값을 가질 수 있도록 허용하는 "),s("a",{attrs:{href:"https://multidict.readthedocs.io/en/stable/multidict.html#cimultidict",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("multidict")]),t._v(" 패키지"),s("OutboundLink")],1),t._v("를 사용합니다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("FYI")]),t._v(" "),s("p",[t._v("헤더 키는 구문 분석시 "),s("em",[t._v("소문자")]),t._v("로 변환됩니다. 헤더에는 대문자 사용이 고려되지 않습니다.")])]),t._v(" "),s("h2",{attrs:{id:"요청-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#요청-request"}},[t._v("#")]),t._v(" 요청(Request)")]),t._v(" "),s("p",[t._v("Sanic은 요청 헤더를 개발자에게 제공하기 전에 요청 헤더에 대해 일부 정규화를 시도하고, 일반적인 사용 사례에 대해 잠재적으로 의미 있는 몇 가지 추출을 시도합니다.")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("h4",{attrs:{id:"토큰-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#토큰-tokens"}},[t._v("#")]),t._v(" 토큰(Tokens)")]),t._v(" "),s("p",[s("code",[t._v("Token <token>")]),t._v(" 또는 "),s("code",[t._v("Bearer <token>")]),t._v("형식의 인증 토큰이 요청 객체 "),s("code",[t._v("request.token")]),t._v("으로 추출됩니다.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:8000 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Token ABCDEF12345679"')]),t._v("\nABCDEF12345679\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:8000 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"')]),t._v("\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("h4",{attrs:{id:"프록시-헤더-proxy-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#프록시-헤더-proxy-headers"}},[t._v("#")]),t._v(" 프록시 헤더(Proxy headers)")]),t._v(" "),s("p",[t._v("Sanic에는 프록시 헤더에 대한 특수 처리 기능이 있습니다. 자세한 내용은 "),s("RouterLink",{attrs:{to:"/guide/advanced/proxy-headers.html"}},[t._v("proxy headers")]),t._v(" 섹션을 참조하십시오.")],1),t._v(" "),s("h4",{attrs:{id:"호스트-헤더-및-동적-url-구성-host-header-and-dynamic-url-construction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#호스트-헤더-및-동적-url-구성-host-header-and-dynamic-url-construction"}},[t._v("#")]),t._v(" 호스트 헤더 및 동적 URL 구성(Host header and dynamic URL construction)")]),t._v(" "),s("p",[s("em",[t._v("유효 호스트")]),t._v("는 "),s("code",[t._v("request.host")]),t._v("를 통해 사용할 수 있습니다. 이것은 proxy-forwarded를 선호하고 서버 이름 설정에 의해 강제될 수 있으므로 호스트 헤더와 반드시 같지는 않습니다.")]),t._v(" "),s("p",[t._v("웹앱은 일반적으로 이 접근자를 사용해야 배포 방식에 관계없이 동일하게 작동할 수 있습니다. 실제 호스트 헤더는 필요한 경우 "),s("code",[t._v("request.headers")]),t._v("를 통해 찾을 수 있습니다.")]),t._v(" "),s("p",[t._v("유효 호스트는 요청을 사용하여 핸들러의 외부 주소를 결정하는 "),s("code",[t._v("request.url_for")]),t._v("를 통한 동적 URL 구성에도 사용됩니다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("악의적인 클라이언트를 조심하세요!")]),t._v(" "),s("p",[t._v("이러한 URL은 오해의 소지가 있는 호스트 헤더를 전송하여 조작할 수 있습니다. 이것이 우려된다면 "),s("code",[t._v("app.url_for")]),t._v("를 대신 사용해야 합니다.")])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SERVER_NAME "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hosts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"effective host"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host header"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded host"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forwarded"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"you are here"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url_for"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:8000/hosts\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"effective host"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example.com"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host header"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:8000"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded host"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" null,\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"you are here"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com/hosts"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("h4",{attrs:{id:"other-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-headers"}},[t._v("#")]),t._v(" Other headers")]),t._v(" "),s("p",[t._v("모든 요청 헤더는 "),s("code",[t._v("request.headers")]),t._v("에서 사용할 수 있으며 사전 형식으로 액세스할 수 있습니다. 대문자는 헤더에 대해 고려되지 않으며 대문자 또는 소문자 키를 사용하여 액세스할 수 있습니다.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo_weakref"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo_get"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo_getone"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FOO"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo_getall"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fOo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"all"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:9999/headers "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Foo: one"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FOO: two"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jq\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo_weakref"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo_get"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo_getone"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo_getall"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"two"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"all"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host"')]),t._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:9999"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user-agent"')]),t._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curl/7.76.1"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"accept"')]),t._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*/*"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"two"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("FYI")]),t._v(" "),s("p",[t._v("💡 request.headers 객체는 각 값이 목록인 사전인 몇 가지 유형 중 하나입니다. HTTP에서는 단일 키를 재사용하여 여러 값을 보낼 수 있기 때문입니다")]),t._v(" "),s("p",[t._v("대부분의 경우 .get() 또는 .getone() 메서드를 사용하여 목록이 아닌 첫 번째 요소에 액세스하려고 합니다. 모든 항목의 목록을 원하면 .getall()을 사용할 수 있습니다.")])]),t._v(" "),s("h4",{attrs:{id:"요청-id-request-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#요청-id-request-id"}},[t._v("#")]),t._v(" 요청 ID(Request ID)")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("종종 "),s("code",[t._v("X-Request-ID")]),t._v(" 헤더로 요청을 추적하는 것이 편리하거나 필요합니다. "),s("code",[t._v("request.id")]),t._v("로 쉽게 액세스할 수 있습니다.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:8000 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Request-ID: ABCDEF12345679"')]),t._v("\nABCDEF12345679\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"응답-response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#응답-response"}},[t._v("#")]),t._v(" 응답(Response)")]),t._v(" "),s("p",[t._v("Sanic은 자동으로 다음 응답 헤더(해당되는 경우)를 설정합니다.:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("content-length")])]),t._v(" "),s("li",[s("code",[t._v("content-type")])]),t._v(" "),s("li",[s("code",[t._v("connection")])]),t._v(" "),s("li",[s("code",[t._v("transfer-encoding")])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("설정할 다른 헤더는 경로 핸들러 또는 응답 미들웨어에서 수행할 수 있습니다.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content-language"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en-US"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("middleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"response"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_csp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content-security-policy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self';base-uri 'self';form-action 'self'\"")]),t._v("\n")])])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("설정할 다른 헤더는 경로 핸들러 또는 응답 미들웨어에서 수행할 수 있습니다.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content-language"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en-US"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("middleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"response"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_csp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content-security-policy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self';base-uri 'self';form-action 'self'\"")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"custom-block new"},[s("p",{staticClass:"custom-block-title"},[t._v("새로운")]),t._v(" "),s("p",[t._v("일반적인 "),s("RouterLink",{attrs:{to:"/ko/guide/basics/middleware.html"}},[t._v("middleware")]),t._v("는 모든 응답에 "),s("code",[t._v("X-Request-ID")]),t._v(" 헤더를 추가하는 것입니다. 위에서 언급했듯이"),s("code",[t._v("request.id")]),t._v("는 수신 요청의 ID를 제공합니다. 그러나 요청 헤더에 ID가 제공되지 않은 경우에도 자동으로 제공됩니다.")],1),t._v(" "),s("p",[s("a",{attrs:{href:"https://sanic.readthedocs.io/en/latest/sanic/api_reference.html#sanic.request.Request.id",target:"_blank",rel:"noopener noreferrer"}},[t._v("자세한 내용은 API 문서를 참조하세요."),s("OutboundLink")],1)])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("on_response")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_request_id_header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Request-ID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:8000 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v("\nHTTP/1.1 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\nX-Request-ID: 805a958e-9906-4e7a-8fe0-cbe83590431b\ncontent-length: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),t._v("\nconnection: keep-alive\ncontent-type: text/plain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf-8\n\n805a958e-9906-4e7a-8fe0-cbe83590431b\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);