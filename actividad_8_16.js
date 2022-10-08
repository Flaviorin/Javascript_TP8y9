// 16. Escribir un programa que escriba en pantalla los divisores comunes de dos
// números dados

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
        divisores.push("número Primo");
    }
    return divisores;
}

let numeroDivisibleZ = Number(prompt("Ingrese el PRIMER número a verificar si es divisible por 2, 3, 5 o 7", ""));
let numeroDivisibleY = Number(prompt("Ingrese el SEGUNDO número a verificar si es divisible por 2, 3, 5 o 7", ""));
let divisoresEnComun =[];
for (let index = 0; index < DivisoresAverificar(numeroDivisibleZ).length; index++) {
    DivisorAcompararZ = DivisoresAverificar(numeroDivisibleZ)[index];
    for (let index = 0; index < DivisoresAverificar(numeroDivisibleY).length; index++) {
        DivisorAcompararY = DivisoresAverificar(numeroDivisibleY)[index];
        if (DivisorAcompararZ == DivisorAcompararY) {
            divisoresEnComun.push(DivisorAcompararZ);
        }
    }
}
document.write("Los divisores en común para los números ("+ numeroDivisibleZ +") y ("+ numeroDivisibleY +") son: ", divisoresEnComun);
