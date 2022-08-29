(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{471:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tls-ssl-https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tls-ssl-https"}},[t._v("#")]),t._v(" TLS/SSL/HTTPS")]),t._v(" "),s("blockquote",[s("p",[t._v("HTTPS経由でSanicを実行するにはどうすればよいですか?")])]),t._v(" "),s("p",[t._v("TLS証明書がない場合は、"),s("RouterLink",{attrs:{to:"/ja/guide/how-to/tls.html#get-certificates-for-your-domain-names"}},[t._v("このページの最後を参照")]),t._v("してください。")],1),t._v(" "),s("h2",{attrs:{id:"単一ドメイン、単一証明書"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#単一ドメイン、単一証明書"}},[t._v("#")]),t._v(" 単一ドメイン、単一証明書")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("Sanicに証明書ファイルを自動的に読み込ませます。証明書ファイルは、指定されたフォルダーに "),s("code",[t._v("fullchain.pem")]),t._v(" と "),s("code",[t._v("privkey.pem")]),t._v(" という名前で格納する必要があります。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" sanic myserver:app "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" :: "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--tls")]),t._v(" /etc/letsencrypt/live/example.com/\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"::"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ssl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/letsencrypt/live/example.com/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("または、certとkeyのファイル名を別々に辞書として渡すことも可能です。")]),t._v(" "),s("p",[t._v("さらに、鍵が暗号化されている場合は "),s("code",[t._v("password")]),t._v(" を追加することができ、パスワード以外のすべてのフィールドは "),s("code",[t._v("request.conn_info.cert")]),t._v(" に渡されます。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("ssl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cert"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/fullchain.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/privkey.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"for encrypted privkey file"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optional")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ssl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("また、どの暗号アルゴリズムが許可されるかなどの詳細を完全に制御したい場合は、"),s("a",{attrs:{href:"https://docs.python.org/3/library/ssl.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("ssl.SSLContext")]),s("OutboundLink")],1),t._v("を渡すこともできます。デフォルトでは、Sanicは安全なアルゴリズムのみを許可しており、非常に古いデバイスからのアクセスを制限する可能性があります。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ssl\n\ncontext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_default_context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Purpose"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CLIENT_AUTH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncontext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_cert_chain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"certs/fullchain.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"certs/privkey.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ssl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"複数のドメインで別々の証明書を使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#複数のドメインで別々の証明書を使用"}},[t._v("#")]),t._v(" 複数のドメインで別々の証明書を使用")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("複数の証明書のリストが提供されることがあり、その場合、Sanicはユーザーが接続しているホスト名に一致する証明書を選択する。これはTLSハンドシェイクの初期に発生するため、Sanicはまだクライアントにパケットを送信していません。")]),t._v(" "),s("p",[t._v("クライアントがSNI（サーバー名表示）を送信しない場合、クライアントブラウザ上では名前の不一致によるTLSエラーで失敗する可能性が高いにもかかわらず、リストの最初の証明書が使用されることになります。このフォールバックを防ぎ、既知のホスト名を持たないクライアントを直ちに切断するには、リストの最初のエントリとして "),s("code",[t._v("None")]),t._v(" を追加してください。"),s("code",[t._v("tls-strict-host")]),t._v(" は同等のCLIオプションです。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("また、適切なDNS名ではなくIPアドレスに接続する人に対して、あなたの証明書、真のホスト名、サイトのコンテンツを明らかにしたくない場合は、単一の証明書の前に"),s("code",[t._v("None")]),t._v("を使用することができます。")])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("ssl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"certs/example.com/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"certs/bigcorp.test/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ssl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("sanic myserver:app\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--tls")]),t._v(" certs/example.com/\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--tls")]),t._v(" certs/bigcorp.test/\n    --tls-strict-host\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("リスト上で辞書を使用することができます。これにより、証明書がどのドメインに一致するかを指定することもできますが、証明書自体に存在する名前をここから制御することはできません。名前が指定されない場合、証明書自体の名前が使用されます。")]),t._v(" "),s("p",[t._v("メインドメイン "),s("strong",[t._v("example.com")]),t._v(" と "),s("strong",[t._v("bigcorp.test")]),t._v(" のサブドメインへの接続のみを許可する場合。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("ssl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# No fallback if names do not match!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cert"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"certs/example.com/fullchain.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"certs/example.com/privkey.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"names"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.bigcorp.test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ssl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"ハンドラの-tls-情報に-request-conn-info-フィールドでアクセスする"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ハンドラの-tls-情報に-request-conn-info-フィールドでアクセスする"}},[t._v("#")]),t._v(" ハンドラの TLS 情報に "),s("code",[t._v("request.conn_info")]),t._v(" フィールドでアクセスする")]),t._v(" "),s("ul",[s("li",[s("code",[t._v(".ssl")]),t._v(" - 接続は安全か (bool)")]),t._v(" "),s("li",[s("code",[t._v(".cert")]),t._v(" - 現在アクティブな証明書の証明書情報およびdictフィールド (dict)")]),t._v(" "),s("li",[s("code",[t._v(".server_name")]),t._v(" - クライアントが送信した SNI (文字列、空白の場合もある)")])]),t._v(" "),s("p",[t._v("すべての "),s("code",[t._v("conn_info")]),t._v(" フィールドは、時間経過とともに多くのリクエストが発生する可能性のある接続ごとにあることに注意してください。サーバーの前でプロキシを使用している場合、同じパイプにあるこれらのリクエストは異なるユーザーからのものである可能性さえあります。")]),t._v(" "),s("h2",{attrs:{id:"http-を-https-にリダイレクトし、証明書のリクエストは-http-のままにする"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-を-https-にリダイレクトし、証明書のリクエストは-http-のままにする"}},[t._v("#")]),t._v(" HTTP を HTTPS にリダイレクトし、証明書のリクエストは HTTP のままにする")]),t._v(" "),s("p",[t._v("通常の HTTPS サーバに加えて、リダイレクト用のサーバ "),s("code",[t._v("http_redir.py")]),t._v(" を起動します。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exceptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response\n\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http_redir"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Serve ACME/certbot files without HTTPS, for certificate renewals")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("static"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/.well-known"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/www/.well-known"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resource_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dir"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exception")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exceptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NotFound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exceptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MethodNotSupported"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect_everything_else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exception"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startswith"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"https://')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("308")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bad Request. Please use HTTPS!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("HTTPS サーバーとは別の systemd ユニットとしてセットアップするのがベストです。HTTPS サーバはまだ実行できませんが、証明書を要求する間は HTTP を実行する必要があるかもしれません。IPv4 と IPv6 で起動します。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sanic http_redir:app -H 0.0.0.0 -p 80\nsanic http_redir:app -H :: -p 80\n")])])]),s("p",[t._v("また、メインアプリケーションからHTTPリダイレクトアプリケーションを実行することも可能です。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app == Your main application")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# redirect == Your http_redir application")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("before_server_start")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirect "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" redirect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" return_asyncio_server"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("runner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("redirect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("before_server_stop")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("runner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_running "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("signalize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("finalize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serve_forever"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_running "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n        app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_stopping "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n")])])]),s("h2",{attrs:{id:"ドメイン名用の証明書を取得する"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ドメイン名用の証明書を取得する"}},[t._v("#")]),t._v(" ドメイン名用の証明書を取得する")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let's Encrypt"),s("OutboundLink")],1),t._v("から無料で証明書を取得することができます。パッケージマネージャで"),s("a",{attrs:{href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("certbot"),s("OutboundLink")],1),t._v("をインストールし、証明書を要求してください。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" certbot certonly --key-type ecdsa --preferred-chain "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ISRG Root X1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" example.com "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" www.example.com\n")])])]),s("p",[t._v("複数のドメイン名を "),s("code",[t._v("-d")]),t._v(" 引数で追加することができ、すべて1つの証明書に保存され、ここでリストした "),s("strong",[t._v("最初のドメイン")]),t._v(" に従って "),s("code",[t._v("/etc/letsencrypt/live/example.com/")]),t._v(" に保存されます。")]),t._v(" "),s("p",[t._v("鍵の種類と優先するチェーンのオプションは、最小限のサイズの証明書ファイルを取得するために必要で、サーバーを"),s("em",[t._v("できるだけ速く")]),t._v("動作させるために不可欠なものです。Let's Encrypt が新しい EC チェーンをすべての主要なブラウザで信頼されるようになるまで、チェーンにはまだ 1 つの RSA 証明書が含まれます（おそらく 2023 年頃）。")])])}),[],!1,null,null,null);s.default=e.exports}}]);