// 10. Escribe un programa que pida una frase y escriba las vocales que aparecen


var noIngresada1 = 0;
var frase2 = prompt ("Ingrese una frase para contar las vocales minúsculas", "");
if (frase2 != null && frase2.length < 1){
    noIngresada1 = 0;
} else {
    noIngresada1 = 1;
}
while (noIngresada1 == 0) {
    var frase2 = prompt ("Ingrese una frase para contar las vocales minúsculas", "");
    if (frase2.length >= 1) {
        noIngresada1 = 1;
    }
}
var contador_de_a2 = 0;
var contador_de_e2 = 0;
var contador_de_i2 = 0;
var contador_de_o2 = 0;
var contador_de_u2 = 0;
document.write( "La frase ingresada (" + frase2 +") contiene las siguientes vocales: ");
for (let index = 0; index < frase2.length; index++) {
    letraAcomparar2 = frase2[index];
    switch (letraAcomparar2) {
        case 'a':
            document.write(" a ");
            contador_de_a2++;
            break;
        case 'e':
            document.write(" e ");
            contador_de_e2++;
            break;    
        case 'i':
            document.write(" i ");
            contador_de_i2++;
            break;
        case 'o':
            document.write(" o ");
            contador_de_o2++;
            break;
        case 'u':
            document.write(" u ");
            contador_de_u2++;
            break;
        default:
            break;
    }
}


