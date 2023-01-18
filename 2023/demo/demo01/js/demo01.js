"use strict";
const name1 = "zhangzf99";
const age = 10;
const bool = true;
const undef = undefined;
const nul = null;
const obj = { name1 };
const bigint1 = 90909907986756746545n;
const bigint2 = BigInt(90909907986756746545);
const symbolVar = Symbol("unique");
const temp1 = null;
const temp2 = undefined;
// const temp3: string = null; // 仅在关闭 strictNullChecks 时成立，下同
// const temp4: string = undefined;
function func1() { }
function func2() {
    return;
}
function func3() {
    return undefined;
}
const arr1 = ["111", "222"];
const arr2 = [111, 2];
// console.log(arr1[999]);
const arr3 = ["111", 11, null];
// console.log(arr3[999]);
const arr4 = ["111", 11];
// console.log(arr4.length);
const arr5 = ["zhangzf", 18, true];
const arr6 = ["zhangzf", 18];
const arr7 = [];
const [ele1, ele2, ...rest] = arr7;
const arr8 = ["111", 11, true];
const obj1 = {
    name: "zhangzf",
    age: 18,
    male: true,
};
const obj2 = {
    name: "zhangzf",
    age: 18,
    male: true,
};
const obj3 = {
    name: "zhangzf",
    age: 18,
};
// obj3.name = "zhangzf99";
const uniqueSymbolFoo = Symbol("zhangzf");
// const uniqueSymbolBaz: typeof uniqueSymbolFoo = uniqueSymbolFoo1;
const str = "zhangzf";
const num = 59;
const bool1 = true;
if (tmp.user.vip) {
    console.log(tmp.user.expires);
}
