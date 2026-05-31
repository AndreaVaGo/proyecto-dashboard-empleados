
import { obtenerEmpleados } from './api.js';


document.addEventListener("DOMContentLoaded", async () => {
    
    const listaDeEmpleados = await obtenerEmpleados();
    
    
    console.log("Los empleados:", listaDeEmpleados);
});