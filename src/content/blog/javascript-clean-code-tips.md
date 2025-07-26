---
title: "JavaScript 代码整洁技巧大全"
description: "总结了 JavaScript 开发中的各种代码整洁技巧，包括条件判断优化、数组操作、函数设计、对象处理等实用方法"
date: "2021-06-23"
lang: "zh-CN"
category: "tech"
tag: "javascript"
tags: ["JavaScript", "代码整洁", "最佳实践", "重构", "编程技巧"]
featured: true
---

在日常的 JavaScript 开发中，编写整洁、可维护的代码是每个开发者都应该追求的目标。本文总结了一系列实用的代码整洁技巧，帮助你写出更优雅的 JavaScript 代码。

## 1. if 层级嵌套优化

### 问题示例

如下面的三层 if 条件嵌套：

```javascript
function fruitCheck(fruit, quantity) {
  const redFruits = ['apple', 'pear', 'cherry', 'banana']
  // 条件 1: 水果存在
  if (fruit) {
    // 条件 2: 属于红色水果
    if (redFruits.includes(fruit)) {
      console.log('红色水果')
      // 条件 3: 水果数量大于 10 个
      if (quantity > 10) {
        console.log('数量大于 10 个')
      }
    }
  }
  else {
    throw new Error('没有水果啦!')
  }
}
```

### 优化方案：早处理早返回

"早处理早返回"的原则来写的话，逻辑会更加清晰和容易维护：

```javascript
function supply(fruit, quantity) {
  const redFruits = ['apple', 'pear', 'cherry', 'banana']
  if (!fruit)
    throw new Error('没有水果啦') // 条件 1: 当 fruit 无效时，提前处理错误
  if (!redFruits.includes(fruit))
    return // 条件 2: 当不是红色水果时，提前 return

  console.log('红色水果')

  // 条件 3: 水果数量大于 10 个
  if (quantity > 10) {
    console.log('数量大于 10 个')
  }
}
```

## 2. Array 的妙用

### Array.includes 判断多个 if 条件

可以在数组中存储多个值，使用数组 include 方法：

```javascript
// Longhand
if (x === 'abc' || x === 'def' || x === 'ghi' || x === 'jkl') {
  // logic
}

// Shorthand
if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
  // logic
}
```

### Array.find 查找符合条件的数组元素

当我们确实有一个对象数组并且我们想要根据对象属性查找特定对象时，find 方法确实很有用：

```javascript
const data = [
  {
    type: 'test1',
    name: 'abc'
  },
  {
    type: 'test2',
    name: 'cde'
  },
  {
    type: 'test1',
    name: 'fgh'
  },
]

function findtest1(name) {
  for (let i = 0; i < data.length; ++i) {
    if (data[i].type === 'test1' && data[i].name === name) {
      return data[i]
    }
  }
}

// Shorthand
filteredData = data.find(data => data.type === 'test1' && data.name === 'fgh')
console.log(filteredData) // { type: 'test1', name: 'fgh' }
```

### 其他有用的数组方法

- **数组中所有项都满足某条件**：`Array.every`
- **数组中是否有某一项满足条件**：`Array.some`
- 还有 `Array.find`、`Array.slice`、`Array.findIndex`、`Array.reduce`、`Array.splice` 等，在实际场景中可以根据需要使用。

## 3. 真值判断简写

```javascript
// Longhand
if (tmp === true) or if (tmp !== "") or if (tmp !== null)

// Shorthand
// it will check empty string,null and undefined too
if (test1)
```

⚠️ **注意**：该方式主要用于 null 或 undefined 的检查，**特别需要注意 tmp=0 或者 tmp='0' 都是 false**。

## 4. 多条件的 && 运算符

如果仅在变量为 true 的情况下才调用函数，则可以使用 && 运算符：

```javascript
// Longhand
if (test1) {
  callMethod()
}

// Shorthand
test1 && callMethod()
```

## 5. 三元运算符实现短函数调用

我们可以使用三元运算符来实现函数的直接执行：

```javascript
// Longhand
function test1() {
  console.log('test1')
};
function test2() {
  console.log('test2')
};
let test3 = 1
if (test3 == 1) {
  test1()
}
else {
  test2()
}

// Shorthand
(test3 === 1 ? test1 : test2)()
```

