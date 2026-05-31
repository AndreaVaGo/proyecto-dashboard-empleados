// Función para comprobar si el correo es válido (busca que tenga un @)
export function validarCorreo(correo) {
    // Si el correo incluye una '@', devolvemos true (verdadero), si no, false (falso)
    return correo.includes('@');
}

// Función para comprobar la contraseña (mínimo 8 caracteres y al menos un número)
export function validarContrasena(contrasena) {
    // Regla 1: Comprobamos si tiene 8 caracteres o más
    const tieneLargoCorrecto = contrasena.length >= 8;
    
    // Regla 2: Buscamos si hay algún número dentro del texto
    // Usamos un bucle clásico para mirar los caracteres uno a uno
    let tieneNumero = false;
    for (let i = 0; i < contrasena.length; i++) {
        // Si el caracter actual es un número del 0 al 9, marcamos como verdadero
        if (contrasena[i] >= '0' && contrasena[i] <= '9') {
            tieneNumero = true;
        }
    }

    // Para que la contraseña sea válida, se tienen que cumplir las dos condiciones
    return tieneLargoCorrecto && tieneNumero;
}