import { obtenerEmpleados } from './api.js';

window.onload = async () => {
    
    // 1. Vamos a internet a por los 10 empleados y buscamos la caja blanca de la pantalla
    const listaDeEmpleados = await obtenerEmpleados();
    const contenedorHTML = document.getElementById("lista-empleados");
    
    // =========================================================================
    // NUEVA FUNCIÓN REUTILIZABLE: Se encarga de pintar las tarjetas en la pantalla
    // =========================================================================
    const pintarPantalla = (listaADibujar) => {
        // Primero borramos todo lo que haya en la pantalla para dejarla limpia
        contenedorHTML.innerHTML = "";

        // Si el filtro se queda vacío, ponemos un cartelito para avisar al usuario
        if (listaADibujar.length === 0) {
            const mensajeVacio = document.createElement("p");
            mensajeVacio.textContent = "No se encontraron empleados que comiencen con esta letra.";
            mensajeVacio.style.color = "#a0aec0"; // Un gris sutil para que quede bonito
            contenedorHTML.appendChild(mensajeVacio);
            return;
        }

        // Dibujamos las tarjetas de la lista que nos den
        listaADibujar.forEach(empleado => {
            const cajaEmpleado = document.createElement("div");
            cajaEmpleado.classList.add("tarjeta-empleado");
            
            const imagenAvatar = document.createElement("img");
            imagenAvatar.src = `https://robohash.org/${empleado.id}.png?size=150x150`;
            imagenAvatar.alt = "Avatar";
            
            const pNombre = document.createElement("p");
            pNombre.textContent = `Nombre: ${empleado.name}`;
            
            const pEmail = document.createElement("p");
            pEmail.textContent = `Email: ${empleado.email}`;
            
            const pDireccion = document.createElement("p");
            pDireccion.textContent = `Dirección: ${empleado.address.street}, ${empleado.address.suite} (${empleado.address.city}, CP: ${empleado.address.zipcode})`;
            
            cajaEmpleado.appendChild(imagenAvatar);
            cajaEmpleado.appendChild(pNombre);
            cajaEmpleado.appendChild(pEmail);
            cajaEmpleado.appendChild(pDireccion);
            
            contenedorHTML.appendChild(cajaEmpleado);
        });
    };

    // 2. Pintamos a los 10 empleados por primera vez nada más entrar a la página
    pintarPantalla(listaDeEmpleados);


    // === 3. LOS BOTONES DE LAS LETRAS (EL FILTRO COMPLETO A-Z) ===

    // Buscamos la cajita de los filtros que dejamos preparada en el HTML
    const contenedorFiltros = document.getElementById("filtros");
    
    // Añadimos primero un botón de "Todos" para poder limpiar los filtros cómodamente
    const botonTodos = document.createElement("button");
    botonTodos.textContent = "Todos";
    botonTodos.addEventListener("click", () => {
        pintarPantalla(listaDeEmpleados);
    });
    contenedorFiltros.appendChild(botonTodos);

    // Creamos las 26 letras del abecedario automáticamente (Desde la A hasta la Z)
    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        
        // Fabricamos un botón vacío en la memoria para cada letra
        const botonLetra = document.createElement("button");
        botonLetra.textContent = letra; 
        
        // Le enseñamos al botón qué tiene que hacer cuando el usuario le haga CLICK:
        botonLetra.addEventListener("click", () => {
            
            // Pasamos un colador a la lista original evaluando la inicial en mayúsculas
            const empleadosFiltrados = listaDeEmpleados.filter(emp => {
                const inicialNombre = emp.name.trim().charAt(0).toUpperCase();
                return inicialNombre === letra;
            });
            
            // Usamos nuestra función para pintar los empleados que pasaron el filtro
            pintarPantalla(empleadosFiltrados);
        });

        // Metemos el botón que acabamos de fabricar dentro de la zona de filtros del HTML
        contenedorFiltros.appendChild(botonLetra);
    }


    // 4. El botón de Cerrar Sesión de toda la vida
    const botonSalir = document.getElementById("btn-logout");
    
    botonSalir.addEventListener("click", () => {
        localStorage.clear(); // Vaciamos el cajón de la memoria del navegador
        window.location.href = "index.html"; // Nos vamos de patitas a la calle (al login)
    });
    
};