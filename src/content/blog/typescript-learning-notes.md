---
title: "TypeScript 学习笔记"
description: "深入学习 TypeScript 的核心概念，包括类型系统、泛型、高级类型、模块系统等重要知识点"
date: "2022-12-05"
lang: "zh-CN"
category: "tech"
tag: "typescript"
tags: ["TypeScript", "类型系统", "泛型", "前端开发", "学习笔记"]
featured: true
---

本文记录了 TypeScript 学习过程中的重要知识点，涵盖了类型系统、泛型、高级类型操作等核心概念。

## 1. 顶层类型和底层类型

### 类型层级关系

- **顶层类型 (Top Type)**：所有其他类型的超类型
  - `any`：任意类型，关闭类型检查
  - `unknown`：类型安全的 any 类型，需要类型窄化

- **底层类型 (Bottom Type)**：从未出现的类型
  - `never`：不会有值的类型，用于总会抛出错误的函数或从来不会有返回值的函数

![类型层级图](../../assets/images/WEBRESOURCEf0cd6fa4c49101f556b06c0bc3a8f31d截图.png)

### 重要特性

- 所有可以赋值给 `any` 类型的变量，都可以赋值给 `unknown` 类型的变量（类型安全的 any 类型）
- 声明为 `void` 类型的变量，只能赋予 `undefined` 和 `null`
- `unknown` 类型需要进行类型窄化才能使用

## 2. extends 和 implements

### extends 继承

`extends` 用于继承，类和接口都能继承。在条件类型中，`extends` 不一定要强制满足继承关系，也可以是检查是否满足结构兼容性。

**条件类型语法**：`T extends U ? X : Y` 表示若 T 能够赋值给 U，那么类型是 X，否则为 Y。

![extends 示例](../../assets/images/WEBRESOURCE6e6b1bc47a9f7c70b31fe8858bb700e2截图.png)

![extends 条件类型](../../assets/images/WEBRESOURCEad386a9c98cfa513ecdbcf31b5d5c8e6截图.png)

![extends 用法](../../assets/images/WEBRESOURCE26bbe8d133d3a5190b76a44d3c2a9f4e截图.png)

**注意**：class 不能 extends interface

![class extends interface 错误](../../assets/images/WEBRESOURCE3466618dcdfed3b55c9f79bb13631457截图.png)

![正确的继承方式](../../assets/images/WEBRESOURCE4658f93748a923d373fd1f66c28e3ed7截图.png)

### implements 实现

`implements` 用于实现，只有类能实现。`A implements B` 表示 A 上要有 B 对应的属性和方法。

![implements 示例](../../assets/images/WEBRESOURCEfba957ba20a1862cb2ebb5f111cd7b13截图.png)

**类和类之间的关系**：

![类和类的关系](../../assets/images/WEBRESOURCEdeef5fa1a70093357aba3c79f2c5ad11截图.png)

**类和接口之间的关系**：

![类和接口的关系](../../assets/images/WEBRESOURCEc48046e9c8b3f7905e8fc9d7dadc0eb5截图.png)

## 3. TypeScript 的核心优势

### 1. TS 的本质

![TS 本质](../../assets/images/WEBRESOURCE0bb4555ef71546b8e26446f66cd37f76截图.png)

### 2. TS 更加可靠

![TS 可靠性](../../assets/images/WEBRESOURCE8ce3d414dc57d6700cee56ff90ae6dd3截图.png)

### 3. 面向接口编程

![面向接口编程](../../assets/images/WEBRESOURCE7b2704825f6631bb90da3c025a768d08截图.png)

![接口编程示例](../../assets/images/WEBRESOURCE58b2e27fb0fa4d6e5339f366666b41f2截图.png)

### 4. TS 正成为主流

![TS 主流趋势](../../assets/images/WEBRESOURCE4aa456a1199214861245019a17309c50截图.png)

## 4. 模块系统

### 模块导入导出

![模块系统](../../assets/images/WEBRESOURCE8530405fa640457822a9029d40540db6截图.png)

