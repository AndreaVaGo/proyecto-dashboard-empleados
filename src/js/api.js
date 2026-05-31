
const URL = "https://jsonplaceholder.typicode.com/users";

export async function obtenerEmpleados() {
    const respuesta = await fetch(URL); 
    return await respuesta.json();      
}