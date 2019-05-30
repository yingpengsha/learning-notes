# JSONP

<a name="3qJzp"></a>
## 简介

JSONP(JSON with Padding) 是 [JSON](https://baike.baidu.com/item/JSON) 的一种“使用模式”，可用于解决主流浏览器的跨域数据访问的问题。

由于同源策略，一般来说位于 `server1.example.com` 的网页无法与不是 `server1.example.com` 的服务器沟通，而 HTML 的 `<script>` 元素是一个例外。

利用 `<script>` 元素的这个开放策略，网页可以得到从其他来源动态产生的 JSON 资料，而这种使用模式就是所谓的 JSONP。用 JSONP 抓到的资料并不是 JSON，而是任意的JavaScript，用 JavaScript 直译器执行而不是用 JSON 解析器解析。

它的基本思想是，网页通过添加一个 `<script>` 元素，向服务器请求 JSON 数据，这种做法不受同源政策限制；服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。

<a name="cwep9"></a>
## 优点

简单、兼容性好，可用于解决主流浏览器的跨域数据访问的问题。

<a name="ZZuh2"></a>
## 缺点

仅支持get方法具有局限性，不安全，可能会遭受XSS攻击。

<a name="RW7g2"></a>
## 示例

首先，网页动态插入 `<script>` 元素，由它向跨源网址发出请求。

```javascript
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.src = src;
  document.body.appendChild(script);
}

window.onload = function () {
  addScriptTag('http://example.com/ip?callback=foo');
}

function foo(data) {
  console.log('Your public IP address is: ' + data.ip);
};
```

上面代码通过动态添加 `<script>` 元素，向服务器 `example.com` 发出请求。注意，该请求的查询字符串有一个 `callback` 参数，用来指定回调函数的名字，这对于 `JSONP` 是必需的。

服务器收到这个请求以后，会将数据放在回调函数的参数位置返回。

```javascript
foo({
  "ip": "8.8.8.8"
});
```

由于 `<script>` 元素请求的脚本，直接作为代码运行。这时，只要浏览器定义了 `foo` 函数，该函数就会立即调用。作为参数的 JSON 数据被视为 JavaScript 对象，而不是字符串，因此避免了使用 JSON.parse 的步骤。

<a name="KP2M1"></a>
## 参考链接

- [九种跨域方式实现原理（完整版）](https://juejin.im/post/5c23993de51d457b8c1f4ee1#heading-12)
- [浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
