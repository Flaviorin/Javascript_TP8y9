// 22.Ejercicio 4: escriba una función que reciba un array como parámetro e
// imprima el número más grande de la array en la consola.

var arrayEdadesEstudiantes = [12,13,71,16,21,34,23,9,54,37,62];

function ImprimeNumeroBajoArray(Array){
    var maximo = (Math.max.apply(null,Array));
    console.log("El numero mas alto del array es: ", maximo);
}
ImprimeNumeroBajoArray(arrayEdadesEstudiantes);
