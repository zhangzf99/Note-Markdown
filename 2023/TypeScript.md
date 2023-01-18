# TypeScript
## 安装、编译
```
cnpm install -g typescript

tsc helloword.ts
```
```
1、 tsc --init 生成tscconfig.json  改"outDir":'./js'

2、vscode 任务-运行任务-监视
```

## 进入类型的世界：理解原始类型与对象类型
### 原始类型的类型标注
```js
const name1: string = "zhangzf99";
const age: number = 10;
const bool: boolean = true;
const undef: undefined = undefined;
const nul: null = null;
const obj: object = { name1 };
const bigint1: bigint = 90909907986756746545n;
const bigint2: bigint = BigInt(90909907986756746545);
const symbolVar: symbol = Symbol("unique");
```

### null 和 undefined
在js中，null -> 这里有值，但是个空值，undefined -> 这里没有值
在ts中，null 和 undefined 类型都是有具体意义的类型。也就是说，它们作为类型时，表示的是一个有意义的具体类型值。这两者在没有开启 strictNullChecks 检查的情况下，会**被视作其他类型的子类型**，比如 string 类型会被认为包含了 null 与 undefined 类型：
```js
const temp1: null = null;
const temp2: undefined = undefined;
const temp3: string = null; // 仅在关闭 strictNullChecks 时成立，下同
const temp4: string = undefined;
```

### void
ts的类型标注中也有 void，用于描述一个内部没有 return 语句，或者没有显示 return 一个值的函数的返回值。
```js
function func1() {}
function func2() {
  return;
}
function func3() {
  return undefined;
}
```
func1 与 func2 的返回值都会被隐式推导为 void，只有显示返回了 undefined 值的 func3 其返回值才会被推导为了 undefined。但在实际的代码执行中，func1 与 func2 的返回值均是 undefined。
```
虽然 func3 的返回值类型会被推导为undefined，但是你仍然可以使用 void 类型进行标注，因为在类型层面 func1、func2、func3 都表示“没有返回一个有意义的值”。
```
```ts
function func1() {}
function func2() {
  return;
}
function func3(): void {
  return undefined;
}
```
### 数组的类型标注
```ts
const arr1: string[] = ["111", "222"];
const arr2: Array<number> = [111, 2];
```
数组是我们在日常开发大量使用的数据结构，但在某些情况下，使用**元组**来代替数组更加妥当，比如一个数组中只存放固定长度的变量，但我们进行了超出长度的访问：
```
console.log(arr1[999]); // undefined
```
这种是不符合预期的，因为我们能确定这个数组中只有三个成员，并希望在越界访问时给出类型报错。这时我们可以使用元组类型进行类型注释：
```ts
const arr3: [string, number, null] = ["111", 11, null];
console.log(arr3[999]);  // 报错 长度为 "3" 的元组类型 "[string, number, null]" 在索引 "999" 处没有元素。
```
在这种情况下，对数组合法边界内的索引访问（即0、1、2）将精准地获得对应位置上的类型。同时元组也支持了再某一位置上的可选成员：
```ts
const arr4: [string, number?, boolean?] = ["111", 11];  
// 鼠标放在arr4上 const arr4: [string, (number | undefined)?, (boolean | undefined)?]
console.log(arr4.length); // 2
```
对于标记为可选的成员，在 --strictNullCheckes 配置下会被视为一个 string | undefined 的类型。此时数组长度属性也会发生变化，比如上面的元组 arr4， 其长度类型为 1 | 2 | 3。

