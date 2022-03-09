// 🧯 Replace = este metodo me permite pasarle el primer valor que vamos a encontrar dentro de este string y reemplazarlo por otro

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python"); 
console.log(replacedString);

//// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll("JavaScript", "Python"); //el replaceAll me permite reemplazar todas las coincidencias  que coincidan con la primera palabra que pasamos
console.log(replacedString2);

//// Output: Python es maravilloso, con Python puedo crear el futuro de la web.

// 🔒 Metodos privados = podemos añadir un prefijo que nos va permitir tener metodos privados que no van a poder ser accedidos 
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
};

const message = new Message();
message.show('Hola!');

//  👽 Promise Any 

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//  🦴 WeakRef(element) = esto le permite mantener una referencia debil de otro objeto  sin evitar que este objeto sea pasado o recogido por el garbagecollector

class AnyClass {
    constructor(element){
        this.ref = new WeakRef
    }
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);