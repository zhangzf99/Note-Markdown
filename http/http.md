# HTTP
## HTTP报文结构
对于 TCP 而言，在传输的时候分为两个部分：**TCP头**和**数据部分**。

而 HTTP 类似，也是 **header + body** 的结构，具体而言：

```
起始行 + 头部 + 空行 + 实体
```
### 起始行
对于请求报文来说，起始行类似下面这样：
```
GET /home HTTP/1.1
方法 + 路径 + http版本
```
对于响应报文来说，起始行一般长这样
```
HTTP/1.1 200 OK
```
响应报文的起始行也叫作**状态行**。由**HTTP版本、状态码和原因**三部分组成。

### 头部

![](E:\笔记\github笔记\Note-Markdown\2022\http\images\1.jpg)

头部字段格式：

- 字段名称不区分大小写
- 字段名不允许出现空格，不可以出现_
- 字段名后面必须紧接着 :

### 空行
用来区分**头部**和**实体**
q: 如果说在头部中间故意加一个空行会怎么样？  a：空行后的内容全部被视为实体

### 实体
就是具体数据，也就是body部分。请求报文对应请求体，响应报文对应响应体。

## 如何理解 HTTP 的请求方法
### 有哪些请求方法
http1.1 规定了以下请求方法（注意：都是大写）
- GET: 通常用来获取资源
- HEAD: 获取资源的元信息
- POST: 提交数据
- PUT: 修改数据
- DELETE: 删除资源
- CONNECT: 建立连接隧道，用于代理服务器
- OPTIONS: 列出可对资源实行的请求方法，用来跨域请求
- TRACE: 追踪请求-响应的传输路径
	

### GET 和 POST 的区别
-从**缓存**角度，GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 不会。
-从**编码**角度，GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制。
-从**参数**角度，GET 一般会放在 URL 中，POST 放在请求体重，更适合传递敏感信息。
-从**幂等性**角度，GET 是**幂等**的，而 POST 不是。（幂等表示执行相同的操作，结果也是相同的）
-从**TCP**角度，GET 请求回把请求报文一次性发出去，而 POST 会分成两个 TCP 数据包，首先发 header 部分，如果服务器响应 100，然后发 body 部分。


## 如何理解 URI
URI，**统一资源标识符**，为了区分互联网上不同的资源。
但是，它并不是我们常说的**网址**，网址指的是 URL,实际上 URI 包含了 URN 和 URL 两个部分，由于 URL 过于普及，就默认将 URI 视为 URL 了。

### URI的结构
URI的完整结构

![2](E:\文件\Note-Markdown\2022\http\images\2.png)

-scheme 表示协议名，比如 http、https、file 等等。后面必须和 :// 连在一起。
-user:password@ 表示登录主机时的用户信息，不过很不安全。
-host:port 表示主机名和端口。
-path 表示请求路径，标记资源所在位置。
-query 表示查询参数，为 key=val这种形式，多个键值对之间用&隔开。
-fragment URI所定位的资源的一个锚点，浏览器可以根据这个锚点跳转到对应的位置。
```
https://www.baidu.com/s?wd=HTTP&rsv_spt=1
```
https为scheme，www.baidu.com为host:port（注意：http 和 https 的默认端口分别为80、443），/s为 path 部分，wd=HTTP&rsv_spt=1为 query。

### URI 编码
URI只能使用ASCII，ASCII之外的字符是不支持显示的，还有一部分符号是界定符，如果不加以处理就会导致解析出错。
因此，URI 引入了**编码**机制，将所有**非 ASCII 码字符**和**界定符**转为十六进制字节值，然后前面加上**%**。.
eg  空格被转义成了%20，三元被转义成了%E4%B8%89%E5%85%83。


## HTTP 状态码
RFC规定 HTTP 的状态码为三位数，被分为五类：
-1xx：表示目前是协议处理的中间状态，还需要后续操作。
-2xx：表示成功状态。
-3xx：重定向状态，资源位置发生变动，需要重新请求。
-4xx：请求报文有误。
-5xx：服务器端发生错误。

### 1xx
101	在HTTP升级为WebSocket的时候，如果服务器同意变更，就会发送状态码101。

### 2xx
200	成功，通常在响应体中放有数据。
204	No Content含义与200相同，但响应头后没有body数据。
206	Partial Content顾名思义，表示部分内容，它的使用场景为HTTP分块下载和断点续传，当然也会带上相应的响应头字段 Content-Range。

### 3xx
301 永久重定向
302 临时重定向
eg：比如你的网站从 HTTP 升级到了 HTTPS，以前的站点再也不能用了，应当返回301，这个时候浏览器默认会做缓存优化，在第二次访问的时候自动访问重定向的那个地址。
而如果只是暂时不用，那么直接返回302即可，和301不同的是，浏览器并不会做缓存优化。
304 当协商缓存命中时会返回这个状态码。
### 4xx
400
403  这实际上不是请求报文出错，而是服务器禁止访问，原因有很多，比如法律禁止、信息敏感。
404	资源未找到，表示没有在服务器上找到相应的资源。
405	请求的方法不被服务器端允许。
406	资源无法满足客户端的条件。
408	服务器等待了太长时间。
409	多个请求发生了冲突。
413	请求体的数据过大。
414	请求行里的URI太大。
429	客户端发送的请求过多。
431	请求头的字段内容太大。
### 5xx
500	服务器出错。
501	客户端请求的功能还不支持。
502	服务器自身是正常的，但访问的时候出错了。
503	服务器当前很忙，暂时无法响应服务。