可能会觉得元组的可读性实际上并不好。比如对于 [string, number, boolean]来说，你并不能直接知道这三个元素都代表什么，还不如使用对象的形式。在ts4.0中，有了具名元组的支持。
```ts
const arr5: [name: string, age: number, male: boolean] = ["zhangzf", 18, true];

// 可选修饰符
const arr6: [name: string, age: number, male?: boolean] = ["zhangzf", 18];
```
实际上除了显示地越界访问，还可能存在隐式地越界访问，如通过解构赋值的形式：
```ts
const arr7: string[] = [];
const [ele1, ele2, ...rest] = arr7;
```
对于数组，此时仍然无法检查出是否是否存在隐式访问，因为类型层面并不知道它到底有多少个元素。但对于数组，隐式的越界访问也能够被揪出来一个警告：
```ts

const arr8: [string, number, boolean] = ["111", 11, true];
const [name2, age2, male, other] = arr8; // 长度为 "3" 的元组类型 "[string, number, boolean]" 在索引 "3" 处没有元素。
```
### 对象的类型标注
类似于数组类型，在ts中我们也需要特殊的类型标注来描述对象类型，即 interface，你可以理解为它代表了这个对象对外提供的接口结构。
首先我们使用 interface 声明了一个结构，然后使用这个结构作为一个对象的类型标注即可：
```ts
interface IDescription {
  name: string;
  age: number;
  male: boolean;
}
const obj1: IDescription = {
  name: "zhangzf",
  age: 18,
  male: true,
};
```
这里的“描述”指：
- 每一个属性的值必须**一一对应**到接口的属性类型
- 不能有多的属性，也不能有少的属性，包括直接在对象内部声明，或是 obj1.other = 'xxx' 这样属性访问赋值的形式。

除了声明属性以及属性的类型以外，我们还可以对属性进行修饰，常见的修饰包括**可选**与**只读**这两种。

### 修饰接口属性
```ts
interface IDescription1 {
  name: string;
  age: number;
  male?: boolean;
  func?: Function;
}
const obj2: IDescription1 = {
  name: "zhangzf",
  age: 18,
  male: true,
};
```
假设新增一个可选的函数类型属性，然后进行调用：obj2.func()，此时将会产生一个类型报错：不能调用可能是未定义的方法。但可选属性标记不会影响你对这个属性进行赋值，如：
```ts
boj2.male = false;
obj2.func = () => {};
```
即使你对可选属性进行了赋值，TypeScript 仍然会使用**接口的描述为准**进行类型检查，你可以使用类型断言、非空断言或可选链解决。
除了标记一个属性为可选以外，你还可以标记这个属性为只读：readonly。很多同学对这一关键字比较陌生，因为以往js中并没有这一概念，它的作用是**防止对象的属性被再次赋值**。
```ts
interface IDescription2 {
  readonly name: string;
  age: number;
}
const obj3: IDescription2 = {
  name: "zhangzf",
  age: 18,
};
obj3.name = "zhangzf99"; // 无法分配到 "name" ，因为它是只读属性。
```
其实在数组与元组层面也有着只读的修饰，但与对象类型有着两处不同。
- 你只能将整个数组/元组标记为只读，而不能像对象那样标记某个属性为只读。
- 一旦被标记为只读，那这个只读数组/元组的类型上，将不再具有 push、pop 等方法（即会修改原数组的方法），因此报错信息也将是**类型 xxx 上不存在属性“push”这种**。这一实现的本质是**只读数组与只读元组的类型实际上变成了 ReadyonlyArray，而不是Array**。


### type 与 interface
interface 可以用来描述对象、类的结构
type 类型别名可以用来**将一个函数签名、一组联合类型、一个工具类型等等抽离成一个完整独立的类型**。但大部分场景下接口都可以被类型别名所取代。

### unique symbol
Symbol 在js中代表着一个唯一的值类型，类似于字符串类型，可以作为对象的属性名，并用于避免错误修改 对象/Class 内部属性的情况。而在ts中，symbol 类型并不具有这一特性，一百个具有 symbol 类型的对象，它们的 symbol 类型指的都是ts中同一类型。为了实现“独一无二”的这个特性，ts中支持了 unique symbol 这一类型声明，它是 symbol 类型的子类型，每一个 unique symbol 类型都是独一无二的。
```js
const uniqueSymbolFoo: unique symbol = Symbol("zhangzf");
const uniqueSymbolBar: unique symbol = uniqueSymbolFoo; // 不能将类型“typeof uniqueSymbolFoo”分配给类型“typeof uniqueSymbolBar”。
```
在js中，我们可以用 Symbol.for 方法来复用已创建的 Symbol，如 Symbol.for('zhangzf')会首先查找全局是否已经有使用 zhangzf 作为 key 的 Symbol 注册，如果有，则返回这个 Symbol，否则才会创建新的 Symbol。