![模块导入](../../assets/images/WEBRESOURCE69742ffcc609fec01a0dc9ea4b313832截图.png)

![模块导出](../../assets/images/WEBRESOURCEd1b619d5e0c99ef605a44ac3d2e8082a截图.png)

![模块使用](../../assets/images/WEBRESOURCE35ded901532a5cc25c9f4f95e2594e2d截图.png)

## 5. 索引签名

### 基本概念

索引签名允许我们定义对象可以有任意数量的属性，其中键和值都有特定的类型。

![索引签名基础](../../assets/images/WEBRESOURCE7a35d33ac78c31301a8c0b6d5c6915c1截图.png)

key 值是 number，value 值也是 number：

![数字索引签名](../../assets/images/WEBRESOURCE8734c0afba728cec793a4bb3c9138de5截图.png)

### 索引签名的坑 - 结合 keyof 关键字

#### 重要规则

**默认（一般）情况下，索引签名的 key 是 string 的时候，keyof 的返回值是 `string | number`（联合类型）**

这与 value 的类型无关，取 number / string / any 都不影响 keyof 的返回值是 `string | number`。

![keyof 返回值](../../assets/images/WEBRESOURCE3245e044ff434fdd47d74a5cd7bba55f截图.png)

#### 配置选项影响

当在 tsconfig 中开启了 `keyofStringsOnly` 的时候：

![keyofStringsOnly 配置](../../assets/images/WEBRESOURCEc67db04c5208d04fb7dd91d1f70ead1f截图.png)

![配置效果](../../assets/images/WEBRESOURCEe8c8cb9eb320047aba7698b9aea9d66e截图.png)

结果就变成了 string：

![string 结果](../../assets/images/WEBRESOURCE63ae59775d0d3407be43d724746e8f03截图.png)

#### 解决方案

或者在不开启 `keyofStringsOnly` 的情况下，使用高级类型（工具类）限制：

![工具类型限制](../../assets/images/WEBRESOURCE414437dbf1185d26a47a7a44aca71ed6截图.png)

索引签名 key 为 number 就走正常的类型约束了：

![number 索引签名](../../assets/images/WEBRESOURCEde864757454b8be27fe9e40ae8f521c7截图.png)

#### 数组的 keyof

`keyof []` 也是有 number 值的（因为一系列方法最后的显示结果都是比如 'slice' 的字符串形式，所以可以理解为是 string 的话就有多一个 number 的选项了）：

![数组 keyof](../../assets/images/WEBRESOURCE2f076f8d0afe8613c994148af4334b1a截图.png)

## 6. type 和 interface

### type 类型别名

![type 基础用法](../../assets/images/WEBRESOURCE1e57894b0dd9d66462714e61737d86c8截图.png)

![type 示例](../../assets/images/WEBRESOURCEfd83756a9a3342b1311a441334e8be2b截图.png)

### type 和 interface 的区别

#### 相同点

1. 都用来定义对象或函数（本质也是对象）
2. 都可以继承

#### 不同点

**1. 写法不一样**

- `type` 是类似赋值（type + 名字 + = + 值）
- `interface` 是名字直接接对象，然后对象里面声明字段

![写法区别](../../assets/images/WEBRESOURCE0f4bf197bd98524bad01ba1c125799fc截图.png)

**2. 继承写法不一样**

- `type` 使用 `&`
- `interface` 使用 `extends`

![继承写法](../../assets/images/WEBRESOURCE424b8ed0a26f4aa1634beacf2cfd82e5截图.png)

**3. 重复声明**

- `interface` 可以重复声明（会合并声明）
- `type` 不行（会报错）

![重复声明](../../assets/images/WEBRESOURCEae784c0a49e76907e8e49258eb6dc0bd截图.png)

**4. type 的特殊用法**

`type` 可以定义基本类型 / 联合类型 / 元组类型 / typeof + 数据类型

### 使用 Record 工具类型