## 简要概括 HTTP 的特点？ HTTP 有哪些缺点？
### 特点
-灵活可扩展。一个是语义自由，只规定了基本格式，比如空格分隔单词，换行分隔字段，其他的各个部分都没有严格的语法限制。另一个是传输形式的多样性，不仅仅可以传输文本，还能传输图片、视频等任意数据。
-可靠传输。HTTP 基于 TCP/IP ，因此把这有特性继承了下来。
-请求-应答。也就是一发一收、有来有回。这个请求方和应答方不单单指客户端和服务器之间，如果某台服务器作为代理来连接后端的服务端，那么这台服务器也会扮演请求方的角色。
-无状态。这里的状态是指**通信过程的上下文信息**，而每次http请求都是独立、无关的，默认不需要保留状态信息。
### 缺点
#### 无状态
对于 HTTP 而言，最具争议的地方在于它的无状态。在需要长连接的场景中，需要保存大量的上下文信息，以免传输大量重复的信息，那么这时候无状态就是 http 的缺点了。
但与此同时，另外一些应用仅仅只是为了获取一些数据，不需要保存连接上下文信息，无状态反而减少了网络开销，成为了 http 的优点。
#### 明文传输
即协议的报文（主要是指头部）不使用二进制数据，而是文本形式。
这个对于调试提供了便利，但是同时也让 HTTP 的报文信息暴露给了外界，给攻击者提供了便利。WIFI 陷进就是利用 HTTP 明文传输的缺点，诱导你连上热点，然后抓取你的所有流量，从而拿到你的敏感信息。
#### 队头阻塞问题
当 http 开启长连接时，共用一个 TCP 连接，同一时刻只能处理一个请求，那么当前请求耗时过长的情况下，其他的请求只能处于阻塞状态，也就是著名的**队头阻塞**问题。

## 对 Accept 系列字段了解多少
### 数据格式
HTTP 灵活的特性，支持非常多的数据格式，那么这么多格式一起到达客户端，客户端怎么知道它的格式呢？
HTTP 标记报文 body 部分的数据类型，这些类型体现在 **Content-Type** 这个字段，这是针对于发送端而言，接收端想要收到特定类型的数据，也可以用  **Accept** 字段。
具体而言，这两个字段的取值可以分为几类：
-text：text/html，text/plain，text/css 等；
-image：image/gif，image/jepg，image/png等；
-audio/video：audio/mpeg，video/mp4等；
-application：application/json，application/javascript，application/pdf，application/octet-stream。

### 压缩方式
这些数据都会进行编码压缩的，采取什么样的压缩方式就体现在了发送方的**Content-Encoding**字段上。这个字段的取值有下面几种：
-gzip：当今最流行的压缩格式
-defalte：另外一种著名的压缩格式
-br：一种专门为HTTP发明的压缩算法
### 支持语言
对于发送方而言，还有一个**Content-Language**字段，在需要实现国际化的方案中，可以用来指定支持的语言，在接收方对应的字段为**Accept-Language**。
```
// 发送端
Content-Language: zh-CN, zh, en
// 接收端
Accept-Language: zh-CN, zh, en
```
### 字符集
最后是一个比较特殊的字段，在接收端应为**Accept-Charset**，指定可以接受的字符集，而在发送端并没有对应的**Content-Charset'**，而是直接放在了**Content-Type**中，以**charset**属性指定。如：
```
// 发送端
Content-Type: text/html; charset=utf-8
// 接收端
Accept-Charset: charset=utf-8
```

![3](E:\笔记\github笔记\Note-Markdown\2022\http\images\3.png)

## 对于定长和不定长的数据，HTTP 是怎么传输的？
### 定长包体
对于定长包而言，发送端在传输的时候一般会带上**Content-Length**，来指明包体的长度。
eg：使用一个 node.js 服务器来模拟一下：
```js
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  if(req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', 10);
    res.write("helloworld");
  }
})

server.listen(8081, () => {
  console.log("成功启动");
})
```
启动成功后，浏览器中显示如下： helloworld。
这是长度正常的情况，那不正确的情况是如何处理的？我们试着把这个长度设置的小一点：
```
res.setHeader('Content-Length', 8);
```
重启服务，再次访问，现在浏览器中内容如下：
```
hellowor
```
那后面的 ld 去哪里了呢？实际上是在 http 的响应体中直接被截去了。
然后我们试着将这个长度设置得大一些：

```
res.setHeader('Content-Length', 12);
```

![](E:\笔记\github笔记\Note-Markdown\2022\http\images\4.jpg)

