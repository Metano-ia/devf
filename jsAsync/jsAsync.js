// CALLBACKS

// let callback = () => {
//     console.log(2);
// }

// console.log(1);
// setTimeout(callback,3000);
// console.log(3);


// console.log(1);
// setTimeout(() => {
//     console.log(2);
// },5000);
// console.log(3);

// CUELLO DE BOTELLA

console.log(1);
console.log(2);
setTimeout(() =>{
console.log(3);
},2000)
for(let i=0; i<=99999; i++);
console.log(4);