const {Gato}= require('./gato')
const {Perro}= require('./perro')


const ayudanteSanta= new Perro(4,'Galgo');
console.log(ayudanteSanta.getNombre());
const felix= new Gato(30,80,'Gato felix');
console.log(felix.getNombre());