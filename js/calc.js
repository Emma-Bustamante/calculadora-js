function calculadora(primerNumero, segundoNumero, operacion) {
    primerNumero = parseInt(prompt("Ingrese un numero"))
    segundoNumero = parseInt(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese un operador")
    resultado = eval(primerNumero + operacion + segundoNumero)
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
calculadora();
document.write("Su resultado es " + resultado)