## 6. 对象属性解构简写

```javascript
let test1 = 'a';
let test2 = 'b';

// Longhand
let obj = {test1: test1, test2: test2};

// Shorthand
let obj = {test1, test2};
```

## 7. 比较大小的最佳实践

使用 `a - b > 0` 的方式更好，用 `a > b` 有时候会出现错误：

```javascript
// 错误用法
'20' > '100' // true

// 预期结果
'20' - '100' > 0 // false

// 数组排序算法
arr.sort((a, b) => {
  return a - b
})
```

## 8. 控制流最佳实践

### 基本原则

1. **能用三元运算符就用**，减少 if 的嵌套
2. **减少多余条件判断**，查询结束立即返回（**早返回，多返回**），如果是函数返回 if 里面和外面返回相同的数据类型
3. **If…else if…else 多个条件时以 else 结尾**，因为符合防御性编程规则
4. **NaN 不应该用于比较**，应该是判断是否是数字
5. **Switch…case 使用在至少有三个判断值**，case 不可省，每次 case 必须用 break 跳出
6. **for…of 遍历数组和字符串**
7. **for…in 遍历对象**

### for…in 注意事项

for…in 遍历对象包括所有继承的属性，所以如果只是想使用对象本身的属性需要做一个判断：

```javascript
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    // 只处理对象自身的属性
  }
}
```

### 其他注意事项

- **在循环内部声明函数慎用**，因为是循环执行完成函数调用才会执行
- **return 后面不要写代码**

## 9. if 多条件判断优化

"早点返回，经常返回"（return early，return often），If 语句用来处理主路径上的异常。

比如下面的 find 函数：

```javascript
function find(predicate, arr) {
  for (let item of arr) {
    if (predicate(item)) {
      return item
    }
  }
}
```

在这个 find 函数内，一旦我们找到想查找的对象就立刻返回该对象并且退出循环。这使得我们的代码更加高效。

## 10. switch 语句优化

### 低级版：太容易忘记写 break

```javascript
let notificationPtrn
switch (notification.type) {
  case 'citation':
    notificationPtrn = 'You received a citation from {{actingUser}}.'
    break
  case 'follow':
    notificationPtrn = '{{actingUser}} started following your work'
    break
  case 'mention':
    notificationPtrn = '{{actingUser}} mentioned you in a post.'
    break
  default:
        // Well, this should never happen
}
```

### 优化一：用 return

```javascript
function getnotificationPtrn(n) {
    switch (n.type) {
        case 'citation':
            return 'You received a citation from {{actingUser}}.';
        case 'follow':
            return '{{actingUser}} started following your work';
        case 'mention':
            return '{{actingUser}} mentioned you in a post.';
        default:
            throw new Error('You've received some sort of notification we don't know about.');
    }
}
let notificationPtrn = getNotificationPtrn(notification);
```

### 优化二：采用对象字典

```javascript
function getNotificationPtrn(n) {
  const textOptions = {
    citation: 'You received a citation from {{actingUser}}.',
    follow: '{{actingUser}} started following your work',
    mention: '{{actingUser}} mentioned you in a post.',
  }
  return textOptions[n.type]
}
```

### 优化三（推荐）：类似模式匹配方法

```javascript
const textOptions = {
  citation: 'You received a citation from {{actingUser}}.',
  follow: '{{actingUser}} started following your work',
  mention: '{{actingUser}} mentioned you in a post.',
}

function getNotificationPtrn(textOptions, n) {
  return textOptions[n.type]
}

const notificationPtrn = getNotificationPtrn(textOptions, notification)
```

若包含未知处理，我们也可以把默认的信息作为参数：

```javascript
const defaultTxt = 'You've received some sort of notification we don't know about.';   // 默认值

function getNotificationPtrn(defaultTxt, textOptions, n) {
    return textOptions[n.type] || defaultTxt;
}

const notificationPtrn = getNotificationPtrn(defaultTxt, textOptions, notification.type);
```

