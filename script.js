// Fonctions pour les opérations basiques
function addition(a, b) { return a + b;}
function multiplication(a, b) { return a * b;}
// Variables globales
let currentInput = '0';
let previousInput = '';
let operation = null;
let shouldResetScreen = false;
// Mise à jour de l'affichage
function updateDisplay() {
    document.getElementById('display').textContent = currentInput;
}
function soustraction(a, b) {  return a - b;}
function division(a, b) {
    if (b === 0) { return 'Erreur';  }
    return a / b;
}
// Fonction pour gérer les opérations
function setOperation(op) {
    if (currentInput === '0') return;
    if (operation !== null) calculate();
    previousInput = currentInput;
    operation = op;
    shouldResetScreen = true;
}
