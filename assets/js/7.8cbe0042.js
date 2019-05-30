(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{168:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("状态码的职责是当客户端向服务器端发送请求时，描述返回的请求结果。借助状态码，用户可以知道服务器端是正常处理了请求，还是出现了错误。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("2XX 的响应结果表明请求被正常处理了。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),r("p",[t._v("该状态码表示客户端进行链范围请求，而服务器成功执行链这部分的 GET 请求。响应报文中包含由 Content-Range 指定返回的实体内容。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),r("p",[t._v("3XX 响应结果表明浏览器需要执行某些特殊的处理以正确处理请求。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),r("p",[t._v("该状态码表示客户端发送附加条件的请求时，服务器端允许请求访问资源，但未满足条件的情况。304 状态码返回时，不包含任何响应的主体部分。304 虽然被划分在 3XX 类别中，但是和重定向没有关系。")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),r("p",[t._v("4XX 的响应结果表明客户端是发生错误的原因所在。")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),r("p",[t._v("该状态码表示请求报文中存在语法错误。当错误发生时，需修改请求的内容后再次发送请求。另外，浏览器会像 200 OK 一样处理该状态码。")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),r("p",[t._v("该状态码表明服务器上无法找到请求的资源。除此之外，也可以在服务器端拒绝请求且不想说明理由时使用。")]),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),r("p",[t._v("5XX 的响应结果表明服务器本身发生错误。")]),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),r("p",[t._v("该状态码表明服务器端在执行请求时发生了错误。也有可能是 Web 应用存在的 bug 或默写临时的故障。")]),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),r("p",[t._v("该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。如果事先得知解除以上状况需要的时间，最好写入 Retry-After 首部字段再返回给客户端。")]),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://book.douban.com/subject/25863515/reviews",target:"_blank",rel:"noopener noreferrer"}},[t._v("《图解HTTP》"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"http-学习笔记（六）：http-状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-学习笔记（六）：http-状态码","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP 学习笔记（六）：HTTP 状态码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"Q6aQ0"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"状态码告知从服务器端返回的请求结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态码告知从服务器端返回的请求结果","aria-hidden":"true"}},[this._v("#")]),this._v(" 状态码告知从服务器端返回的请求结果")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("状态码如 200 OK，以 3 位数字和原因组成。"),e("br"),this._v("数字中的第一位指定了响应类别，后两位无分类。响应类别又以下五种")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th"),t._v(" "),r("th",[t._v("类别")]),t._v(" "),r("th",[t._v("原因短语")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1XX")]),t._v(" "),r("td",[t._v("Informational（信息性状态码）")]),t._v(" "),r("td",[t._v("收到的请求正在处理中")])]),t._v(" "),r("tr",[r("td",[t._v("2XX")]),t._v(" "),r("td",[t._v("Success（成功状态码）")]),t._v(" "),r("td",[t._v("请求正常处理完毕")])]),t._v(" "),r("tr",[r("td",[t._v("3XX")]),t._v(" "),r("td",[t._v("Redirection（重定向状态码）")]),t._v(" "),r("td",[t._v("需要进行附加操作以完成请求")])]),t._v(" "),r("tr",[r("td",[t._v("4XX")]),t._v(" "),r("td",[t._v("Client Error（客户端错误状态码）")]),t._v(" "),r("td",[t._v("服务器无法处理请求")])]),t._v(" "),r("tr",[r("td",[t._v("5XX")]),t._v(" "),r("td",[t._v("Server Error（服务器错误状态码）")]),t._v(" "),r("td",[t._v("服务器处理请求出错")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"YemQe"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2xx-成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2xx-成功","aria-hidden":"true"}},[this._v("#")]),this._v(" 2XX 成功")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"lAn24"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_200-ok"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_200-ok","aria-hidden":"true"}},[this._v("#")]),this._v(" 200 OK")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("表示从客户端发来的请求在服务器端被正常处理了。"),e("br"),this._v("在响应报文里，随状态码一起返回的信息会因方法的不同而发生改变。比如，使用 GET 方法时，对应请求资源的实体会作为响应返回；而使用 HEAD 方法时，对应请求资源的实体不随报文主体作为响应返回（即在响应中只返回首部，不会返回实体的主体部分）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"Jc9WN"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_204-no-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_204-no-content","aria-hidden":"true"}},[this._v("#")]),this._v(" 204 No Content")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该状态码代表服务器接收的请求已成功处理，但在返回的响应报文中不含实体的主体部分。另外，也不允许返回任何实体的主体。比如，当从浏览器发出请求处理后，返回 204 响应，那么浏览器显示的页面不发生更新。"),e("br"),this._v("一般在只需要从客户端往服务器发送信息，而对客户端不需要发送新信息内容的情况下使用。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"eH5w3"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_206-partial-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_206-partial-content","aria-hidden":"true"}},[this._v("#")]),this._v(" 206 Partial Content")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"db6D3"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3xx-重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3xx-重定向","aria-hidden":"true"}},[this._v("#")]),this._v(" 3XX 重定向")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"dZTGp"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_301-moved-permanently"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_301-moved-permanently","aria-hidden":"true"}},[this._v("#")]),this._v(" 301 Moved Permanently")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("永久性重定向。该状态码表示请求的资源已被分配了新的 URI，以后使用资源现在所指的 URI。也就是说，如果已经把资源对应的 URI 保存为书签链，这时应该按 Location 首部字段提示的 URI 重新保存。"),e("br"),this._v("像下方给出的请求 URI，当指定资源路径的最后忘记添加斜杠“/”，就会产生 301 状态码。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[this._v("http:")]),this._v("//example.com/sample\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"lBCdh"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_302-found"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_302-found","aria-hidden":"true"}},[this._v("#")]),this._v(" 302 Found")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("临时性重定向。该状态码表示请求的资源已被分配了新的 URI，希望用户（本次）能使用新的 URI 访问。"),e("br"),this._v("和 301 Moved Permanently 状态码相似，但 302 状态码代表的资源不是被永久移动，知识临时性质的。换句话说，已移动的资源对应的 URI 将来还有可能发生改变。比如，用户把 URI 保存成书签，但不会像 301 状态码出现时那样去更新书签，而是仍旧保留返回 302 状态码的页面对应的 URI。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"bFlmK"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_303-see-other"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_303-see-other","aria-hidden":"true"}},[this._v("#")]),this._v(" 303 See Other")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该状态码表示由于请求对应的资源存在另一个 URI，应使用 GET 方法定向获取请求的资源。"),e("br"),this._v("303 状态码和 302 Found 状态码有着相同的功能，但 303 状态码明确表示客户端应当采用 GET 方法获取资源，这点与 302 状态码有区别。"),e("br"),this._v("比如，当使用 POST 方法访问 CGI 程序，其执行后的处理结果是希望客户端能以 GET 方法重定向到另一个 URI 上去时，返回 303 状态码。虽然 302 Found 状态码也可以实现相同的功能，但这里使用 303 状态码是最理想的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("当 301、302、303 响应状态码返回时，几乎所有的浏览器都会把 POST 改成 GET，并删除请求报文内的主体，之后请求会自动再次发送。\n301、302 标准是禁止将 POST 方法改变成 GET 方法的，但实际使用时大家都会这么做。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"jbQIc"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_304-not-modified"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_304-not-modified","aria-hidden":"true"}},[this._v("#")]),this._v(" 304 Not Modified")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"qf56R"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_307-temporary-redirect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_307-temporary-redirect","aria-hidden":"true"}},[this._v("#")]),this._v(" 307 Temporary Redirect")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("临时重定向。该状态码与 302 Found 有着相同的含义。尽管 302 标准禁止 POST 变成 GET，但实际使用时大家并不遵守。"),e("br"),this._v("307 会遵照浏览器标准，不会从 POST 变成 GET。但是，对于处理响应时的行为，每种浏览器有可能出现不同的情况。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"jZU84"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4xx-客户端错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4xx-客户端错误","aria-hidden":"true"}},[this._v("#")]),this._v(" 4XX 客户端错误")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"pr4iB"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_400-bad-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_400-bad-request","aria-hidden":"true"}},[this._v("#")]),this._v(" 400 Bad Request")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"CulHT"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_401-unauthorized"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_401-unauthorized","aria-hidden":"true"}},[this._v("#")]),this._v(" 401 Unauthorized")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该状态码表示发送的请求需要有通过 HTTP 认证（BASIC 认证、DIGEST 认证）的认证信息。另外若之前已进行过 1 次请求，则表示用户认证失败。"),e("br"),this._v("返回含有 401 的响应必须包含一个适用于被请求资源的 WWW-Authenticate 首部用以质询（challenge）用户信息。当浏览器初次接收到 401 响应，会弹出认证用的对话窗口。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"WskFC"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_403-forbidden"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_403-forbidden","aria-hidden":"true"}},[this._v("#")]),this._v(" 403 Forbidden")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该状态码表明对请求资源的访问 被服务器拒绝了。服务器没有必要给出拒绝的详细理由，但如果想作说明的话，可以在实体的主体部分对原因进行描述，这样就能让用户看到了。"),e("br"),this._v("未获得文件系统的访问权限，访问权限出现某些问题（从未授权的发送源 IP 地址试图访问）等例举的情况都可能是发生 403 的原因")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"pLnlG"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_404-not-found"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_404-not-found","aria-hidden":"true"}},[this._v("#")]),this._v(" 404 Not Found")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"wLmF8"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5xx-服务器错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5xx-服务器错误","aria-hidden":"true"}},[this._v("#")]),this._v(" 5XX 服务器错误")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"XEEYD"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_500-internal-server-error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_500-internal-server-error","aria-hidden":"true"}},[this._v("#")]),this._v(" 500 Internal Server Error")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"rOEQq"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_503-service-unavailable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_503-service-unavailable","aria-hidden":"true"}},[this._v("#")]),this._v(" 503 Service Unavailable")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("strong",[this._v("状态码和状况不一致")]),this._v("\n不少返回的状态码响应都是错误的，但是用户可能察觉不到这点。比如 Web 应用程序内部发生错误，但状态码依然返回 200 OK，这种情况也经常遇到。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"5fojo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考链接")])}],!1,null,null,null);e.default=s.exports}}]);