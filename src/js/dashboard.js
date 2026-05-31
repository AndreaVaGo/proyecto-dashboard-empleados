import { obtenerEmpleados } from './api.js';

window.onload = async () => {
    
    // 1. Vamos a internet a por los 10 empleados y buscamos la caja blanca de la pantalla
    const listaDeEmpleados = await obtenerEmpleados();
    const contenedorHTML = document.getElementById("lista-empleados");
    
    // 2. Pintamos a los 10 empleados en la pantalla nada más entrar a la página
    listaDeEmpleados.forEach(empleado => {
        // Creamos una caja invisible para meter dentro la foto y el texto de este empleado
        const cajaEmpleado = document.createElement("div");
        
        // Le pegamos la etiqueta "tarjeta-empleado" para que el archivo CSS la reconozca y la ponga bonita
        cajaEmpleado.classList.add("tarjeta-empleado");
        
        // Creamos la etiqueta para la foto y le pedimos un robot diferente según su ID
        const imagenAvatar = document.createElement("img");
        imagenAvatar.src = `https://robohash.org/${empleado.id}.png?size=150x150`;
        imagenAvatar.alt = "Avatar";
        
        // Separamos los datos creando tres párrafos independientes para que no se vean apretados
        const pNombre = document.createElement("p");
        pNombre.textContent = `Nombre: ${empleado.name}`;
        
        const pEmail = document.createElement("p");
        pEmail.textContent = `Email: ${empleado.email}`;
        
        const pDireccion = document.createElement("p");
        pDireccion.textContent = `Dirección: ${empleado.address.street}, ${empleado.address.suite} (${empleado.address.city}, CP: ${empleado.address.zipcode})`;
        
        // Metemos la foto y los tres párrafos ordenados dentro de la caja de este empleado
        cajaEmpleado.appendChild(imagenAvatar);
        cajaEmpleado.appendChild(pNombre);
        cajaEmpleado.appendChild(pEmail);
        cajaEmpleado.appendChild(pDireccion);
        
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
                
                // Le ponemos la etiqueta para que los empleados filtrados también salgan en cuadritos bonitos
                cajaFiltrada.classList.add("tarjeta-empleado");
                
                const avatarFiltrado = document.createElement("img");
                avatarFiltrado.src = `https://robohash.org/${empleado.id}.png?size=150x150`;
                
                // Separamos los datos también en la parte del filtro para mantener el mismo diseño limpio
                const pNombreFiltrado = document.createElement("p");
                pNombreFiltrado.textContent = `Nombre: ${empleado.name}`;
                
                const pEmailFiltrado = document.createElement("p");
                pEmailFiltrado.textContent = `Email: ${empleado.email}`;
                
                const pDireccionFiltrado = document.createElement("p");
                pDireccionFiltrado.textContent = `Dirección: ${empleado.address.street}, ${empleado.address.suite} (${empleado.address.city}, CP: ${empleado.address.zipcode})`;
                
                // Añadimos los elementos en orden a la caja filtrada
                cajaFiltrada.appendChild(avatarFiltrado);
                cajaFiltrada.appendChild(pNombreFiltrado);
                cajaFiltrada.appendChild(pEmailFiltrado);
                cajaFiltrada.appendChild(pDireccionFiltrado);
                
                // Colgamos la caja en el contenedor principal
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