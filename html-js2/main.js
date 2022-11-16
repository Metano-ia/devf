// const clickButton = document.getElementById('clickButton')
// const username = document.getElementById('username');
// const password = document.getElementById('password');
// const cpassword = document.getElementById('cpassword');
// const error = document.getElementById('error');
// const check = document.getElementById('terminos');


// const clickFunction = (event) =>{
//     //Previene la recarga de la página por el formulario
//     event.preventDefault();
//         if(password.value === cpassword.value){
//             console.log("son iguales");
//         } else{
//             console.log("son diferentes");
//             error.innerHTML = "Las contraseñas no coinciden";
//         }

//         if(check.checked){
//             console.log('checked');
//         } else {
//             console.log('No checked');
//         }
// }

// clickButton.addEventListener('click', clickFunction);

const button = document.getElementById('button');
const nombre = document.getElementById('exampleInputEmail1');
const contraseña = document.getElementById('exampleInputPassword1');
const texto = document.getElementById('exampleFormControlTextarea1');
const check = document.getElementById('exampleCheck1');

const clickFunction = (event) =>{
    event.preventDefault();
    console.log(nombre.value);
    console.log(contraseña.value);
    console.log(texto.value);
        if(check.checked){
            console.log('Si pasa');
        } else {
            console.log('No pasa');
        }
}

button.addEventListener('click', clickFunction);