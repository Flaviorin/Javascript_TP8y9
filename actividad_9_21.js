// Para los siguientes ejercicios, no puede ordenar su array. ¡Asegúrese
// de que su solución funcione para cualquier array que se pase!

// 21.Ejercicio 3: escriba una función que reciba un array como parámetro e
// imprima el número más bajo de la array en la consola.

var arrayEdadesEstudiantes = [12,13,11,16,21,34,23,9,54,37,62];

function ImprimeNumeroBajoArray(Array){
    var minimo = (Math.min.apply(null,Array));
    console.log("El numero mas bajo del array es: ", minimo);
}
ImprimeNumeroBajoArray(arrayEdadesEstudiantes);
