[TOC]
## 一、markdown语法

> markdown是一款轻量级标记语言，对于图片，图表、数学式都有支持，许多网站都广泛使用Markdown来撰写帮助文档或是用于论坛上发表消息。

### 1. 标题
### 2. 字体
  **加粗**
  *斜体*
  ***加粗的斜体***

### 3. 各种线
  分割线
***
  ~~删除线~~
  <u>下划线</u>

### 4. 列表
* 无序表
	* 第一列
	* 第二列
1. 有序表
	2. 第一列
	3. 第二列
### 5. 区块
>引用
>>可嵌套
>>两次enter可退出区块

### 6. 代码
1. `code`
2. 代码段 
```javascript
alert('hello');
```
### 7. 链接
1. [链接文字](链接地址)   访问本地只能用这个
2. <https://www.baidu.com/>
3. 页面跳转 [开头](# 一、markdown)
### 8. 图片
![alt属性文本](图片地址 "可选标题")
### 9. 表格
快捷键ctrl+t

## 二、markdown插入LaTex数学公式
>​	TeX是一套功能强大并且十分灵活的**排版语言**，它多达900多条指令，并且TeX有宏功能，用户可以不断地定义自己适用的新命令来扩展TeX系统的功能。许多人利用TeX提供的宏定义功能对TeX进行了二次开发，其中比较著名的有美国数学学会推荐的非常适合于数学家使用的AMS-TeX以及**适合于一般文章、报告、书籍的LaTeX系统**。


### 1. 插入数学公式 
$1+1=2内联公式$（需要设置扩展属性）
$$
\2^2外联公式
$$
### 2. 上下标
$2^({12}^2)$
$2_3$
### 3. 根号
$\sqrt[3]{4}$
### 4. 上下水平线
上水平线  $\overline{abc}$
下水平线  $\underline{abc}$
### 5. 上下水平大括号
上括号 $\overbrace{abc}^{三个字母}$
下括号 $\underbrace{abc}_{三个字母}$
### 6. 向量符号
* 单个字母向量 $\vec{a}$
* 多个字母向量$\overrightarrow{abc}$     $\overleftarrow{abc}$
### 7. 分数
$\frac{2}{3}$
### 8. 积分运算符
$\int{x^2}dx$
$\int_{1}^{\infty}x^2dx$
### 9. 求和
$\sum x^2$
$\sum_{i=1}^{10}x_i$内联
$$
\sum_{i=1}^{10}x_i 外联
$$
### 10. 连乘
$\prod x^2$
$\prod_{i=1}^{10}x_i$
### 11. 特殊符号
* 希腊字母
  |$\alpha$|$\beta$|$\gamma$|$\theta$|$\rho$|
  | ---- | ---- | ---- | ---- | ---- |
  |$\lambda$|$\mu$|$\Delta$|$\pi$|$\Omega$|
* 关系运算符
  $\ge$   $\le$  $\ne$
* 乘除
  $\times$  $\div$
### 12. 矩阵
$\left[
	\begin{matrix}
	1 & 2 & 3 \\
	4 & 5 & 6 \\
	\end{matrix}
\right]$
行列式只需要把[]改成||
### 13. 方程组
$\begin{equation}
	\left\{
		\begin{array}{lr}
		x=\dfrac{3\pi(1+2t)}{2}\cos\dfrac{3\pi(1+2t)}{2}, & \\
		y=s, & 0\le s\le L, |t|\le1. \\
		z=\dfrac{3\pi(1+2t)}{2}\sin\dfrac{3\pi(1+2t)}{2}, & 
		\end{array}
	\right.
\end{equation}$
### 14. 分段函数
$y=
\begin{equation}
	\left\{
		\begin{array}{lr}
		x-1 & x\le0 \\
		x+1 & x>0
		\end{array}
	\right.
\end{equation}
$
## 三、markdown中使用html
<font color=pink size=5>字体样式</font>
<p align="center">段落的居中显示</p>
## 四、插入:emoji:
:happy:
:horse:
:rose:
## 四、补充内容
添加脚注：markdown是轻量级标记语言[^1]。
[^1]:标记语言，是一种将文本以及文本相关的其他信息结合起来，展现出关于文档结构和数据处理细节的电脑文字编码。用一系列约定好的标记来对电子文档进行标记，以实现对电子文档的语义、结构、及格式的定义。

