// 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
// los tres.

let numero1a = Number(prompt("Ingrese el primer número a comparar", ""));
let numero2a = Number(prompt("Ingrese el segundo número a comparar", ""));
let numero3a = Number(prompt("Ingrese el tercer número a comparar", ""));
if (numero1a > numero2a && numero1a > numero3a) {
    document.write( "Resultado de comparar 3 números: El número (" + numero1a + ") es mayor que (" + numero2a + ") y (" + numero3a + ") .");
} else if (numero2a > numero1a && numero2a > numero3a) {
    document.write( "Resultado de comparar 3 números: El número (" + numero2a + ") es mayor que (" + numero1a + ") y (" + numero3a + ") .");
} else if (numero3a > numero1a && numero3a > numero2a){
    document.write( "Resultado de comparar 3 números: El número (" + numero3a + ") es mayor que (" + numero1a + ") y (" + numero2a + ") .");
} else {
    document.write( "Resultado de comparar 3 números: Los números (" + numero1a + "), (" + numero2a + ") y (" + numero3a + ") son iguales.");
}

