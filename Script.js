function calculate(operacion) {

    var num1 = parseFloat(document.getElementById('num1').value) || 0;
    var num2 = parseFloat(document.getElementById('num2').value) || 0;
    var resultado;

    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'División por cero es indefinido cabezon';
            }
            break;
        default:
            resultado = 'Syntax error';
    }

    document.getElementById('resultado').value = resultado;
}