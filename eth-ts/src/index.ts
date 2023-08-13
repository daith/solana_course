console.log("this is my first ts");
let myName ="wilson";
let lastName:string = "Hsieh";
let year = 2023;

let time:number;

function getValue() : any {
    return "" 
}

time = getValue();

function sum(x:number ,y:number):number {
    return x+y;
}

let data = sum(1,2);

// arror function
let sub = (x:number,y:number):number =>{
    return x-y;
}

function getName(str:string=""):string{
    return str +"~, Hi"
}


// function getLastName(id?:number):string{
//     return id.toString()
// }

let errlog =(msg:string)=>{
    console.log(msg)
}

errlog("qqq")

type User = {
    name:string,
    birthday:string,
    sexual:string,
    age:number
}

let userInfo:User = {
    name: "John",
    age: 30,
    birthday: "HN",
    sexual: "123456789"
  };

  function parentUserInfo(info:User):User{
    return info;
  }



  class UserAccount{
    email: string;
    public name: string;
    readonly phone: string;
    private password: string;
    private location: string;
    constructor(
        email: string,
        name: string,
        phone: string,
        password: string,
        location: string = "Earth"
      ) {
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.password = password;
        this.location = location;
      }
    }

    class UserAccountInfo {
        constructor(
          public email: string,
          public name: string,
          readonly phone: string,
          private password: string,
          private location: string = "Earth"
        ) {}
        getPassword(){
            this.password;
        }
      }

      class Login extends UserAccountInfo{
        getPassword():string{
             return this.name;
        }
      }

      let login1 = new Login("wei@example.com", "password", "admin", "admin");
      
      interface actorfunc{
        message:string;
        doSomething():void;
        getsomething():string;
        checkLoginStatus(): boolean;
      }

      class mama implements actorfunc{
        message="";
        doSomething():void{

        }
        getsomething():string{
            return "22"
        }
        checkLoginStatus(): boolean{
            return false;
        }
      }