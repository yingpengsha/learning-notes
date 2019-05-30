# CORS

<a name="CdrH7"></a>
## 简介

跨域资源共享([CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS)) 是一种机制，它使用额外的 [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) 头来告诉浏览器  让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器**不同的域、协议或端口**请求一个资源时，资源会发起一个**跨域 HTTP 请求**。

CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE 浏览器不能低于 IE 10。

整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与同源的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。

<a name="yQVGU"></a>
## 两种请求

浏览器将CORS请求分成两类：简单请求（simple request）和预检请求（preflighted requests）。

满足一下条件则为 **简单请求**，反之有一条条件不满足则为 **预检请求**。

- 使用下列方法之一：
  - GET
  - HEAD
  - POST
- Fetch 规范定义了对 CORS 安全的首部字段集合，不得人为设置该集合之外的其他首部字段。该集合为：
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type （Content-Type 的值仅限于下列三者之一）
    - text/plain
    - multipart/form-data
    - application/x-www-form-urlencoded
- 请求中的任意 `XMLHttpRequestUpload` 对象均没有注册任何事件监听器； `XMLHttpRequestUpload` 对象可以使用 `XMLHttpRequest.upload` 属性访问。
- 请求中没有使用 `ReadableStream` 对象。

> **注意**: 这些跨域请求与浏览器发出的其他跨域请求并无二致。如果服务器未返回正确的响应首部，则请求方不会收到任何数据。因此，那些不允许跨域请求的网站无需为这一新的 HTTP 访问控制特性担心。


<a name="KeZXX"></a>
## 简单请求

比如说，假如站点 http://foo.example 的网页应用想要访问 http://bar.other 的资源。http://foo.example 的网页中可能包含类似于下面的 JavaScript 代码：

```javascript
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/public-data/';
   
function callOtherDomain() {
  if(invocation) {    
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}
```

客户端和服务器之间使用 CORS 首部字段来处理跨域权限：

![](https://cdn.nlark.com/yuque/0/2019/png/268093/1557405773140-9443e870-adde-4948-93da-8eef7786f63a.png#align=left&display=inline&height=224&originHeight=224&originWidth=521&size=0&status=done&width=521)

<a name="JSvv4"></a>
### 请求报文

```http
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Referer: http://foo.example/examples/access-control/simpleXSInvocation.html
Origin: http://foo.example
```

第 1~10 行是请求首部。第10行 的请求首部字段 [`Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin) 表明该请求来源于 `http://foo.exmaple`。

<a name="K7bWw"></a>
### 响应报文

```http
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2.0.61 
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml

[XML Data]
```

第 1~10 行是来自于 http://bar.other 的服务端响应。<br />响应中携带了响应首部字段 [`Access-Control-Allow-Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)（第 4 行）。<br />使用 [`Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin) 和 [`Access-Control-Allow-Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) 就能完成最简单的访问控制。<br />本例中，服务端返回的 `Access-Control-Allow-Origin: *` 表明，该资源可以被**任意**外域访问。如果服务端仅允许来自 http://foo.example 的访问，该首部字段的内容如下：<br />`Access-Control-Allow-Origin: http://foo.example`

现在，除了 http://foo.example，其它外域均不能访问该资源（该策略由请求首部中的 ORIGIN 字段定义，见第10行）。`Access-Control-Allow-Origin` 应当为 * 或者包含由 Origin 首部字段所指明的域名。

<a name="LN3Nn"></a>
## 预检请求（非简单请求）

与前述简单请求不同，“需预检的请求”要求必须首先使用 `OPTIONS` 方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。“预检请求”的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。

如下是一个需要执行预检请求的 HTTP 请求：

```javascript
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/post-here/';
var body = '<?xml version="1.0"?><person><name>Arun</name></person>';
    
function callOtherDomain(){
  if(invocation)
    {
      invocation.open('POST', url, true);
      invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
      invocation.setRequestHeader('Content-Type', 'application/xml');
      invocation.onreadystatechange = handler;
      invocation.send(body); 
    }
}
```

上面的代码使用 POST 请求发送一个 XML 文档，该请求包含了一个自定义的请求首部字段（X-PINGOTHER: pingpong）。另外，该请求的 Content-Type 为 application/xml。因此，该请求需要首先发起“预检请求”。

![](https://cdn.nlark.com/yuque/0/2019/png/268093/1557406466002-fb6ac596-8f16-4413-b34d-b44673939de3.png#align=left&display=inline&height=553&originHeight=553&originWidth=521&size=0&status=done&width=521)

<a name="rAE3G"></a>
### 预请求报文

```http
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Origin: http://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

浏览器检测到，从 JavaScript 中发起的请求需要被预检。从上面的报文中，我们看到，第 1~12 行发送了一个使用 `OPTIONS` 方法的“预检请求”。 ` OPTIONS` 是 HTTP/1.1 协议中定义的方法，用以从服务器获取更多信息。该方法不会对服务器资源产生影响。 预检请求中同时携带了下面两个首部字段：

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```



<a name="8A2rz"></a>
### 预响应报文

```http
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain
```

<a name="0NT3R"></a>
### 正式请求报文

```http
POST /resources/post-here/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
X-PINGOTHER: pingpong
Content-Type: text/xml; charset=UTF-8
Referer: http://foo.example/examples/preflightInvocation.html
Content-Length: 55
Origin: http://foo.example
Pragma: no-cache
Cache-Control: no-cache

<?xml version="1.0"?><person><name>Arun</name></person>
```

<a name="mmCY1"></a>
### 正式响应报文


