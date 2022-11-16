// W H I L E == Mínimo de ejecuciones 0. Se usa cuando algo es indeterminado.

// let numero = 0;
// while(numero < 5){
//     console.log('Soy menor que 5', numero);
//     numero = numero +1;
// }


// F O R
// Declaración de la variable; la condición para detenerse; incremento/actualización.
// Mínimo de ejecuciones: 1. Se debe usar para algo determinado.

// for(let i = 0; i<5; i++){
//     console.log('Dentro del for', i);
// }

// I N C R E M E N T A D O R E S
    // i++, i= i+1, i+=1

// E J E R C I C I O
    //Imprimir los números del 1 al 10.

// for(let i=1; i<=10; i++){
//     console.log('Número', i)
// }

//E J E R C I C I O
// Saber hasta cuando el usuario ingresó un número mayor a 10.

// let num = 0;
// while(num <= 10){
//     console.log(num, 'No mayor a 10');
//     num = prompt('Dame un número:');
// }

// console.log('¡Por fin!')

//R E T O
//Pedir número a al usuario e imprimir su tabla de multiplicar

// let num = prompt('Ingresa un número para conocer tu tabla');
// let tabla = [];
// for(let i=0; i<=10; i++){
//     tabla[i]= num*i; 
// }
// console.log(tabla);

// N U M E R O  A L E A T O R I O
// let aleatorio= Math.floor(Math.random() * 100) +1;
// let num= prompt('¡Dame un número para adivinar!');
// while(num != aleatorio){
//     if(num < aleatorio){
//         console.log('¡Fallaste! Una pista: Es mayor que ' +num);
//     } else if(num > aleatorio){
//         console.log('¡Fallaste! Una pista: Es menor que ' +num);
//     } 
//     num = prompt('¡Dame un número para adivinar!');
// }

// console.log('¡Correcto! ' +num+ ' es ' +aleatorio);


// R E T O 3
//IMPRIMIR *


// let num = prompt('Dime un número');
// let signo= '';
// for(let i=1; i<num; i++){
//    for(let j=1; j<num; j++){
//         signo = signo+'*';
//    }
//    signo= signo+'\n';
// }

// console.log(signo);

    //Imprimir los números del 1 al 10.

// for(let i=50; i<=100; i= i+2){
//     console.log('Número', i)
// }

// T A R E A

// Imprimir triángulo dependiendo de número del usuario.
//   *
//  **
// ***
//****