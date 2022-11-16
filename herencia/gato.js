const {Animal}= require('./animal')
//Clase hijo o subclase
class Gato extends Animal{
    constructor(nivelTernura, nivelMaldad, nombre){
        super(nombre);
        this.nivelTernura = nivelTernura;
        this.nivelMaldad = nivelMaldad;
        console.log('Se creó una instancia de gato');
    }
    maullar(){
        return 'miau'
    }
}

module.exports = {
    Gato
}