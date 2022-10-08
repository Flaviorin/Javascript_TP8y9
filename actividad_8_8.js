// 8. Escribe un programa que pida un número y diga si es divisible por 2

let numeroDivisible = Number(prompt("Ingrese el número a verificar si es divisible por 2", ""));
if (numeroDivisible % 2 == 0) {
    document.write( "Resultado de calcular si es divisible por 2 el número ingresado: El número ingresado (" + numeroDivisible + ") es divisible por 2.");
} else {
    document.write( "Resultado de calcular si es divisible por 2 el número ingresado: El número ingresado (" + numeroDivisible + ") NO es divisible por 2.");
}
