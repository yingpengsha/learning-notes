# 数组的常用方法

<a name="aa5d246f"></a>
### 创建和初始化数组

<a name="d866a67a"></a>
#### 使用 Array 构造函数初始化

```javascript
let array1 = new Array();
let array2 = new Array(7);
let array3 = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
```

<a name="58153da2"></a>
#### 直接赋值创建

```javascript
let array1 = [];
let array2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
```

<a name="a5b51f79"></a>
#### Array.of 方法

Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

```javascript
let array1 = Array.of(7); // [7]
let array2 = Array.of(...[1, 2, 3, 4]); // [1, 2, 3, 4]
```

<a name="40f300c7"></a>
### 二维和多维数组

<a name="030522dc"></a>
#### 二维数组

```javascript
let matrixArray = new Array(2);
matrixArray[0] = new Array('0.0', '0.1', '0.2', '0.3');
matrixArray[1] = new Array('1.0', '1.1', '1.2', '1.3');
```

| - | [0] | [1] | [2] | [3] |
| --- | --- | --- | --- | --- |
| [0] | '0.0' | '0.1' | '0.2' | '0.3' |
| [1] | '1.0' | '1.1' | '1.2' | '1.3' |


<a name="efc59fa5"></a>
### 搜索元素

<a name="d735f25f"></a>
#### 使用 indexOf 方法

indexOf()方法返回在数组中可以找到一个给定元素的**第一个索引**，如果不存在，则返回-1。

```javascript
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
console.log(array.indexOf(10)) // 9
console.log(array.indexOf('A')) // -1
```

<a name="da049678"></a>
#### 使用 lastIndexOf 方法

lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的**最后一个的索引**，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。

```javascript
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
console.log(array.lastIndexOf(10)) // 10
console.log(array.indexOf('A')) // -1
console.log(array.lastIndexOf(10, 9)) // 9
```

<a name="0eeb491d"></a>
#### 使用 find 方法

find() 方法返回数组中满足提供的测试函数的第一个**元素的值**。否则返回 undefined。

```javascript
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
let find1 = array.find((value, index, arr) => {
    return value % 2 === 0;
}) // 2
let find2 = array.find((value, index, arr) => {
    return typeof value === 'string';
}) // undefined
```

<a name="69282f8a"></a>
#### 使用 findIndex 方法

findIndex()方法返回数组中满足提供的测试函数的第一个**元素的索引**。否则返回-1。

```javascript
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
let find1 = array.findIndex((value, index, arr) => {
    return value % 2 === 0;
}) // 1
let find2 = array.findIndex((value, index, arr) => {
    return typeof value === 'string';
}) // -1
```

<a name="0f8cc9ab"></a>
#### 使用 includes 方法

includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

```javascript
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
console.log(array.includes(10)) // true
console.log(array.includes('A')) // false
```

<a name="28748c83"></a>
### 添加元素

<a name="1c4c3fa9"></a>
#### 使用 push 方法

push 方法，能把任意元素添加到数组的**末尾**。

```javascript
let array = [1, 2, 3];
array.push('number'); //[1, 2, 3, 'number']
```

<a name="0e488705"></a>
#### 使用 unshfit 方法

unshfit 方法，能把任意元素添加至数组的**开头**。

```javascript
let array = [1, 2, 3];
array.unshfit('number1', 'number2'); // ['number1', 'number2', 1, 2, 3]
```

<a name="ea5eb76d"></a>
### 删除元素

<a name="2aa3a54e"></a>
#### 使用 pop 方法

pop 方法，能在数组的**末尾**删除一个元素。

```javascript
let array = [1, 2, 3, 'number'];
array.pop(); // [1, 2, 3]
```

<a name="2505dc0c"></a>
#### 使用 shfit 方法

shfit方法，能在数组的**开头**删除一个元素。

```javascript
let array = [ 'number', 1, 2, 3];
array.shfit(); // [1, 2, 3]
```

<a name="713c4c67"></a>
### 在任意位置删除、添加、替换元素

<a name="68bd004a"></a>
#### 使用 splice 删除元素

```javascript
let array = [1, 2, 3, 4, 5];
array.splice(0, 3); // [4, 5];
```

<a name="ffd9ee13"></a>
#### 使用 splice 添加元素

```javascript
let array = [1, 2, 3];
let insertArray = ['number1', 'number2']
array.splice(1, 0, ...insertArray); // [1, 'number1', 'number2', 2, 3];
```

<a name="afbd4e3c"></a>
#### 使用 splice 替换元素

```javascript
let array = [1, 2, 3];
let replaceArray = ['number1', 'number2']
array.splice(1, 1, ...replaceArray); // [1, 'number1', 'number2', 3];
```

<a name="dd9a1e7d"></a>
#### 使用 fill 替换元素

fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

```javascript
let array = [1, 2, 3];
let number = 0;
array.fill(number, 1, 3); // [1, 0, 0]
```

<a name="3ef38441"></a>
### 数组合并

<a name="f4b047f5"></a>
#### 使用 concat 连接数组

concat 函数并**不会直接改变数组的值**，而是返回一个连接后的数组

```javascript
let array1 = [1, 2, 3];
let array2 = ['a', 'b', 'c'];
let result = array1.concat(array2); // [1, 2, 3, 'a', 'b', 'c']
```

<a name="fecc5052"></a>
### 排序元素

