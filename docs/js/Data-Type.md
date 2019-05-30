# 数据类型、类型判断、类型转换

> JS 的数据类型对我来说一直是一个坑，知识点如果只是背，迟早有一天会忘。所以打算写一篇博客，刨根问底，把它嚼烂了，相信便不会轻易忘记了。
> PS：最后一块写的我后脑勺一涨一涨的。


<a name="6LBbO"></a>
## 数据类型

<a name="LeTKO"></a>
### 基本类型

基本类型（基本数值、基本数据类型）是一种既非对象也无方法的数据。

共有6种基本类型：  `number` ，`string` ， `boolean` ， `null` ， `undefined` ， `symbol`  (ECMAScript 2015新增)。

> 所有基本类型的值都是**不可改变**的。但需要注意的是，基本类型本身和一个赋值为基本类型的变量的区别。变量会被赋予一个新值，而原值不能像数组、对象以及函数那样被改变。


<a name="UuZoi"></a>
#### Number

根据 ECMAScript 标准，JavaScript 中只有一种数字类型：基于 IEEE 754 标准的双精度 64 位二进制格式的值（-(263 -1) 到 263 -1）。**它并没有为整数给出一种特定的类型**。除了能够表示浮点数外，还有一些带符号的值：

- `+Infinity` 
- `-Infinity` 
- `NaN` 

<a name="ODZfS"></a>
#### String

JavaScript的字符串类型用于表示文本数据。它是一组16位的无符号整数值的“元素”。在字符串中的每个元素占据了字符串的位置。第一个元素的索引为0，下一个是索引1，依此类推。字符串的长度是它的元素的数量。

<a name="nBnkG"></a>
#### Boolean

布尔表示一个逻辑实体，可以有两个值：`true` 和 `false`。

<a name="uQFgN"></a>
#### Null

Null 类型只有一个值： null，**null表示"没有对象"，即该处不应该有值**。

<a name="l70tu"></a>
#### Undefined

一个没有被赋值的变量会有个默认值 undefined，**undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。**

<a name="rCM17"></a>
#### Symbol

符号(Symbols)是ECMAScript 第6版新定义的。符号类型是唯一的并且是不可修改的, 并且也可以用来作为Object的key的值. 在某些语言当中也有类似的原子类型(Atoms). 你也可以认为为它们是C里面的枚举类型.

<a name="iRUkA"></a>
### 引用类型（对象）

引用类型内存放的并非具体的值，而是所对应对象的内存地址。

常用的有引用类型有：`Object`、`Array`、`Date`、`RegExp`、`Function` **等**

<a name="yE2m8"></a>
#### Object


一个 Javascript 对象就是键和值之间的映射。键是一个字符串（或者 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)） ，值可以是任意类型的值。

<a name="otkSm"></a>
#### Array

[数组](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array)是一种使用整数作为键( integer-key-ed )属性和长度( length )属性之间关联的常规对象。此外，数组对象还继承了 Array.prototype 的一些操作数组的便捷方法。

<a name="MTCgU"></a>
#### Date

用于存放日期时间的内建对象。

<a name="pBtqv"></a>
#### RegExp

用于正则表达式的对象。

<a name="VrRs9"></a>
#### Function

函数是一个附带可被调用功能的常规对象。

<a name="wcaRq"></a>
## 类型判断

<a name="EcKmt"></a>
### typeof

**`typeof`**操作符返回一个字符串，表示未经计算的操作数的类型。

| 类型 | 结果 |
| --- | --- |
| Number | "number" |
| String | "string" |
| Boolean | "boolean" |
| Null | "object" |
| Undefined | "undefined" |
| Symbol | "symbol" |
| Function | "function" |
| 其他引用类型 | "object" |

<a name="9KGLx"></a>
#### Null 返回 "object"

在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null的类型标签也成为了 0，typeof null就错误的返回了"object"。

<a name="4rjRL"></a>
#### New 操作符

```javascript
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String("abc") === 'object';

// 函数
typeof new Function() === 'function';
```

<a name="Ub8yu"></a>
### instanceof

instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置，**适合用于判断自定义的类实例对象, 而不是用来判断原生的数据类型**。

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true
```

<a name="yE9J6"></a>
### Object.prototype.toString

Object.prototype.toString 之所以能实现类型识别，是因为它可以直接获取 this 的 `[[class]]` 。

[ES5](http://lzw.me/pages/ecmascript/#304) 里如此介绍它的运行过程：

> 1. 如果 this 的值是 undefined, 返回 "[object Undefined]".
> 1. 如果 this 的值是 null, 返回 "[object Null]".
> 1. 令 O 为以 this 作为参数调用 ToObject 的结果 .
> 1. 令 class 为 O 的 [[Class]] 内部属性的值 .
> 1. 返回三个字符串 "[object ", class, and "]" 连起来的字符串 .


因此我们只需要使用 call / apply 将需要判断的变量绑定到 toString 上的 this 即可。

```javascript
Object.prototype.toString.call(null) // [object Null]
// 其他类型的变量亦是如此
```

<a name="8QrbI"></a>
## 类型转换

<a name="z8ack"></a>
### 常用类型互相转换参考

<a name="79q7E"></a>
#### 基本类型 -> 布尔类型
| 类型 | 值 | 结果 |
| --- | --- | --- |
| Number | 0、-0、NaN | **false** |
|  | 其他 | **true** |
| String | "" | **false** |
|  | 其他 | **true** |
| Null | Null | **false** |
| Undefined | Undefined | **false** |
| Symbol | / | **true** |

<a name="9luHZ"></a>
#### 基本类型 -> 字符串类型
| 类型 | 值 | 结果 |
| --- | --- | --- |
| Number | / | **值 + ""** |
| Boolean |  |  |
| Null |  |  |
| Undefined |  |  |
| Symbol | / | **Uncaught TypeError** |

<a name="O8psK"></a>
#### 基本类型 -> 数值类型
| 类型 | 值 | 结果 |
| --- | --- | --- |
| String | 数值字符串 且 只有前后有空格 | **正常数值** |
|  | 其他（包括：数值字符串，但中间数值中间有空格） | **NaN** |
| Boolean | true | **1** |
|  | false | **0** |
| Null | Null | **0** |
| Undefined | Undefined | **NaN** |
| Symbol | / | **Uncaught TypeError** |

<a name="JJczm"></a>
#### 基本类型 -> 对象类型

| 类型 | 值 | 结果 |
| --- | --- | --- |
| Number | / | **对应构造函数生成的对象** |
| String |  |  |
| Boolean |  |  |
| Symbol |  |  |
| Null |  | **{}** |
| Undefined |  |  |

<a name="t5b3x"></a>
#### 对象类型 -> 基本类型
| 值 | 类型 | 结果 |
| --- | --- | --- |
| / | Number | **NaN** |
|  | String | **[object Object]** |
|  | Boolean | **true** |
|  | Symbol | **Symbol([object Object])** |

<a name="h2v3m"></a>
#### 数组类型 -> 字符串类型

```javascript
String([1,2,3]) // "1,2,3"
```

<a name="3e5Cr"></a>
### == 的类型转换

```javascript
null == undefined // true     
11 == "11" // true            先将字符串转换成数值型再进行比较
true == 1 // true             == 两边的 true 会变为 1, false 会变为 0
[] == 0 // true               暂时没搞懂凸(艹皿艹 ) 转成布尔型了？
```

<a name="kwRPP"></a>
### + 的类型转换

```javascript
91 + "1" // "911"             两边有值，且只要有一个非数值型，则视为字符串连接符。
90 + 1 + "1"// "911"          等于 (90 + 1) + "1"
+ "1" // 1                    只有一边有值时，视为数值运算符
```


<a name="3DJHG"></a>
### 其他数学运算符 的类型转换

```javascript
// 没有任何余地，全**给我转成数值进行运算

new Date('04-02-2018') - '1' // 1522619999999
'12' / '6' // 2
-'1' // -1
```

<a name="Qwjw9"></a>
### ! 的类型转换

```javascript
// 值转成布尔型进行运算

!1 // false
!!({}) // true
```



<a name="4qrGF"></a>
## 参考链接

- [JavaScript 数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
- [undefined与null的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)
- [typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)
- [instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
- [ES5 - Object.prototype.toString()](http://lzw.me/pages/ecmascript/#304)
- [JavaScript核心概念(1):类型转换](https://juejin.im/post/5b6906b46fb9a04fcb5b8771#heading-0)
- [[译] [1] + [2] - [3] === 9!? 类型转换深入研究](https://juejin.im/post/5ad5af7251882555894a5054#heading-13)
