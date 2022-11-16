// console.log(document);

let titulo = document.getElementById('titulo');

// console.log(titulo);
// console.log(titulo.innerHTML);//sirve para acceder al valor de las etiquetas de texto.
let nombre = document.getElementById('nombre');
let boton = document.getElementById('boton');


// se define funcion ANTES de ser utilizada
function traerNombre(){
    let x = nombre.value;
    titulo.innerHTML = x;
}


//Método con click
                    //(evento, función)
boton.addEventListener( 'click', traerNombre );