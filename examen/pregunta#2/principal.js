// Leer dos valores desde el teclado y almacenarlos en las variables A y B
let A = parseInt(prompt("Ingrese el primer valor :"));
let B = parseInt(prompt("Ingrese el segundo valor :"));

if (A === B) {
    alert("¡Error! Los valores ingresados son iguales. Intente de nuevo.");
} else {
    // condicion que define cuál es el mayor entre A y B
    let mayor;
    if (A > B) {
        mayor = A;
    } else {
        mayor = B;
    }
    //  valor mayor es:
    alert("El mayor valor entre A y B es: " + mayor);
}
