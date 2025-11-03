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
