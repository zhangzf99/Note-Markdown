"use strict";
// 原始类型的类型标注
const name1 = "zhangzf99";
const age = 10;
const bool = true;
const undef = undefined;
const nul = null;
const obj = { name1 };
const bigInt1 = 90909907986756746545n;
const bigint2 = BigInt(90909907986756746545n);
const symbolVar = Symbol("unique");
// 函数
function fun1(name1) {
    console.log("name1", name1);
}
function fun2(name1) {
    return name1;
}
// 数组
const arr1 = ["111"];
const arr2 = [111];
// 元组
const arr3 = ["111", 1, null];
// console.log(arr3[99]); // 报错
const arr4 = ["111", 1, true];
const arr5 = ["zhangzf", 10, true];
const arr6 = ["zhangzf", 19];
const obj1 = {
    name: "zhangzf99",
    age: 12,
    func() { },
};
const obj2 = {
    name: "zhangzf99",
    age: 10,
};
// 枚举
var pageUrl;
(function (pageUrl) {
    pageUrl["Home_Page_Url"] = "url1";
    pageUrl["SetTing_Page_Url"] = "url2";
    pageUrl["Share_Page_Url"] = "url3";
})(pageUrl || (pageUrl = {}));
const home = pageUrl.Home_Page_Url;
// 函数
function foo(name) {
    return name.length;
}
const foo1 = function (name) {
    return name.length;
};
const foo3 = (name) => {
    return name.length;
};
const foo4 = (name) => {
    return name.length;
};
const foo5 = (name) => {
    return name.length;
};
// void类型
function foo6(name) {
    console.log(name);
}
function foo7() {
    return;
}
// 可选参数与rest参数
function foo8(name, age = 18) {
    return name.length + age;
}
function foo9(arg1, ...rest) { }
function foo10(arg1, ...rest) { }
// 重载
function func(foo, bar) {
    if (bar) {
        return String(foo);
    }
    else {
        return foo * 10;
    }
}
function func1(foo, bar) {
    if (bar) {
        return String(foo);
    }
    else {
        return foo * 599;
    }
}
const res1 = func(599); // number
const res2 = func(599, true); // string
const res3 = func(599, false); // number
// 异步函数、generator函数等类型签名
async function asyncFunc() { }
// 类
class Foo {
    constructor(inputProp) {
        this.prop = inputProp;
    }
    print(addon) {
        console.log(`${this.prop} and ${addon}`);
    }
    get PropA() {
        return `${this.prop}+A`;
    }
    set PropA(value) {
        this.prop = `${value}+A`;
    }
}
// 修饰符
class Foo1 {
    constructor(inputProp) {
        this.prop = inputProp;
    }
    print(addon) {
        console.log(`${this.prop} and ${addon}`);
    }
    get PropA() {
        return `${this.prop}+A`;
    }
    set PropA(value) {
        this.PropA = `${value}+A`;
    }
}
// unknown类型
let unknownVar = "linbudu";
unknownVar = false;
unknownVar = "linbudu";
unknownVar = {
    site: "juejin",
};
unknownVar = () => { };
// const val1: string = unknownVar; // Error
const val5 = unknownVar;
const val6 = unknownVar;
