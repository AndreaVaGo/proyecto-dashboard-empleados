import { test, expect } from '@playwright/test';

test.describe('Flujo de Autenticación - MVP Dashboard', () => {

  test('Debería iniciar sesión con credenciales válidas y redirigir al dashboard', async ({ page }) => {
    // 1. Ir a la página de login (index.html)
    // Nota: Revisa el puerto de tu Live Server (ej: http://127.0.0.1:5500/index.html o http://localhost:5173/)
    await page.goto('http://127.0.0.1:5500/index.html'); 

    // 2. Rellenar el formulario de Login
    // Cambia los selectores ('input[type="email"]') si usas IDs o Clases específicas
    await page.fill('input[type="email"]', 'admin@empresa.com');
    await page.fill('input[type="password"]', 'password123');

    // 3. Hacer clic en el botón de ingresar
    await page.click('button[type="submit"]');

    // 4. VERIFICACIÓN: Comprobar que la URL cambió y ahora estás en el dashboard
    await expect(page).toHaveURL(/.*dashboard.html/);
  });

});