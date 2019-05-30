# HTTP 学习笔记（一）：TCP/IP 五层模型

<a name="1e63bf70"></a>
## TCP/IP 五层模型

应用层( HTTP/FTP )、传输层( TCP/UDP )、网络层、数据链路层、物理层。

![TCPIP.png](https://cdn.nlark.com/yuque/0/2019/png/268093/1556883183933-5cfea18e-f062-4aee-bf0c-161a7ba8424c.png#align=left&display=inline&height=652&name=TCPIP.png&originHeight=877&originWidth=265&size=14893&status=done&width=197)

<a name="dW7KP"></a>
## 应用层

<a name="LtwS4"></a>
### 应用层

**针对特定应用的协议**（如，电子邮件协议E-mail、远程登录协议SSH、文件传输协议FTP、网络请求协议HTTP）

<a name="awtTL"></a>
### 表示层

**设备固有的数据格式**与**网络标准数据格式之间的转换**（接受不同的信息，如文字流、图像、声音等）

<a name="tUSLt"></a>
### 会话层

**负责建立和断开通信连接，以及数据的分割等数据传输相关的管理。**（何时建立连接？何时断开？以及保持多久的链接）

<a name="4umfE"></a>
## 传输层

有了 MAC 地址和 IP 地址，我们还需要一个参数，表示这个数据包到底供哪个程序（进程）使用（比如实在聊天还是在浏览网页），这个参数就叫"端口";**"传输层"的功能，就是建立"****端口到端口****"的通信。相比之下，"网络层"的功能是建立"****主机到主机****"的通信。只要确定主机和端口，我们就能实现****程序之间****的交流。**

<a name="QsRQq"></a>
## 网络层

引进一套新的地址，使得我们能够区分不同的计算机是否属于同一个子网络。**这套地址就叫做"网络地址"（IP地址）**。

<a name="M65XA"></a>
## 数据链路层

单纯的0和1没有任何意义，必须规定解读方式：多少个电信号算一组？每个信号为位有何意义？**这就是"链路层"**<br />**的功能，它在"实体层"的上方，确定了0和1的分组方式。**

<a name="UAJeo"></a>
## 物理层

**把电脑连接起来的物理手段**，可以用光缆、电缆、双绞线、无线电波等方式，它主要规定了网络的一些电气特征，**作用是负责传输0和1的电信号。**

