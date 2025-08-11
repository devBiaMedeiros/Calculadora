
//Adiciona o valor passado ao final do campo de texto 
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
//Limpa o campo de texto
function clearDisplay() {
    document.getElementById('display').value = '';
}
//Remove o último caractere do campo de texto

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
//Calcula o resultado da expressão no campo de texto
function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
}