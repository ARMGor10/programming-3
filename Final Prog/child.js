class Child extends Parents{
    constructor(name,age,gen){
        super(name,age,gen)
        this.high =  177;
    }
    
    walk(){
        super.walk();
        console.log(" es im uzacov kqelem");
    }

    jump(){
        console.log("Jump"+ this.high);
    }
}