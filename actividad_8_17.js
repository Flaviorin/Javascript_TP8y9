// 17. Escribir un programa que nos diga si un número dado es primo (no es divisible
//     por ninguno otro número que no sea él mismo o la unidad)


let numeroDivisibleX = Number(prompt("Ingrese el número a verificar si es divisible por 2, 3, 5 o 7", ""));
function DivisoresAverificar(numeroAdivi) {
    var esDivisible = false;
    let divisores =[];
    switch (0) {
        case (numeroAdivi % 2):
            if (numeroAdivi % 2 == 0) {
                esDivisible = true;            
            }
        case (numeroAdivi % 3):
            if (numeroAdivi % 3 == 0) {
                esDivisible = true;           
            }
        case (numeroAdivi % 5):
            if (numeroAdivi % 5 == 0) {
                esDivisible = true;            
            }
        case (numeroAdivi % 7):
            if (numeroAdivi % 7 == 0) {
                esDivisible = true;        
            }
        default:
            break;
    }
    if (esDivisible == false) {
        divisores.push(" es número Primo");
    } else if (esDivisible == true){
		divisores.push(" no es número Primo");
	}
    return divisores;
}
document.write("El numero "+numeroDivisibleX+DivisoresAverificar(numeroDivisibleX)); 
