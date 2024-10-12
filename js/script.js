let resultado = document.getElementById("resultado");

function iniciarSimulador() {
    let edad = prompt("¿Cuál es tu edad?");
    let genero = prompt("¿Cuál es tu género? (H/M)");

    if (edad >= 18 && genero.toUpperCase() === "H") {
        resultado.textContent = "Eres un hombre mayor de edad.";
    } else if (edad >= 18 && genero.toUpperCase() === "M") {
        resultado.textContent = "Eres una mujer mayor de edad.";
    } else {
        resultado.textContent = "Eres menor de edad.";
    }

    let diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let mensaje = "Los días de la semana son: ";
    for (let i = 0; i < diasDeLaSemana.length; i++) {
        mensaje = diasDeLaSemana[i] + " ";
    }
    resultado.textContent += `\n${mensaje}`;}

    let contador = 0;
    let mensajeWhile = "Los números del 1 al 10 son: ";
    while (contador <= 10) {
        mensajeWhile = contador + " ";
        contador++;
    }
    resultado.textContent += `\n${mensajeWhile}`;

    let numero = 0;
    let mensajeDoWhile = "Los números pares del 1 al 20 son: ";
    do {
        if (numero % 2 === 0) {
            mensajeDoWhile = numero + " ";
        }
        numero++;
    } while (numero <= 20);
    resultado.textContent += `\n ${mensajeDoWhile}`;


