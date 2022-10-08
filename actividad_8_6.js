// 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
// mayor.

let primerNumero1 = Number(prompt("Ingrese el primer número a comparar", ""));
let segundoNumero2 = Number(prompt("Ingrese el segundo número a comparar", ""));
if (primerNumero1 < segundoNumero2) {
    document.write( "Resultado de comparar 2 números: El número (" + segundoNumero2 + ") es mayor que (" + primerNumero1 + ") .");    
} else if (primerNumero1 > segundoNumero2) {
    document.write( "Resultado de comparar 2 números: El número (" + primerNumero1 + ") es mayor que (" + segundoNumero2 + ") .");
} else {
    document.write( "Resultado de comparar 2 números: El primer número (" + primerNumero1 + ") y el segundo (" + segundoNumero2 + ") ingresados son iguales.");
}
