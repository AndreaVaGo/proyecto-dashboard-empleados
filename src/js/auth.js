// --- PASO 1: BUSCAMOS LAS COSAS EN EL HTML ---
// Buscamos el formulario entero para poder controlar cuándo se envía
const formulario = document.getElementById("formulario-login");

// Buscamos las cajitas de texto donde el usuario escribe su correo y su contraseña
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Buscamos el texto vacío del HTML donde escribiremos los mensajes si algo sale mal
const mensajeError = document.getElementById("mensaje-error");

// --- PASO 2: ESCUCHAMOS CUANDO EL USUARIO DA AL BOTÓN DE ENTRAR ---
formulario.addEventListener("submit", (event) => {
    // Frenamos el comportamiento por defecto (evitamos que la página se recargue y se borre todo)
    event.preventDefault();
    
    // Sacamos el texto real que el usuario ha escrito dentro de las cajitas
    const email = emailInput.value;
    const password = passwordInput.value;
    
    // Creamos un "interruptor" apagado (en false) que encenderemos si encontramos un número en la contraseña
    let tieneNumero = false;

    // --- PASO 3: EMPIEZAN LAS EXÁMENES (VALIDACIONES) ---
    
    // EXAMEN 1: ¿El correo tiene una arroba?
    if (!email.includes("@")) {
        // Si NO tiene arroba, encendemos el cartel de error y paramos
        mensajeError.textContent = "El correo electrónico no es válido.";
    } else {
        // Si el correo está bien, pasamos al siguiente examen...
        
        // EXAMEN 2: ¿La contraseña es muy corta?
        if (password.length < 8) {
            // Si tiene menos de 8 letras, ponemos el cartel de error
            mensajeError.textContent = "La contraseña debe tener al menos 8 caracteres.";
        } else {
            // Si tiene 8 o más letras, pasamos al examen del número...
            
            // EXAMEN 3: Vamos a revisar la contraseña letra por letra buscando un número
            // Empezamos en la posición 0 y avanzamos de una en una hasta el final de la contraseña
            for (let i = 0; i < password.length; i++) {
                // Miramos si la letra actual es un número entre el '0' y el '9'
                if (password[i] >= '0' && password[i] <= '9') {
                    // ¡Encontrado! Encendemos nuestro interruptor (lo ponemos en true)
                    tieneNumero = true;
                }
            }

            // EXAMEN 4: Revisamos cómo quedó nuestro interruptor del número
            if (!tieneNumero) {
                // Si el interruptor se quedó apagado (false), significa que no había ningún número
                mensajeError.textContent = "La contraseña debe contener al menos un numero.";
            }
            // (Nota: Si pasa todos los exámenes sin errores, ¡el usuario está listo para entrar!)
        }
    } 
});