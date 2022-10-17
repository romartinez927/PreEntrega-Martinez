let resultado = 0
let parcial1 = 0
let parcial2 = 0

function saludo() {
    let nombre = prompt("Bienvenido, ingrese su nombre")
    alert("¡Hola " + nombre + "!\nCompletando los siguientes datos podrás saber si desaprobaste, regularizaste, o promocionaste esta materia")
}

saludo()

function calcularNota() {
        parcial1 = Number(prompt("Ingrese la nota del primer parcial"))
        parcial2 = Number(prompt("Ingrese la nota de su segundo parcial"))
        resultado = (parcial1+parcial2)/2
        return resultado
}

calcularNota()

if (resultado > 0 && resultado < 4) {
    alert("El promedio de sus parciales da como resultado "+ resultado + "\nUsted ha desaprobado la materia. :c")
} else if (resultado >= 4 && resultado < 7) {
    alert("El promedio de sus parciales da como resultado "+ resultado + "\nUsted ha regularizado la materia. Consulte fechas para rendir final.")
} else if(resultado >= 7 && resultado <= 10){
    alert("El promedio de sus parciales da como resultado "+ resultado + "\n¡Felicidades! Usted ha promocionado la materia")
} else {
    alert("Datos inválidos." + "\nIngrese nuevamente sus notas")
    calcularNota()
}