现在 textOptions 是一个变量，并且该变量不用再被硬编码了。我们可以把它移动到一个 JSON 配置文件中，或者从服务器获取该变量。现在我们想怎么改 textOptions 就怎么改。我们可以增加新的选项，或者移除选项。我们也可以把多个地方不同的选项合并到一起。

## 11. 链式取值安全处理

### 问题场景

开发中，链式取值是非常正常的操作，如：

```javascript
res.data.goods.list[0].price
```

但是对于这种操作报出类似于 `Uncaught TypeError: Cannot read property 'goods' of undefined` 这种错误也是再正常不过了。如果数据来自于不同端（如前后端），那么这种数据对于我们来说都是不可控的，因此为了保证程序能够正常运行下去，我们需要对此校验：

```javascript
if (res.data.goods.list[0] && res.data.goods.list[0].price) {
  // your code
}

// 如果再精细一点，对于所有都进行校验的话，就会像这样:
if (res && res.data && res.data.goods && res.data.goods.list && res.data.goods.list[0] && res.data.goods.list[0].price) {
  // your code
}
```

不敢想象，如果数据的层级再深一点会怎样，这种实现实在是非常不优雅。

### 解决方案一：lodash 的 \_.get 方法

```javascript
// _.get(object, path, [defaultValue])  第三个参数是取值为 undefined 时候的默认值
let object = { a: [{ b: { c: 3 } }] }
let result = _.get(object, 'a[0].b.c', 1)
console.log(result) // output: 3
```

### 解决方案二：使用解构赋值

```javascript
const obj = {
    a:{
        b: [1,2,3,4]
    },
    a1: 121,
    a2: 'name'
}

let {a: result} = obj     // result : {b: [1,2,3,4]}
let {a1: result} = obj   // result: 121
let {b: result} = obj     // result: undefined

// 当然，这个时候为了保证不报 undefined，我们仍然需要定义默认值
let {b: result = 'default'} = obj    // result: 'default'
```

**缺点**：可读性不太好

### 解决方案三：使用 Proxy

```javascript
function pointer(obj, path = []) {
  return new Proxy(() => {}, {
    get(target, property) {
      return pointer(obj, path.concat(property))
    },
    apply(target, self, args) {
      let val = obj
      let parent
      for (let i = 0; i < path.length; i++) {
        if (val === null || val === undefined)
          break
        parent = val
        val = val[path[i]]
      }
      if (val === null || val === undefined) {
        val = args[0]
      }
      return val
    }
  })
}

// 使用方法：
let c = {
  a: {
    b: [1, 2, 3]
  }
}
pointer(c).a() // {b: [1,2,3]}
pointer(c).a.b() // [1,2,3]
pointer(d).a.b.d('default value') // default value
```

## 12. 类型强制转换

### string 强制转换为数字

可以用 `*1`（乘以1）来转化为数字(实际上是调用 .valueOf 方法) 然后使用 Number.isNaN 来判断是否为 NaN，或者使用 `a !== a` 来判断是否为 NaN，因为 `NaN !== NaN`：

```javascript
'32' * 1 // 32
'ds' * 1 // NaN
null * 1 // 0
undefined * 1 // NaN
1 * { valueOf: () => '3' } // 3
```

**常用**：也可以使用 `+` 来转化字符串为数字：

```javascript
`${+'123' // 123
}ds` // NaN
+ `${// 0
  null // 0
}${undefined // NaN
}${{ valueOf: () => '3' }}` // 3
```

### "+ -"符号的特技

用 `+` 可以将数值型的字符串转为数字，但是必须结合 `isNaN()`，`isNaN()` 函数用于检查其参数是否是非数字，不是数字则为 true：

```javascript
// 基础知识
let a = "2", b = '20', c = 34, d = '2'

a - b // -18
c - d // 32
a + b // "220"
a + c // "234"

isNaN('ad')   // true
isNaN('22')   // false

// 骚操作
+('ab')  // NaN
+('22')  // 22
+(22)    // 22

let a = 1, b ='2'
let c = a + +(b)    // 3

// 示例：选择最小值的函数如下（源于《Vue.js权威指南》里看到表单验证validator.js源码）
export default function min(val, arg) {
  return !isNaN(val) && !isNaN(arg) && +(val) >= +(arg)
}
```

