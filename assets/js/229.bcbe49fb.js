(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{537:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker-部署-docker-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署-docker-deployment"}},[t._v("#")]),t._v(" Docker 部署(Docker Deployment)")]),t._v(" "),a("h2",{attrs:{id:"介绍-introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍-introduction"}},[t._v("#")]),t._v(" 介绍(Introduction)")]),t._v(" "),a("p",[t._v("长期以来，环境一直是部署的难题。如果您的项目中有冲突的配置，您将不得不花费大量时间来解决它们。幸运的是，虚拟化为我们提供了一个很好的解决思路。Docker 就是其中之一。如果您不了解 Docker，可以访问 "),a("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 官网"),a("OutboundLink")],1),t._v(" 了解更多。")]),t._v(" "),a("h2",{attrs:{id:"构建镜像-build-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像-build-image"}},[t._v("#")]),t._v(" 构建镜像(Build Image)")]),t._v(" "),a("p",[t._v("我们以一个最简单的 Sanic 工程作为例子。假设项目"),a("code",[t._v("SanicDocker")]),t._v(" 的路径是"),a("code",[t._v("/path/to/SanicDocker")]),t._v("。")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("目录结构如右侧所示：")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# /path/to/SanicDocker\nSanicDocker\n├── requirements.txt\n├── dockerfile\n└── server.py\n")])])])])]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[a("code",[t._v("server.py")]),t._v("代码如右侧所示：")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MySanicApp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OK!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.0.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("小提示")]),t._v(" "),a("p",[t._v("请注意这里的 host 不能为 127.0.0.1 。在 docker 容器中，127.0.0.1 只表示本机本容器中的一个虚拟网卡，只接受本容器中的应用相互通讯。更多信息请参考 "),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 网络"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("代码准备好后，我们编写 "),a("code",[t._v("Dockerfile")]),t._v(" 文件，其内容如下：")]),t._v(" "),a("div",{staticClass:"language-Dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" sanicframework/sanic:3.8-latest")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /sanic")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" . .")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" pip install -r requirements.txt")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 8000")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"server.py"')]),t._v("]")]),t._v("\n")])])]),a("p",[t._v("运行下面的命令，构建镜像：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" build -t my-sanic-image "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("h2",{attrs:{id:"启动容器-start-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动容器-start-container"}},[t._v("#")]),t._v(" 启动容器(Start Container)")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("构建完镜像，我们将用构建好的 "),a("code",[t._v("my-sanic-image")]),t._v(" 镜像来启动容器。")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run --name mysanic -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v(":8000 -d my-sanic-image\n")])])])])]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("此时，在浏览器中访问 "),a("code",[t._v("http://localhost:8000/")]),t._v(" 即可看见 Sanic 服务器的返回结果")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("OK!\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"使用-docker-compose-编排-use-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-compose-编排-use-docker-compose"}},[t._v("#")]),t._v(" 使用 docker-compose 编排(Use docker-compose)")]),t._v(" "),a("p",[t._v("当您的项目中涵盖了多个不同的组件或服务时，您可以使用 "),a("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-compose"),a("OutboundLink")],1),t._v(" 来编排容器。以刚才打包好的 "),a("code",[t._v("my-sanic-image")]),t._v(" 和 "),a("code",[t._v("nginx")]),t._v(" 为例，我们来实现通过 "),a("code",[t._v("nginx")]),t._v(" 代理 "),a("code",[t._v("Sanic")]),t._v(" 服务器。")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("首先我们需要准备 nginx 的配置文件，将其命名为 "),a("code",[t._v("mysanic.conf")]),t._v(" 并写入内容：")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" [::]:80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://mysanic:8000/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Upgrade "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_upgrade")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Connection upgrade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Accept-Encoding gzip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("然后我们来准备 "),a("code",[t._v("docker-compose.yml")]),t._v(" 文件，其内容为：")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysanic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("image\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8000:8000"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mynginx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.13.6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"80:80"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" mysanic\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./mysanic.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/nginx/conf.d/mysanic.conf\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bridge\n")])])])])]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("接下来我们来启动容器：")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" up -d\n")])])])])]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("此时，在浏览器中访问 "),a("code",[t._v("http://localhost:80/")]),t._v(" 即可看见 Sanic 服务器的返回结果")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("OK!\n")])])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);