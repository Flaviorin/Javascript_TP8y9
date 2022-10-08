// 2. Diseñar una función que tenga como parámetros dos números, y que
// calcule el máximo


// uso de una función de callback: es una función que se pasa a otra función como un argumento, 
// que luego se invoca dentro de la función externa para completar algún tipo de rutina o 
// acción.
function numeroMaximoDeDos(primerNumero1,segundoNumero2) {
    let maximo = Math.max(primerNumero1, segundoNumero2);
    return maximo;
}

function IngresoDosNumerosXMaximo(Callback) {
    let primerNumero1 = Number(prompt("Ingrese el primer número a comparar entre 1 a max(100)", ""));
    let segundoNumero2 = Number(prompt("Ingrese el segundo número a comparar entre 1 a max(100)", ""));
    if ( !isNaN(parseFloat(primerNumero1)) && isFinite(primerNumero1) && primerNumero1 > 0 && primerNumero1 <= 100 && !isNaN(parseFloat(segundoNumero2)) && isFinite(segundoNumero2) && segundoNumero2 > 0 && segundoNumero2 <= 100) {
        document.write("El número máximo ingresado es: (" + Callback(primerNumero1,segundoNumero2) + ").");
    } else {
        alert("Error, alguno de los valores ingresados no es un número válido");
        IngresoDosNumerosXMaximo(numeroMaximoDeDos)
    }
}
IngresoDosNumerosXMaximo(numeroMaximoDeDos)
