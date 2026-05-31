// --- PASO 0: IMPORTAMOS LAS FUNCIONES COMPARTIDAS (Para Vitest) ---
import { validarCorreo, validarContrasena } from "./validaciones.js";

// --- PASO 1: BUSCAMOS LAS COSAS EN EL HTML ---
const formulario = document.getElementById("formulario-login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const mensajeError = document.getElementById("mensaje-error");

// --- PASO 2: ESCUCHAMOS CUANDO EL USUARIO DA AL BOTÓN DE ENTRAR ---
formulario.addEventListener("submit", (event) => {
    // Frenamos el comportamiento por defecto (evitamos que la página se recargue)
    event.preventDefault();
    
    // Sacamos el texto real que el usuario ha escrito
    const email = emailInput.value;
    const password = passwordInput.value;
    
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

    // --- PASO 4: ¡TODO CORRECTO! ENTRANDO AL DASHBOARD ---
    // 1. Guardamos en el localStorage que el usuario ha iniciado sesión con éxito
    localStorage.setItem("sesionActiva", "true");
    
    // 2. Redirigimos automáticamente a la pantalla del panel
    window.location.href = "../../dashboard.html";
});