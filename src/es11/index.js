//dynamic import: podremos realizar importacion dinamica de piezas de codigo
// Permite llamar nuestro código cuando lo necesitemos.

// El archivo no se va a cargar de manera automatica.

// Con esto podremos dividir nuestro codigo y evitar que la app sea muy grande.

const button = document.getElementById('btn'); //aqui nos estamos trayendo el boton 

button.addEventListener('click', async function () { //el addEvenlistener me permite escuchar algun cambio o accion sobre este boton
    const module = await import('./file.js'); //aqui estamos esperando que nuestra funcion espere el import dentro del llamado al archivo file
    module.hello(); //aqui estamos llamando a este recurso del archivo file.js ya que la hemos importado 
})


// 🔢 Big INT: permite trabajar con numeros mayores a 2^53

// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;

// 2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// 🤝 Promise All Settled : nos va a devolver una promesa que se resuelve despues de que todas 
//las promesas dadas se hayan cumplido o rechazado en una serie de objetos que se describe el 
//resultado de cada promesa 

const promise1 = new Promise((resolve,reject) => reject("reject")); 
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));


Promise.allSettled([promise1, promise2, promise3]) 
    .then(response => console.log(response));
//Promise all va a ser rechazada en el momento que se rechaza alguna de estas promesas
//Allsettled = no importa el estado de las promesas solo esperara hasta que todas sean resueltas

// 🌎 Global This

console.log(window);
console.log(globalThis);

// 🔍 Nuevo operador lógico: null operator

const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)


// ⛓ Optional chaining

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}
