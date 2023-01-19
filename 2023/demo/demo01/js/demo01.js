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
const tmp = {
    obj: {
        name: "zhangzf",
        age: 18,
    },
};
var PageUrl;
(function (PageUrl) {
    PageUrl["Home_Page_Url"] = "url1";
    PageUrl["Setting_Page_Url"] = "url2";
    PageUrl["Share_Page_Url"] = "url3";
})(PageUrl || (PageUrl = {}));
const home = PageUrl.Home_Page_Url;
var Items;
(function (Items) {
    Items[Items["Foo"] = 0] = "Foo";
    Items[Items["Bar"] = 1] = "Bar";
    Items[Items["Baz"] = 2] = "Baz";
})(Items || (Items = {}));
var Items1;
(function (Items1) {
    // 0
    Items1[Items1["Foo"] = 0] = "Foo";
    Items1[Items1["Bar"] = 599] = "Bar";
    // 600
    Items1[Items1["Baz"] = 600] = "Baz";
})(Items1 || (Items1 = {}));
const returnNum = () => 100 + 499;
var Items2;
(function (Items2) {
    Items2[Items2["Foo"] = returnNum()] = "Foo";
    Items2[Items2["Bar"] = 599] = "Bar";
    Items2[Items2["Baz"] = 600] = "Baz";
})(Items2 || (Items2 = {}));
var Items3;
(function (Items3) {
    Items3[Items3["Baz"] = 0] = "Baz";
    Items3[Items3["Foo"] = returnNum()] = "Foo";
    Items3[Items3["Bar"] = 599] = "Bar";
})(Items3 || (Items3 = {}));
var Mixed;
(function (Mixed) {
    Mixed[Mixed["Num"] = 599] = "Num";
    Mixed["Str"] = "zhangzf";
})(Mixed || (Mixed = {}));
var Items4;
(function (Items4) {
    Items4[Items4["Foo"] = 0] = "Foo";
    Items4[Items4["Bar"] = 1] = "Bar";
    Items4[Items4["Baz"] = 2] = "Baz";
})(Items4 || (Items4 = {}));
const fooValue = Items4.Foo; // 0
const fooKey = Items[0]; // 'Foo'
const fooValue1 = Items.Foo; // 0
function foo(name) {
    return name.length;
}
const foo1 = function (name) {
    return name.length;
};
const foo2 = function (name) {
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
function foo6() { }
function bar() {
    return;
}
function bar1() {
    return;
}
// 在函数逻辑中注入可选参数默认值
function foo7(name, age) {
    const inputAge = age || 18;
    return name.length + inputAge;
}
// 直接为可选参数声明默认值
function foo8(name, age = 18) {
    const inputAge = age;
    return name.length + inputAge;
}
function foo9(name, age = 18) {
    const inputAge = age || 18;
    return name.length + inputAge;
}
function foo10(arg1, ...rest) { }
function foo11(arg1, ...rest) { }
function func(foo, bar) {
    if (bar) {
        return String(foo);
    }
    else {
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
    constructor(inputProp) {
        this.prop = inputProp;
    }
    print(addon) {
        console.log(`${this.prop} and ${addon}`);
    }
    get propA() {
        return `${this.prop}+A`;
    }
    set propA(value) {
        this.prop = `${value}+A`;
    }
}
const Foo1 = class {
    constructor(inputProp) {
        this.prop = inputProp;
    }
    print(addon) {
        console.log(`${this.prop} and ${addon}`);
    }
};
class Foo3 {
    constructor(inputProp) {
        this.prop = inputProp;
    }
    print(addon) {
        console.log(`${this.prop} and ${addon}`);
    }
    get propA() {
        return `${this.prop}+A`;
    }
    set propA(value) {
        this.propA = `${value}+A`;
    }
}
class Foo4 {
    constructor(arg1, arg2) {
        this.arg1 = arg1;
        this.arg2 = arg2;
    }
}
new Foo("zhangzf", true);
