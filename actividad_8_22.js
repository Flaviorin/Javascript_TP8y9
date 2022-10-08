// 22. Realizar una página con un script que calcule el valor de la letra de un número
// de DNI (Documento Nacional de Identidad).
// El algoritmo para calcular la letra del dni es el siguiente :
// ● El número debe ser entre 0 y 99999999
// ● Debemos calcular el resto de la división entera entre el número y el número
// 23.
// ● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
// (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// ● Si lo introducido no es un número deberá indicarse con un alert y volver a
// preguntar.
// ● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

function CalculoLetraDNI() {
    let NroDNI = Number(prompt("Ingresa un número de DNI formato 1 a max(99999999)"));
    while (NroDNI != '' && NroDNI != null) {
        if ( !isNaN(parseFloat(NroDNI)) && isFinite(NroDNI) && NroDNI >= 0 && NroDNI <= 99999999) {
            calculo = NroDNI % 23;
            var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
            var Letracalculo = letras[calculo];
            alert("La letra del DNI "+ NroDNI +" es: "+ Letracalculo);
            document.write('<br>');
            document.write("La letra del DNI "+ NroDNI +" es: "+ Letracalculo);
            NroDNI = Number(prompt("Ingresa un número de DNI"));
        } else {
            alert("Error no es un numero válido");
            NroDNI = Number(prompt("Ingresa un número de DNI"));
        }
    }
}
CalculoLetraDNI()
