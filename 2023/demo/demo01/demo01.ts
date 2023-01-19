const name1: string = "zhangzf99";
const age: number = 10;
const bool: boolean = true;
const undef: undefined = undefined;
const nul: null = null;
const obj: object = { name1 };
const bigint1: bigint = 90909907986756746545n;
const bigint2: bigint = BigInt(90909907986756746545);
const symbolVar: symbol = Symbol("unique");

const temp1: null = null;
const temp2: undefined = undefined;
// const temp3: string = null; // 仅在关闭 strictNullChecks 时成立，下同
// const temp4: string = undefined;

function func1() {}
function func2() {
  return;
}
function func3(): void {
  return undefined;
}

const arr1: string[] = ["111", "222"];
const arr2: Array<number> = [111, 2];
// console.log(arr1[999]);

const arr3: [string, number, null] = ["111", 11, null];
// console.log(arr3[999]);

const arr4: [string, number?, boolean?] = ["111", 11];
// console.log(arr4.length);

const arr5: [name: string, age: number, male: boolean] = ["zhangzf", 18, true];
const arr6: [name: string, age: number, male?: boolean] = ["zhangzf", 18];

const arr7: string[] = [];
const [ele1, ele2, ...rest] = arr7;

const arr8: [string, number, boolean] = ["111", 11, true];
// const [name2, age2, male, other] = arr8;

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
// obj1.name = 222

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

interface IDescription2 {
  readonly name: string;
  age: number;
}
const obj3: IDescription2 = {
  name: "zhangzf",
  age: 18,
};
// obj3.name = "zhangzf99";

const uniqueSymbolFoo: unique symbol = Symbol("zhangzf");
// const uniqueSymbolBar: unique symbol = uniqueSymbolFoo; // 不能将类型“typeof uniqueSymbolFoo”分配给类型“typeof uniqueSymbolBar”。

declare const uniqueSymbolFoo1: unique symbol;
// const uniqueSymbolBaz: typeof uniqueSymbolFoo = uniqueSymbolFoo1;

const str: "zhangzf" = "zhangzf";
const num: 59 = 59;
const bool1: true = true;

interface Tmp {
  mixed: true | string | 599 | {} | (() => {}) | (1 | 2);
}

// interface Tmp1 {
//   user:
//     | {
//         vip: true;
//         expires: string;
//       }
//     | {
//         vip: false;
//         promotion: string;
//       };
// }
// declare var tmp: Tmp1;
// if (tmp.user.vip) {
//   console.log(tmp.user.expires);
// }

interface Tmp2 {
  obj: {
    name: "zhangzf";
    age: 18;
  };
}
const tmp: Tmp2 = {
  obj: {
    name: "zhangzf",
    age: 18,
  },
};

enum PageUrl {
  Home_Page_Url = "url1",
  Setting_Page_Url = "url2",
  Share_Page_Url = "url3",
}
const home = PageUrl.Home_Page_Url;

enum Items {
  Foo,
  Bar,
  Baz,
}

enum Items1 {
  // 0
  Foo,
  Bar = 599,
  // 600
  Baz,
}

const returnNum = () => 100 + 499;
enum Items2 {
  Foo = returnNum(),
  Bar = 599,
  Baz,
}

enum Items3 {
  Baz,
  Foo = returnNum(),
  Bar = 599,
}

enum Mixed {
  Num = 599,
  Str = "zhangzf",
}

enum Items4 {
  Foo,
  Bar,
  Baz,
}
const fooValue = Items4.Foo; // 0
const fooKey = Items[0]; // 'Foo'

const enum Items5 {
  Foo,
  Bar,
  Baz,
}
const fooValue1 = Items.Foo; // 0

function foo(name: string): number {
  return name.length;
}

const foo1 = function (name: string): number {
  return name.length;
};

const foo2: (name: string) => number = function (name) {
  return name.length;
};

const foo3 = (name: string): number => {
  return name.length;
};

const foo4: (name: string) => number = (name) => {
  return name.length;
};

type FucnFoo = (name: string) => number;
const foo5: FucnFoo = (name) => {
  return name.length;
};

interface FuncFooStruct {
  (name: string): number;
}

function foo6(): void {}
function bar(): void {
  return;
}

function bar1(): undefined {
  return;
}

// 在函数逻辑中注入可选参数默认值
function foo7(name: string, age?: number): number {
  const inputAge = age || 18;
  return name.length + inputAge;
}
// 直接为可选参数声明默认值
function foo8(name: string, age: number = 18): number {
  const inputAge = age;
  return name.length + inputAge;
}

function foo9(name: string, age: number = 18): number {
  const inputAge = age || 18;
  return name.length + inputAge;
}

function foo10(arg1: string, ...rest: any[]) {}

function foo11(arg1: string, ...rest: [number, string]) {}

function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 10;
  }
}

// function func1(foo: number, bar: true): string;
// function func1(foo: number, bar?: false): number;
// function func1(foo: number, bar?: boolean): string | number {
//   if (bar) {
//     return String(foo);
//   } else {
//     return foo * 599;
//   }
// }
// const res1 = func(599); // number
// const res2 = func(599, true); // string
// const res3 = func(599, false); // number

class Foo {
  prop: string;
  constructor(inputProp: string) {
    this.prop = inputProp;
  }

  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);
  }

  get propA(): string {
    return `${this.prop}+A`;
  }

  set propA(value: string) {
    this.prop = `${value}+A`;
  }
}

const Foo1 = class {
  prop: string;
  constructor(inputProp: string) {
    this.prop = inputProp;
  }
  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);
  }
};

class Foo3 {
  private prop: string;
  constructor(inputProp: string) {
    this.prop = inputProp;
  }
  protected print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);
  }

  public get propA(): string {
    return `${this.prop}+A`;
  }

  public set propA(value: string) {
    this.propA = `${value}+A`;
  }
}

class Foo4 {
  constructor(public arg1: string, private arg2: boolean) {}
}
new Foo("zhangzf", true);
