//Asi se trabajaba antes de ES6
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
  }
  
  // es6
  function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
  };
  
  //para llamar una funcion hay dos formas 
  //para el primer caso, hay funciones que toman los atributos por si mismos, entonces se pueden dejar vacias
  newFunction2();
  newFunction2('Ricardo', '23', 'CO');

  
  //Concatenacion antes de ES6
  let hello = "Hello";
  let world = "World";
  let epicPhrase = hello + ' ' + world;
  console.log(epicPhrase);

  //Template literal =  nos permite separa o unir varios elementos segun sea el caso
  let epicPhrase2 = `${hello} ${world}`;
  console.log(epicPhrase2);
  
  //Clase 3 Let y Const,  Spread 0 y Destructuracion

  //Antes de ES6 se usaba asi, sin embargo no es una opcion muy optima
  let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
    + "otra frase epica que necesitamos."
  
  // es6
  let lorem2 = `otra frase epica que necesitamos
  ahora es otra frase epica
  `;
  
  console.log(lorem);
  console.log(lorem2);
  //Nota: Si bien el el uso del ";" no es necesario en estos casos, se usa porque hace parte de las buenas practicas de progrmacion

//Creamos un objeto 
  let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
  }
  
  //Al utilizar la notacion person.name llamaremos al atributo correspondiente a la key name del objeto person
  console.log(person.name, person.age);
  

  //Desestructuracion del objeto 
  let { name } = person;
  console.log(name);
  //lo que hicimos fue desestructurar nuestro objeto, esta notacion es util porque podemos elegir cuales keys necesitamos del mismo objeto ya podemos desplegarlas en console.log sin necesidad de usar (objeto.key)
  
  //Trabajando con Arrays
  let team1 = ['Oscar', 'Julian', 'Ricardo'];
  let team2 = ['Valeria', 'Yesica', 'Camila'];
  
  //Ahora queremos tener un array  que contenga a team1  y team2, pero ademas agregar un nuevo miembro, para esto usamos (...)esto nos permite traer un array completo
  let education = ['David', ...team1, ...team2];
  // (...) es el spread operator 
  
  console.log(education);
  
  //Originalmente se usaba var para asignar variables 
  //El uso de LET se usa para el scope, es decir se define en el bloque de codigo en el cual va a ser llamado
  {
    var globalVar = "Global Var";
  }
  
  {
    let globalLet = 'Global Let';
    console.log(globalLet);
  }
  
  console.log(globalVar);
  // ¿porque no usar VAR? JS es un lenguaje debilmente tipado, es decir cuando definimos una variable con VAR, podemos cambiar su valor en el transcurso del codigo y con esto podriamos ocasionar distintos BUGS y errores en nuestro programa.
  //Por dicho motivo es mejor usar LET y CONST
  const a = 'b';
  a = 'a';

  //A diferencia de LET, CONST se puede usar en el scope global, sin embargo este no se deja modificar como si lo hacia VAR.
  //Cuando intentamos hacerlo, este nos muestra el valor inicial que le pusimos a nuestra variable y posteriormente un error que corresponde a cuando quisimos reasignarle otro valor
  console.log(a);

//Arrow Functions, Promesas y Parámetros en objetos
let name = 'oscar';
let age = 32;

//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

//ES6 Arrow function o Funciones de tipo flecha 
//Estas funciones vienen a trabajar con dos elementos: una sintaxis mas reducida y un diss no vinculable 
const names = [
  { name: 'Oscar', age: 32 },
  { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item) { //al arreglo le paso el metodo map me permite iterar por cada uno de estos elementos, le pasamos una funcion anonima  
  console.log(item.name); //por cada uno de los elementos del arreglo names me va a imprimir cada nombre
})

//Sintaxis Arrow functions ES6
let listOfNames2 = names.map(item => console.log(item.name));


const listOfNames3 = (name, age, country) => {
  
}

const listOfNames4 = name => {

}

//estamos generando una funcion la cual recibe un valor que en este caso es numero
//y lo que hace es multiplicar ese numero por si mismo y al final esto me lo retorna
const square = num => num * num;

//PROMESAS, estas nos permiten trabajar el asincronismo, esto significa que js no es un lenguaje que es sincronico, es decir que pueda ejecutar muchos elementos al mismo tiempo sino que va a ejecutando elemento por elemento.

const helloPromise = () => {
  return new Promise((resolve, reject) => { //la promesa contiene dos elementos result y reject nos va a permitir una validacion, es decir que la promesa tiene la espera de una logica que vamos a resolver ya sea result o rechazarla
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise() //funcion 
  .then(response => console.log(response)) //el valor llamado then nos permite obtener la respuesta 
  .catch(error => console.log(error)); // el valor llamado catch por su parte nos permite obtener el error o el valor que no ha sido correcto 

//CLASES,MODULOS Y GENERADORES

//creamos un clase que tiene un constructor  el cual esta asignando dentro del scope global estas dos variables A y B
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
// Aqui  tenemos el metodo al cual le vamos a pasar esos dos elementos, en este caso seria los dos valores que quiero sumar y estoy asignando a esa variables que previamente construimos dentro de la clase  a esos valores que recibo  y al final lo que se hace es retornar la suma de esos elementos
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
//Aqui estamos haciendo uso del metodo
const calc = new calculator();
console.log(calc.sum(2, 2));

//MODULOS
import { hello } from './module'; // aqui le estamos diciendo que traiga la funcion hello que se encuentra en el archivo modulo

hello(); //aqui estamos trayendo esa logica  que separamos y ya la podemos utilizar haciendo el llamado de hello, asi ya tendriamos esta funcion disponible dentro de este documento

//GENERETORS  = es una funcion especial que retorna una serie de valores segun el algoritmo definido 
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value); // el valor next que me va a permitir ejecutar la primer logica  y obtener ese valor segun sea el caso
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);