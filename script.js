function calcularFactorial() {
    let numero;
    let entrada;

    // Ciclo para solicitar y validar el número
    while (true) {
        entrada = prompt("Por favor, ingresa un número entero positivo:");

        numero = Number(entrada);

        // Validación: verificam que no esté vacío, que sea un número válido, que no sea decimal y que sea >= 0
        if (entrada !== "" && !isNaN(numero) && Number.isInteger(numero) && numero >= 0) {
            break; // Si es válido sale del ciclo
        } else {
            alert("Error: Debes ingresar un número entero positivo válido.");
        }
    }

    let factorial = 1;
    
    // El ciclo corre desde 1 hasta el número ingresado
    for (let i = 1; i <= numero; i++) {
        factorial *= i; 
    }


    const mensaje = `El factorial de ${numero} (${numero}!) es: ${factorial}`;

    console.log(mensaje);

    const contenedorResultado = document.getElementById("resultado");
    contenedorResultado.innerHTML = `<p style="font-size: 1.2rem; font-weight: bold;">${mensaje}</p>`;
}


calcularFactorial();
