# 变量

存放数据的容器

声明、初始化、赋值

## 关键字

`var`、`let`

var 为早期 js 声明变量的关键字，而 let 为 ES6 引入

### var

函数作用域，存在**变量提升**问题

#### 变量提升 (variable hoisting)

函数作用域内任何位置 var 声明的变量会在代码执行前完成声明，等价于在函数顶部声明变量。

仅提升声明，不提升初始化

### let

块级作用域，定义之前为**暂时死区**

#### 暂时死区 (temporal dead zone)

在声明之前访问 let 声明的变量会抛出 `ReferenceError: xxx is not defined`，声明之前的区域称为暂时死区。

### 变量提升 vs 暂时死区

之所以存在，是因为引擎在执行代码之前会先扫描变量声明，若为var声明则提升，若为let声明则标记暂时死区

### var vs let

作用域方面，let 可以规避一些奇怪的逻辑，避免错误。

性能上，非块作用域内两者性能相当，块作用域内let更优。[so](https://stackoverflow.com/questions/21467642/is-there-a-performance-difference-between-let-and-var-in-javascript)

建议使用 let，但无论使用那个，保持一致即可。

## 命名

小写驼峰，非关键字无空格非数字开头 `a-z, A-Z, 0-9, _, $`

### 常见命名

- camelCasing
- PascalCasing
- snake_casing
- SCREAMING_SNAKE_CASING

## 检查是否声明

使用未声明变量，抛出异常 `ReferenceError: xxx is not defined`

使用已声明，未初始化变量，返回 `undefined`

可用 `typeof` 关键字检查变量是声明并初始化，`typeof x !== 'undefined'` 则已初始化，无法判断是否声明

## 删除变量

`delete` 关键字可用于删除变量
