module.exports = {
  title: '飞行随笔',
  description: 'yingpengsha 的学习笔记',
  base: '/learning-notes/',
  themeConfig: {
    sidebarDepth : 3,
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about/index' },
      { text: 'Github', link: 'https://github.com/yingpengsha' },
    ],
    sidebar: [
      {
        title: 'HTTP 学习笔记',
        collapsable: true,
        children: [
          ['/http/TCPIP', 'TCP/IP 五层模型'],
          ['/http/HTTP-History', 'HTTP 协议的发展历史'],
          ['/http/HTTP-Connect', 'HTTP 三次握手和四次挥手'],
          ['/http/URI-URL-URN', 'URI、URL、URN'],
          ['/http/HTTP-Message', 'HTTP 报文'],
          ['/http/HTTP-Code', 'HTTP 状态码'],
          ['/http/Cross-Domain','同源策略'],
          ['/http/JSONP','跨域解决方案：JSONP'],
          ['/http/CORS','跨域解决方案：CORS']
        ]
      },
      {
        title: 'JS 学习笔记',
        collapsable: true,
        children: [
          ['/js/Array-API', '数组常用方法'],
          ['/js/Data-Type', '数据类型、类型判断、类型转换'],
          ['/js/this-call-apply-bind', '从 this 说到 call，apply，bind 的区别']
        ]
      },
    ]
  },
}