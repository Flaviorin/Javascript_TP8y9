// ***** Tema: String y Array *****

// 19.Ejercicio 1: cree un array con todas las edades de los estudiantes de su
// clase. Itere el array utilizando un bucle while y luego imprima todas las
// edades en la consola.

var arrayedadesestudiantes = [12,13,11,15,21,34,23,19,54,32,62];
var indice = 0;
while (indice < arrayedadesestudiantes.length) {
    console.log("el estudiante en la posición "+ indice+" del array tiene "+arrayedadesestudiantes[indice]+" años de edad.")
    indice++
}

