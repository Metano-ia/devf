class Padawan {
    // Scope viven las variables
    // this vive en mi objeto

    constructor(name,age,number_lectures){
        this.name = name;
        this.age = age;
        this.number_lectures= number_lectures;
    }
}

var padawan1 = new Padawan("Yolis sm", 25, 160);
var padawan2 = new Padawan("El cacas", 18, 170);

console.log(padawan1);

console.log(padawan2);