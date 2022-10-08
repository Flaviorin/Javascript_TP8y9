// 27.Ejercicio 9: escriba una función de JavaScript que devuelva una cadena
// en orden alfabético. Por ejemplo, si x = 'webmaster', la salida debería
// ser 'abeemrstw'. La puntuación y los números no se pasan en la
// cadena.

var x = 'webmaster';
const cadenaOrdenAlfabetico = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

console.log(cadenaOrdenAlfabetico(x));
