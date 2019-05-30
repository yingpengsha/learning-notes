# HTTP 学习笔记（六）：HTTP 状态码

<a name="Q6aQ0"></a>
## 状态码告知从服务器端返回的请求结果

状态码的职责是当客户端向服务器端发送请求时，描述返回的请求结果。借助状态码，用户可以知道服务器端是正常处理了请求，还是出现了错误。

状态码如 200 OK，以 3 位数字和原因组成。<br />数字中的第一位指定了响应类别，后两位无分类。响应类别又以下五种

|  | 类别 | 原因短语 |
| --- | --- | --- |
| 1XX | Informational（信息性状态码） | 收到的请求正在处理中 |
| 2XX | Success（成功状态码） | 请求正常处理完毕 |
| 3XX | Redirection（重定向状态码） | 需要进行附加操作以完成请求 |
| 4XX | Client Error（客户端错误状态码） | 服务器无法处理请求 |
| 5XX | Server Error（服务器错误状态码） | 服务器处理请求出错 |

<a name="YemQe"></a>
## 2XX 成功

2XX 的响应结果表明请求被正常处理了。

<a name="lAn24"></a>
### 200 OK

表示从客户端发来的请求在服务器端被正常处理了。<br />在响应报文里，随状态码一起返回的信息会因方法的不同而发生改变。比如，使用 GET 方法时，对应请求资源的实体会作为响应返回；而使用 HEAD 方法时，对应请求资源的实体不随报文主体作为响应返回（即在响应中只返回首部，不会返回实体的主体部分）

<a name="Jc9WN"></a>
### 204 No Content

该状态码代表服务器接收的请求已成功处理，但在返回的响应报文中不含实体的主体部分。另外，也不允许返回任何实体的主体。比如，当从浏览器发出请求处理后，返回 204 响应，那么浏览器显示的页面不发生更新。<br />一般在只需要从客户端往服务器发送信息，而对客户端不需要发送新信息内容的情况下使用。

<a name="eH5w3"></a>
### 206 Partial Content

该状态码表示客户端进行链范围请求，而服务器成功执行链这部分的 GET 请求。响应报文中包含由 Content-Range 指定返回的实体内容。

<a name="db6D3"></a>
## 3XX 重定向

3XX 响应结果表明浏览器需要执行某些特殊的处理以正确处理请求。

<a name="dZTGp"></a>
### 301 Moved Permanently

永久性重定向。该状态码表示请求的资源已被分配了新的 URI，以后使用资源现在所指的 URI。也就是说，如果已经把资源对应的 URI 保存为书签链，这时应该按 Location 首部字段提示的 URI 重新保存。<br />像下方给出的请求 URI，当指定资源路径的最后忘记添加斜杠“/”，就会产生 301 状态码。

```http
http://example.com/sample
```

<a name="lBCdh"></a>
### 302 Found

临时性重定向。该状态码表示请求的资源已被分配了新的 URI，希望用户（本次）能使用新的 URI 访问。<br />和 301 Moved Permanently 状态码相似，但 302 状态码代表的资源不是被永久移动，知识临时性质的。换句话说，已移动的资源对应的 URI 将来还有可能发生改变。比如，用户把 URI 保存成书签，但不会像 301 状态码出现时那样去更新书签，而是仍旧保留返回 302 状态码的页面对应的 URI。

<a name="bFlmK"></a>
### 303 See Other

该状态码表示由于请求对应的资源存在另一个 URI，应使用 GET 方法定向获取请求的资源。<br />303 状态码和 302 Found 状态码有着相同的功能，但 303 状态码明确表示客户端应当采用 GET 方法获取资源，这点与 302 状态码有区别。<br />比如，当使用 POST 方法访问 CGI 程序，其执行后的处理结果是希望客户端能以 GET 方法重定向到另一个 URI 上去时，返回 303 状态码。虽然 302 Found 状态码也可以实现相同的功能，但这里使用 303 状态码是最理想的。

> 当 301、302、303 响应状态码返回时，几乎所有的浏览器都会把 POST 改成 GET，并删除请求报文内的主体，之后请求会自动再次发送。
> 301、302 标准是禁止将 POST 方法改变成 GET 方法的，但实际使用时大家都会这么做。


<a name="jbQIc"></a>
### 304 Not Modified

该状态码表示客户端发送附加条件的请求时，服务器端允许请求访问资源，但未满足条件的情况。304 状态码返回时，不包含任何响应的主体部分。304 虽然被划分在 3XX 类别中，但是和重定向没有关系。

<a name="qf56R"></a>
### 307 Temporary Redirect

临时重定向。该状态码与 302 Found 有着相同的含义。尽管 302 标准禁止 POST 变成 GET，但实际使用时大家并不遵守。<br />307 会遵照浏览器标准，不会从 POST 变成 GET。但是，对于处理响应时的行为，每种浏览器有可能出现不同的情况。

<a name="jZU84"></a>
## 4XX 客户端错误

4XX 的响应结果表明客户端是发生错误的原因所在。

<a name="pr4iB"></a>
### 400 Bad Request

该状态码表示请求报文中存在语法错误。当错误发生时，需修改请求的内容后再次发送请求。另外，浏览器会像 200 OK 一样处理该状态码。

<a name="CulHT"></a>
### 401 Unauthorized

该状态码表示发送的请求需要有通过 HTTP 认证（BASIC 认证、DIGEST 认证）的认证信息。另外若之前已进行过 1 次请求，则表示用户认证失败。<br />返回含有 401 的响应必须包含一个适用于被请求资源的 WWW-Authenticate 首部用以质询（challenge）用户信息。当浏览器初次接收到 401 响应，会弹出认证用的对话窗口。

<a name="WskFC"></a>
### 403 Forbidden

该状态码表明对请求资源的访问 被服务器拒绝了。服务器没有必要给出拒绝的详细理由，但如果想作说明的话，可以在实体的主体部分对原因进行描述，这样就能让用户看到了。<br />未获得文件系统的访问权限，访问权限出现某些问题（从未授权的发送源 IP 地址试图访问）等例举的情况都可能是发生 403 的原因

<a name="pLnlG"></a>
### 404 Not Found

该状态码表明服务器上无法找到请求的资源。除此之外，也可以在服务器端拒绝请求且不想说明理由时使用。

<a name="wLmF8"></a>
## 5XX 服务器错误

5XX 的响应结果表明服务器本身发生错误。

<a name="XEEYD"></a>
### 500 Internal Server Error

该状态码表明服务器端在执行请求时发生了错误。也有可能是 Web 应用存在的 bug 或默写临时的故障。

<a name="rOEQq"></a>
### 503 Service Unavailable

该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。如果事先得知解除以上状况需要的时间，最好写入 Retry-After 首部字段再返回给客户端。

> **状态码和状况不一致**
> 不少返回的状态码响应都是错误的，但是用户可能察觉不到这点。比如 Web 应用程序内部发生错误，但状态码依然返回 200 OK，这种情况也经常遇到。


<a name="5fojo"></a>
## 参考链接

- [《图解HTTP》](https://book.douban.com/subject/25863515/reviews)