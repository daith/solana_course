"use strict";
console.log("this is my first ts");
let myName = "wilson";
let lastName = "Hsieh";
let year = 2023;
let time;
function getValue() {
    return "";
}
time = getValue();
function sum(x, y) {
    return x + y;
}
let data = sum(1, 2);
// arror function
let sub = (x, y) => {
    return x - y;
};
function getName(str = "") {
    return str + "~, Hi";
}
// function getLastName(id?:number):string{
//     return id.toString()
// }
let errlog = (msg) => {
    console.log(msg);
};
errlog("qqq");
let userInfo = {
    name: "John",
    age: 30,
    birthday: "HN",
    sexual: "123456789"
};
function parentUserInfo(info) {
    return info;
}
class UserAccount {
    constructor(email, name, phone, password, location = "Earth") {
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.password = password;
        this.location = location;
    }
}
class UserAccountInfo {
    constructor(email, name, phone, password, location = "Earth") {
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.password = password;
        this.location = location;
    }
    getPassword() {
        this.password;
    }
}
class Login extends UserAccountInfo {
    getPassword() {
        return this.name;
    }
}
let login1 = new Login("wei@example.com", "password", "admin", "admin");
class mama {
    constructor() {
        this.message = "";
    }
    doSomething() {
    }
    getsomething() {
        return "22";
    }
    checkLoginStatus() {
        return false;
    }
}
