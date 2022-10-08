// 15. Escribir un programa que escriba en pantalla los divisores de un número dado


let numeroDivisibleX = Number(prompt("Ingrese el número a verificar si es divisible por 2, 3, 5 o 7", ""));
function DivisoresAverificar(numeroAdivi) {
    var esDivisible = false;
    let divisores =[];
    switch (0) {
        case (numeroAdivi % 2):
            if (numeroAdivi % 2 == 0) {
                esDivisible = true;
                divisores.push(" 2");            
            }
        case (numeroAdivi % 3):
            if (numeroAdivi % 3 == 0) {
                esDivisible = true;
                divisores.push(" 3");            
            }
        case (numeroAdivi % 5):
            if (numeroAdivi % 5 == 0) {
                esDivisible = true;
                divisores.push(" 5");            
            }
        case (numeroAdivi % 7):
            if (numeroAdivi % 7 == 0) {
                esDivisible = true;
                divisores.push(" 7");            
            }
        default:
            break;
    }
    if (esDivisible == false) {
        divisores.push(" si mismo o 1.");
    }
    return divisores;
}
document.write("El numero "+numeroDivisibleX+" es divisible por: " + DivisoresAverificar(numeroDivisibleX)); 