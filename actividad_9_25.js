// 25.Ejercicio 7: escriba una función de JavaScript simple para unir todos los
// elementos de la siguiente array en una cadena.
// myColor = ["Red", "Green", "White", "Black"];
// Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco",
// "Negro"


var myColor = ["Red", "Green", "White", "Black"];
var cadena = '';
function concatenaArrayACadena(array){
    for (let index = 0; index < array.length; index++) {
        if (index != array.length-1) {
            cadena = cadena+('"'+array[index]+'", ');
        } else if (index == array.length-1) {
            cadena = cadena+('"'+array[index]+'"');
        }
    }
    console.log(cadena);
}
concatenaArrayACadena(myColor);
