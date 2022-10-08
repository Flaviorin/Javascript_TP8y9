// 24.Ejercicio 6: Escriba una función que reciba una array y solo imprima los
// valores que se repiten. Por ejemplo, dada la siguiente array e índice, la
// función imprimirá '6,23,33,100'.
// var array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];


var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function ImprimeRepetidos(array){
    var temporal = array;
    var repetidos = new Array();
    for (let index = 0; index < array.length; index++) {
        for (let index2 = 0; index2 < temporal.length; index2++) {
            // console.log("comparo array que tiene valor ",array[index]); // solo para ver como lo compara
            // console.log("con este valor del temporal",temporal[index2]); // solo para ver como lo compara
            if (temporal[index2] == array[index] && index2 != index ) {
                repetidos.push(array[index]);
                for (let index3 = 0; index3 < temporal.length; index3++) {
                    if (temporal[index3]==array[index]) {
                        temporal[index3] = 'Ya ingresado como repetido'; // tiene que modificar el valor de esa posicion para no volver a compararla
                    }
                }
                index2 = temporal.length;
            }
        }
    }
    console.log(repetidos.sort((a, b) => a - b ));
    //console.log("Los valores repetirdos en el array son: "+ repetidos.sort((a, b) => a - b ));
}
ImprimeRepetidos(array);
