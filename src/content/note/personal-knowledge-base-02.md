---
title: "个人开发知识库（51-150）"
description: "Advanced JavaScript concepts, Vue.js techniques, mini-program development, and frontend engineering practices"
date: "2021-12-23"
lang: "zh-CN"
category: "tech"
tag: "knowledge-base"
tags: ["JavaScript", "Vue.js", "Mini-Programs", "Engineering", "Frontend", "Development"]
featured: true
---

## 51. 兼容性注意事项

写代码要注意兼容性 h5和小程序和移动端的

## 52. 小程序 shadow-dom 处理

只有小程序才会有shadow-dom(shadow-root类似) 所以要加条件判断兼容不同平台

[条件编译](https://uniapp.dcloud.io/platform)

![条件编译](../../assets/images/WEBRESOURCE8877af161861d594ab57b4e9437f0776截图.png)

## 53. 修改列表项最后一个元素的样式

修改列表项（表单项）的最后一个元素的样式的写法：

![列表样式1](../../assets/images/WEBRESOURCEb33a3fa18b62359deefb5bee04f8fa70截图.png)

![列表样式2](../../assets/images/WEBRESOURCEc090a3ba85ce638f6277c4627998b987截图.png)

用 标签名 拿到 该列表的最后一项， 然后该项中有个同标签名的类名，选中该项， 再将该项的伪元素选择器选中，然后对其样式进行处理！！！

![列表样式3](../../assets/images/WEBRESOURCE9b2d56c04497c9cecdcfeba2e5523f8f截图.png)

## 54. 数组扁平化方法

数组扁平化？ 就不用.map再push了

Array.prototype.flat( )

![数组扁平化](../../assets/images/WEBRESOURCE8622759616e00ae72ffb96a4a6fc77a3截图.png)

## 55. npm install 报错处理

### 1）、权限问题

![npm 报错1](../../assets/images/WEBRESOURCEd91ed4cfafb62a4039a88e0f8d89cc3f截图.png)

### 2）、网络问题

![npm 报错2](../../assets/images/WEBRESOURCE9984a60eff7db0ba530be2504cd8eede截图.png)

### 3）、依赖冲突

![npm 报错3](../../assets/images/WEBRESOURCE6e786f02bc5576f87e6f670b4024fac2截图.png)

yarn add / cnpm install / npm install 各种切换 少的包一个一个装

yarn install 装全部 / yarn add 装单独

添加（升级/降级）依赖 yarn add xxx@latest（最新版本） / yarn add vue-router@3.2.0 （降低/指定版本） / yarn (global) upgrade xxx （ (全局)升级 xxx ）

移除（全局）依赖 yarn (global) remove xxx

## 56. 组件通信注意事项

子传父再传子， 要用 watch 不能直接在 mounted 里打印

## 57. GET 传参处理

get 传参 （ post 换 get ）

没 JSON.stringfy() 之前

![GET 传参1](../../assets/images/WEBRESOURCEe9af1eb384e70232d461650d3c4ec4eb截图.png)

![GET 传参2](../../assets/images/WEBRESOURCEf975be7edd91961021ee0f966070823b截图.png)

不符合格式：

![不符合格式](../../assets/images/WEBRESOURCE00edf3af69635025abcd1adcf64810c5截图.png)

JSON.stringfy() 之后：

![JSON.stringify 后1](../../assets/images/WEBRESOURCE28a743455c17ec99aa51cffbf6e91dc8截图.png)

![JSON.stringify 后2](../../assets/images/WEBRESOURCEb7d543e92d2259835d5657f8cf5a2b33截图.png)

符合格式：

![符合格式](../../assets/images/WEBRESOURCE0fe69a9d7c4cbe33b34a659209221731截图.png)

或者可以这么写 （不用JSON.stringify的话）

![不用JSON.stringify](../../assets/images/WEBRESOURCE35cdbbbc66f3ed6cc866a1a1d34a82af截图.png)

同样可以请求成功 :

![请求成功](../../assets/images/WEBRESOURCEa287c02d81e44250ebbf7ca1760ef4be截图.png)

## 58. 改变对象的key-value

改变对象的key - value（往对象添加字段）可以先转数组再使用 reduce

将下面该对象改编成 {
date': '2021-09-12,
menuList: {a: '你好啊'}
}

```javascript
let o = { '2021-09-12': { a: '你好啊' } }
```

### (1)、先转数组再拍平

![对象转换1](../../assets/images/WEBRESOURCEbcb158797bad6691797218b98444422f截图.png)

### （2）、使用 reduce 进行对象格式转换

![对象转换2](../../assets/images/WEBRESOURCEe83ab6791335a6681e3111cd4277009b截图.png)

## 59. 数据格式转换

![数据格式转换1](../../assets/images/WEBRESOURCE2058e9c1d49309758ce22ba120d0ea7d截图.png)

![数据格式转换2](../../assets/images/WEBRESOURCE232a63a43cef4b3b90d2065ab11bc0cf截图.png)

![数据格式转换3](../../assets/images/WEBRESOURCEe1e143af2b7f82cc714bbc53706ed480截图.png)

## 60. v-for 循环数字

v-for in 数字

```html
<div v-for="i in 5" :key="(i + 9).toString(36) + i"></div>
```

表示 i 为不为0的正整数开始 取值（1、2、3、4、5）共循环出 5 个值

![v-for 数字1](../../assets/images/WEBRESOURCEe10517ff4784cb5c1e83357c3c6c5c07截图.png)

![v-for 数字2](../../assets/images/WEBRESOURCEf694d049a0d135ba5aaeb223a5843999截图.png)

![v-for 数字3](../../assets/images/WEBRESOURCE65fea23288aa2886b761154594d38f7b截图.png)

![v-for 数字4](../../assets/images/WEBRESOURCEe4eac7b6e2e161d3d57c3f231cc1e956截图.png)

## 61. 管理后台vue + ts 子组件绑定 v-model 值

![v-model 绑定1](../../assets/images/WEBRESOURCE35d8c22c8b291735cd8ab3e4e53d5fb8截图.png)

![v-model 绑定2](../../assets/images/WEBRESOURCE8861c428cbad45ee9b8a671323c544a1截图.png)

![v-model 绑定3](../../assets/images/WEBRESOURCEa732f2beb7c365a98970c3418d9af960截图.png)

## 62. 对象数组排序

![对象数组排序1](../../assets/images/WEBRESOURCE3d90d6af59c71d56e8d8fed61aeaeeb6截图.png)

![对象数组排序2](../../assets/images/WEBRESOURCE8c5b03990ed10250655dd81c47edc371截图.png)

## 63. v-for undefined 问题

v-for undefined 会有问题，在请求接口拿到数据做处理的时候记得给默认值 [ ]

![v-for undefined 1](../../assets/images/WEBRESOURCEa8e6c9483f497de3453c966d231d689e截图.png)

![v-for undefined 2](../../assets/images/WEBRESOURCE63b9880d5055bd288858c86349055bab截图.png)

不然会报错 In order to be iterable, non-array objects must have a [Symbol.iterator]() method报错

## 64. git commit 规范

### 基本格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 1. Type（提交类型）

| 类型     | 描述                                  | 示例                              |
| -------- | ------------------------------------- | --------------------------------- |
| feat     | 新功能（feature）                     | `feat: 添加用户登录功能`          |
| fix      | 修复 bug                              | `fix: 修复登录页面验证码错误`     |
| docs     | 文档修改                              | `docs: 更新 README 安装说明`      |
| style    | 代码格式修改（不影响代码运行的变动）  | `style: 格式化代码缩进`           |
| refactor | 重构（既不是新增功能，也不是修复bug） | `refactor: 重构用户模块代码结构`  |
| perf     | 性能优化                              | `perf: 优化首页加载速度`          |
| test     | 增加测试                              | `test: 添加用户注册单元测试`      |
| chore    | 构建过程或辅助工具的变动              | `chore: 更新 webpack 配置`        |
| revert   | 回退                                  | `revert: 回退 feat: 添加支付功能` |
| build    | 构建系统或外部依赖项的更改            | `build: 升级 vue 到 3.0`          |
| ci       | 对 CI 配置文件和脚本的更改            | `ci: 修改 GitHub Actions 配置`    |

### 2. Scope（影响范围）- 可选

用于说明 commit 影响的范围，比如：

- `feat(user): 添加用户头像上传功能`
- `fix(payment): 修复支付回调异常`
- `docs(api): 更新接口文档`

### 3. Subject（简短描述）

- 以动词开头，使用第一人称现在时
- 第一个字母小写
- 结尾不加句号（.）
- 限制在50个字符以内

### 4. Body（详细描述）- 可选

- 详细描述本次 commit 的内容
- 说明代码变动的动机以及与以前行为的对比

### 5. Footer（脚注）- 可选

用于关闭 Issue 或者关联 Issue：

```
Closes #123
Fixes #456
Refs #789
```

### 实际示例

#### 简单提交

```bash
git commit -m "feat: 添加用户登录功能"
git commit -m "fix: 修复购物车数量计算错误"
git commit -m "docs: 更新项目安装文档"
```

#### 详细提交

```bash
git commit -m "feat(user): 添加用户头像上传功能

- 支持 jpg、png、gif 格式
- 文件大小限制 2MB
- 自动压缩和裁剪
- 添加上传进度条

Closes #123"
```

#### 多行提交（使用编辑器）

```
feat(payment): 集成支付宝支付功能

添加支付宝 SDK 集成：
- 实现支付宝网页支付
- 添加支付状态回调处理
- 增加支付失败重试机制
- 完善支付日志记录

测试覆盖：
- 单元测试覆盖率 95%
- 集成测试通过
- 压力测试 1000 并发无异常

Breaking Changes:
- 移除旧的支付接口 `/api/old-pay`
- 更新支付状态字段名称

Closes #456
Refs #789
```

### 常用命令技巧

#### 1. 修改最后一次提交

```bash
# 修改提交信息
git commit --amend -m "新的提交信息"

# 添加文件到上次提交
git add .
git commit --amend --no-edit
```

#### 2. 查看提交历史

```bash
# 查看简洁的提交历史
git log --oneline

# 查看带图形的分支历史
git log --graph --oneline

# 按作者筛选
git log --author="用户名"

# 按时间筛选
git log --since="2023-01-01" --until="2023-12-31"
```

#### 3. 生成 CHANGELOG

```bash
# 查看两个版本之间的提交
git log v1.0.0..v2.0.0 --pretty=format:"- %s"

# 按类型分组显示
git log --pretty=format:"- %s" | grep "^- feat"
git log --pretty=format:"- %s" | grep "^- fix"
```

### 团队规范建议

1. **强制使用 commit 规范**：配置 git hooks 或 CI 检查
2. **提交频率**：小步快跑，频繁提交
3. **原子性**：每次提交只做一件事
4. **可回退性**：确保每次提交都是可工作的状态
5. **关联 Issue**：重要提交要关联对应的 Issue

### 工具推荐

- **Commitizen**：交互式生成规范的 commit 信息
- **commitlint**：检查 commit 信息是否符合规范
- **husky**：Git hooks 工具，在提交前检查代码质量

## 65. vw/vh 与 100% 的区别

### （1）、 vw/vh 是 相对于 视口 宽度/高度

（只与可视化窗口的宽高有关、与父级元素无关）

**100vh** 在 移动端 出现的问题 （移动端地址栏有时可见，有时隐藏。导致视口大小因此而变化）

![100vh 问题](../../assets/images/WEBRESOURCE8dc1e23a903fbd2774f52755acc3c563截图.png)

解决： 使用 window.innerHeight 将高度正确设置为窗口的可见部分 。显示内容高度不受地址栏的影响

### （2）、100% 是 相对于 最近一级的父元素的宽高

## 66. 高度自适应问题

高度自适应引起的问题： 页面首次加载的时候会窄（缩一下）？

CDN 有缓存，图片没法及时更新

![高度自适应](../../assets/images/WEBRESOURCE2d843fa8440ed674bcb6ddfba2ceed11截图.png)

## 67. el-form 回车自动提交问题

el-form里面如果有且只有一个el-form-item里面是el-input的话

你在input里面输入完毕 按回车默认会自动提交 导致整个页面刷新

解决： 在 el-form 中加 @submit.native.prevent

```html
<el-form :inline="true" :model="form" @submit.native.prevent> </el-form>
```

## 68. el-radio 单选可取消

el-radio 单选可取消 自己写个组件呗。

![单选可取消1](../../assets/images/WEBRESOURCEf8cbc9919ed521c36d2e8f5c89ae3f30截图.png)

![单选可取消2](../../assets/images/WEBRESOURCEff5044e6bda6caf11bd17ec6e72beb5e截图.png)

![单选可取消3](../../assets/images/WEBRESOURCE56c473540af9815ff17874ee5fe37dab截图.png)

![单选可取消4](../../assets/images/WEBRESOURCE2257448fdad14e0b1cf4a04824c22626截图.png)

使用：

```html
<radio-checkbox>
  <el-checkbox-button> // </el-checkbox-button>
</radio-checkbox>
```

![单选可取消5](../../assets/images/WEBRESOURCE897651911393036baa10d15375695008截图.png)

### 1)、单选

![单选1](../../assets/images/WEBRESOURCE8ed32a81a05aff6ed3af35f87ddbdeef截图.png)

![单选2](../../assets/images/WEBRESOURCE3fec1937043a613574f240f4a2d052b9截图.png)

### 2）、可取消选中

![可取消选中](../../assets/images/WEBRESOURCE97326a3bc2f50a48f8b234873c3dcd0e截图.png)

## 69. 环境域名配置

更改正式/测试环境域名（包括静态服务器域名和api域名，小程序发版还涉及更换appid），管理后台和小程序

### 1）、管理后台发布命令

一般都是 npm run build + gulp upload:dev （测试环境）/ npm run build + gulp upload:release （正式环境）

或者直接在package.json中配置了发布命令 ，那就 直接 npm run fabu 就行了

![发布命令](../../assets/images/WEBRESOURCEb2be2d3e6d4d628df8c3c2d1a955df64截图.png)

### 2)、小程序发布命令

#### 2.1）、发布h5

跟管理后台一样，npm run build + gulp upload:release (upload:static)

#### 2.2）、发布微信小程序（上传微信公众平台）

npm run dev:mp-weixin / npm run build:mp-weixin ，分别会生成两个静态文件，如下

![小程序发布1](../../assets/images/WEBRESOURCEcdd507f358e111106f594599f172f546截图.png)

一般发版的话会选择用 build:mp-weixin 这个来 run， 然后再在开发工具中点上传

![小程序发布2](../../assets/images/WEBRESOURCE8631c518101c3eedc11485ff0c5ea041截图.png)

然后就能看到体验版和正式版了：

![小程序版本1](../../assets/images/WEBRESOURCEab36159c2bacd8eef888deed74688e63截图.png)

![小程序版本2](../../assets/images/WEBRESOURCEc70075942058748d8ff8b6579bad1401截图.png)

![小程序版本3](../../assets/images/WEBRESOURCE1007906bc4a55034ea35b413cfa61e8c截图.png)

![小程序版本4](../../assets/images/WEBRESOURCE22e7d260c9904f0bbf1bdb56097fd06b截图.png)

小程序改了api域名的话，在开发者工具中运行，相对应的appid也要对应的上，要改回去

### 环境配置对应关系

**（1）、sadaiscloud环境**：

- VUE_APP_BASE_API = 'https://api-canteen.sadaiscloud.com'
- WX_APPID: 'wxb31658291f32d474', // 微信APPID

**（2）、ipon-group环境**：

- VUE_APP_BASE_API = 'https://api-canteen.ipon-group.com'
- WX_APPID: 'wx6d830d0c4b543083', // 微信APPID

![环境配置1](../../assets/images/WEBRESOURCEb2f14fa24f9337efc184b21958a2ec20截图.png)

![环境配置2](../../assets/images/WEBRESOURCE155b08e816dd81750e94347fd1d52040截图.png)

### 使用 HBuilder 打包 公众号 H5 步骤

![HBuilder 打包](../../assets/images/WEBRESOURCE8fda639a5389d05ec86d369f529f7ca6截图.png)

## 70. 数组方法性能对比

### forEach vs for 循环性能

在大数据量处理时，传统的 for 循环性能通常比 forEach 更好，因为 forEach 需要调用回调函数。

```javascript
// 性能较好
for (let i = 0; i < arr.length; i++) {
  // 处理 arr[i]
}

// 性能稍差，但代码更简洁
arr.forEach((item) => {
  // 处理 item
})
```

### map vs forEach 使用场景

- **map**: 需要转换数组元素并返回新数组
- **forEach**: 只需要遍历数组，不需要返回值

```javascript
// 使用 map 转换数据
const doubled = numbers.map(n => n * 2)

// 使用 forEach 执行副作用
numbers.forEach(n => console.log(n))
```

## 71. 异步处理最佳实践

### Promise.all vs Promise.allSettled

```javascript
// Promise.all - 任何一个失败就全部失败
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    // 所有都成功
  })
  .catch((error) => {
    // 任何一个失败
  })

// Promise.allSettled - 等待所有完成，不管成功失败
Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        // 成功的处理
      }
      else {
        // 失败的处理
      }
    })
  })
```

### async/await 错误处理

```javascript
// 推荐的错误处理方式
async function fetchData() {
  try {
    const response = await fetch('/api/data')
    const data = await response.json()
    return data
  }
  catch (error) {
    console.error('获取数据失败:', error)
    throw error // 重新抛出，让调用者处理
  }
}
```

## 72. Vue 响应式原理深入

### Vue 2.x 响应式限制

```javascript
// 这些操作不会触发响应式更新
vm.items[indexOfItem] = newValue // 数组索引赋值
vm.items.length = newLength // 修改数组长度

// 解决方案
Vue.set(vm.items, indexOfItem, newValue)
vm.$set(vm.items, indexOfItem, newValue)
vm.items.splice(indexOfItem, 1, newValue)
```

### 对象属性添加

```javascript
// 不会触发响应式
this.obj.newProperty = 'value'

// 正确方式
this.$set(this.obj, 'newProperty', 'value')
// 或者
this.obj = { ...this.obj, newProperty: 'value' }
```

## 73. CSS 性能优化技巧

### 避免昂贵的CSS选择器

```css
/* 性能差 - 避免使用 */
* {
}
[hidden='true'] {
}
.container > .item > .content > .text {
}

/* 性能好 */
.text {
}
.item-text {
}
```

### 使用 transform 和 opacity 进行动画

```css
/* 会触发重排重绘 - 性能差 */
.element {
  transition:
    left 0.3s,
    top 0.3s;
}

/* 只触发合成 - 性能好 */
.element {
  transition:
    transform 0.3s,
    opacity 0.3s;
}
```

## 74. 内存泄漏预防

### 事件监听器清理

```javascript
// 组件销毁时清理事件监听器
beforeDestroy() {
  window.removeEventListener('resize', this.handleResize)
  document.removeEventListener('click', this.handleClick)
}
```

### 定时器清理

```javascript
data() {
  return {
    timer: null
  }
},
mounted() {
  this.timer = setInterval(() => {
    // 定时任务
  }, 1000)
},
beforeDestroy() {
  if (this.timer) {
    clearInterval(this.timer)
    this.timer = null
  }
}
```

## 75. 前端安全最佳实践

### XSS 防护

```javascript
// 危险 - 直接插入HTML
element.innerHTML = userInput

// 安全 - 使用 textContent
element.textContent = userInput

// Vue 中使用 v-text 而不是 v-html
// <div v-text="userInput"></div>
```

### CSRF 防护

```javascript
// 在请求头中添加 CSRF token
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
```

## 76. 可选链操作符

**可选链** ?. \*\*(ES2020)代替 && 进行判空处理

使用规则：**?.** 只检查左边部分是否为 null/undefined，如果不是则继续运算

不会检查右边

![可选链1](../../assets/images/WEBRESOURCEc3b9e71884161e4f157c781a693a7cbf截图.png)

![可选链2](../../assets/images/WEBRESOURCEf7c83eaff0ddcafd8154316989b12e01截图.png)

[javascript info 可选链](https://zh.javascript.info/optional-chaining#bu-cun-zai-de-shu-xing-de-wen-ti)

```javascript
// 传统写法
if (user && user.address && user.address.street) {
  console.log(user.address.street)
}

// 可选链写法
console.log(user?.address?.street)

// 方法调用
user.method?.()

// 数组访问
user.hobbies?.[0]
```

## 77. Vue v-model 修饰符

使用 Vue v-model number 修饰符可以实现让输入框输入的内容，自动转换为 number 类型。

```html
<!-- 自动转换为数字类型 -->
<input v-model.number="age" type="number" />

<!-- 去除首尾空格 -->
<input v-model.trim="message" />

<!-- 在 change 事件而非 input 事件触发时更新 -->
<input v-model.lazy="message" />
```

## 78. 数组 splice 方法详解

记一下数组的 splice 的用法： **返回被删除的元素数组**

### 1）、删除

```javascript
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)

// 运算后的 myFish: ["angel", "clown"]
// 被删除的元素: ["mandarin", "sturgeon"]
```

```javascript
let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1)

// 运算后的 myFish: ["angel", "clown", "drum", "sturgeon"]
// 被删除的元素: ["mandarin"]
```

### 2）、替换

```javascript
let myFish = ['angel', 'clown', 'drum', 'sturgeon']
let removed = myFish.splice(2, 1, 'trumpet')

// 运算后的 myFish: ["angel", "clown", "trumpet", "sturgeon"]
// 被删除的元素: ["drum"]
```

### 3）、插入

```javascript
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')

// 运算后的 myFish: ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// 被删除的元素: [], 没有元素被删除
```

## 79. 对象比较方法

### （1）判断对象是否为空

```javascript
// 方法1：Object.keys
Object.keys(obj).length === 0

// 方法2：JSON.stringify
JSON.stringify(obj) === '{}'

// 方法3：for...in 循环
function isEmpty(obj) {
  for (let key in obj) {
    return false
  }
  return true
}
```

### （2）判断对象是否相等

最好使用工具库，比较可靠和边界情况考虑比较完全

简单比较 ： 引用数据类型指向不同的内存地址，不可直接 == 或者 ===

```javascript
const a = { name: 'Hbin' }
const b = { name: 'Hbin' }

// （1），a == b /  a === b     ===>    结果都为 false
// （2），const c = a          c === a  true               c === b  false
```

### 浅比较实现

只做第一层数据的查询，跳过数组、对象、方法

利用es6的every函数做最优处理

```javascript
// 浅比较
function isObjShallowEqual(obj1, obj2) {
  const keys1 = Object.getOwnPropertyNames(obj1)
  const keys2 = Object.getOwnPropertyNames(obj2)
  if (keys1.length !== keys2.length) {
    return false
  }
  const flag = keys1.every((key) => {
    const type = typeof obj1[key]
    // do not check function, array, object
    if (['function', 'array', 'object'].includes(type)) {
      return type === typeof obj2[key]
    }
    // if unequal, return true
    if (obj1[key] !== obj2[key]) {
      return false
    }
    return true
  })
  // if found unequal, then return false, which means unequal
  return flag
}
```

## 80. 数组操作技巧

### （1）判断数组是否为空

```javascript
// 方法1：length 属性
array.length === 0

// 方法2：find 方法
let found = array.find(i => i)
if (!found)
  console.log('数组为空!')

// 方法3：findIndex 方法
let foundIndex = array.findIndex((i, idx) => idx > -1)
if (foundIndex === -1)
  console.log('数组为空!')
```

### （2）数组去重 12种方法

```javascript
// 方法1：Set + Array.from
Array.from(new Set(arr))

// 方法2：Set + 展开运算符
[...new Set(arr)]

// 方法3：filter + indexOf
arr.filter((item, index) => arr.indexOf(item) === index)

// 方法4：reduce
arr.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current)
  }
  return acc
}, [])
```

## 81. Array.prototype.sort() 用法详解

### 1）、基础排序

```javascript
// 数字 => 从小到大排序
// 字符串数字 => 按照unicode顺序排（字符大到小排序）
arr.sort()
```

### 2）、自定义排序函数

```javascript
// 从小到大
arr.sort((a, b) => a > b ? -1 : 1)
// -1: a在b前（从小到大排）  1: b在a前（从大到小排）

// 从大到小
arr.sort((a, b) => a > b ? 1 : -1)

// 或者：
arr.sort((a, b) => (a.auditStatus - b.auditStatus)) // 正序 从小到大排
arr.sort((a, b) => (b.auditStatus - a.auditStatus)) // 倒序 从大到小排
```

### 3）、时间排序示例

```javascript
let a = [
  { date: '2021-10-15', visitor: 'zs' },
  { date: '2021-08-25', visitor: 'ls' },
  { date: '2021-12-24', visitor: 'ww' }
]

// 按照时间降序排（利用dayjs工具库）
a.sort((a, b) => (this.$dayjs(a.date).isBefore(this.$dayjs(b.date)) ? -1 : 1))

// dayjs 获取时间戳
+ dayjs() // 或者 dayjs().valueOf()
```

![dayjs 时间戳](../../assets/images/WEBRESOURCE511cb0e0474b4d4a83243072b2341ce1截图.png)

## 82. Vue DOM 操作注意事项

vue 中 操作 DOM . **须在页面数据加载完成后对DOM进行操作 **

**！！！！！！！！！！！！ 须在 \*\***this.$nextTick()\***\* 回调函数中执行**

如何在页面渲染后操作dom, 而且只执行一次 ？

在接口请求成功的回调中使用！

可以在mounted中$nextTick, 也可以在计算函数中$nextTick.

![DOM 操作](../../assets/images/WEBRESOURCEef08122ba902071f60e6ed441ac07f09截图.png)

```javascript
// 正确的DOM操作方式
mounted() {
  this.$nextTick(() => {
    // DOM 已经更新
    this.$refs.myElement.focus()
  })
}

// 在数据更新后操作DOM
updateData() {
  this.message = 'new message'
  this.$nextTick(() => {
    // DOM 已经根据新数据更新
    console.log(this.$refs.messageElement.textContent)
  })
}
```

## 83. Vue 性能优化建议

如果是 html 中 不会用到的属性， 可以不放到 data 或者 computed 中， 直接在 created 中 this.xxx 就可以了， 性能考虑？ （字符串 --> 对象 ）

data 监听 每个 {{ }} 对应一个watcher 监听器

一个组件 =》 一个 watcher

```javascript
// 不需要响应式的数据
created() {
  // 这些数据不会被 Vue 监听，性能更好
  this.staticData = {
    config: {},
    constants: []
  }
}
```

## 84. 移动端滚动容器选择

移动端（小程序/ APP）滚动容器选择

![滚动容器1](../../assets/images/WEBRESOURCE5a0848c5f476df806d796b2f3add3de0截图.png)

![滚动容器2](../../assets/images/WEBRESOURCE610df04b8a4291268262e988c1d74b0e截图.png)

### （1）、纵向滚动 scroll-view (pi-scroll scroll-y)

![纵向滚动](../../assets/images/WEBRESOURCEbfcb89d6a74e1e6fa54aea83a2f198d3截图.png)

### （2）、 swiper + 纵向滚动 swiper (pi-scroll)

![swiper 滚动](../../assets/images/WEBRESOURCE81937debd3968214c4c7bd5abd2c9e76截图.png)

### （3）、 mescroll-uni + 纵向滚动

(pi-scroll-container + pi-scroll + mescroll-uni 上拉刷新/下拉加载)

![mescroll 滚动](../../assets/images/WEBRESOURCEa53957242e2d271e6391d997a9b220a4截图.png)

## 85. 浏览器缓存清除方法

js 清除浏览器缓存方法

### 1），用随机数

URL 参数后加上 "?ran=" + Math.random(); ?ran=Math.random()

### 2），用随机时间

在 URL 参数后加上 "?timestamp=" + new Date().getTime();

```javascript
// 示例
const url = `/api/data?timestamp=${new Date().getTime()}`
fetch(url)

// 或者
const randomUrl = `/api/data?ran=${Math.random()}`
fetch(randomUrl)
```

## 86. DOM 操作技巧

dom 获取 label for属性名对应的标签

![DOM 获取](../../assets/images/WEBRESOURCE19062f502f1c86d67dbf46d69635eab3截图.png)

```javascript
// 通过 for 属性获取对应的表单元素
const label = document.querySelector('label[for="username"]')
const input = document.getElementById(label.getAttribute('for'))
```

## 87. 性能优化策略

写代码不仅要考虑可读性， 还要考虑兼顾性能优化方面的问题 !!!! 减少重复代码的使用和出现

**性能优化 ：**

### 1、**懒加载**

在需要的时候加载，随载随用（路由、图片、滑动触发、虚拟列表）

![懒加载](../../assets/images/WEBRESOURCE990a044d040fdbc4107afa3dfe47b784截图.png)

异步组件、组件 import () => {} 动态引入、webpack splitChunk

```javascript
// 路由懒加载
const Home = () => import('./views/Home.vue')

// 组件懒加载
const LazyComponent = defineAsyncComponent(() => import('./LazyComponent.vue'))
```

### 2、**按需加载**

根据需要去加载资源（常用 UI 组件库）

```javascript
// Element UI 按需引入
import { Button, Select } from 'element-ui'
```

### 3、**不生成.map文件**

配置里productionSourceMap设置成为false，能差不多减少一半的体积。

```javascript
// vue.config.js
module.exports = {
  productionSourceMap: false
}
```

### 4、**通过cdn方式引入**

![CDN 引入](../../assets/images/WEBRESOURCEdffb8d2576f0c34a7535b4ff27b97f84截图.png)

### 5、**图片压缩**

利用一些网站对大体积图片进行压缩，例如：[tinypng](https://tinypng.com/)

## 88. 组件事件处理

pi-checkbox 的 :value + @input @change 都没有 .stop 阻止冒泡事件 ，得 包多 一层 view 标签 ，用 tap 事件来 代替

![事件处理1](../../assets/images/WEBRESOURCEf709a2cceb6b32b428a114fc8b83aa81截图.png)

![事件处理2](../../assets/images/WEBRESOURCEc523728c79c823f816327e4ef3441b95截图.png)

```html
<!-- 解决方案 -->
<view @tap.stop="handleTap">
  <pi-checkbox :value="checked" @input="handleInput"> </pi-checkbox>
</view>
```

## 89. 数据导出注意事项

导出不调接口 分页数据 / 按照查询条件筛选的数据 无法查询 只能拿当前页面数据

![数据导出1](../../assets/images/WEBRESOURCE10549c6629dd525578c019653d2dba54截图.png)

![数据导出2](../../assets/images/WEBRESOURCEbb8cb2d887f2eab120637da4ec7aff1c截图.png)

## 90. 父子组件 v-model 通信

父组件传个boolean控制 子组件dialog弹窗 是否显示 用 v-model !!!!!!

### 父组件：

![父组件 v-model](../../assets/images/WEBRESOURCEdbbc2f63aea64dc0d6f4e166529bc358截图.png)

### 子组件:

![子组件 v-model 1](../../assets/images/WEBRESOURCE448a40c68c1cce5a81ad4a93fc0286c5截图.png)

![子组件 v-model 2](../../assets/images/WEBRESOURCE233e066c605c6a41bb5d0f5e03c751fb截图.png)

常规的js - vue 是 定义在 model 上 的

```javascript
model: {
  prop: 'value',
  event: 'change'
}
```

![v-model 配置](../../assets/images/WEBRESOURCEabc6b43d3efc0cdae0752c6bf54b3c2c截图.png)

![v-model 示例](../../assets/images/WEBRESOURCEa463f7c18eae1ff0ffe3764051d4f7cb截图.png)

**注意** ：

小程序中没有 v-model ，所以只能在管理后台使用，小程序 还是使用 :visible="visible" 和 this.$emit('val', val) 来代替了 ！

## 91. Element UI 表单注意事项

### 踩坑：el-input 同时设置 type 和 maxlength

el-input 同时设置 type 和 maxlength ， maxlength 不生效 ， 需自己改成 oninput

![el-input 问题1](../../assets/images/WEBRESOURCE80e152a772367e81c424d75b7d6a21c9截图.png)

![el-input 问题2](../../assets/images/WEBRESOURCEdf28f672343b0cc3d71604bc2022f2ed截图.png)

### el-form-item 使用限制

el-form-item 不可以离开 el-form 单独使用 ！

```html
<!-- 错误用法 -->
<el-form-item label="用户名">
  <el-input v-model="username"></el-input>
</el-form-item>

<!-- 正确用法 -->
<el-form>
  <el-form-item label="用户名">
    <el-input v-model="username"></el-input>
  </el-form-item>
</el-form>
```

## 92. reduce 高级用法

reduce 用法 ： 慢慢积累 可以返回你想要的东西 （自己来定义要返回什么东西）

删除数组对象中的指定对象 reduce（该对象元素的prop字段是 'tag_bodyAge'的时候不添加到该数组中， 也就是删除该元素的意思了）

![reduce 删除](../../assets/images/WEBRESOURCEcd5bbf5433c99d1b7153f6085e6a77fd截图.png)

```javascript
// 使用 reduce 删除特定元素
const filteredArray = originalArray.reduce((acc, item) => {
  if (item.prop !== 'tag_bodyAge') {
    acc.push(item)
  }
  return acc
}, [])

// 使用 reduce 进行数据转换
const transformed = data.reduce((acc, item) => {
  acc[item.id] = item.name
  return acc
}, {})
```

## 93. 路由监听注意事项

@Watch($route) 只能在外面（全局使用），在单独的页面内监听不生效 （页面内当前路由不会变）

![路由监听1](../../assets/images/WEBRESOURCE5fa5de2bed0b53a27f65588b6b54086a截图.png)

![路由监听2](../../assets/images/WEBRESOURCE2cbfeab49ec5108eaf88bc38a80769f6截图.png)

![路由监听3](../../assets/images/WEBRESOURCE12ee2a5b27dc4590fa1bbfc39269792d截图.png)

```javascript
// 在组件内监听路由变化
watch: {
  '$route'(to, from) {
    // 响应路由变化
    console.log('路由变化:', to.path)
  }
}

// 或者使用 beforeRouteUpdate
beforeRouteUpdate(to, from, next) {
  // 在当前路由改变，但是该组件被复用时调用
  next()
}
```

## 94. 管理后台开发规范

管理后台 创建 和 保存 区别 ： 创建没传id， 保存需要传id （没 id 会新增一条 ------ 相当于创建了）

```javascript
// 创建操作
createItem(data) {
  return this.$http.post('/api/items', data)
}

// 更新操作
updateItem(id, data) {
  return this.$http.put(`/api/items/${id}`, data)
}

// 通用保存方法
saveItem(data) {
  if (data.id) {
    return this.updateItem(data.id, data)
  } else {
    return this.createItem(data)
  }
}
```

## 95. 异步代码顺序执行

顺序执行异步代码

![异步顺序执行](../../assets/images/WEBRESOURCEf102dedb2cca97b2b921335dffbc781c截图.png)

```javascript
// 使用 async/await 顺序执行
async function executeInOrder() {
  try {
    const result1 = await asyncFunction1()
    const result2 = await asyncFunction2(result1)
    const result3 = await asyncFunction3(result2)
    return result3
  }
  catch (error) {
    console.error('执行失败:', error)
  }
}

// 使用 for...of 循环顺序执行
async function processArray(items) {
  for (const item of items) {
    await processItem(item)
  }
}
```

## 96. 开发最佳实践

每个公司都有自己的规范，熟悉完公共模块有哪些，项目蓝湖设计图看下来大概确定哪些组件是大概率会封装的，去项目里面components 里面找，现成的组件拿来就用，避免重复造轮子，和自己写的不全；

涉及到vuex的数据管理的，要清楚流程，确定好修改不会影响到其他的地方时才进行更改（一般新增不会大影响，都是修改和删除就要很注意）;

可以尝试自己从0搭建后台系统的框架（初始化项目），但是要按照规范来，避免出现本来就是模板化的东西的bug

## 97. 文件上传组件

后台管理系统 upload 组件 包括很多的类型，现在是 uploadImage 和 uploadFile 图片归一种，其他的文件格式都归 uploadFile,传对应的参数进行不同格式的类型的显示

```javascript
// 文件类型配置
const fileTypes = {
  image: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  document: ['pdf', 'doc', 'docx', 'xls', 'xlsx'],
  video: ['mp4', 'avi', 'mov', 'wmv'],
  audio: ['mp3', 'wav', 'flac']
}

// 根据文件扩展名判断类型
function getFileType(filename) {
  const ext = filename.split('.').pop().toLowerCase()
  for (const [type, extensions] of Object.entries(fileTypes)) {
    if (extensions.includes(ext)) {
      return type
    }
  }
  return 'other'
}
```

## 98. 空值合并运算符

### @1、空值合并运算符 ??

只有 左边为 undefined 或 null 时，返回右边

```javascript
0 ?? 24 // 0
null ?? 'youngG' // 'youngG'
undefined ?? 'default' // 'default'
```

### @2、逻辑或 ||

是左边为假（ false / null / undefined / 0 / '' / NaN ）时，返回右边

```javascript
0 || 24 // 24
null || 'youngG' // 'youngG'
false || 'default' // 'default'
```

### @3、逻辑空赋值 ??=

当 左边为 undefined 或 null 时， 为右边赋值

```javascript
const a = { duration: 300 }
a.duration ??= 50 // 300 (不变)
a.speed ??= 600 // 600 (新赋值)
```

## 99. Vue .sync 语法糖

**vue 中的 .sync 语法** 相当于不用在子组件中 this.$emit 就可以直接修改 子组件的值了， 相当于一个自动更新父组件属性的监听器

直接在子组件中直接修改 @PropSync 的值， 会自动更新到父组件中

### 父组件：

![sync 父组件](../../assets/images/WEBRESOURCE559c5d3bef4613b86fcc7c4c49d9aee5截图.png)

### 子组件：

![sync 子组件](../../assets/images/WEBRESOURCEfbd2af6b21b83f54c7956efeecb3d996截图.png)

'show' 是在父组件定义的传过来的要这么写， syncedShow 是子组件接收到'show'这个值后重新命名的（相当于syncedShow = show 赋值操作）

![sync 说明1](../../assets/images/WEBRESOURCEdb9c58e88c677fa99ec866c95e5c711d截图.png)

![sync 说明2](../../assets/images/WEBRESOURCEc29ac22a1da1d3adc76c36cec7806896截图.png)

直接在子组件中直接修改 @PropSync 的值， 会自动更新到父组件中

相当于：

### 传统写法对比：

**父组件：**

![传统父组件](../../assets/images/WEBRESOURCE78404c223484a08ecd1be34be8b13ed3截图.png)

![传统父组件2](../../assets/images/WEBRESOURCE98b44993fefef26872d5009da67dda85截图.png)

**子组件：**

![传统子组件](../../assets/images/WEBRESOURCE2caef2c628262a6b77990fed8cacdd6d截图.png)

节省绕来绕去的代码 。。。

**@Prop传过来的值 不可直接修改**

**@PropSync 可以**

**@Model 不可以直接修改**

**@ModelSync 同理 可以**

![ModelSync 说明](../../assets/images/WEBRESOURCE0f90f16671eadbcc82701d8d4d989e9c截图.png)

'selectedNodes' 是在父组件定义的传过来的要这么写， syncedSelectedNodes 是子组件接收到'show'这个值后重新命名的（相当于syncedSelectedNodes = show 赋值操作）, 'change' 是 @Model装饰器 (绑定父组件的 v-model 值) 在子组件的写法，相当于值发生改变同步接收的意思

### 一、@Model装饰器

**父组件：**

![Model 父组件](../../assets/images/WEBRESOURCE5e40a3718ca8854d32414fde70ab14ed截图.png)

**子组件：**

1、@Model 装饰器

![Model 装饰器](../../assets/images/WEBRESOURCE538abb0a7f0aff6c96ce3fe094fec420截图.png)

2、监听值的变化：

![Model 监听](../../assets/images/WEBRESOURCE99413a427f03eef262ae7da32974d249截图.png)

3、最后还需要 $emit

![Model emit](../../assets/images/WEBRESOURCE9f358ec99405ba8be64b0c6f29584d26截图.png)

### 二、@ModelSync 装饰器 （父组件 v-model + 子组件 ModelSync）

![ModelSync 装饰器](../../assets/images/WEBRESOURCEd9a77f1360ae181b06df1db29a9d44c8截图.png)

**父组件：**

![ModelSync 父组件](../../assets/images/WEBRESOURCE3be9d0018f51b7ce4200d1c5ff6a2573截图.png)

**子组件：**

直接modelSync， 少去了 $emit 这一个步骤 （直接这样就行了）

![ModelSync 子组件](../../assets/images/WEBRESOURCE32f431f79fbe6747cc245ccf005a1643截图.png)

## 100. 随机字符串生成

随机获取10位无序字符串 （可做 id 值 使用） guid

```javascript
Math.random()
  .toString(36)
  .substring(2, 12)
```

![随机字符串1](../../assets/images/WEBRESOURCEf6c286cecb1eb00670c985476fef8f1d截图.png)

![随机字符串2](../../assets/images/WEBRESOURCE1ed0efa1e10fe1b1a3b1a7aad797783b截图.png)

**原理解释：**

- Math.random() 返回 0-1（大于0 小于1） 的随机小数，一般是小数点后16位（偶尔17）
- Number.prototype.toString() 参数 radix 代表进制数，没写默认是0，参数 2-36 可选， 36进制 则是 数字 0-9（10个） 和 字母 a-z（26个）组成 同理 32进制 则是 0-9 + a-v 共 32个组成
- String.prototype.substring() 下标为2（从0开始算）起，取到下标为11 ，共 10个数

```javascript
// 更完善的 ID 生成函数
function generateId(length = 10) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length)
}

// UUID 生成
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
```

## 101. 数据模型转换

数据模型转换

最终想要的格式 ： `[ { id1: '', text: '' }, { id2: '', text: '' }, { id3: '', text: '' } ]`

已知：

```javascript
let knowList = [
  { package: {}, partitionDto: { name: 'aaa', id: '111a' } },
  { package: {} },
  { package: {}, partitionDto: {} },
  { package: {}, partitionDto: { name: 'bbb', id: '222b' } },
  { package: {}, partitionDto: { name: 'ccc', id: '333c' } }
]
```

**求解如何得到想要的结果？**

过程： 先 过滤掉没有 partitionDto 的字段，然后自己组想要的格式，拿id作为唯一值

```javascript
let ids = ['id1', 'id2', 'id3']
// =====>
// [ { 'id1': { name: 111 } }, { 'id2': { name: 222 } }, { 'id3': { name: 333 } } ]

// 先构造个临时对象变量
let tempObj = { }

knowList.forEach((i) => {
  tempObj[i.partitionDto.id] = i.partitionDto
})

Object.keys(ids).map((i) => {
  return {
    id: i,
    text: tempObj[i].name
  }
})
```

自己 转换下数据格式 (构造出想要的格式) 就好了 =====> 要什么，就定义什么。

## 102. 事件冒泡处理

el-popover el-tooltip el-popconfirm 防止父元素冒泡： 直接在外层嵌套个 div， 然后 直接加 @click.stop

![事件冒泡1](../../assets/images/WEBRESOURCE65c83b3e9d4818ae63a3785b519c46eb截图.png)

![事件冒泡2](../../assets/images/WEBRESOURCEe2818a8f3c0a8e9f70e4372f3a7415a8截图.png)

```html
<!-- 解决方案 -->
<div @click.stop>
  <el-popover>
    <template #reference>
      <el-button>点击</el-button>
    </template>
    <p>内容</p>
  </el-popover>
</div>
```

## 103. 函数参数作用域

**参数作用域**： 当函数的参数有默认值时，会形成一个新的作用域，这个作用域用于保存参数的值。

参数就是为函数服务的，首先会找到参数的值，没有参数再回去找函数中有没有声明

![参数作用域](../../assets/images/WEBRESOURCE02ffcbd5ae537b5bb18c7741eb6b8c1e截图.png)

```javascript
// 示例1
function test(x = y, y = 2) {
  console.log(x, y)
}
test() // ReferenceError: Cannot access 'y' before initialization

// 示例2
let x = 1
function test(x = x) {
  console.log(x)
}
test() // ReferenceError: Cannot access 'x' before initialization

// 正确示例
let x = 1
function test(x = 2) {
  console.log(x)
}
test() // 2
```

## 104. 懒加载概念

懒加载 （动态加载） ： 点选的时候才调用接口加载数据，而不是 用 循环调用接口（递归 / 套娃）的方式 去 一次性调多次接口把数据一次性显示出来 ！！ （不然的话都可以直接让后端一次性把所有的数据都返回给你好了）

每点一次的时候才会 调用一次接口 获取（该层级level）的信息， 不会 一次性给你返回 ！！！！ （点击的时候才发起的请求 ！）

如 Tree 树形组件 Cascader 级联选择组件 ... 都有动态加载的模式 （传 node 和 data， 不用 按照默认模式的数据格式去展示 参数有 lazyLoad (node, resolve) ）...

**递归的比喻：**

目前我找到的对递归最恰当的比喻，就是查词典。

我们使用的词典，本身就是递归，为了解释一个词，需要使用更多的词。

当你查一个词，发现这个词的解释中某个词仍然不懂，于是你开始查这第二个词，可惜，第二个词里仍然有不懂的词，于是查第三个词，这样查下去，直到有一个词的解释是你完全能看懂的，那么递归走到了尽头，

然后你开始后退，逐个明白之前查过的每一个词，最终，你明白了最开始那个词的意思。

![递归比喻1](../../assets/images/WEBRESOURCE0c05276f2181f51e9535bf6d5475c437截图.png)

![递归比喻2](../../assets/images/WEBRESOURCE68658daaa59f5e4fc373809c2b2af698截图.png)

## 105. 字符串方法对比

关于 slice splice substr substring split replace concat

### spilce:

![splice 方法](../../assets/images/WEBRESOURCEfc9feeb103e09753117607918075f456截图.png)

### slice:

![slice 方法](../../assets/images/WEBRESOURCE935dce940dc2329cdd29daa455a5d895截图.png)

### 详细对比：

- **slice** 下标为0开始， 到下标为几， 最后一个不取

  ```javascript
  let str = 'abcdefghij'
  str.slice(1, 4) // 从下标1开始，取3个     "bcd"
  ```

- **substr** （即将废弃的属性） begin 起始位置 也是从 0 开始 算起 第一个位置为0，取几个

  ```javascript
  let str = 'abcdefghij'
  str.substr(1, 4) // 从位置1开始，取4个    "bcde"
  ```

- **substring** start开始下标 也是从 0 开始 算起 第一个下标为0， 到下标为几的前一个
  ```javascript
  let str = 'abcdefghij'
  str.substring(1, 4) // 从下标1开始，到下标3（下标4的前一个） "bcd"
  ```

![字符串方法1](../../assets/images/WEBRESOURCE7436f36a02caec85563c50a637f37df9截图.png)

![字符串方法2](../../assets/images/WEBRESOURCE5d0b328e9fe5b1ba2eeb7924dcb43760截图.png)

![字符串方法3](../../assets/images/WEBRESOURCE1d59ca493f28a0148ed2670bdf8f9f7b截图.png)

## 106. 组件生命周期问题

父组件请求接口返回数据后，赋值给data中的属性然后传给子组件，子组件 刷新页面，在 created 生命周期中打印就会获取不到，而在template模板中却可以获取的到！

与 父子组件生命周期的触发顺序 有关 又是要 watch ？

```javascript
// 解决方案
// 子组件中
watch: {
  propData: {
    handler(newVal) {
      if (newVal) {
        // 处理数据
        this.handleData(newVal)
      }
    },
    immediate: true
  }
}
```

## 107. Map 映射思维

既有 key ， 又有 value ， 只要有出现map/对象/{} 的地方，都要有敏感的反应用 map去映射 ！

```javascript
data: [{ name: '', label: { key: 'Back', val: '后退' } }]
```

`{ key: 'Back', val: '后退'  }` 页面只要 val, 而接口只要 key， 这部很明显 直接定义一个map 完事了吗

```javascript
KEY_VAL_MAP() {
   return {
     Back: '后退'
  }
}
```

页面取的时候直接 `KEY_VAL_MAP[xxx]` ， xxx 就是接口对应的变量了 !!!

## 108. 状态管理

状态值 boolean - true - false

当 **事件/内容** 有冲突/需要按条件显示 时，当找不到已知的存在的判断对象的时候，记得想起来 自己定义一个 状态值变量 进行判断 ！！！！

```javascript
// 示例
data() {
  return {
    isLoading: false,
    isEditing: false,
    showModal: false
  }
}
```

## 109. Array.prototype.fill()

![Array fill](../../assets/images/WEBRESOURCE18d0327b323b612243175972c8339975截图.png)

```javascript
// 基本用法
Array.from({ length: 5 }).fill(0) // [0, 0, 0, 0, 0]

// 填充对象（注意引用问题）
Array.from({ length: 3 }).fill({}) // 所有元素指向同一个对象
Array.from({ length: 3 }).fill().map(() => ({})) // 每个元素都是新对象

// 指定范围填充
  [1, 2, 3, 4, 5].fill(0, 2, 4) // [1, 2, 0, 0, 5]
```

## 110. Vue.$set 使用场景

Vue.$set （ this.$set ） 的 使用场景 ？？？

### （1）、在 data 中 没有定义的初始化的字段

在 data 中 没有定义的初始化的字段，然后后面在 template 中直接用到 xxx.该字段 / 页面初始化 对该字段操作 / 页面保存对该字段操作 的时候，

响应式系统监测不到，这时候就要用 `this.$set(obj(object), targetProperty(string), value)` 将该字段加入响应式系统中。

### （2）、接口重新赋值导致字段丢失

在 data 中 定义了该字段， 但是初始化的时候将包含该字段的对象在请求接口后做了重新赋值，但是接口又没有该字段， 等于重新操作后原先包含该字段的对象现在又没有了该字段，

所以这个时候又要重新赋值给该字段对应的值， 所以这时候就要用 `this.$set(obj(object), targetProperty(string), value)` 将该字段加入响应式系统中。

```javascript
// 示例
// 动态添加属性
this.$set(this.user, 'age', 25)

// 数组索引赋值
this.$set(this.list, 0, newItem)
```

## 111. toLocaleString() 方法

toLocaleString() 返回特定语言环境下的字符串格式

### 保留千分符位数：

![toLocaleString 1](../../assets/images/WEBRESOURCE0e54ff3197675f753933b3292eb58fca截图.png)

![toLocaleString 2](../../assets/images/WEBRESOURCE7486ee16aa404f0e3b3c6be9b02eb968截图.png)

### new Date()使用 toLocaleString()

![Date toLocaleString](../../assets/images/WEBRESOURCE523ba333fdbd4153f3aa38e7b8be8c80截图.png)

直接 toString()

![Date toString](../../assets/images/WEBRESOURCEdb4b952621aa866d72db15eb5f42f563截图.png)

```javascript
// 数字格式化
(123456.789).toLocaleString() // "123,456.789"
(123456.789).toLocaleString('zh-CN') // "123,456.789"

// 日期格式化
new Date().toLocaleString() // "2021/8/15 下午2:30:45"
new Date().toLocaleString('en-US') // "8/15/2021, 2:30:45 PM"

// 货币格式化
(123456.789).toLocaleString('zh-CN', {
  style: 'currency',
  currency: 'CNY'
}) // "¥123,456.79"
```

## 112. 深拷贝的缺点和解决方案

深拷贝 JSON.stringify() 的 缺点

### （1）、JSON.stringify 的 三个参数 （**数据，过滤，缩进**）

（**object, Array | function, number | string**）

第二个参数，过滤用 ：

![JSON.stringify 过滤](../../assets/images/WEBRESOURCE3a6b6d8a7215a99ba987a709a9b13d97截图.png)

是 function 时， 接收两个参数 `function (key, value) { }`

第三个参数，用于缩进（默认是4）。**字符串会以该字符向前填充，数值则按照tab键个数填充**

![JSON.stringify 缩进](../../assets/images/WEBRESOURCE220677337213192fbbdda659341e3153截图.png)

### （2）、JSON.parse（text, [reviver]）

第二个参数可以是函数，修改原数据。

![JSON.parse](../../assets/images/WEBRESOURCE2a80ebc316921818f33a162e9c932e12截图.png)

### JSON.parse + JSON.stringify 实现深拷贝

```javascript
const origin = { name: 'MDN' }
const deepCopy = JSON.parse(JSON.stringify(origin))
deepCopy //  { name: 'MDN' }
```

![深拷贝问题1](../../assets/images/WEBRESOURCE476e9763470674ed855a34e167c87065截图.png)

![深拷贝问题2](../../assets/images/WEBRESOURCE896a5dd91ad44f777bfbe4c645e769d2截图.png)

![深拷贝问题3](../../assets/images/WEBRESOURCEcc536954a4509b480695ff2ae8e9d025截图.png)

![深拷贝问题4](../../assets/images/WEBRESOURCEa1c00379cdc94eb902e24c1682cf0251截图.png)

**最好就是自己实现一个深拷贝（开销最小最安全） 深克隆 数组 / 对象 是 一样的 （相同的功能）**

![深拷贝实现1](../../assets/images/WEBRESOURCEd5e11c44f0d5e1942424f9438b820a15截图.png)

![深拷贝实现2](../../assets/images/WEBRESOURCEa2c1532085bf4dbd5be746c3a911a15c截图.png)

```javascript
// 完整的深拷贝实现
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object')
    return obj
  if (obj instanceof Date)
    return new Date(obj)
  if (Array.isArray(obj))
    return obj.map(item => deepClone(item))
  if (typeof obj === 'object') {
    const clonedObj = {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj
  }
}
```

## 113. computed vs watch 使用场景

用 computed 而不是 watch ？

父组件传给子组件的props，子组件中显示该 props 变化前后的值 （变化前即是 默认传过来的 default 值， 变化后即是 父组件中改变了该值），

如果直接 watch （newVal, OldVal） 该 props 然后 子组件中直接赋值 data 中的 xxx 为 OldVal ，则无法达到预期效果 （因为watch无缓存，

当父组件传的值变化时， 子组件中直接watch到的该props中的newVal 是 === OldVal的），所以要在 computed 中 先缓存默认传过来的props，

然后 watch 的是 对应的 computed 值，这样的话 OldVal、newVal 就都拿得到了。

### 子组件 ：

![computed watch 1](../../assets/images/WEBRESOURCE7340f46714e253cf8aec2acb59edf79b截图.png)

![computed watch 2](../../assets/images/WEBRESOURCE3ac608ad3efeeeee943999ddae8f3a2d截图.png)

![computed watch 3](../../assets/images/WEBRESOURCEa56d99558874a2f3866fcbe63372ba05截图.png)

![computed watch 4](../../assets/images/WEBRESOURCE1930714b34bf5a3687ca077f117b5221截图.png)

watch 的 deep 属性 在 对象 嵌套 的层级 很深 的情况下 就需要 开启 （深度监听）了

```javascript
// 正确的使用方式
computed: {
  cachedProp() {
    return this.propFromParent
  }
},
watch: {
  cachedProp(newVal, oldVal) {
    // 现在可以正确获取到 oldVal 和 newVal
    console.log('变化前:', oldVal)
    console.log('变化后:', newVal)
  }
}
```

## 114. 过滤器使用注意

过滤器不能直接用 ||

这样不行的话 ：

![过滤器问题](../../assets/images/WEBRESOURCE6569347fa0004edd2e88ba7cd8644038截图.png)

那就换种写法：

![过滤器解决](../../assets/images/WEBRESOURCE45cded549582dadebdfed62d2f991e72截图.png)

```javascript
// 正确的过滤器写法
filters: {
  formatText(value) {
    return value || '默认值'
  }
}

// 在模板中使用
{{ text | formatText }}
```

## 115. HTTP 状态码

HTTP 常用状态码 ： 200 300 400 500

![HTTP 状态码](../../assets/images/WEBRESOURCE66108676e41a8a9508cbf63e3c92f439截图.png)

- **2xx 成功**：200 OK, 201 Created, 204 No Content
- **3xx 重定向**：301 Moved Permanently, 302 Found, 304 Not Modified
- **4xx 客户端错误**：400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found
- **5xx 服务器错误**：500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable

## 116. CSS 盒模型

标准盒模型 和 怪异盒模型 （IE盒模型）border-box

怪异的 content 包括 border + padding

标准的话 content 就是 content （不会包括其他的）

```css
box-sizing: border-box; /* 怪异盒模型 */
box-sizing: content-box; /* 标准盒模型 */
box-sizing: inherit; /* 继承父元素的 box-sizing */
```

## 117. 调试哲学

**越简单，改动越小，越是正确改bug的方式**

**越迷惑（感到难以解决）的问题，解决方式往往是 越简单 的！**

**是不需要去想那么复杂的。**

## 118. iframe 使用注意事项

el-dialog 中 使用** iframe** （内联标签）会因没有 设置固定的宽高而 整个iframe 元素变大 要有固定（写死）的宽高

正常使用 iframe 标签 ，直接 整个 src 和 frameborder="0" 就行了，然后就要么 iframe width 和 height 都 100% 继承 来自父元素（固定宽高）的宽和高。

### 跨域报错：

![iframe 跨域1](../../assets/images/WEBRESOURCE96a18bf7c2452d01d4327242bc73dc71截图.png)

![iframe 跨域2](../../assets/images/WEBRESOURCEac698e0ef6ddf3467308ddb978306f81截图.png)

**X-Frame-Options** （[HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP) 响应头）用来告知浏览器该网页（iframe的src）是否可以放在 iframe 中

### 常见属性：

- **deny** --- 不允许
- **sameorigin** --- 可以在相同域名页面的 frame 中展示
- **allow-from xxx** ( 例如 https://www.baidu.com ) --- iframe 只能放在 www.baidu.com 这个域名下
- **allowall** --- 允许所有站点内嵌

![X-Frame-Options 1](../../assets/images/WEBRESOURCEba74435ad11eb723f7062af1e2780209截图.png)

![X-Frame-Options 2](../../assets/images/WEBRESOURCE7af461560ce9aad54746589a2308d151截图.png)

常见的就是在 nginx 配置

![nginx 配置](../../assets/images/WEBRESOURCE704174cf5ff18f800135a673bd1009c2截图.png)

### 解决方案：

把 el-dialog 单独放到父元素上面， 不要 抽成一个组件（页面），让其父元素的宽高固定， 就不会有那样的问题了 !

![iframe 解决1](../../assets/images/WEBRESOURCE2f9a1731c1260e798e632739a9462a32截图.png)

![iframe 解决2](../../assets/images/WEBRESOURCE5a1722159139bb324805aa9f798ebbcf截图.png)

![iframe 解决3](../../assets/images/WEBRESOURCE21a3270added8955c6cccdca40db8cad截图.png)

![iframe 解决4](../../assets/images/WEBRESOURCEb4de1707d0cfaa092f8ecb6345305b6c截图.png)

## 119. CSS 文字溢出处理

CSS 设置文字溢出省略号显示的固定搭配 ：

**条件**： 需要包含文字的盒子的宽高是已知（固定）的

### overflow: overlay 和 overflow: scroll 区别：

![overflow 区别](../../assets/images/WEBRESOURCE758633ffddcbc773beefb571f982b441截图.png)

### 单行文字溢出：

```css
overflow: hidden;
text-overflow: ellipsis; /* 文字溢出省略号 */
white-space: nowrap; /* 不换行 */
```

### 多行文字溢出：

```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box; /* 必要搭配 */
-webkit-line-clamp: 2; /* 显示行数 */
-webkit-box-orient: vertical;
```

## 120. 总结

- **Vue.js 进阶技巧**：组件通信、生命周期、响应式原理
- **JavaScript 高级概念**：异步处理、数组方法、对象操作
- **小程序开发**：兼容性处理、性能优化、组件使用
- **工程化配置**：环境配置、构建优化、部署流程
- **开发最佳实践**：代码规范、调试技巧、性能优化
- **CSS 技巧**：布局、动画、响应式设计
- **前端安全**：XSS 防护、CSRF 防护、安全最佳实践

## 121. CSS 多行文字溢出

CSS 设置文字溢出省略号显示的固定搭配完整版：

**条件**： 需要包含文字的盒子的宽高是已知（固定）的

### 完整的多行文字溢出样式：

```css
overflow: hidden;
text-overflow: ellipsis; /* 文字溢出省略号 */
display: -webkit-box; /* 必要搭配 */
-webkit-line-clamp: 1; /* 显示的文本行数 */
-webkit-box-orient: vertical; /* 必要搭配 盒对象子元素排列方式 */
```

![多行文字溢出](../../assets/images/WEBRESOURCE703bb14d5218abb0d3518f7063c73e7b截图.png)

## 122. 异步接口连续调用

连续调两次接口，第一次达不到数据怎么解决？

用 async / await 异步处理

```javascript
// 正确的异步处理方式
async function fetchData() {
  try {
    const firstResult = await firstApi()
    // 确保第一个接口完成后再调用第二个
    const secondResult = await secondApi(firstResult)
    return secondResult
  }
  catch (error) {
    console.error('接口调用失败:', error)
  }
}
```

## 123. 数组连接方法

CONCAT concat 数组连接数组的方法 别给我拼错了 ！！！

```javascript
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const result = arr1.concat(arr2) // [1, 2, 3, 4, 5, 6]

// 或者使用展开运算符
const result2 = [...arr1, ...arr2] // [1, 2, 3, 4, 5, 6]
```

## 124. 数据格式转换 2

### 1）、已知数据格式：

```javascript
const gradeList = [
  { grade1: '一年级' },
  { grade2: '二年级' },
  { grade3: '三年级' }
]

const studentList = [
  { grade1: ['小明', '小张', '小赵'] },
  { grade2: ['张三', '李四', '王五'] },
  { grade3: ['tom', 'lilei', 'mary'] }
]
```

### 2）、目标数据格式：

```javascript
students = [
  { name: '小明', grade: '一年级' },
  { name: '小张', grade: '一年级' },
  // ...
]
```

### 3）、格式处理 ：

封装个函数： 用到三层循环

```javascript
function students(gradeInfos, studentInfos) {
  let targets = []
  for (let i = 0; i < studentInfos.length; i++) {
    for (const j in gradeInfos[i]) { //  这里是重点 （找得到这点规律，基本就破解了）
      const mapList = studentInfos[i][j].forEach((item) => {
        targets.push({
          name: item,
          grade: gradeInfos[i][j]
        })
      })
    }
  }
  return targets
}

students(gradeList, studentList)
```

![数据转换结果](../../assets/images/WEBRESOURCE472b79c7d92ca2e47a390872e8ec1b48截图.png)

### 查找字符串中每个字符出现的次数 ：

![字符统计](../../assets/images/WEBRESOURCEbd87ddfe67daecc6b91d518eae1a93db截图.png)

```javascript
function countChars(str) {
  const result = {}
  for (let char of str) {
    result[char] = (result[char] || 0) + 1
  }
  return result
}
```

## 125. Element UI 日期选择器

el-date-picker 只支持 指定格式的字符串， 不在指定范围的话 是显示不出来 （或者显示错误的）

![日期选择器](../../assets/images/WEBRESOURCE44b6c88104fd51041d8f781e3bafefbe截图.png)

```javascript
// 正确的日期格式
const dateValue = '2021-08-15' // YYYY-MM-DD
const datetimeValue = '2021-08-15 14:30:00' // YYYY-MM-DD HH:mm:ss

// 格式化日期
function formatDate(date) {
  return date ? new Date(date).toISOString().split('T')[0] : ''
}
```

## 126. 图片格式检测

无后缀名 图片 查 后缀格式 ：

![图片格式检测](../../assets/images/WEBRESOURCE4b6a15735fdb6c7afe799ecb3444781f截图.png)

```javascript
// 通过文件头检测图片格式
function getImageType(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = function (e) {
      const arr = new Uint8Array(e.target.result).subarray(0, 4)
      let header = ''
      for (let i = 0; i < arr.length; i++) {
        header += arr[i].toString(16)
      }

      let type = ''
      switch (header) {
        case '89504e47':
          type = 'png'
          break
        case 'ffd8ffe0':
        case 'ffd8ffe1':
        case 'ffd8ffe2':
          type = 'jpg'
          break
        case '47494638':
          type = 'gif'
          break
        default:
          type = 'unknown'
      }
      resolve(type)
    }
    reader.readAsArrayBuffer(file)
  })
}
```

## 127. Vue 更新视图方法

更新视图方法

```javascript
this.$set() // 添加响应式属性
this.$forceUpdate() // 强制更新
this.$nextTick() // 下次DOM更新后执行
setTimeout() // 异步更新
```

## 128. 数组操作技巧

两个数组中删除相同项目：

![数组删除相同项](../../assets/images/WEBRESOURCE30b9ea8930e46c6b269d64a001ec5916截图.png)

```javascript
// 方法1：filter + includes
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [3, 4, 5, 6, 7]
const diff = arr1.filter(item => !arr2.includes(item)) // [1, 2]

// 方法2：使用 Set
const set2 = new Set(arr2)
const diff2 = arr1.filter(item => !set2.has(item)) // [1, 2]
```

## 129. Element UI 表单验证

饿了么 的 rules 属性 有 required 、 message 、 trigger 、 type ... 等

```javascript
rules: {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
  ]
}
```

## 130. CSS 布局方案

常见布局： 百分比（流式）布局 rem flex 响应式 双栏/三栏布局 双飞翼/圣杯 布局

百分比布局 + flex 可以很常见的适配 登录页 的布局 （px都用%进行替换 ！）

```css
/* 百分比布局 */
.container {
  width: 100%;
  height: 100vh;
}

.content {
  width: 80%;
  margin: 0 auto;
}

/* Flex 布局 */
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .content {
    width: 95%;
  }
}
```

## 131. 调试技巧

真相大白了！！！！！！！ 原因： 初始化的时候赋值有问题导致的报错

![调试技巧1](../../assets/images/WEBRESOURCE807b26c2eee0cbf7aad894718f0d3568截图.png)

![调试技巧2](../../assets/images/WEBRESOURCE6f186f9b100806b47c84a8e59553fde3截图.png)

```javascript
// 调试技巧
console.log('变量值:', variable)
console.table(arrayData) // 表格形式显示数组
console.time('timer') // 开始计时
console.timeEnd('timer') // 结束计时

// 断点调试
debugger // 在代码中设置断点
```

## 132. 递归函数注意事项

套娃函数 自身调用不会执行 ！！

![递归函数1](../../assets/images/WEBRESOURCE1dc527dfc95d1803e0ce08d31cf641ea截图.png)

![递归函数2](../../assets/images/WEBRESOURCE64865606ccf1086d802e17bf702ba055截图.png)

```javascript
// 正确的递归函数
function factorial(n) {
  if (n <= 1)
    return 1 // 递归终止条件
  return n * factorial(n - 1)
}

// 错误的递归（无终止条件）
function badRecursion(n) {
  return badRecursion(n) // 会导致栈溢出
}
```

## 133. Git 版本控制

版本回退，但是不能提交 (git push)

![Git 版本回退](../../assets/images/WEBRESOURCE4d4b81388a6522950360fcba1a8376ec截图.png)

```bash
# 查看提交历史
git log --oneline

# 回退到指定版本（保留工作区修改）
git reset --soft HEAD~1

# 回退到指定版本（丢弃工作区修改）
git reset --hard HEAD~1

# 查看所有操作历史
git reflog
```

## 134. keep-alive 组件

keep-alive 组件

![keep-alive](../../assets/images/WEBRESOURCE316ceef71e961c27c2df404dec52e7f6截图.png)

`<keep-alive>` （该组件主要使用 LRU 算法的缓存机制） 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们，防止重复渲染DOM。和 `<transition>` 相似，`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。

当组件在 `<keep-alive>` 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。

在 2.2.0 及其更高版本中，activated 和 deactivated 将会在 `<keep-alive>` 树内的所有嵌套组件中触发。

主要用于保留组件状态或避免重新渲染。

![keep-alive 生命周期](../../assets/images/WEBRESOURCE552297a3d015963adc530fe03e87e621截图.png)

### 生命周期执行顺序：

当组件第一次创建的时候 activated 方法是在 mounted 方法之后执行。

当页面被隐藏的时候会触发当前页面的 deactivated 方法

当前vnode 节点被销毁的时候，会判断当前节点是不是有 keepAlive 标记，有的话就不会直接调用组件的 destroyed 了，而是直接调用组件的 deactivated 方法。

### LRU 算法

LRU （ least recently used ） 最近最久未使用 --- 最近最少使用

是 常用的 页面置换算法 中的一种

![LRU 算法](../../assets/images/WEBRESOURCE9d136699365a75c7e2c3e3c4a078db11截图.png)

### router-view 的 key 属性

keep-alive 包裹下的 router-view 中的 **key** 属性 （取值： $route.path ---- 只有 path 路径 / $route.fullPath ---- 带query内容）

![router-view key](../../assets/images/WEBRESOURCE74e423a54ba7eb39bd350f06dfa4944e截图.png)

（一般都是 transition ---> keep-alive ---> router-view 这三个组件连着 使用的）

![组件组合1](../../assets/images/WEBRESOURCE91b436dba968a261c88702926174d149截图.png)

![组件组合2](../../assets/images/WEBRESOURCE23c294997b13ec7316d5a17e6c04919d截图.png)

![组件组合3](../../assets/images/WEBRESOURCE553da244601500dfc4af90549a06efce截图.png)

![组件组合4](../../assets/images/WEBRESOURCE7388c75ba2b3c3fab17d4e20fed50a99截图.png)

**router-view 设置了 key 的缺点:**

加了路由的key值，Vue就会认为这不是同一个组件，update的时候会删除这个组件再重新加载一个新的组件，有严重的性能问题。

### Vue 的 key 属性

key 的 type 是 String | Number

![Vue key 1](../../assets/images/WEBRESOURCEed231c81873216c3e86bf935fe1aee96截图.png)

![Vue key 2](../../assets/images/WEBRESOURCE526499c864877211084f82503b96b6d2截图.png)

![Vue key 3](../../assets/images/WEBRESOURCE95a700717e5400312b8e02228dd3639c截图.png)

```html
<!-- 正确使用 keep-alive -->
<keep-alive :include="['ComponentA', 'ComponentB']">
  <router-view />
</keep-alive>

<!-- 带过渡效果 -->
<transition name="fade">
  <keep-alive>
    <router-view :key="$route.fullPath" />
  </keep-alive>
</transition>
```

## 135. 项目模板创建

完整的后台模板，自己按照命令整一套

### 1）、引入piui不香吗，按规范来

```bash
vue create -p sadais-org/uni-preset-vue my-project
```

### 2）、管理后台模板 工程创建指令

```bash
vue create -p sadais-org/sadais-admin-preset-vue my-project
```

![项目模板](../../assets/images/WEBRESOURCE7e628ff1f8044cb0d7d57999efa75fac截图.png)

## 136. 权限管理系统

管理后台权限管理（系统设置）：

一般都是有 角色、用户（账号）、资源 这三部分组成

![权限管理1](../../assets/images/WEBRESOURCE36cd53efd317e51aa30866a4f5defe97截图.png)

然后是 先给角色分配资源（权限），然后再给用户分配角色，资源控制路由菜单的显示内容及顺序

![权限管理2](../../assets/images/WEBRESOURCE1ab10380ff51b77e283a0298fbfebb7b截图.png)

![权限管理3](../../assets/images/WEBRESOURCE599e9d01cffe08bcd998cb53bf474800截图.png)

![权限管理4](../../assets/images/WEBRESOURCEd28cf265bb8186de9c92733516f3bfa8截图.png)

![权限管理5](../../assets/images/WEBRESOURCE0a347b8da64a1c6ca9290b8f7cf41066截图.png)

```javascript
// 权限管理示例
const permissions = {
  roles: ['admin', 'editor', 'viewer'],
  resources: [
    { id: 1, name: '用户管理', path: '/users' },
    { id: 2, name: '角色管理', path: '/roles' },
    { id: 3, name: '权限管理', path: '/permissions' }
  ],
  rolePermissions: {
    admin: [1, 2, 3],
    editor: [1],
    viewer: []
  }
}
```

## 137. Vue 路由守卫

beforeRouter 导航守卫中的 next() 回调函数属性

```javascript
next() // 直接放行，跳到下一个路由
next('/login') // 强制跳转到 login路由的页面
next({ path: '/login' }) // 对象形式跳转
```

![路由守卫1](../../assets/images/WEBRESOURCEef34f7100c19c8bb49c9ae79065fea28截图.png)

![路由守卫2](../../assets/images/WEBRESOURCEdfaccf0cd8a435858bcf4a51dcd948a9截图.png)

```javascript
// 路由守卫示例
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.path === '/login') {
    next()
  }
  else if (!token) {
    next('/login')
  }
  else {
    next()
  }
})
```

## 138. Element UI 表格排序

el-table-column 的 sortable 属性 （**根据prop设置的字段进行排序的**）

![表格排序1](../../assets/images/WEBRESOURCE472e4ceb2d2e9d526f2581435a1f20f8截图.png)

![表格排序2](../../assets/images/WEBRESOURCE006e7d91fb843b7b118438818e1ba5e3截图.png)

```html
<el-table :data="tableData" @sort-change="handleSortChange">
  <el-table-column prop="name" label="姓名" sortable> </el-table-column>
  <el-table-column prop="age" label="年龄" sortable> </el-table-column>
</el-table>
```

```javascript
methods: {
  handleSortChange({ column, prop, order }) {
    // order: ascending, descending, null
    console.log('排序字段:', prop)
    console.log('排序方向:', order)
  }
}
```

## 139. Git 高级操作

git 代码回滚/撤销

revert ： 恢复/还原 reflog

![Git 高级操作1](../../assets/images/WEBRESOURCEe81d65c18ff29201ec5e1762d79e8f91截图.png)

git reflog 查看 commit 操作历史 ： reflog 查看所有分支 （包括被删除的commit 和 reset的操作）

![Git 高级操作2](../../assets/images/WEBRESOURCE235ad52218bf87b2914bdf226cbed8ed截图.png)

fast-forward（快进）合并

![Git 快进合并](../../assets/images/WEBRESOURCE5a7883e7cb66c659c4e00f0b70affa37截图.png)

git log: log 查看已有的提交记录 （被删除的查不出） 更详细

手动修改提交记录的信息和时间， git log 认你修改的那个记录， 但是远程仓库里应该还是你之前的那个提交。

![Git log 1](../../assets/images/WEBRESOURCE8fb5cac362af073e17ad470998861c60截图.png)

![Git log 2](../../assets/images/WEBRESOURCE4bdde1751c3763dec7f7e1c0d23d26e9截图.png)

```bash
# 常用 Git 命令
git reflog                    # 查看所有操作历史
git log --oneline            # 查看提交历史（简洁版）
git revert <commit-id>       # 撤销指定提交
git reset --hard <commit-id> # 重置到指定提交
git cherry-pick <commit-id>  # 挑选提交
```

## 140. 动态图片引用

图片地址 src地址 的 require 可 动态 .

用 原生 img 标签 :

![动态图片](../../assets/images/WEBRESOURCE1f2345faef169441f3b0dd4523252c68截图.png)

```javascript
// 动态引用图片
const imageName = 'logo.png'
const imageUrl = require(`@/asse../../assets/images/${imageName}`)

// 在模板中使用
data() {
  return {
    dynamicImage: require('@/asse../../assets/images/logo.png')
  }
}
```

```html
<!-- 模板中使用 -->
<img :src="dynamicImage" alt="logo" />

<!-- 动态切换图片 -->
<img :src="require(`@/asse../../assets/images/${currentImage}.png`)" alt="dynamic" />
```

## 141. 浅拷贝深度理解

浅拷贝 ？？？ 操作 params 对象 不会影响 this.form 对象 ！ **（改变的是对象里面的对象里面的值，就有影响了）**

### 0）、改变了第二层（及以上）就会有影响

![浅拷贝问题](../../assets/images/WEBRESOURCEe55d9dbba6baaa6895d417f16a2175a4截图.png)

### 1）、第一层修改不影响原对象

![浅拷贝1](../../assets/images/WEBRESOURCE43d2175ee3c7e30c670524375e824620截图.png)

![浅拷贝2](../../assets/images/WEBRESOURCEced9dbf3c3df125c33357517917206d3截图.png)

### 2）、第二层修改会影响原对象

![浅拷贝3](../../assets/images/WEBRESOURCEb9f88b24d8fed9a4ad217fe2f5762318截图.png)

![浅拷贝4](../../assets/images/WEBRESOURCEbcbc1affa4d8eea7fd7773a25c6daadf截图.png)

```javascript
// 浅拷贝示例
const original = {
  name: 'John',
  address: {
    city: 'Beijing',
    street: 'Main St'
  }
}

// 浅拷贝
const shallow = { ...original }

// 修改第一层 - 不影响原对象
shallow.name = 'Jane'
console.log(original.name) // 'John' (不变)

// 修改第二层 - 影响原对象
shallow.address.city = 'Shanghai'
console.log(original.address.city) // 'Shanghai' (被改变)

// 深拷贝解决方案
const deep = JSON.parse(JSON.stringify(original))
// 或者使用 lodash
const deep2 = _.cloneDeep(original)
```

## 142. 总结

### 🎯 **核心技术栈**：

- **JavaScript 基础与进阶**：类型转换、数组操作、异步处理、ES6+ 特性
- **Vue.js 全栈开发**：组件通信、生命周期、响应式原理、路由管理
- **小程序开发**：兼容性处理、组件使用、性能优化、发布流程

### 🛠️ **开发工具与工程化**：

- **构建工具**：Webpack、Vite、npm 脚本配置
- **版本控制**：Git 高级操作、分支管理、代码回滚
- **环境配置**：开发/测试/生产环境切换、域名配置

### 💡 **最佳实践**：

- **性能优化**：懒加载、按需加载、代码分割、缓存策略
- **代码质量**：调试技巧、错误处理、代码规范
- **用户体验**：响应式设计、交互优化、兼容性处理

### 🔒 **安全与稳定性**：

- **前端安全**：XSS 防护、CSRF 防护、输入验证
- **错误处理**：异常捕获、容错机制、用户友好提示
- **数据处理**：深浅拷贝、数据转换、状态管理