## 13. 使用 filter 过滤数组中的所有假值

我们知道 JS 中有一些假值：`false`，`null`，`0`，`""`，`undefined`，`NaN`，怎样把数组中的假值快速过滤呢，可以使用 Boolean 构造函数来进行一次转换：

```javascript
const compact = arr => arr.filter(Boolean)
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, Number.NaN, 's', 34]) // [1, 2, 3, 'a', 's', 34]
```

## 14. 小符号特技

### 双位运算符 ~~ 实现向下取整

可以使用双位操作符来替代 `Math.floor()`。双否定位操作符的优势在于它执行相同的操作运行速度更快。

`Math.floor(x)` 返回小于参数 x 的最大整数，即对浮点数向下取整：

```javascript
Math.floor(4.9) === 4 // true
// 简写为：
~~4.9 === 4 // true
```

⚠️ **注意**：对负数来说 `~~` 运算结果与 `Math.floor()` 运算结果不相同：

```javascript
~~4.5 // 4
Math.floor(4.5) // 4
~~-4.5 // -4
Math.floor(-4.5) // -5
```

### 短路运算符 && 、||

**|| 分配默认值**：

```javascript
let test1 = null
let test2 = test1 || '6'

console.log(test2) // 输出为 "6"
```

我们知道逻辑与 `&&` 与逻辑或 `||` 是短路运算符，短路运算符就是从左到右的运算中前者满足要求，就不再执行后者了；可以理解为：

- **&& 为取假运算**，从左到右依次判断，如果遇到一个假值，就返回假值，以后不再执行，否则返回最后一个真值
- **|| 为取真运算**，从左到右依次判断，如果遇到一个真值，就返回真值，以后不再执行，否则返回最后一个假值

```javascript
let param1 = expr1 && expr2
let param2 = expr1 || expr2
```

| 运算符 | 示例             | 说明                                                                                                                                       |
| ------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| &&     | expr1 && expr2   | 如果 expr1 能转换成 false 则返回 expr1，否则返回 expr2。因此，在 Boolean 环境中使用时，两个操作结果都为 true 时返回 true，否则返回 false。 |
| \|\|   | expr1 \|\| expr2 | 如果 expr1 能转换成 true 则返回 expr1，否则返回 expr2。                                                                                    |
| !      | !expr            | 如果单个表达式能转换为 true 的话返回 false，否则返回 true。                                                                                |

因此可以用来做很多有意思的事，比如给变量赋初值：

```javascript
let variable1
let variable2 = variable1 || 'foo'
```

如果 variable1 是真值就直接返回了，后面短路就不会被返回了，如果为假值，则会返回后面的 foo。

也可以用来进行简单的判断，取代冗长的 if 语句：

```javascript
let variable = param && param.prop
```

如果 param 如果为真值则返回 param.prop 属性，否则返回 param 这个假值，这样在某些地方防止 param 为 undefined 的时候还取其属性造成报错。

但是要注意以下反例如果在数据为 0（或者空字符串的时候也要返回数据），此时用 || 运算符就会搞错了，返回的是默认值了：

```javascript
// 返回值为
let res = {
  data: 0, // 后台返回状态码（0表示不存在，1表示存在）
  code: 200
}
let val = res.data || '无数据'
console.log(val) // '无数据'，其实我们要的是data的值
```

### 取整 | 0

对一个数字 `| 0` 可以取整，负数也同样适用，`num | 0`：

```javascript
1.3 | 0 // 1
- 1.9 | 0 // -1
```

### 判断奇偶数 & 1

对一个数字 `& 1` 可以判断奇偶数，负数也同样适用，`num & 1`：

```javascript
const num = 3
!!(num & 1) // true
!!(num % 2) // true
```

## 15. 函数相关技巧

### 函数默认值

```javascript
const func = (x, m = 3, n = 4) => (x * m * n)
func(2) // output: 24
func(null) // output: 0   因为 null * 3 * 4 = 0
```

⚠️ **注意**：传入参数为 `undefined` 或者不传入的时候会使用默认参数，即使传入 `null` 还是会覆盖默认参数。

这一点和 `x = params || '2'` 是有区别的，`||` 的取值时间是 `params == false` 时。

