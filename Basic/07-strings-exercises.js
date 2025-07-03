/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

console.log ( 'Hola, ' + 'mundo!' );

// 2. Muestra la longitud de una cadena de texto
console.log ( "Hola, mundo!".length );
// 3. Muestra el primer y último carácter de un string
console.log ( "Hola, mundo!"[0] ); // Primer carácter
console.log ( "Hola, mundo!"[11] ); // Último carácter
// 4. Convierte a mayúsculas y minúsculas un string
console.log ("Hola, mundo".toLocaleUpperCase());
console.log ("Hola, mundo".toLocaleLowerCase());
// 5. Crea una cadena de texto en varias líneas
let mensage = `Hola este
es mi
mensaje`;
console.log(mensage);
// 6. Interpola el valor de una variable en un string
console.log(`Hola te dare un mensaje: ${mensage}`);
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log ("hola mundo que tal".replace(/ /g,"-"));
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log("Hola mundo".includes("Hola"))
// 9. Comprueba si dos strings son iguales
console.log("Hola mundo" === "Hola mundo"); // true
// 10. Comprueba si dos strings tienen la misma longitud
console.log("Hola mundoo".length === "Hola mundo".length);