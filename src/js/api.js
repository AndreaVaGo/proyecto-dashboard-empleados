// Guardamos en una constante la dirección web de internet donde están los datos de los usuarios
const URL = "https://jsonplaceholder.typicode.com/users";

// Creamos y exportamos la función para poder usarla desde el archivo dashboard.js
export async function obtenerEmpleados() {
    // Vamos a internet a por los datos (fetch) y usamos 'await' para esperar a que respondan
    const respuesta = await fetch(URL); 
    
    // Convertimos la respuesta en un formato que JavaScript entienda (JSON) y la devolvemos limpia
    return await respuesta.json();      
}