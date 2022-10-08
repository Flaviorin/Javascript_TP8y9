// 23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

function EscribePiramide() {
    var Cantidad = 30
    for (let index1 = 0; index1 < Cantidad+1; index1++) {
        for (let index2 = 0; index2 < index1; index2++) {
            document.write(index1);
        }
        document.write("<br>");
    }
}
EscribePiramide()

