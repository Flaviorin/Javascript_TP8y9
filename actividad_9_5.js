// 5. Una función que se llame doble, que reciba como parámetro un valor, y
// devuelva el doble del número ingresado como parámetro.

function Doble(numeroAnterior) {
    return parseInt(numeroAnterior*=2);
}

function LeeNroCalculaDoble() {
    let LeeNumero = Number(prompt("Ingrese un número entre 1 a max(100), para calcular el doble", ""));
    if ( !isNaN(parseFloat(LeeNumero)) && isFinite(LeeNumero) && LeeNumero > 0 && LeeNumero <= 100) {
        document.write("El doble del número ("+ parseInt(LeeNumero) +") que ingresó es: ", Doble(parseInt(LeeNumero)));
    } else {
        alert("Error, el número ingresado no es válido");
        LeeNroCalculaDoble()
    }
}
LeeNroCalculaDoble()
