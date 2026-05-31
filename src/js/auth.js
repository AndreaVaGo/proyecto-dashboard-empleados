
const formulario = document.getElementById("formulario-login");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const mensajeError = document.getElementById("mensaje-error");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;
    let tieneNumero = false;

    
    if (!email.includes("@")) {
        mensajeError.textContent = "El correo electrónico no es válido.";
    } else {
        
        
        if (password.length < 8) {
            mensajeError.textContent = "La contraseña debe tener al menos 8 caracteres.";
        } else {
            
            for (let i = 0; i < password.length; i++) {
                if (password[i] >= '0' && password[i] <= '9') {
                    tieneNumero = true;
                }
            }

            
            if (!tieneNumero) {
                mensajeError.textContent = "La contraseña debe contener al menos un numero.";
            }
        }
    } 
}); 