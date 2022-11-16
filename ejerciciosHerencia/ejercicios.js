class Electrodomestico {
    constructor(precio, color, capacidad){
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
    }

    consumoEnergetico(){
        return 100;
    }
}

class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidad, carga){
        super(precio, color, capacidad)
        this.carga = carga;
    }
    precioFinal(){
        return consumoEnergetico * carga
    }
}

const final= new Lavadora (100, 'Rosa', 100, 1)
console.log(final)