![Record 用法](../../assets/images/WEBRESOURCE72d24ef2bd8217224988d19f407bb78b截图.png)

![Record 示例](../../assets/images/WEBRESOURCE912ac39c0761cb9d6368c944d4929759截图.png)

## 7. 泛型变量

### 泛型基础

泛型使用 `< >` 指定泛型变量约束：

![泛型基础](../../assets/images/WEBRESOURCE5e30be1b754d59bf6394ff3e57fc802d截图.png)

![泛型示例](../../assets/images/WEBRESOURCE9e430684946312e8221c01e3fbbccf52截图.png)

### 泛型命名约定

- **K (Key)**：表示对象中键的类型
- **V (Value)**：表示对象中值的类型
- **E (Element)**：表示元素类型
- **R (Result)**：表示结果类型
- **U**：单纯只是因为跟 T 挨的比较近（T、U、V...）

![泛型约定](../../assets/images/WEBRESOURCE7d490bd604bd1c34590ac3510acdefb7截图.png)

## 8. 高级类型操作符

### 1. keyof 关键字

`keyof` 操作符获取某种类型的所有键，返回类型是联合类型，可以操作接口 / 类 / 基本类型。

![keyof 基础](../../assets/images/WEBRESOURCE369e3520ef9b3a1aa31405da5a95cc0e截图.png)

`keyof any` 结果就是 `string | number | symbol`：

![keyof any](../../assets/images/WEBRESOURCE0b1d80ef10044a6a1d53130633ba637b截图.png)

![keyof 示例](../../assets/images/WEBRESOURCEe20e2edadb1d11e5e7a0f2da73d5ee8c截图.png)

![keyof 结果](../../assets/images/WEBRESOURCE77968c5cf5b57f4608d354c28765f14d截图.png)

**结果总结**：

![keyof 总结](../../assets/images/WEBRESOURCEad7269c6a74d16b2cb8484321457ab36截图.png)

### 2. typeof 关键字

`typeof` 操作符获取变量的类型，返回：变量什么类型，就返回什么类型，用于操作变量。

![typeof 示例](../../assets/images/WEBRESOURCE7d08d8ea005e1518ea23001317fd9578截图.png)

### 3. infer 关键字

`infer` 关键字和 `extends` 一起使用，用于推断，声明一个类型变量，并且对它进行使用（在调用的时候传递的）。

#### 类型提取

可以从泛型和函数中提取类型。

**1. 提取泛型的类型**：

![infer 泛型提取](../../assets/images/WEBRESOURCE8ca0c262b37224de313126a2a8a4e314截图.png)

![infer 示例1](../../assets/images/WEBRESOURCE7dbc9baadf04a03ae3476f5862b52767截图.png)

![infer 示例2](../../assets/images/WEBRESOURCEe2896a060be911dbc0a127a61863858a截图.png)

### 4. ReturnType 关键字

`ReturnType` 获取方法的返回类型，用于操作方法。

![ReturnType 基础](../../assets/images/WEBRESOURCEebd267f701ac3365a748b2f92fcaa3d3截图.png)

![ReturnType 示例](../../assets/images/WEBRESOURCE6bcab45a8298ed97af4820327a590093截图.png)

![ReturnType 应用](../../assets/images/WEBRESOURCEa839fff2f16c25b08c209f5107166569截图.png)

## 9. 函数的剩余参数和展开参数

![函数参数](../../assets/images/WEBRESOURCE946ac22aaca719d1b100f1db2bb0f733截图.png)

## 总结

TypeScript 作为 JavaScript 的超集，提供了强大的类型系统和丰富的高级特性：

1. **类型安全**：通过静态类型检查，在编译时发现错误
2. **类型推断**：智能的类型推断减少了显式类型注解的需要
3. **高级类型**：条件类型、映射类型、工具类型等提供了强大的类型操作能力
4. **泛型系统**：提供了类型参数化的能力，增强了代码的复用性
5. **模块系统**：完善的模块导入导出机制
6. **面向接口编程**：通过接口和类型别名实现更好的代码组织
