# HTTP 学习笔记（五）：HTTP 报文

<a name="H3HyF"></a>
## HTTP 报文

用于 HTTP 协议交互的信息被称为 HTTP 报文。请求端（客户端）的 HTTP 报文叫做**请求报文**，响应端（服务器端）的叫做**响应报文**。HTTP 报文本身是由多行（用 CR + LF 作换行符）数据构成的字符串文本。<br />HTTP 报文大致可分为**报文首部**和**报文主体**两块。两者由最初出现的空行（CR + LF）来划分。通常，并不一定要有报文主体。

| 报文首部 |
| :---: |
| 空行（CR + LF） |
| <br /><br />报文主体 |

- **报文首部**：服务器端或客户端需要处理的请求或相应的内容及属性
- **CR + LF**：CR（Carriage Return，回车符：16 进制 0x0d）和 LF（Line Feed，换行符：16 进制 0x0a）
- **报文主体**：应被发送的数据

<a name="KPv76"></a>
## 请求报文

| GET / HTTP/1.1 | 请求行 |
| --- | --- |
| Host: hackr.jp<br />User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:13.0) Gecko/20100101 Firefox/13.0.1<br />Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8<br />Accept-Language: ja,en-us;q=0.7,en;q=0.3<br />Acceptt-Encoding: gzip, deflate<br />DNT: 1<br />Connection: keep-alive<br />Pragma: no-cache<br />Cache-Control: no-cache | 各种头部字段 |
| 空行（CR + LF） |  |

- 请求行：请求的方法 + 请求 URI + HTTP 版本 （空格分隔）
- 首部字段：包含表示请求和响应的各种条件和属性的各类首部。
  - 一般有 4 种首部，分别是：通用首部、请求首部、响应首部和实体首部。

<a name="7tb1S"></a>
## 响应报文
| HTTP/1.1 200 OK | 状态行 |
| --- | --- |
| Date: Fri, 13 Jul 2012 02:45:25 GMT<br />Server: Apache<br />Last-Modified: Fri, 31 Aug 2007 02:02:20 GMT<br />ETag: "45bael-16a-46d776ac"<br />Accept-Ranges: bytes<br />Content-Length: 362<br />Connection: close<br />Content-Type: text/html | 各种头部字段 |
| 空行（CR + LF） |  |
| <html xmlns="http://www.w3.org/1999/xhtml"><br /><head><br /><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><br /><title>hackr.jp</title><br /></head><br /><body><br /><img src="hackr.gif" alt="hackr.jp" width="240" height="84" /><br /></body><br /></html> | 报文主体 |

- 状态行：HTTP版本 + 状态名 + 响应结果（空格分隔）
- 首部字段：包含表示请求和响应的各种条件和属性的各类首部。
  - 一般有 4 种首部，分别是：通用首部、请求首部、响应首部和实体首部。

<a name="fFcjb"></a>
## 参考链接

- [《图解HTTP》](https://book.douban.com/subject/25863515/)
