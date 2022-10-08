// 21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
// número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
// deberá indicarse la suma total de los números introducidos.


function Sumar() {
    var Suma = 0
    let numeroASumar = Number(prompt("Ingresa un número"));
    while (numeroASumar != '' && numeroASumar != null) {
        if ( !isNaN(parseFloat(numeroASumar)) && isFinite(numeroASumar)) {
            Suma = Suma + numeroASumar;
            numeroASumar = Number(prompt("Ingresa un número"));
        } else {
            alert("Error no es un numero");
            numeroASumar = Number(prompt("Ingresa un número"));
        }
    }
    document.write("La suma total es: ", Suma);
}
Sumar()
