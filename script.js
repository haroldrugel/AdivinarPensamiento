// Elementos del DOM
const numeroInput = document.getElementById('numeroInput');
const calcularBtn = document.getElementById('calcularBtn');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const resultMessage = document.getElementById('result-message');

// Función para simular la carga de la barra de progreso
function cargarBarra() {
    progressContainer.style.display = 'block';
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            mostrarMensajeFinal(); // Muestra el mensaje final al completar la barra
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }, 30); // Se tarda aproximadamente 3 segundos en llegar a 100%
}

// Función para mostrar el mensaje final cuando la barra se complete
function mostrarMensajeFinal() {
    const numeroPensado = numeroInput.value; // Usar el número ingresado por el usuario
    resultMessage.style.display = 'block';
    resultMessage.innerHTML = 'Estás pensando en el número: ' + numeroPensado; // Mostrar el número ingresado
}

// Manejar el clic en el botón para calcular
calcularBtn.addEventListener('click', () => {
    const numero = parseInt(numeroInput.value);
    if (numero >= 1 && numero <= 10) {
        cargarBarra();
        resultMessage.style.display = 'none'; // Ocultar el mensaje anterior
    } else {
        alert('Por favor, ingresa un número entre 1 y 10.');
    }
});
