// 20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
// salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión

userInput = String(prompt('Ingresa texto',''));
var TextoCompleto = "";
while (userInput != '' && userInput != null) {
    TextoCompleto = TextoCompleto + '-' + userInput;
    userInput = prompt('Ingresa texto','');
}
document.write(TextoCompleto);

