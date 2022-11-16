const {Maestro} = require('./maestro.js');

class MaestroFisica extends Maestro {
    constructor(materia, promedio, antiguedad){
        super('Física', [4,5,6,7,5], 14);
        this.antiguedad = antiguedad;
    }
}

module.exports = {
    MaestroFisica
}