<a name="1bb5ada2"></a>
#### 使用 sort 方法排序

```javascript
let array = [5, 3, 2, 1, 4];
array.sort(); // [1, 2, 3, 4, 5]
```

<a name="c3d4190d"></a>
#### 使用 sort 方法自定义排序

```javascript
let array = ['D', 'a', 'c', 'B'];
array.sort(); // ['B', 'D', 'a', 'c']
let strCompare = (one, two) => {
  if (one.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (one.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
}
array.sort(strCompare); // ['a', 'B', 'c' 'D']
```

<a name="1ed99581"></a>
#### 使用 reverse 方法将数组中元素的位置颠倒

```javascript
let array = [1, 2, 3, 4, 5];
array.reverse(); // [5, 4, 3, 2, 1]
```

<a name="45cf19d5"></a>
### 迭代器函数

<a name="df1e8891"></a>
#### forEach 方法

forEach( ) 方法对数组的每个元素执行一次提供的函数。

```javascript
let array = [1, 2, 3, 4];
array.forEach((value, index, arr) => {
  console.log(value % 2 === 0); // 输入出是否被 2 整除
})
// false
// true
// false
// true
```

<a name="2212237d"></a>
#### for …… of 循环迭代

```javascript
let array = [1, 2, 3, 4];
for (const number of array) {
  console.log(n % 2 === 0)
}
// false
// true
// false
// true
```

<a name="35ed6a86"></a>
#### map 方法

map() 方法**创建一个新数组**，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

```javascript
let array = [1, 2, 3, 4];
let result = array.forEach((value, index, arr) => {
  return value * 2;
})
// array : [1, 2, 3, 4]
// result : [2, 4, 6, 8]
```

<a name="08fa0288"></a>
#### filter 方法

filter() 方法**创建一个新数组**, 其包含**通过所提供函数实现的测试**的所有元素。

```javascript
let array = [1, 2, 3, 4];
let result = array.filter((value, index, arr) => {
  return value > 2;
})
// array : [1, 2, 3, 4]
// result : [3, 4]
```

<a name="e0aa4028"></a>
#### reduce 方法

reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

```javascript
let array = [1, 2, 3, 4];
let result = array.reduce((value, currentValue, index, arr) => {
  return value + currentValue;
}, 5)
// result : 5 + 1 + 2 + 3 + 4 = 15
```

<a name="4327fc5e"></a>
#### every 方法

every( )方法测试数组的**所有元素**是否都通过了指定函数的测试。

```javascript
let array = [1, 2, 3, 4];
array.every((value) => {
  return value % 2 === 0; // 数组是否都能被 2 整除
})
// false
array.every((value) => {
  return typeof value == 'number'; // 数组是否都是数字
})
// true
```

<a name="870725e0"></a>
#### some 方法

some() 方法测试是否**至少有一个元素**通过由提供的函数实现的测试。

```javascript
let array = [1, 2, 3, 4];
array.some((value) => {
  return value % 2 === 0; // 数组有没有能被 2 整除的值
})
// true
array.some((value) => {
  return typeof value == 'string'; // 数组有没有字符串
})
// false
```

<a name="e968db51"></a>
#### entries 方法

entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个**索引的键/值对**。

```javascript
let array = [1, 2, 3, 4];
let iterator = array.entries();
console.log(iterator.next()); // {value: [0, 1], done: false }
console.log(iterator.next()); // {value: [1, 2], done: false }
console.log(iterator.next()); // {value: [2, 3], done: false }
console.log(iterator.next()); // {value: [3, 4], done: false }
console.log(iterator.next()); // {value: undefined, done: true }
```

<a name="37678bf4"></a>
#### keys 方法

keys() 方法返回一个包含数组中每个**索引键**的Array Iterator对象。

```javascript
let array = [1, 2, 3, 4];
let iterator = array.keys();
console.log(iterator.next()); // {value: 0, done: false }
console.log(iterator.next()); // {value: 1, done: false }
console.log(iterator.next()); // {value: 2, done: false }
console.log(iterator.next()); // {value: 3, done: false }
console.log(iterator.next()); // {value: undefined, done: true }
```

<a name="0da4eafb"></a>
#### values 方法

values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个**索引的值**

```javascript
let array = [1, 2, 3, 4];
let iterator = array.values();
console.log(iterator.next()); // {value: 1, done: false }
console.log(iterator.next()); // {value: 2, done: false }
console.log(iterator.next()); // {value: 3, done: false }
console.log(iterator.next()); // {value: 4, done: false }
console.log(iterator.next()); // {value: undefined, done: true }
```

<a name="9cdb62c8"></a>
#### Array.from 方法

Array.from() 方法从一个类似数组或可迭代对象中**创建一个新的数组实例**。

```javascript
console.log(Array.from('number')); // ['n', 'u', 'm', 'b', 'e', 'r']
console.log(Array.from([1, 2, 3], value => value + 1)); // [2, 3, 4]
```

<a name="3287e0ca"></a>
### 输出数组为字符串

<a name="c588fe5d"></a>
#### toString 方法

```javascript
let array = ['h', 'e', 'l', 'l', 'o'];
console.log(array.toString()); // 'h, e, l, l, o'
```

<a name="c761ddfe"></a>
#### join 方法

```javascript
let array = ['h', 'e', 'l', 'l', 'o'];
console.log(array.join('-')); // 'h-e-l-l-o'
```

