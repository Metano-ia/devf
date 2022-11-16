// let callback = () => {
//     console.log("Hola mundo desde un callback");
// }

// function hacerConsoleLog(callback){
//     callback()
// }

// hacerConsoleLog(callback)


// function imprimirMensaje(mensaje,callback){
//     callback(mensaje);
// }

// imprimirMensaje('Este es un mensaje', (unMensaje) => {
//     console.log('Se ejecutó el callback');
//     console.log(unMensaje);
// })

// EJERCICIO 4
// function imprimirMensaje(n1, n2, ope){
//     return ope (n1,n2)
// }

// function suma(n1, n2){
//     return (n1+n2)
// }

// function resta(n1, n2){
//     return (n1-n2)
// }

// function mult(n1, n2){
//     return (n1*n2)
// }

// console.log(imprimirMensaje(151,205, mult));


// EJERCICIO 5
// function imprimirMensaje(mensaje,carac){
//     return carac(mensaje)
// }


// function minus(mensaje){
//     return mensaje.toLowerCase();
// }

// function mayus(mensaje){
//     return mensaje.toUpperCase();
// }

// console.log(imprimirMensaje('El Marcos', minus))

// function imprimirMensaje (array,analisis){
//     return analisis(array) 
// }

// function compar (array){
//     for(var i=0; i = 4; i++){
//         if (array[i] > 120){
//             console.log(i);
//         }
//     }
// }

// console.log(imprimirMensaje([789,40,20,13],compar));