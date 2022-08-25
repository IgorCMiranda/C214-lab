const validate = require('validate.js');
const nume = require('./validate.js');
const readlineSync = require('readline-sync');

let valor
let valor1
let operacao


operacao = readlineSync.question("Qual operacao deseja efetuar (+) (-) (*) (/)? : \n");


valor = readlineSync.question("Insira o primeiro numero: \n");

const validprim = validate({valor}, nume.numero);
if(validprim !== undefined){
    return 'Error1'; 
}


valor1 = readlineSync.question("Insira o segundo numero: \n");

const validsec = validate({valor1}, nume.numero);
if(validsec !== undefined) {
    return 'Error2';
}


function doOperation(operador, value1, value2) {
    if (operador == "+") {
        return value1 + value2;
    } else if
        (operador == "-") {
        return value1 - value2;
    } else if
        (operador == "*") {
        return value1 * value2;
    } else if
        (operador == "/") {
        return value1 / value2;
    } else {
        throw new Error('Operação inválida');
    }
}


console.log('O resultado é', doOperation(operacao, valor, valor1)) 
