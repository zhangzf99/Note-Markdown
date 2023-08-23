// 原始类型的类型标注
const name1: string = "zhangzf99";
const age: number = 10;
const bool: boolean = true;
const undef: undefined = undefined;
const nul: null = null;
const obj: object = { name1 };
const bigInt1: bigint = 90909907986756746545n;
const bigint2: bigint = BigInt(90909907986756746545n);
const symbolVar: symbol = Symbol("unique");

// 函数
function fun1(name1: string): void {
  console.log("name1", name1);
}
function fun2(name1: string): string {
  return name1;
}

// 数组
const arr1: string[] = ["111"];
const arr2: Array<number> = [111];

// 元组
const arr3: [string, number, null] = ["111", 1, null];
// console.log(arr3[99]); // 报错
const arr4: [string, number?, boolean?] = ["111", 1, true];

const arr5: [name: string, age: number, male: boolean] = ["zhangzf", 10, true];

const arr6: [name: string, age: number, male?: boolean] = ["zhangzf", 19];

// 接口
interface IDescription {
  name: string;
  age: number;
  male?: boolean;
  func: Function;
}
const obj1: IDescription = {
  name: "zhangzf99",
  age: 12,
  func() {},
};

interface IDescription2 {
  readonly name: string;
  age: number;
}
const obj2: IDescription2 = {
  name: "zhangzf99",
  age: 10,
};
// obj2.name = "zhangzf"; // 报错

interface Res {
  code: 10010 | 10011 | 10012;
  status: "success" | "failure";
  data: any;
}

// 枚举
enum pageUrl {
  Home_Page_Url = "url1",
  SetTing_Page_Url = "url2",
  Share_Page_Url = "url3",
}
const home = pageUrl.Home_Page_Url;

// 函数
function foo(name: string): number {
  return name.length;
}
const foo1: (name: string) => number = function (name) {
  return name.length;
};
const foo3 = (name: string): number => {
  return name.length;
};
const foo4: (name: string) => number = (name) => {
  return name.length;
};
type FuncFoo = (name: string) => number;
const foo5: FuncFoo = (name) => {
  return name.length;
};

// void类型
function foo6(name: string): void {
  console.log(name);
}
function foo7(): undefined {
  return;
}

// 可选参数与rest参数
function foo8(name: string, age: number = 18): number {
  return name.length + age;
}

function foo9(arg1: string, ...rest: any[]) {}
function foo10(arg1: string, ...rest: [number, string]) {}

// 重载
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 10;
  }
}
// 使用重载改写上述函数
function func1(foo: number, bar: true): string;
function func1(foo: number, bar?: false): number;
function func1(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}
const res1 = func(599); // number
const res2 = func(599, true); // string
const res3 = func(599, false); // number

// 异步函数、generator函数等类型签名
async function asyncFunc(): Promise<void> {}

// 类
class Foo {
  prop: string;
  constructor(inputProp: string) {
    this.prop = inputProp;
  }
  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);
  }

  get PropA(): string {
    return `${this.prop}+A`;
  }
  set PropA(value: string) {
    this.prop = `${value}+A`;
  }
}

// 修饰符
class Foo1 {
  private prop: string;
  constructor(inputProp: string) {
    this.prop = inputProp;
  }
  protected print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);
  }
  public get PropA(): string {
    return `${this.prop}+A`;
  }
  public set PropA(value: string) {
    this.PropA = `${value}+A`;
  }
}

// unknown类型
let unknownVar: unknown = "linbudu";
unknownVar = false;
unknownVar = "linbudu";
unknownVar = {
  site: "juejin",
};
unknownVar = () => {};
// const val1: string = unknownVar; // Error
const val5: any = unknownVar;
const val6: unknown = unknownVar;
