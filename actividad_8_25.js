// 25. Un script que escriba los números del 1 al 500, que indique cuáles son
// múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5
// ————————————————————
// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10


function EscribePiramideMultiplo() {
    var Cantidad = 500
    for (let index1 = 1; index1 < Cantidad+1; index1++) {
            document.write(index1);
            if (index1 % 4 == 0) {
                document.write(" (Múltiplo de 4) ");
            }
            if (index1 % 9 == 0) {
                document.write(" (Múltiplo de 9) ");
            }
            if (index1 % 5 == 0 && index1 != Cantidad) {
                document.write("<br>————————————————————");
            }
        document.write("<br>");
    }
}
EscribePiramideMultiplo()

