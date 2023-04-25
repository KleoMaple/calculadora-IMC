function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    // Convertir altura a metros
    altura = altura / 100;

    // Calcular IMC
    var imc = peso / (altura * altura);

    // Mostrar resultado
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Tu IMC es: " + imc.toFixed(2);

    // Determinar estado de salud
    if (imc < 16) {
        resultado.innerHTML += "<br>Desnutricion severa";
    } else if (imc >= 16.1 && imc < 18.4) {
        resultado.innerHTML += "<br>Desnutricion moderada";
    } else if (imc >= 18.5 && imc < 22) {
        resultado.innerHTML += "<br>Bajopeso";
    } else if (imc >= 22.1 && imc < 24.9) {
        resultado.innerHTML += "<br>Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        resultado.innerHTML += "<br>Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        resultado.innerHTML += "<br>Obesidad Grado 1";
    } else if (imc >= 35 && imc < 39.9) {
        resultado.innerHTML += "<br>Obesidad Grado 2";
    } else {
        resultado.innerHTML += "<br>Obesidad Grado 3";
    }
}