const {Maestro} = require('./maestro.js');

class MaestroMusica extends Maestro{
    constructor(materia, promedio, edad){
        super('Música', [6,7,4,5,6]);
        this.edad = edad;
    }
}

module.exports = {
 MaestroMusica
}
