//Flat
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2)); //el meotodo flat nos va a devolver a nosotros una matriz con cualquier submatriz aplanada. El metodo flat recibe como argumento la profundidad 

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2])); //flatMap me va a permiter mapear cada elemento despues pasar una funcion y aplanarlo segun el resultado

//Trim 
let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart()); //el trimStart me va a permitir eleminar los espacios en blanco de un string

let hello = 'hello World       ';
console.log(hello);
console.log(hello.trimEnd()); //El trimEnd me va a permitir eliminar los espacios en blanco de un string al final

// try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
try {

} catch { //aqui ya no es necesario colocar el (error)
  error
}

//fromEntries 

let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));//nos permite convertir un arreglo en un objeto 

//symbol = nos va a permitir acceder a una descripcion 
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);