### 强制参数，缺失报错

默认情况下，如果不向函数参数传值，那么 JS 会将函数参数设置为 `undefined`。其它一些语言则会发出警告或错误。要执行参数分配，可以使用 if 语句抛出未定义的错误，或者可以利用强制参数：

```javascript
function logError() {
  throw new Error('Missing parameter!')
}

function foo(bar = logError()) { // 这里如果不传入参数，就会执行logError 函数报出错误(此处也可以添加日志打印等操作)
  return bar
}
```

### 箭头函数隐式返回值

返回值是我们通常用来返回函数最终结果的关键字。只有一个语句的箭头函数，可以隐式返回结果（函数必须省略大括号 `{}`，以便省略返回关键字）。

要返回多行语句（例如对象文本），需要使用 `()` 而不是 `{}` 来包裹函数体。这样可以确保代码以单个语句的形式进行求值：

```javascript
function calcCircumference(diameter) {
  return Math.PI * diameter
}

// 简写为：
const calcCircumference = diameter => (
  Math.PI * diameter
)
```

### 惰性载入函数

在某个场景下我们的函数中有判断语句，这个判断依据在整个项目运行期间一般不会变化，所以判断分支在整个项目运行期间只会运行某个特定分支，那么就可以考虑惰性载入函数：

```javascript
// 低级版
function foo(){
    if(a !== b){
        console.log('aaa')
    }else{
        console.log('bbb')
    }
}

// 优化后
function foo(){
    if(a != b){
        foo = function(){
            console.log('aaa')
        }
    }else{
        foo = function(){
            console.log('bbb')
        }
    }
    return foo();
}
```

那么第一次运行之后就会覆写这个方法，下一次再运行的时候就不会执行判断了。当然现在只有一个判断，如果判断很多，分支比较复杂，那么节约的资源还是可观的。

### 一次性函数

跟上面的惰性载入函数同理，可以在函数体里覆写当前函数，那么可以创建一个一次性的函数，重新赋值之前的代码相当于只运行了一次，适用于运行一些只需要执行一次的初始化代码：

```javascript
let sca = function () {
  console.log('msg')
  sca = function () {
    console.log('foo')
  }
}
sca() // msg
sca() // foo
sca() // foo
```

## 16. 字符串处理技巧

### 字符串拼接用 join()，避免使用 + 或 += 的方式拼接较长的字符串

应使用数组保存字符串片段，使用时调用 join 方法。避免使用 + 或 += 的方式拼接较长的字符串，每个字符串都会使用一个小的内存片段，过多的内存片段会影响性能。

### 时间字符串比较（时间形式注意补0）

比较时间先后顺序可以使用字符串：

```javascript
const a = '2014-08-08'
const b = '2014-09-09'

console.log(a > b, a < b) // false true
console.log('21:00' < '09:10') // false
console.log('21:00' < '9:10') // true   时间形式注意补0
```

因为字符串比较大小是按照字符串从左到右每个字符的 charCode 来的，所以特别要注意时间形式注意补0。

## 17. 数字处理技巧

### 不同进制表示法

ES6 中新增了不同进制的书写格式，在后台传参的时候要注意这一点：

```javascript
29            // 10进制
035           // 8进制29      原来的方式
0o35          // 8进制29      ES6的方式
0x1d          // 16进制29
0b11101       // 2进制29
```

### 精确到指定位数的小数

将数字四舍五入到指定的小数位数。使用 `Math.round()` 和模板字面量将数字四舍五入为指定的小数位数。省略第二个参数 decimals，数字将被四舍五入到一个整数：

```javascript
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
round(1.345, 2) // 1.35   Number(1.345e2e-2)
round(1.345, 1) // 1.3

// 此处 e2 表示乘以10的2次方
1.23e1 // 12.3
1.23e2 // 123
123.45e-2 // 1.2345
```

### 数字补0操作

比如显示时间的时候有时候会需要把一位数字显示成两位，这时候就需要补0操作，可以使用 slice 和 string 的 padStart 方法：

