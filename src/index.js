class Person{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}

let p = new Person('sb')
// alert(p.getName());

setInterval(()=>{
    document.write(new Date().toLocaleString() + '</br>')
},1000)