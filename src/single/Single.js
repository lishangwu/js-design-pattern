class SingleObject{
    login(){
        console.log('login..');
    }
}

//自执行的函数
SingleObject.getInstance = (function(){
    let instance
    return function (){
        // if(!instance){
        //     instance = new SingleObject()
        // }
        return !instance ? new SingleObject() : instance
    }
})()

let obj1 = SingleObject.getInstance()
obj1.login()

let obj2 = SingleObject.getInstance()
obj2.login()

console.log(obj1 === obj2) // true