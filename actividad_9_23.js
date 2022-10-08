// 23.Ejercicio 5: Escriba una función que reciba dos parámetros, una array y
// un índice. La función imprimirá el valor del elemento en la posición
// dada (basado en uno) en la consola. Por ejemplo, dada la siguiente
// array e índice, la función imprimirá '6'.
// var array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
// var index = 1;

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;
function ImprimeNumeroIndiceArray(array,index){
    console.log("El número del array en la posición enviada es: ", array[index]);
}
ImprimeNumeroIndiceArray(array,index);
