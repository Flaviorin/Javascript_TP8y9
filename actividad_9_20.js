// 20.Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while
// para imprimir solo números pares. Cambie el ciclo para usar un ciclo
// "for" en lugar de un ciclo "while".

var arrayEdadesEstudiantes = [12,13,11,16,21,34,23,19,54,37,62];
for (let index = 0; index < arrayEdadesEstudiantes.length; index++) {
    if (index%2 == 0) {
        console.log("El estudiante en la posición par "+ index+" del array tiene "+arrayEdadesEstudiantes[index]+" años de edad.")
    }
}
