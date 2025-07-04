/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "David";
if (myName === "David") {
    console.log("Mi nombre es: ", myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

/*/ Credenciales establecidas
const usuarioCorrecto = "admin";
const contrasenaCorrecta = "1234";

// Solicitar credenciales (en navegador)
const usuario = prompt("Ingrese su usuario:");
const contrasena = prompt("Ingrese su contraseña:");

// Verificar coincidencia
if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
    console.log("¡Credenciales correctas! Acceso concedido.");
} else {
    console.log("Usuario o contraseña incorrectos. Acceso denegado.");
}*/

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 0;
if (numero > 0){
    console.log("El numero es positivo")
} else if (numero == 0){
    console.log("Tu numero es cero")
} else{
    console.log("Tu numero es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 6;
const message = age == 18 ? "Puede votar" : "No puede votar";
console.log(message);

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const mensaje = age == 18 ? "Adulto" : "menor";
console.log(mensaje);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 6
if (mes == 12 || mes == 1 || mes == 2){
    console.log("Es invierno")
} else if (mes == 3 || mes == 4 || mes == 5){
    console.log("Es Primavera")
} else if (mes == 6 || mes == 7 || mes == 8){
    console.log("Es verano")
} else if (mes == 9 || mes == 10 || mes == 11){
    console.log("otoño")
} else{
    console.log("mes invalido")
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
  console.log("Este mes tiene 31 días")
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11){
    console.log("Este mes tiene 30 dias")
} else
 console.log("Tiene 28 dias")

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let saludo = 5
let saludoIdioma
console.log("0 español, 1 ingles, 2 aleman, 3 frances, 4 portugues")

switch (saludo){
    case 0:
        saludo = "Hola"
        break
        case 1:
            saludo = "Hello"
            break
            case 2:
                saludo = "Hallo"
                break
                case 3:
                    saludo = "Bonjour"
                    break
                    case 4:
                        saludo = "olá"
                        default:
                            saludo = "Saludo incorrecto"
}
console.log(saludo);

// 9. Usa un switch para hacer de nuevo el ejercicio 6
//Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

mes = 8
let estacion = ""
switch (mes){
    case 12:
    case 1:
    case 2:
        estacion = "Invierno"
        break
    case 3:
    case 4:
    case 5:
        estacion = "Primavera"
        break
    case 6:
    case 7:
    case 8:
        estacion = "Verano"
        break
    case 9:
    case 10:
    case 11:
        estacion = "Otoño"
        break
    default:
        estacion = "Invalido"
}
console.log(estacion)

// 10. Usa un switch para hacer de nuevo el ejercicio 7