# 犀牛书学习笔记
## 一、基础知识
> JavaScript简介
> 是Web编程语言，是一门高级、动态、解释型编程语言，适合面向对象和函数式编程风格。语法与Java大致相仿，但除此两者无任何关系。浏览器是其最早的宿主环境，2010年后，出现另一宿主环境Node，可以访问整个操作系统的权限。

### 1. 词法结构（一门语言最低级的语法）
注释：单行// 与 多行/* */
字面量：一种**直接**出现在程序中的数据值。
标识符：即名字，命名常量、变量、属性、函数、类。必须以字母、下划线或美元符号开头。
保留字：不能用作标识符。
Unicode：JavaScript**程序**是用Unicode字符集编写的。故在字符串和注释中可使用任意Unicode字符，建议标识符只用ASCII字母和数字。转义序列（**\u后跟4位十六进制数字**）可令ASCII字符来表示Unicode字符，在注释中会被忽略。注意Unicode归一化。

### 2. 类型、值和变量
* 原始类型： 数值、（文本）字符串、布尔（真）值、null、undefined、Symbol（符号）；6
* 对象类型：数组、Set、Map、Date、Error、函数、类等
>任何不是原始类型的值都是对象，对象（对象类型的成员）是属性的集合。对象类型可以修改（mutable），但原始类型不可以修改（immutable），理解字符串不可修改。
>

1. 数值 Number
	* 可用下划线将数值字面量分隔为容易看清的数字段。
	```javascript
	let billion=1_000_000_000;
	let bytes=0x89_AB_CD_EF;
	let bits=0b0001_1101_0111;
	let fraction=0.123_456_789;
	```
	
	* Infinity和NaN：JavaScript预定义了全局常量Infinity和NaN应对正无穷和非数值，可通过Number对象的属性获得。**NaN与任何值比较都不相等**，判断方式：`x!=x`或`Number.isNaN(x)`；负零值与正零值相等（即使在`use strict`下）。
   * 二进制浮点数与舍入错误
	* BigInt：ES2020，定义了一种新的数值类型：BigInt，为表示64位整数，表示：一串数字后面跟‘n’；算术运算不同在于*除法会丢弃余数并向下舍入*；+、-、*、/、**不能混用BigInt操作数和常规数值操作数，比较操作数允许混用，Math对象不接收BigInt操作数。
	
2. 文本 String

   * 字符串是16位值的不可修改的有序序列。
   * 代理对surrogate pair：码点超出16位的Unicode字符使用UTF-16规则编码为两个16位值的序列。
   * 使用反引号定界字符串是【ES6】的特性。
   * 字符串属性：length。
   * JavaScript中的**字符串是不可修改的**，像`replace()`和`toUpperCase()`这样的方法都返回新字符串。
   * 标签化模板字面量
   * 【ES6】提供内置的标签函数`String.raw()`，不会处理任何反斜杠转义。
   * 正则表达式（RegExp）数据类型用于描述和匹配文本中的字符串模式。

3. 布尔值

   * JavaScript的任何值都可以转换为布尔值，转为false：`undefined、null、0、-0、NaN、" "空字符串`，其他所有值都是true。
   * 布尔值只有`toString()`一个方法。

4. null与undefined

   * null通常表示某个值不存在，`typeof null结果是object`。
   * undefined表示变量未初始化、查询不存在的对象属性或数组元素、没有明确返回值的函数返回的值、没有传值的函数参数，它是一个预定义的全局变量。`typeof undefined结果是undefined`。
   * `null==undefined; //true   null===undefined; //false`

5. 符号Symbol

   * 【ES6】新增的一种原始类型，用作非字符串的属性名。
   * 没有字面量语法。
   * `Symbol()`函数获取一个Symbol值，这个函数永远不会返回相同的值，即使每次传入参数一样，保证了唯一性。
   * 全局符号注册表。

6. 全局对象

   * 全局对象的属性是全局性定义的标识符，可以在JavaScript程序的任何地方使用。JavaScript解释器启动后（或每次浏览器加载新页面时），都会创建一个新的全局对象并为其添加一组初始的属性。
   * 在Node中，全局对象有一个名为global的属性。
   * 在浏览器中，**Windows对象对浏览器窗口中的所有JavaScript代码而言，充当了全局对象的角色**。这个全局对象有一个自引用的window属性，可以引用全局对象。
   * **ES2020**最终定义了globalThis作为在任何上下文中引用全局对象的标准方式。
   
7. 不可修改的原始值与可修改的对象引用

   * 原始类型不可修改，即没有办法改变原始值。
   * 对象有时被称为引用类型（reference type）。

8. 类型转换

   * 转换与相等

   * 显示转换

     * 最简单：`Boolean()、Number()、String()`

     * 除了null和undefined之外，所有值都有`toString()`方法。

     * `Boolean()、Number()、String()`也可以被当作构造函数通过new关键字来使用。

     * 某些JavaScript操作符会执行隐式类型转换。

     * Number类定义 的toString()方法会接收一个可选的参数，用于指定一个基数或底数，默认为10。

     * ```
       let n=123456.789;
       n.toFixed(0) //=>"123457"
       n.toFixed(2) //=>"123456.79"
       n.toExponential(1) //=>"1.2e+5"
       n.toExponential(3) //=>"1.235e+5"
       n.toPrecision(4) //=>"1.235e+5"
       n.toPrecision(7) //=>"123456.8"
       ```

     * `parseInt()`可以接收第二个参数值，用于指定要解析数值的底（基）数；  `parseFloat()`

   * 对象到原始值转换（搭配[对象 — 原始值转换 (javascript.info)](https://zh.javascript.info/object-toprimitive)理解较好）
   
     * JavaScript规范定义了对象到原始值转换的3种基本算法，偏字符串、偏数值、无偏好。
   
     * 算法在JavaScript中的用法：转换为布尔值无需使用上述算法，转换为字符串使用偏字符串，转换为数值用偏数值。
   
     * 存在不遵循上述基本的对象到字符串或数值转换规则的操作符转换特例。
   
     * toString()和valueOf方法：所有对象都会继承的在对象到原始值转换时使用的方法。
   
       ​	toString()返回对象的字符串表示，`({x:1,y:2}).toString() //=>"[object object]"`，很多类都定义了自己特有的toString()版本。
   
       ​	valueOf()方法：大体可认为它把对象转换为代表对象的原始值（若存在这样一个值）；‘对象是复合值，且多数对象不能真正通过一个原始值来表示，因此默认情况下**只返回对象本身，而非返回原始值**。
       
       | 算法         | 顺序                                                         |
       | ------------ | ------------------------------------------------------------ |
       | 偏字符串算法 | 先toString()再valueOf()                                      |
       | 偏数值算法   | 先valueOf()再toString()                                      |
       | 无偏好算法   | 取绝被转换对象的类，若为Date则用偏字符串算法，其他用偏数值算法 |
   
9. 变量声明与赋值

11. 