```javascript
const addZero1 = (num, len = 2) => (`0${num}`).slice(-len) // 从字符串倒数第len处开始截取到最后
const addZero2 = (num, len = 2) => (`${num}`).padStart(len, '0') // padStart为ES6的字符串拼接方法
addZero1(3) // 03
addZero2(32, 4) // 0032

// 此处可以采用另外一个思路；可以将得到的字符串先拼接len个0，然后再截取len长的字符串
```

## 18. 数组高级操作

### 统计数组中相同项的个数

很多时候，你希望统计数组中重复出现项的个数然后用一个对象表示。那么你可以使用 reduce 方法处理这个数组。

下面的代码将统计每一种车的数目然后把总数用一个对象表示：

```javascript
const cars = ['BMW', 'Benz', 'Benz', 'Tesla', 'BMW', 'Toyota']
const carsObj = cars.reduce((obj, name) => {
  obj[name] = obj[name] ? ++obj[name] : 1 // obj[name]存在就加一，不存在就为1
  return obj
}, {})
carsObj // => { BMW: 2, Benz: 2, Tesla: 1, Toyota: 1 }
```

### 交换参数数值

有时候你会将函数返回的多个值放在一个数组里。我们可以使用数组解构来获取其中每一个值：

```javascript
let param1 = 1
let param2 = 2;
[param1, param2] = [param2, param1]
console.log(param1) // 2
console.log(param2) // 1
```

当然我们关于交换数值有不少其他办法：

```javascript
let temp = a; a = b; b = temp
b = [a, a = b][0]
a = a + b; b = a - b; a = a - b
```

### 批量接收多个请求返回结果

在下面的代码中，我们从 /post 中获取一个帖子，然后在 /comments 中获取相关评论。由于我们使用的是 async/await，函数把返回值放在一个数组中。而我们使用数组解构后就可以把返回值直接赋给相应的变量：

```javascript
async function getFullPost() {
  return await Promise.all([
    fetch('/post'),
    fetch('/comments')
  ])
}
const [post, comments] = getFullPost()
```

### 将数组平铺到指定深度

**基础的可以使用 `[].flat()` 方法来拉平单层数组**，代码如下：

```javascript
let a1 = [{ a: 1 }, { a: 2 }, [{ a: 3 }, { a: 4 }, [{ a: 5 }]]]
a1.flat() // [{a:1},{a:2},{a:3},{a:4},[{a:5}]]
```

**使用递归**，为每个深度级别 depth 递减 1。使用 `Array.reduce()` 和 `Array.concat()` 来合并元素或数组。基本情况下，depth 等于 1 停止递归。省略第二个参数，depth 只能平铺到 1 (单层平铺) 的深度：

```javascript
function flatten(arr, depth = 1) {
  return depth != 1
    ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), [])
    : arr.reduce((a, v) => a.concat(v), [])
}
flatten([1, [2], 3, 4]) // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2) // [1, 2, 3, [4, 5], 6, 7, 8]
```

### 数组的对象解构

数组也可以对象解构，可以方便的获取数组的第n个值：

```javascript
const csvFileLine = '1997,John Doe,US,john@doe.com,New York'
const { 2: country, 4: state } = csvFileLine.split(',')

country // US
state // New York
```

### 对象数组按照某个属性查询最大值

```javascript
const array = [
  {
    index_id: 119,
    area_id: '18335623',
    name: '满意度',
    value: '100'
  },
  {
    index_id: 119,
    area_id: '18335624',
    name: '满意度',
    value: '20'
  },
  {
    index_id: 119,
    area_id: '18335625',
    name: '满意度',
    value: '80'
  }
]

// 一行代码搞定
Math.max.apply(Math, array.map((o) => { return o.value }))
```

执行以上一行代码可返还所要查询的 array 数组中对象 value 属性的最大值 100。

同理，要查找最小值如下即可：`Math.min.apply(Math, array.map(function(o) {return o.value}))` 是不是比 for 循环方便了很多。

## 19. 对象处理技巧

### 使用解构删除对象某个属性

有时候你不希望保留某些对象属性，也许是因为它们包含敏感信息或仅仅是太大了。你可能会枚举整个对象然后删除它们，但实际上只需要简单的将这些无用属性赋值给变量，然后把想要保留的有用部分作为剩余参数就可以了。

