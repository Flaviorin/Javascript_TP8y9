// 4. Crear una función que lea notas hasta que ingrese -1 y devuelve el
// promedio de las notas leídas. ( aunque no se suele leer valores en una
// función)Una función que se llame siguiente, que reciba como
// parámetro un valor entero, y devuelva el siguiente del número
// ingresado como parámetro

function PromedioNotasLeidas() {
    let notasLeidas =[];
    let LeeNumeroAPromediar = Number(prompt("Ingresa un número a promediar entre 1 a max(100), si ingresa (-1) termina el cálculo de promedio", ""));
    while ( LeeNumeroAPromediar != -1) {
        if ( !isNaN(parseInt(LeeNumeroAPromediar)) && isFinite(LeeNumeroAPromediar) && LeeNumeroAPromediar > 0 && LeeNumeroAPromediar <= 100) {
            notasLeidas.push(LeeNumeroAPromediar);
            LeeNumeroAPromediar = Number(prompt("Ingresa un número a promediar entre 1 a max(100), si ingresa (-1) termina el cálculo de promedio", ""));
        } else {
            alert("Error, el número ingresado no es un número válido");
            LeeNumeroAPromediar = Number(prompt("Ingresa un número a promediar entre 1 a max(100), si ingresa (-1) termina el cálculo de promedio", ""));
        }        
    }
    var i=0 , suma=0, promedio=0;
    for(i=0;i<notasLeidas.length;i++){
        suma = suma + notasLeidas[i];
    }
    promedio=suma/notasLeidas.length;
    if (suma == 0) {
        document.write("El promedio no se pudo calcular debido a que no hay números ingresados");
    } else {
        document.write("El promedio de los siguientes números ingresados ("+ notasLeidas +"), cuya suma es: ("+ suma +"), y longitud: ("+ notasLeidas.length +"), es: "+ promedio);
    }
}
PromedioNotasLeidas()
