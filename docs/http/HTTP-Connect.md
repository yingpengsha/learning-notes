# HTTP 学习笔记（三）：HTTP 三次握手和四次挥手

<a name="3NmlG"></a>
## 引言

毫无疑问，HTTP 三次握手和四次挥手在实际应用场景和面试上都属于重点。虽然此前进行过学习，但由于在开发过程中遇到的次数太少，便没有记住多少。为了加强记忆，也为了梳理自身混乱的知识体系，特地记录下来，以便反复学习记忆。

<a name="avZ6A"></a>
## 三次握手

![三次握手.png](https://cdn.nlark.com/yuque/0/2019/png/268093/1556961536368-aac69f04-d438-4697-ae96-a83139af3431.png#align=left&display=inline&height=352&name=%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B.png&originHeight=352&originWidth=690&size=10083&status=done&width=690)<br />

- **seq** : sequence
- **SYN**: synchronize
- **ACK** : acknowledgment
- **SYN_SENT** : syn package has been sent
- **SYN_RCVD** : syn package has been received

<a name="sQt5D"></a>
### 第一次握手

Client 发送一个 **SYN(seq = x) 包**给 Server，然后等待 server 的 ACK 回复，进入`SYN-SENT`状态。

> 张三首先向李四招手 (**SYN**)


<a name="7ZKFE"></a>
### 第二次握手

Server 接收到** SYN(seq = x) 包**后就返回一个 **ACK(x + 1) 包**以及一个自己的 **SYN(seq = y) 包**，然后等待 Client 的 ACK 回复，Server 进入`SYN-RECIVED`状态。

> 李四看到张三向自己招手后，向对方点了点头挤出了一个微笑 (**ACK**)。
> 但是李四还有点狐疑，向四周看了一看，有没有可能张三是在看别人呢，他也需要确认一下。所以李四也向张三招了招手 (**SYN**)。


<a name="MUsKa"></a>
### 第三次握手

Client 接收到 Server 发回的 **ACK(x + 1) 包**后，进入`ESTABLISHED`状态。然后根据 Server 发来的 **SYN(seq = y) 包**，返回给等待中的 Server 一个 **ACK(x + 1) 包**。等待中的 Server 收到 ACK 回复，也把自己的状态设置为`ESTABLISHED`。到此 TCP 三次握手完成，Client 与 Server 可以正常进行通信了。

> 张三看到李四微笑后确认了李四成功辨认出了自己(进入 **ESTALISHED **状态)。
> 张三看到李四向自己招手后知道对方是在寻求自己的确认，于是也点了点头挤出了微笑 (**ACK**)，李四看到对方的微笑后确认了张三就是在向自己打招呼(进入 **ESTALISHED **状态)。

<br />
<a name="M4Gf8"></a>
### 为什么是三次


> 这个问题在谢希仁版《计算机网络》里说了。
> 三次是保证双方互相明确对方能收能发的最低值。
> 理论上讲不论握手多少次都不能确认一条信道是“可靠”的，但通过3次握手可以至少确认它是“可用”的，再往上加握手次数不过是提高“它是可用的”这个结论的可信程度。


<a name="xFct7"></a>
## 四次挥手

![四次挥手.png](https://cdn.nlark.com/yuque/0/2019/png/268093/1556967361700-fa626ba0-d6a8-4d98-be73-4ff64a6e0311.png#align=left&display=inline&height=448&name=%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.png&originHeight=448&originWidth=705&size=12457&status=done&width=705)<br />

<a name="RFOZM"></a>
### 第一次挥手

Initiator 发送一个 **FIN(seq = x + 2) + ACK(y + 1) 包**，此时 Initiator 进入`FIN-WAIT-1`状态，这表明Initiator 已经没有数据要发送了。

> 张三挥手 (**FIN**)


<a name="Bhldi"></a>
### 第二次挥手

Recipient 收到了 Initiator 发来的 **FIN(seq = x + 2) + ACK(y + 1) 包**后，向client发回一个**ACK(x + 3)包**，此时Recipient 进入`CLOSE-WAIT`状态，Initiator 进入`FIN-WAIT-2`状态。

> 李四伤感地微笑 (**ACK**)

<br />
<a name="d5SPs"></a>
### 第三次挥手

Recipient 向 Initiator 发送 **FIN(seq = y + 1) 包**，请求关闭连接，同时 Recipient 进入`LAST-ACK`状态。

> 李四挥手 (**FIN**)


<a name="iZ0pF"></a>
### 第四次挥手

Initiator 收到 Recipient 发送的 **FIN(seq = y + 1) 包**，进入`TIME-WAIT`状态。向 Recipient 发送 **ACK(y + 2)** **包**，Recipient 收到client的 **ACK(y + 2)** **包**以后，进入`CLOSE`状态；Initiator 等待一段时间还没有得到回复后判断Recipient 已正式关闭，进入`CLOSE`状态。

> 张三伤感地微笑 (**ACK**)


<a name="w5Cze"></a>
### 为什么是四次

> TCP断开链接的过程和建立链接的过程比较类似，只不过中间的两部并不总是会合成一步走，所以它分成了4个动作，张三挥手(fin)——李四伤感地微笑(ack)——李四挥手(fin)——张三伤感地微笑(ack)。
> <br />之所以中间的两个动作没有合并，是因为tcp存在「半关闭」状态，也就是单向关闭。张三已经挥了手，可是人还没有走，只是不再说话，但是耳朵还是可以继续听，李四呢继续喊话。等待李四累了，也不再说话了，朝张三挥了挥手，张三伤感地微笑了一下，才彻底结束了。


<a name="V2vPf"></a>
## 参考链接

- [图解TCP三次握手与四次分手](https://juejin.im/post/5a7835a46fb9a063606eb801#heading-7)
- [跟着动画来学习TCP三次握手和四次挥手](https://juejin.im/post/5b29d2c4e51d4558b80b1d8c)
- [TCP四次挥手简介](http://jiar.github.io/2017/08/24/TCP%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E7%AE%80%E4%BB%8B/)
- [TCP 为什么是三次握手，而不是两次或四次？](https://www.zhihu.com/question/24853633)
