// 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
// letra a

var noIngresada = 0;
var frase = prompt ("Ingrese una frase para contar las a y/o A", "");
if (frase != null && frase.length < 1){
    noIngresada = 0;
} else {
    noIngresada = 1;
}
while (noIngresada == 0) {
    var frase = prompt ("Ingrese una frase para contar las a y/o A", "");
    if (frase.length >= 1) {
        noIngresada = 1;
    }
}
var contador_de_a = 0;
for (let index = 0; index < frase.length; index++) {
    letraAcomparar = frase[index];
    if (letraAcomparar == 'a' || letraAcomparar == 'A') {
        contador_de_a++
    }
}
document.write( "La frase ingresada (" + frase +") contiene " + contador_de_a + " letras (a) y/o (A).");
