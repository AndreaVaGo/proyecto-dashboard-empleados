// --- PASO 0: IMPORTAMOS LAS FUNCIONES COMPARTIDAS (Para Vitest) ---
import { validarCorreo, validarContrasena } from "./validaciones.js";

// --- PASO 1: BUSCAMOS LAS COSAS EN EL HTML ---
const formulario = document.getElementById("formulario-login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const mensajeError = document.getElementById("mensaje-error");

// --- PASO 2: ESCUCHAMOS CUANDO EL USUARIO DA AL BOTÓN DE ENTRAR ---
// Ponemos "async" antes de (event) para poder usar "await" dentro al leer el JSON
formulario.addEventListener("submit", async (event) => {
    // Frenamos el comportamiento por defecto (evitamos que la página se recargue)
    event.preventDefault();
    
    // Sacamos el texto real que el usuario ha escrito
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Limpiamos el mensaje de error anterior por si acaso
    mensajeError.textContent = "";

    // --- PASO 3: PASAMOS LOS EXÁMENES USANDO NUESTRAS FUNCIONES ---
    
    // EXAMEN 1: Validamos el correo electrónico
    if (!validarCorreo(email)) {
        mensajeError.textContent = "El correo electrónico no es válido.";
        return; // Paramos aquí si está mal
    }
    
    // EXAMEN 2: Validamos la contraseña (longitud y número)
    if (!validarContrasena(password)) {
        mensajeError.textContent = "La contraseña debe tener al menos 8 caracteres y contener un número.";
        return; // Paramos aquí si está mal
    }

    // --- PASO 3.5: CONSULTAMOS LA BASE DE DATOS LOCAL (ADMINISTRADOR ÚNICO) ---
    try {
        // Hacemos un fetch a la carpeta db que creamos en la raíz
        const respuesta = await fetch("/db/user.json");
        
        if (!respuesta.ok) {
            throw new Error("No se pudo acceder al archivo de credenciales.");
        }
        
        const datos = await respuesta.json();
        const cuentaAdmin = datos.admin; // Extraemos el objeto único del administrador

        // Comprobamos si lo que escribió el usuario coincide EXACTAMENTE con el admin del JSON
        if (email !== cuentaAdmin.email || password !== cuentaAdmin.contrasena) {
            mensajeError.textContent = "Acceso denegado: Credenciales de administrador incorrectas.";
            return; // Paramos aquí si no coincide
        }

    } catch (error) {
        console.error("Error al validar con la base de datos local:", error);
        mensajeError.textContent = "Error del sistema al conectar con las credenciales.";
        return;
    }

    // --- PASO 4: ¡TODO CORRECTO! ENTRANDO AL DASHBOARD ---
    // 1. Guardamos en el localStorage un estado booleano genérico (NUNCA LA CONTRASEÑA POR SEGURIDAD)
    localStorage.setItem("sesionActiva", "true");
    
    // 2. Redirigimos automáticamente a la pantalla del panel
    window.location.href = "../../dashboard.html";
});