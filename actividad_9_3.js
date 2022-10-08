// 3. Crear una función que se llame promedio3, que reciba como
// parámetro tres valores y devuelva el promedio de los mismos.


function numeroPromedio(primerNumero1,segundoNumero2,tercerNumero3) {
    let suma = primerNumero1 + segundoNumero2 + tercerNumero3;
    let promedio=suma/3;
    return promedio;
}

function IngresoTresNumerosPromedio(Callback) {
    let primerNumero1 = Number(prompt("Ingrese el primer número a promediar entre 1 a max(100)", ""));
    let segundoNumero2 = Number(prompt("Ingrese el segundo número a promediar entre 1 a max(100)", ""));
    let tercerNumero3 = Number(prompt("Ingrese el segundo número a promediar entre 1 a max(100)", ""));
    if ( !isNaN(parseFloat(primerNumero1)) && isFinite(primerNumero1) && primerNumero1 > 0 && primerNumero1 <= 100 && !isNaN(parseFloat(segundoNumero2)) && isFinite(segundoNumero2) && segundoNumero2 > 0 && segundoNumero2 <= 100 && !isNaN(parseFloat(tercerNumero3)) && isFinite(tercerNumero3) &&  tercerNumero3 > 0 && tercerNumero3 <= 100) {
        document.write("El número promedio de los ingresados es: (" + Callback(primerNumero1,segundoNumero2,tercerNumero3) + ").");
    } else {
        alert("Error, alguno de los valores ingresados no es un número válido");
        IngresoTresNumerosPromedio(numeroPromedio)
    }
}
IngresoTresNumerosPromedio(numeroPromedio)

