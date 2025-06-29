/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Comentario en una línea

// 2. Escribe un comentario en varias líneas

/*Comentario en varias 
líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let stringVariable = "Hola, mundo"; // String
let numberVariable = 42; // Number
let booleanVariable = true; // Boolean
let nullVariable = null; // Null
let undefinedVariable; // Undefined
let symbolVariable = Symbol("miSimbolo"); // Symbol
let bigintVariable = BigInt(12345678901234567890); // BigInt

// 4. Imprime por consola el valor de todas las variables

console.log(stringVariable);
console.log(numberVariable);
console.log(booleanVariable);
console.log(nullVariable);
console.log(undefinedVariable);
console.log(symbolVariable);
console.log(bigintVariable);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof stringVariable);
console.log(typeof numberVariable);
console.log(typeof booleanVariable);
console.log(typeof nullVariable);
console.log(typeof undefinedVariable);
console.log(typeof symbolVariable);
console.log(typeof bigintVariable);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

stringVariable = "Nuevo texto";
numberVariable = 100;
booleanVariable = false;
nullVariable = null; // No se puede cambiar, sigue siendo null
undefinedVariable = undefined; // No se puede cambiar, sigue siendo undefined
symbolVariable = Symbol("nuevoSimbolo");
bigintVariable = BigInt(98765432109876543210);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

stringVariable = 123; // Cambiando a Number
numberVariable = "Texto"; // Cambiando a String
booleanVariable = 0; // Cambiando a Number (0 es falsy)
nullVariable = "Ahora es un string"; // Cambiando a String
undefinedVariable = true; // Cambiando a Boolean
symbolVariable = 456; // Cambiando a Number
bigintVariable = false; // Cambiando a Boolean

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const stringConstant = "Constante de texto"; // String
const numberConstant = 3.14; // Number
const booleanConstant = false; // Boolean
const nullConstant = null; // Null
const undefinedConstant = undefined; // Undefined
const symbolConstant = Symbol("constanteSimbolo"); // Symbol
const bigintConstant = BigInt(12345678901234567890); // BigInt

// 9. A continuación, modifica los valores de las constantes

// Las constantes no se pueden modificar, por lo tanto, no se puede hacer esta operación.

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// Las constantes no se pueden modificar, por lo que no se puede asignar un nuevo valor a las constantes ya declaradas.