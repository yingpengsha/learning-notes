(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{176:function(t,e,r){"use strict";r.r(e);var s=r(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("毫无疑问，HTTP 三次握手和四次挥手在实际应用场景和面试上都属于重点。虽然此前进行过学习，但由于在开发过程中遇到的次数太少，便没有记住多少。为了加强记忆，也为了梳理自身混乱的知识体系，特地记录下来，以便反复学习记忆。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{name:"M4Gf8"}}),t._v("\n### 为什么是三次\n"),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{name:"d5SPs"}}),t._v("\n### 第三次挥手\n"),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5a7835a46fb9a063606eb801#heading-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解TCP三次握手与四次分手"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.im/post/5b29d2c4e51d4558b80b1d8c",target:"_blank",rel:"noopener noreferrer"}},[t._v("跟着动画来学习TCP三次握手和四次挥手"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://jiar.github.io/2017/08/24/TCP%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E7%AE%80%E4%BB%8B/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP四次挥手简介"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.zhihu.com/question/24853633",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP 为什么是三次握手，而不是两次或四次？"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"http-学习笔记（三）：http-三次握手和四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-学习笔记（三）：http-三次握手和四次挥手","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP 学习笔记（三）：HTTP 三次握手和四次挥手")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"3NmlG"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"引言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引言","aria-hidden":"true"}},[this._v("#")]),this._v(" 引言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"avZ6A"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"三次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三次握手","aria-hidden":"true"}},[this._v("#")]),this._v(" 三次握手")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/268093/1556961536368-aac69f04-d438-4697-ae96-a83139af3431.png#align=left&display=inline&height=352&name=%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B.png&originHeight=352&originWidth=690&size=10083&status=done&width=690",alt:"三次握手.png"}}),e("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("strong",[t._v("seq")]),t._v(" : sequence")]),t._v(" "),r("li",[r("strong",[t._v("SYN")]),t._v(": synchronize")]),t._v(" "),r("li",[r("strong",[t._v("ACK")]),t._v(" : acknowledgment")]),t._v(" "),r("li",[r("strong",[t._v("SYN_SENT")]),t._v(" : syn package has been sent")]),t._v(" "),r("li",[r("strong",[t._v("SYN_RCVD")]),t._v(" : syn package has been received")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"sQt5D"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第一次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一次握手","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一次握手")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Client 发送一个 "),e("strong",[this._v("SYN(seq = x) 包")]),this._v("给 Server，然后等待 server 的 ACK 回复，进入"),e("code",[this._v("SYN-SENT")]),this._v("状态。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("张三首先向李四招手 ("),e("strong",[this._v("SYN")]),this._v(")")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"7ZKFE"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第二次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二次握手","aria-hidden":"true"}},[this._v("#")]),this._v(" 第二次握手")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Server 接收到** SYN(seq = x) 包**后就返回一个 "),e("strong",[this._v("ACK(x + 1) 包")]),this._v("以及一个自己的 "),e("strong",[this._v("SYN(seq = y) 包")]),this._v("，然后等待 Client 的 ACK 回复，Server 进入"),e("code",[this._v("SYN-RECIVED")]),this._v("状态。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("李四看到张三向自己招手后，向对方点了点头挤出了一个微笑 ("),e("strong",[this._v("ACK")]),this._v(")。\n但是李四还有点狐疑，向四周看了一看，有没有可能张三是在看别人呢，他也需要确认一下。所以李四也向张三招了招手 ("),e("strong",[this._v("SYN")]),this._v(")。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"MUsKa"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第三次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三次握手","aria-hidden":"true"}},[this._v("#")]),this._v(" 第三次握手")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Client 接收到 Server 发回的 "),r("strong",[t._v("ACK(x + 1) 包")]),t._v("后，进入"),r("code",[t._v("ESTABLISHED")]),t._v("状态。然后根据 Server 发来的 "),r("strong",[t._v("SYN(seq = y) 包")]),t._v("，返回给等待中的 Server 一个 "),r("strong",[t._v("ACK(x + 1) 包")]),t._v("。等待中的 Server 收到 ACK 回复，也把自己的状态设置为"),r("code",[t._v("ESTABLISHED")]),t._v("。到此 TCP 三次握手完成，Client 与 Server 可以正常进行通信了。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("张三看到李四微笑后确认了李四成功辨认出了自己(进入 **ESTALISHED **状态)。\n张三看到李四向自己招手后知道对方是在寻求自己的确认，于是也点了点头挤出了微笑 ("),e("strong",[this._v("ACK")]),this._v(")，李四看到对方的微笑后确认了张三就是在向自己打招呼(进入 **ESTALISHED **状态)。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("这个问题在谢希仁版《计算机网络》里说了。\n三次是保证双方互相明确对方能收能发的最低值。\n理论上讲不论握手多少次都不能确认一条信道是“可靠”的，但通过3次握手可以至少确认它是“可用”的，再往上加握手次数不过是提高“它是可用的”这个结论的可信程度。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"xFct7"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手","aria-hidden":"true"}},[this._v("#")]),this._v(" 四次挥手")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/268093/1556967361700-fa626ba0-d6a8-4d98-be73-4ff64a6e0311.png#align=left&display=inline&height=448&name=%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.png&originHeight=448&originWidth=705&size=12457&status=done&width=705",alt:"四次挥手.png"}}),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"RFOZM"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第一次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一次挥手","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一次挥手")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Initiator 发送一个 "),e("strong",[this._v("FIN(seq = x + 2) + ACK(y + 1) 包")]),this._v("，此时 Initiator 进入"),e("code",[this._v("FIN-WAIT-1")]),this._v("状态，这表明Initiator 已经没有数据要发送了。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("张三挥手 ("),e("strong",[this._v("FIN")]),this._v(")")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"Bhldi"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第二次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二次挥手","aria-hidden":"true"}},[this._v("#")]),this._v(" 第二次挥手")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Recipient 收到了 Initiator 发来的 "),r("strong",[t._v("FIN(seq = x + 2) + ACK(y + 1) 包")]),t._v("后，向client发回一个"),r("strong",[t._v("ACK(x + 3)包")]),t._v("，此时Recipient 进入"),r("code",[t._v("CLOSE-WAIT")]),t._v("状态，Initiator 进入"),r("code",[t._v("FIN-WAIT-2")]),t._v("状态。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("李四伤感地微笑 ("),e("strong",[this._v("ACK")]),this._v(")")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Recipient 向 Initiator 发送 "),e("strong",[this._v("FIN(seq = y + 1) 包")]),this._v("，请求关闭连接，同时 Recipient 进入"),e("code",[this._v("LAST-ACK")]),this._v("状态。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("李四挥手 ("),e("strong",[this._v("FIN")]),this._v(")")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"iZ0pF"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第四次挥手","aria-hidden":"true"}},[this._v("#")]),this._v(" 第四次挥手")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Initiator 收到 Recipient 发送的 "),r("strong",[t._v("FIN(seq = y + 1) 包")]),t._v("，进入"),r("code",[t._v("TIME-WAIT")]),t._v("状态。向 Recipient 发送 "),r("strong",[t._v("ACK(y + 2)")]),t._v(" "),r("strong",[t._v("包")]),t._v("，Recipient 收到client的 "),r("strong",[t._v("ACK(y + 2)")]),t._v(" "),r("strong",[t._v("包")]),t._v("以后，进入"),r("code",[t._v("CLOSE")]),t._v("状态；Initiator 等待一段时间还没有得到回复后判断Recipient 已正式关闭，进入"),r("code",[t._v("CLOSE")]),t._v("状态。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("张三伤感地微笑 ("),e("strong",[this._v("ACK")]),this._v(")")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"w5Cze"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"为什么是四次"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么是四次","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么是四次")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("TCP断开链接的过程和建立链接的过程比较类似，只不过中间的两部并不总是会合成一步走，所以它分成了4个动作，张三挥手(fin)——李四伤感地微笑(ack)——李四挥手(fin)——张三伤感地微笑(ack)。\n"),e("br"),this._v("之所以中间的两个动作没有合并，是因为tcp存在「半关闭」状态，也就是单向关闭。张三已经挥了手，可是人还没有走，只是不再说话，但是耳朵还是可以继续听，李四呢继续喊话。等待李四累了，也不再说话了，朝张三挥了挥手，张三伤感地微笑了一下，才彻底结束了。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"V2vPf"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考链接")])}],!1,null,null,null);e.default=i.exports}}]);