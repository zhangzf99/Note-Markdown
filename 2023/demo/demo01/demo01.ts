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
