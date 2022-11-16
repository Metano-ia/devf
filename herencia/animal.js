//Clase padre o superclase
class Animal {
    constructor(nombre){
        this.cerebro = true,
        this.patas = 0
        this.nombre= nombre;
        console.log('Se creó una instancia de Animal');
    }
    getNombre(){
        return this.nombre
    }
}

module.exports = {
    Animal
}