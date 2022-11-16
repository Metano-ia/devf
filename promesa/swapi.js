// const request = require('request');

// function getAuthorsById(idPeople){
//     return new Promise((resolve, reject){})
//     const uri= 'authors/1935';
//     const URL= `https://goodreads-devf-aaron.herokuapp.com/api/v1/${uri}`;
//     request.get(URL, (err, response, body) =>{
//         response.statusCode === 200
//         ? resolve(json)
//         : reject('Error en la segunda petición')

//     })

// }


const animalitos = [
{ nombre: "carlitos"  , especie: "conejo" },    // 0
{ nombre: "esteban"   , especie: "perro" },     // 1
{ nombre: "fabiruchis", especie: "tortuga" },   // 2
{ nombre: "anita"     , especie: "gato" },      // 3
{ nombre: "miranda"   , especie: "conejo" },    // 4
{ nombre: "lucas"     , especie: "conejo" },    // 5
{ nombre: "Horacia"   , especie: "tortuga" }    // 6
];

// for (i = 0; i < animalitos.length; i++){
//     if (animalitos[i].especie === "conejo"){
//         console.log(animalitos[i]);
//     }
// }


const x = animalitos.map(element => element.especie);
console.log(x);


//map tres elementos: elemento, index y array
//filter dos elementos: element e index. retorna objetos completos.