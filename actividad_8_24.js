// 24. Haz un script que escriba una pirámide inversa de los números del 1 al
// número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
// 666666
// 55555
// 4444
// 333
// 22
// 1

function EscrPiramInv() {
    let CantNro = Number(prompt("Ingresa un número para pirámide inversa entre 1 a max(100)"));
    if ( !isNaN(parseFloat(CantNro)) && isFinite(CantNro) && CantNro > 0 && CantNro <= 100) {
        for (let index1 = CantNro; index1 > 0; index1--) {
            for (let index2 = 0; index2 < index1; index2++) {
                document.write(index1);
            }
            document.write("<br>");
        }
    } else {
        alert("Error no es un número válido");
        EscrPiramInv()
    }
}
EscrPiramInv()


