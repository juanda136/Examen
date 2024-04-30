/*3.	Crear un programa que realice una encuesta con los siguientes datos: nombre, salario, edad y carrera (1: administración, 2: derecho, 3: medicina, 4: sistemas).
Calcular e imprimir:
Carrera con más alumno.
Promedio de salario de los alumnos de administración.
Edad de la persona con mayor salario 
*/
// Inicializar variables para almacenar los resultados
let contadorCarrera1 = 0;
let contadorCarrera2 = 0;
let contadorCarrera3 = 0;
let contadorCarrera4 = 0;
let maxAlumnos = 0;
let sumaSalariosAdmin = 0;
let contadorAdmin = 0;
let maxSalario = 0;
let edadMayorSalario = 0;

// Realizar la encuesta
for (let i = 0; i < 3; i++) { // Se realizará la encuesta para 3 personas.
    // Solicitar datos al usuario
    let nombre = prompt("Ingrese el nombre de la persona " + (i + 1) + ":");
    let salario = parseInt(prompt("Ingrese el salario de " + nombre + ":"));
    let edad = parseInt(prompt("Ingrese la edad de " + nombre + ":"));
    let carrera = parseInt(prompt("Ingrese la carrera de " + nombre + " (1: Administración, 2: Derecho, 3: Medicina, 4: Sistemas):"));
    
    // Contabilizar cantidad de alumnos por carrera
    if (carrera === 1) {
        contadorCarrera1++;
    } else if (carrera === 2) {
        contadorCarrera2++;
    } else if (carrera === 3) {
        contadorCarrera3++;
    } else if (carrera === 4) {
        contadorCarrera4++;
    }
    
    // Calcular promedio de salario de los alumnos de Administración
    if (carrera === 1) {
        sumaSalariosAdmin += salario;
        contadorAdmin++;
    }
    
    // Encontrar la persona con mayor salario
    if (salario > maxSalario) {
        maxSalario = salario;
        edadMayorSalario = edad;
    }
    
    // Encontrar la cantidad máxima de alumnos
    if (contadorCarrera1 > maxAlumnos) {
        maxAlumnos = contadorCarrera1;
    }
    if (contadorCarrera2 > maxAlumnos) {
        maxAlumnos = contadorCarrera2;
    }
    if (contadorCarrera3 > maxAlumnos) {
        maxAlumnos = contadorCarrera3;
    }
    if (contadorCarrera4 > maxAlumnos) {
        maxAlumnos = contadorCarrera4;
    }
}

// Calcular la carrera con más alumnos
let carreraMaxAlumnos;
if (maxAlumnos === contadorCarrera1) {
    carreraMaxAlumnos = 1;
} else if (maxAlumnos === contadorCarrera2) {
    carreraMaxAlumnos = 2;
} else if (maxAlumnos === contadorCarrera3) {
    carreraMaxAlumnos = 3;
} else if (maxAlumnos === contadorCarrera4) {
    carreraMaxAlumnos = 4;
}

// Calcular promedio de salario de los alumnos de Administración
let promedioSalarioAdmin = sumaSalariosAdmin / contadorAdmin;

// Imprimir resultados
console.log("Carrera con más alumnos: " + carreraMaxAlumnos);
console.log("Promedio de salario de los alumnos de Administración: " + promedioSalarioAdmin);
console.log("Edad de la persona con mayor salario: " + edadMayorSalario)
