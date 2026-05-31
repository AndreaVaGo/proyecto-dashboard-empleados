import { obtenerEmpleados } from './api.js';

window.onload = async () => {
    
    
    const listaDeEmpleados = await obtenerEmpleados();
    const contenedorHTML = document.getElementById("lista-empleados");
    
    listaDeEmpleados.forEach(empleado => {
        const parrafoNuevo = document.createElement("p");
        parrafoNuevo.textContent = `Nombre: ${empleado.name} | Email: ${empleado.email}`;
        contenedorHTML.appendChild(parrafoNuevo);
    });

    
    const botonSalir = document.getElementById("btn-logout");

    botonSalir.addEventListener("click", () => {
        
        localStorage.clear(); 
        
        window.location.href = "index.html"; 
    });
    
}; 