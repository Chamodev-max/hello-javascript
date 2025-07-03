/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma = 6+1 //Suma
let Resta = 6 - 1 //Resta
let Multiplicacion = 6 * 2 //Multiplicación
let Division = 6 / 2 //División
let modulo = 6 % 3 //Módulo
let exponente = 6 ** 2 //Exponente

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let asignacionSuma = suma += 2 // Suma con asignación
let asignacionResta = Resta -= 2 // Resta con asignación
let asignacionMultiplicacion = Multiplicacion *= 2 // Multiplicación con asignación
let asignacionDivision = Division /= 2 // División con asignación
let asignacionModulo = modulo %= 2 // Módulo con asignación
let asignacionExponente = exponente **= 2 // Exponente con asignación

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 3) // Mayor que
console.log(5 < 10) // Menor que
console.log(5 >= 5) // Mayor o igual que
console.log(5 <= 5) // Menor o igual que
console.log(5 == 5) // Igualdad por valor

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 > 10) // Mayor que
console.log(5 < 3) // Menor que
console.log(5 >= 10) // Mayor o igual que
console.log(5 <= 3) // Menor o igual que
console.log(5 == 10) // Igualdad por valor

// 5. Utiliza el operador lógico and

console.log(true && true) // Verdadero
console.log(true && false) // Falso
console.log(false && true) // Falso

// 6. Utiliza el operador lógico or

console.log(true || true) // Verdadero
console.log(true || false) // Verdadero
console.log(false || true) // Verdadero

// 7. Combina ambos operadores lógicos

console.log(true && false || true) // Verdadero

// 8. Añade alguna negación

console.log(!true) // Falso

// 9. Utiliza el operador ternario

let edad = 18;
let esMayorDeEdad = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(esMayorDeEdad); // "Es mayor de edad

// 10. Combina operadores aritméticos, de comparáción y lógicas

let resultado = (5 + 3 > 7) && (10 / 2 === 5) || (2 * 3 < 10);
console.log(resultado); // true