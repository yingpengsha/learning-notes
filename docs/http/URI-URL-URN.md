# HTTP 学习笔记（四）：URI、URL、URN

<a name="QSGk0"></a>
### URI

URI（Uniform Resource Identifier，统一资源标识符）

- URI 是使用数字，字母和符号的短字符串来标识文档的标准。
- 用来唯一表示互联网上的信息资源。
- URL 和 URN 都是 URI 的子集。

<a name="UPOOr"></a>
### URL

URL（Uniform Resource Locator，统一资源定位符）

![url.png](https://cdn.nlark.com/yuque/0/2019/png/268093/1556971343337-29f5cecd-4830-4e60-817c-3129b9b8adb0.png#align=left&display=inline&height=56&name=url.png&originHeight=56&originWidth=1100&size=16710&status=done&width=1100)

- **http:// : **表明是通过什么协议去访问互联网上的某些资源
- **user:pass : **留给用户认证用，现在很少使用 
- **host.com : **定位资源所在服务器在互联网的位置，ip 或者域名
- **:80 : **每台服务器有很多端口用于 web 服务，不带端口默认80，为了方便用户记忆一般不带端口 
- **path : **路由，用于找 web 服务里存放的资源，直接对应 web 服务目录结构下的路径
- **#hash : **定位找到的资源的一个片段

<a name="f423B"></a>
### URN

URN（Uniform Resource Name，统一资源名称）

- 唯一标识一个实体的[标识符](https://baike.baidu.com/item/%E6%A0%87%E8%AF%86%E7%AC%A6/7105638)，但是不能给出实体的位置。
  - **urn:isbn:0451450523**  以其 ISBN 号码识别一本书。<br />
  - **urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66**  全局唯一标识符<br />
  - **urn:publishing:book**   使用 XML 命名空间为文档标识一种 book。



<a name="5SXle"></a>
### 参考链接

- [什么是URI、URL、URN、URC和Data URI？概念及区别](https://www.luyuqiang.com/uri-url-urn-urc-and-data-uri)
- [http学习笔记：网络模型&http初识](https://blog.csdn.net/weixin_38623747/article/details/81632976)

