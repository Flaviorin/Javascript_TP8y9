// 29.Ejercicio 11: escriba una función de JavaScript que busque la palabra
// más larga de una frase. Por ejemplo, si x = "Tutorial de desarrollo web",
// el resultado debería ser "Desarrollo"


var x = "Tutorial de desarrollo web";
function palabraLarga(string) {
    var str = string.split(" ");
    var larga = 0;
    var palabra = null;
    str.forEach(function(str) {
        if (larga < str.length) {
            larga = str.length;
            palabra = str;
        }
    });
    return palabra;
}
console.log(palabraLarga(x));