## 掌握字面量类型与枚举，让你的类型再精确一些
```ts
interface IRes {
  code: number;
  status: string;
  data: any;
}
```
以上代码是一个接口结构，它描述了响应的消息结构，在大多数情况下，这里的 code 与 status 实际值会来自于一组确定值的集合，比如 code 可能是 10000 / 10001 / 50000，status 可能是 “success”/“failure”。而上面的类型只给出了一个宽泛的 number(string)，此时我们既不能在访问code时获得精确的提示，也失去了ts类型即文档的功能。

### 字面量类型与联合类型
```ts
interface Res {
  code: 10000 | 10001 | 50000;
  status: "success" | "failure";
  data: any;
}
```
### 字面量类型
“success”是一个值，为什么可以作为类型？在ts中，这叫做字面量类型，它代表着比原始类型更精确的类型，同是也是原始类型的子类型。
字面量类型主要包括**字符串字面量类型、数字字面量类型、布尔字面量类型、对象字面量类型**，他们可以直接作为类型标注：
```ts
const str: "zhangzf" = "zhangzf";
const num: 59 = 59;
const bool1: true = true;
```

```ts
// 报错！不能将类型“"linbudu599"”分配给类型“"linbudu"”。
const str1: "linbudu" = "linbudu599";

const str2: string = "linbudu";
const str3: string = "linbudu599";
```
上面的代码中，原始类型可以包括任意的同类型值，而字面量类型要求的是值级别的字面量一致。

单独使用字面量类型比较少见，因为单个字面量类型并没有什么实际意义。它通常和联合类型（即这里的 |）一起使用，表达一组字面量类型：
```ts
interface Tmp {
  bool: true | false;
  num: 1 | 2 | 3;
  str: "lin" | "bu" | "du"
}
```
### 联合类型
一组类型的可用集合，只要最终赋值的类型属于联合类型的成员之一，就可以认为符合这个联合类型。联合类型对其成员并没有任何限制，除了上面这样对同一类型字面量的联合，还可以将各种类型混合到一起：
```ts
interface Tmp {
  mixed: true | string | 599 | {} | (() => {}) | (1 | 2);
}
```
**注意**
- 对于联合类型中的函数类型，需要使用 （）包裹起来
- 函数类型并不存在字面量类型，因此这里的 (()=>{}) 就是一个合法的函数类型
- 你可以在联合类型中进一步嵌套联合类型，但这些嵌套的联合类型最终都会别展平到第一级中

联合类型的常用场景之一是通过多个对象类型的联合，来实现手动的互斥属性，即这一属性如果有字段1，那就没有字段2：
```ts
interface Tmp1 {
  user:
    | {
        vip: true;
        expires: string;
      }
    | {
        vip: false;
        promotion: string;
      };
}
declare var tmp: Tmp1;
if (tmp.user.vip) {
  console.log(tmp.user.expires);
}

```
在这个例子中，user 属性会满足普通用户与 vip 用户两种类型，这里vip属性的类型基于布尔字面量类型声明。我们在实际使用时可以通过判断此属性为true，确保接下来的类型推导都会将其类型收窄到vip用户的类型（即联合类型的第一个分支）。这一能力的使用涉及类型守卫与类型控制流分析。

我们也可以通过类型别名来复用一组字面量联合类型：
```ts
type code = 10000 | 10001 | 50000;
type status = 'success' | 'failure';
```

### 对象字面量类型