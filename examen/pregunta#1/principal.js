	let nombre = prompt("¿Cuál es tu nombre?");
	
	// cual es su edad
	let edad = prompt("Hola " + nombre + ", ¿cuántos años tienes?");
	
	// parseInt convierte entero edad en entero
	edad = parseInt(edad);

	// valida si es mayor de edad
	if (edad >= 18) {
	    alert("¡Hola " + nombre + "! No eres menor de edad.");
	} else {
    alert("¡Hola " + nombre + "! no eres mayor de edad.");
	}
