/*
Ejercicios: Condicionales
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let variable = 3
if (variable == 3){
    console.log("Pau")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "Pau", contraseña = "aeiou"
if (usuario == "Pau" && contraseña == "aeiou"){
    console.log("Las credenciales son correctas")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 5;
switch (true){
    case (numero == 0) : console.log("El numero es 0"); break;
    case (numero > 0) : console.log("El numero es positivo"); break;
    case (numero < 0) : console.log("El numero es negativo"); break;
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 7;
if (edad >= 18){
    console.log("Puedes votar")
}
else {
    console.log(`No puedes votar, debes esperar ${18 - edad} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
// dependiendo de la edad

let edad2 = 14, situacion = "";
edad2 >= 18 ? situacion = "Adulto" : situacion = "Menor de edad"
console.log(situacion)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "noviembre".toUpperCase();

switch (true) {
    case mes === "DICIEMBRE":
    case mes === "ENERO":
    case mes === "FEBRERO":
        console.log("Es invierno");
        break;
    case mes === "MARZO":
    case mes === "ABRIL":
    case mes === "MAYO":
        console.log("Es primavera");
        break;
    case mes === "JUNIO":
    case mes === "JULIO":
    case mes === "AGOSTO":
        console.log("Es verano");
        break;
    case mes === "SEPTIEMBRE":
    case mes === "OCTUBRE":
    case mes === "NOVIEMBRE":
        console.log("Es otoño");
        break;
    default: console.log("Mes incorrecto")

}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let dias = 0
switch (mes) {
    case "ENERO":
    case "MARZO":
    case "MAYO":
    case "JULIO":
    case "AGOSTO":
    case "OCTUBRE":
    case "DICIEMBRE":
        dias = 31;
        break;
    case "ABRIL":
    case "JUNIO":
    case "SEPTIEMBRE":
    case "NOVIEMBRE":
        dias = 30;
        break;
    case "FEBRERO":
        dias = 28;
        break;
    default: console.log("Mes incorrecto")
}
console.log(dias)

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Frances"

switch (idioma){
    case "Frances": console.log("Bonjour"); break;
    case "Español": console.log(("Hola")); break;
    case "Inglés": console.log("Hello"); break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes2 = "Marzo".toUpperCase(), dias2;
switch (true) {
    case mes2 === "DICIEMBRE":
    case mes2=== "ENERO":
    case mes2 === "FEBRERO":
        console.log("Es invierno");
        break;
    case mes2 === "MARZO":
    case mes2 === "ABRIL":
    case mes2 === "MAYO":
        console.log("Es primavera");
        break;
    case mes2 === "JUNIO":
    case mes2 === "JULIO":
    case mes2 === "AGOSTO":
        console.log("Es verano");
        break;
    case mes2 === "SEPTIEMBRE":
    case mes2 === "OCTUBRE":
    case mes2 === "NOVIEMBRE":
        console.log("Es otoño");
        break;
    default: console.log("Mes incorrecto")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes2) {
    case "ENERO":
    case "MARZO":
    case "MAYO":
    case "JULIO":
    case "AGOSTO":
    case "OCTUBRE":
    case "DICIEMBRE":
        dias2 = 31;
        break;
    case "ABRIL":
    case "JUNIO":
    case "SEPTIEMBRE":
    case "NOVIEMBRE":
        dias2 = 30;
        break;
    case "FEBRERO":
        dias2 = 28;
        break;
    default: console.log("Mes incorrecto")
}
console.log(dias2)
