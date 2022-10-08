// 28.Ejercicio 10: escriba una función de JavaScript que convierta la primera
// letra de cada palabra a mayúsculas. Por ejemplo, si x = "prince of
// persia", la salida debería ser "Prince Of Persia".

var x = "prince of persia"
function primerPalabraEnMayuscula(str){
    const finalSentence = str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    return finalSentence;
}
console.log(primerPalabraEnMayuscula(x));