下面的代码里，我们希望删除 \_internal 和 tooBig 参数。我们可以把它们赋值给 internal 和 tooBig 变量，然后在 cleanObject 中存储剩下的属性以备后用：

```javascript
let { _internal, tooBig, ...cleanObject } = { el1: '1', _internal: 'secret', tooBig: {}, el2: '2', el3: '3' }

console.log(cleanObject) // {el1: '1', el2: '2', el3: '3'}
```

### 解构嵌套对象属性

在下面的代码中，engine 是对象 car 中嵌套的一个对象。如果我们对 engine 的 vin 属性感兴趣，使用解构赋值可以很轻松地得到它：

```javascript
const car = {
  model: 'bmw 2018',
  engine: {
    v6: true,
    turbo: true,
    vin: 12345
  }
}
function modelAndVIN({ model, engine: { vin } }) {
  console.log(`model: ${model} vin: ${vin}`)
}
modelAndVIN(car) // => model: bmw 2018  vin: 12345
```

## 20. 代码复用技巧

### Object [key] 实现动态属性访问

虽然将 `foo.bar` 写成 `foo['bar']` 是一种常见的做法，但是这种做法构成了编写可重用代码的基础。许多框架使用了这种方法，比如 element 的表单验证。

请考虑下面这个验证函数的简化示例：

```javascript
function validate(values) {
  if (!values.first)
    return false
  if (!values.last)
    return false
  return true
}
console.log(validate({ first: 'Bruce', last: 'Wayne' })) // true
```

上面的函数完美的完成验证工作。但是当有很多表单，则需要应用验证，此时会有不同的字段和规则。如果可以构建一个在运行时配置的通用验证函数，会是一个好选择。

### Object [key] 实现表单验证

```javascript
// object validation rules
const schema = {
  first: {
    required: true
  },
  last: {
    required: true
  }
}

// universal validation function
function validate(schema, values) {
  for (field in schema) {
    if (schema[field].required) {
      if (!values[field]) {
        return false
      }
    }
  }
  return true
}
console.log(validate(schema, { first: 'Bruce' })) // false
console.log(validate(schema, { first: 'Bruce', last: 'Wayne' })) // true
```

### 保持函数单一职责，灵活组合

保持函数的单一职责，保证一个函数只执行一个动作，每个动作互不影响，可以自由组合，就可以提高代码的复用性。

比如下面的代码，从服务端请求回来的订单数据如下，需要进行以下三个处理：

1. 根据 status 进行对应值得显示（0-进行中，1-已完成，2-订单异常）
2. 把 startTime 由时间戳显示成 yyyy-mm-dd
3. 如果字段值为空字符串，设置字段值为 '--'

**方案一：最基本的直接循环一次，同时操作三步**

```javascript
let orderList = [
  {
    id: 1,
    status: 0,
    startTime: 1538323200000,
  },
  {
    id: 2,
    status: 2,
    startTime: 1538523200000,
  },
  {
    id: 3,
    status: 1,
    startTime: 1538723200000,
  },
  {
    id: 4,
    status: '',
    startTime: '',
  },
]

let _status = {
  0: '进行中',
  1: '已完成',
  2: '订单异常'
}

orderList.forEach((item) => {
  // 设置状态
  item.status = item.status.toString() ? _status[item.status] : ''
  // 设置时间
  item.startTime = item.startTime.toString() ? new Date(item.startTime).toLocaleDateString().replace(/\//g, '-') : ''
  // 设置--
  for (let key in item) {
    if (item[key] === '') {
      item[key] = '--'
    }
  }
})
```

运行结果也正常，但是这样写代码重复性会很多。

## 总结

本文总结了 JavaScript 开发中的各种代码整洁技巧，从基础的条件判断优化到高级的设计模式，涵盖了：

- **条件判断优化**：早返回、多返回原则，减少嵌套
- **数组操作技巧**：includes、find、filter 等方法的妙用
- **函数设计**：默认参数、箭头函数、惰性加载等
- **字符串和数字处理**：各种转换和格式化技巧
- **对象操作**：解构、动态属性访问等
- **代码复用**：单一职责原则，灵活组合
