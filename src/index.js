class Subject{
    constructor(){
        this.state = 0
        this.observers = []
    }
    getState(){
        return this.state
    }
    setState(state){
        this.state = state
        this.notifyAllObservers()
    }
    notifyAllObservers(){
        this.observers.forEach(observer =>{
            observer.update()
        })
    }
    attch(observer){
        this.observers.push(observer)
    }
}

class Observer{
    constructor(name, subject){
        this.name = name
        this.subject = subject
        this.subject.attch(this)
    }
    update(){
            console.log(`${this.name} update, state : ${this.subject.getState()}`)
    }
}

let s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('o2', s)

s.setState(1)