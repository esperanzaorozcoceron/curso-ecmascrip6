//Operador de reposo = puede extraer las propiedades de un objeto que aun no se ha construido
const obj = {
 name: 'Oscar',
 age: 32,
 country: 'MX'
};

let { name, ...all } = obj;
console.log(all);

//propiedades de propagacion = podemos unir uno o cuantos elementos queramos de objetos a un nuevo objeto

const obj = {
    name: 'Oscar',
    age: 32,
};

const obj1 = {
    ...obj, //lo que hace este operador ... de propagacion es unir ambos objetos
    country: 'MX'
};

console.log(obj1)

//PROMISE. FINALLY

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ?  setTimeOut(() => resolve( 'Hello world' ), 3000)
        : reject (new Error ("test error"))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("ya finalizo"))

//REGEXDATA

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/  //aqui estamos creando una constitucion de como vamos a manejar las fechas  partiendo primero por el año, mes y dia 
  const match = regexData.exec('2018-04-20'); //el match nos permite saber si estan los datos establecidos sobre este regex
  const year = match[1] //
  const month = match[2]
  const day = match[3]

  console.log(year, month, day);