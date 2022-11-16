
const {Animal}= require('./animal')
//Clase hijo o subclase
class Perro extends Animal{
    constructor(noPatas, raza, nombre){
        super('ayudanteSanta');
        this.patas = noPatas;
        this.raza = raza;
        console.log('Se creó una instancia de perro');
    }
    ladrar(){
        return 'guau'
    }
}

module.exports = {
    Perro
}