此时浏览器显示：“该网页无法正常运作”，直接无法显示了。可以看到 **Content-Length** 对于 http 传输过程起到了十分关键的作用，如果设置不当可以直接导致传输失败。
### 不定长包体
```
Transfer-Encoding: chunked
```
表示分块传输数据，设置这个字段后会自动产生两个效果：
- Contnet-Length 字段会被忽略
-  基于长连接持续推送动态内容

## HTTP 如何处理大文件传输
对于几百 M 或者上 G 的大文件来说，如果要一口气全部传输过来显然是不现实的，会有大量的等待时间，严重影响用户体验。因此，HTTP 针对这一场景，采取了**范围请求**的解决方案，允许客户端仅仅请求一个资源的一部分。
### 如何支持
当然，前提是服务器要支持范围请求，要支持这个功能，就必须加上这样一个响应头：  用来告知客户端这边是支持范围请求的。
```
Accept-Ranges: none
```
### Range 字段拆解
对于客户端而言，他需要指定请求哪一部分，通过  **Range**  这个请求字段确定，格式为 **bytes=x-y**。
### Range 的书写格式
- 0-499 表示从开始到第 499 个字节
- 500-  表示第 500 字节到文件终点
- -100  表示文件的最后 100 个字节
服务器收到请求后，首先验证范围是否合法，如果越界了那么返回 416 错误码，否则读取相应片段，返回 206 状态码。
同时，服务器需要添加 Content-Range 字段，这个字段的格式根据请求头中 Range 字段的不同而有所差异。
具体来说，请求**单段数据**和请求**多段数据**，响应头是不一样的。
举个例子：
```
// 单段数据
Range: bytes=0-9
// 多段数据
Range: bytes=0-9, 30-39
```
接下来，我们就分别来讨论这两种情况。
#### 单段数据
对于单段数据的请求，返回的响应如下：
```
HTTP/1.1 206 Partial Content
Content-Length: 10
Accept-Ranges: bytes
Content-Range: bytes 0-9/100

i am xxxxx
```
值得注意的是**Contnet-Range**字段，**0-9**表示请求的返回，**100**表示资源的总大小，很好理解。
#### 多段数据
多段数据得到的响应会是下面这个形式：
```
HTTP/1.1 206 Partial Content
Content-Type: multipart/byteranges; boundary=00000010101
Content-Length: 189
Connection: keep-alive
Accept-Ranges: bytes


--00000010101
Content-Type: text/plain
Content-Range: bytes 0-9/96

i am xxxxx
--00000010101
Content-Type: text/plain
Content-Range: bytes 20-29/96

eex jspy e
--00000010101--
```
这个时候出现了一个非常关键的字段**Content-Type: multipart/byteranges;boundary=00000010101**，它代表的信息量是这样的：
- 请求一定是多段数据请求
- 响应体中的分隔符是 00000010101
因此，在响应体中各段数据之间会由这里指定的分隔符分开，而且在最后的分隔符末尾添上**--**表示结束。
以上就是对 http 针对大文件传输所采用的手段。

## HTTP 中如何处理表单数据的提交
在 http 中，有两种主要的表单提交方式，体现在两种不同的 **Contnet-Type** 中取值：
- application/x-www-form-urlencoded
- multipart/fom-data
由于表单提交一般是 **POST** 请求，很少考虑 **GET** ，因此这里我们默认提交的数据放在请求体中。
### application/x-www-form-urlencoded
特点：
- 其中的数据会被编码成以  **&** 分隔的键值对
- 字符以**URL编码方式**编码
如：
```
// 转换过程: {a: 1, b: 2} -> a=1&b=2 -> 如下(最终形式)
"a%3D1%26b%3D2"
```
### multipart/fom-data
- 请求头中的 **Content-Type** 字段会包含 **boundary**，且 **boundary** 的值有浏览器默认制度。例：** Content-Type:multipart/form-data;boundary=----WebkitFormBoundaryRRJKeWfHPGrS4LKe**.
- 数据会被分成多个部分，每两个部分之间通过分隔符来分隔，每部分表述均有 HTTP 头部描述子包体，如 **Content-Type**，在最后的分隔符会加上**--**表示结束。
相应的请求体是下面这样的：
```
Content-Disposition: form-data;name="data1";
Content-Type: text/plain
data1
----WebkitFormBoundaryRRJKeWfHPGrS4LKe
Content-Disposition: form-data;name="data2";
Content-Type: text/plain
data2
----WebkitFormBoundaryRRJKeWfHPGrS4LKe--
```
### 小结
值得一提的是，**multipart/form-data** 格式最大的特点在于:**每一个表单元素都是独立的资源表述**。另外，你可能在写业务的过程中，并没有注意到其中还有boundary的存在，如果你打开抓包工具，确实可以看到不同的表单元素被拆分开了，之所以在平时感觉不到，是以为浏览器和 HTTP 给你封装了这一系列操作。
而且，在实际的场景中，对于图片等文件的上传，基本采用multipart/form-data而不用application/x-www-form-urlencoded，因为没有必要做 URL 编码，带来巨大耗时的同时也占用了更多的空间。
