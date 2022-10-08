// 26.Ejercicio 8: escriba una función de JavaScript que invierta un número.
// Por ejemplo, si x = 32443, la salida debería ser 34423.

var x = 32443;

function invierteNumero(numeroAInvertir) {
	numeroAInvertir = numeroAInvertir + "";
	return numeroAInvertir.split("").reverse().join("");
}
console.log(invierteNumero(x));

