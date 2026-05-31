import { describe, test, expect } from 'vitest';
import { validarCorreo, validarContrasena } from './validaciones.js';

// Agrupamos las pruebas del login
describe('Pruebas de validación del Login', () => {

    // --- TEST 1: COMPROBAR EL CORREO ---
    test('Debería aceptar un correo que tenga una arroba', () => {
        // Le pasamos un correo correcto y esperamos que el resultado sea "true"
        expect(validarCorreo('admin@correo.com')).toBe(true);
    });

    test('Debería rechazar un correo sin arroba', () => {
        // Le pasamos un correo malo y esperamos que el resultado sea "false"
        expect(validarCorreo('admincorreo.com')).toBe(false);
    });


    // --- TEST 2: COMPROBAR LA CONTRASEÑA ---
    test('Debería aceptar una contraseña de 8 caracteres con un número', () => {
        // Esta tiene 8 letras y termina en 1, debería ser "true"
        expect(validarContrasena('admin123')).toBe(true);
    });

    test('Debería rechazar una contraseña con menos de 8 caracteres', () => {
        // Esta es muy corta, debería ser "false"
        expect(validarContrasena('adm1')).toBe(false);
    });

    test('Debería rechazar una contraseña larga pero sin números', () => {
        // Esta tiene letras de sobra pero ningún número, debería ser "false"
        expect(validarContrasena('administrador')).toBe(false);
    });

});