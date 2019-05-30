# 从 this 说到 call，apply，bind 的区别

<a name="jlfWy"></a>
## this 关键字

> this 对象是在运行时基于函数的执行环境绑定的：在全局环境中，this 等于 window，而当函数被作为某个对象的方法调用时，this 等于那个对象。不过，匿名函数的执行环境具有全局性，因此其 this 对象通常指向 window。
> _------_《Javascript高级程序设计》


借用阮一峰老师的例子来简单阐述一下什么叫做**函数的执行环境**<br />**
```javascript
var obj = {
  foo: function() { console.log(this.bar) },
  bar: 1
};

var foo = obj.foo;
var bar = 2;

obj.foo() // 1
foo() // 2
```

obj.foo() 执行时的指针在 obj 内部，所以该函数的 this 指向了 obj 所在的区域。<br />foo() 执行时指针在全局，所以该函数的 this 指向了全局作用域

<a name="anYLq"></a>
### 箭头函数

箭头函数与普通函数有所不同，前者并不是指向运行时上下文，而是定义时上下文。

> 箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined


```javascript
var obj = {
  foo: () => { console.log(this.bar) },
  bar: 1
};

var foo = obj.foo;
var bar = 2;

obj.foo() // 2
foo() // 2
```

<a name="pTAHT"></a>
## call，apply，bind

三个函数的目的是相同的，都是更改函数的 this 指向。

MDN 对这三个函数做了如下定义：

- `**call()**` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。
- **`apply()`** 方法调用一个具有给定 `this` 值的函数，以及作为一个数组（或[类似数组对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)）提供的参数。
- `**bind()**` 方法创建一个新的函数，在调用时设置 `this` 关键字为提供的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。

<a name="s1qLM"></a>
### call 和 apply 的区别

`call()`  方法的作用和 `apply()`  方法类似，区别就是 `call()` 方法接受的是**参数列表**，而 `apply()` 方法接受的是一个**参数数组**。

<a name="kjGg2"></a>
### bind 和 call、apply 的区别

`bind()` 运行后返回一个新函数并不立刻执行，而 `call()` 和 `apply()` 则是更改完 this 后立即执行。

<a name="wmHTn"></a>
## 参考链接

- [JavaScript 的 this 原理](http://www.ruanyifeng.com/blog/2018/06/javascript-this.html)
- [this、apply、call、bind](https://juejin.im/post/59bfe84351882531b730bac2#heading-0)
- [Function.prototype.call()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Function.prototype.apply()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [Function.prototype.bind()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
