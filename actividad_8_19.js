// 19. Pide una nota (número). Muestra la calificación según la nota:
// ● 0-3: Muy deficiente
// ● 3-5: Insuficiente
// ● 5-6: Suficiente
// ● 6-7: Bien
// ● 7-9: Notable
// ● 9-10: Sobresaliente

var noIngresoNumero = 0;
let numeroNota = Number(prompt("Ingrese un número de calificación entre 0 y 10", ""));
if (numeroNota != null && numeroNota > 10){
    noIngresoNumero = 0;
} else {
    noIngresoNumero = 1;
}
while (noIngresoNumero == 0) {
    let numeroNota = Number(prompt("Ingrese un número de calificación entre 0 y 10", ""));
    if (numeroNota >= 0 && numeroNota < 11) {
        noIngresoNumero = 1;
    }
}
document.write("La calificación es: ");
switch (numeroNota) {
    case 0:
    case 1:
    case 2:
        document.write("Muy deficiente");
        break;
    case 3:
    case 4:
        document.write("Insuficiente");
        break;
    case 5:
    case 6:
        document.write("Suficiente");
        break;
    case 7:
        document.write("Bien");
        break;
    case 8:
    case 9:
        document.write("Notable");
        break;
    case 10:
        document.write("Sobresaliente");
        break;
    default:
        break;
}

