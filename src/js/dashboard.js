import { obtenerEmpleados } from './api.js';

window.onload = async () => {
    
    // 1. Vamos a internet a por los 10 empleados y buscamos la caja blanca de la pantalla
    const listaDeEmpleados = await obtenerEmpleados();
    const contenedorHTML = document.getElementById("lista-empleados");
    
    // 2. Pintamos a los 10 empleados en la pantalla nada más entrar a la página
    listaDeEmpleados.forEach(empleado => {
        // Creamos una caja invisible para meter dentro la foto y el texto de este empleado
        const cajaEmpleado = document.createElement("div");
        
        // Creamos la etiqueta para la foto y le pedimos un robot diferente según su ID
        const imagenAvatar = document.createElement("img");
        imagenAvatar.src = `https://robohash.org/${empleado.id}.png?size=50x50`;
        imagenAvatar.alt = "Avatar";
        
        // Creamos el párrafo para poner el texto con todos los datos que pide el profe
        const parrafoNuevo = document.createElement("p");
        parrafoNuevo.textContent = `Nombre: ${empleado.name} | Email: ${empleado.email} | Dirección: ${empleado.address.street}, ${empleado.address.suite} (${empleado.address.city}, CP: ${empleado.address.zipcode})`;
        
        // Metemos la foto y el texto dentro de la caja de este empleado
        cajaEmpleado.appendChild(imagenAvatar);
        cajaEmpleado.appendChild(parrafoNuevo);
        
        // Colgamos la caja completa dentro de la pantalla para que se vea
        contenedorHTML.appendChild(cajaEmpleado);
    });


    // === 3. LOS BOTONES DE LAS LETRAS (EL FILTRO) ===

    // Buscamos la cajita de los filtros que dejamos preparada en el HTML
    const contenedorFiltros = document.getElementById("filtros");
    
    // Hacemos una lista con las letras de nuestros empleados para crear sus botones
    const letras = ["A", "C", "E", "L", "N", "R"];

    // Le decimos a la máquina: "Pásame las letras una a una para fabricar los botones"
    letras.forEach(letra => {
        // Fabricamos un botón vacío en la memoria
        const botonLetra = document.createElement("button");
        // Le escribimos la letra correspondiente dentro (un botón dirá A, otro C...)
        botonLetra.textContent = letra; 
        
        // Le enseñamos al botón qué tiene que hacer cuando el usuario le haga CLICK:
        botonLetra.addEventListener("click", () => {
            
            // PASO A: Borramos todo lo que haya en la pantalla para dejarla en blanco
            contenedorHTML.innerHTML = "";
            
            // PASO B: Pasamos un colador a la lista original y nos quedamos solo con los que empiezan por esa letra
            const empleadosFiltrados = listaDeEmpleados.filter(emp => emp.name.startsWith(letra));
            
            // PASO C: Volvemos a hacer el mismo bucle de antes, pero solo con los empleados que han pasado el colador
            empleadosFiltrados.forEach(empleado => {
                const cajaFiltrada = document.createElement("div");
                
                const avatarFiltrado = document.createElement("img");
                avatarFiltrado.src = `https://robohash.org/${empleado.id}.png?size=50x50`;
                
                const textoFiltrado = document.createElement("p");
                textoFiltrado.textContent = `Nombre: ${empleado.name} | Email: ${empleado.email} | Dirección: ${empleado.address.street}, ${empleado.address.suite} (${empleado.address.city}, CP: ${empleado.address.zipcode})`;
                
                cajaFiltrada.appendChild(avatarFiltrado);
                cajaFiltrada.appendChild(textoFiltrado);
                contenedorHTML.appendChild(cajaFiltrada);
            });
        });

        // Metemos el botón que acabamos de fabricar dentro de la zona de filtros del HTML
        contenedorFiltros.appendChild(botonLetra);
    });


    // 4. El botón de Cerrar Sesión de toda la vida
    const botonSalir = document.getElementById("btn-logout");
    
    botonSalir.addEventListener("click", () => {
        
        localStorage.clear(); // Vaciamos el cajón de la memoria del navegador
        
        window.location.href = "index.html"; // Nos vamos de patitas a la calle (al login)
    });
    
};