## 📝 Diario de Commits

* **feat: estructura semantica inicial del formulario de login en index.html**
  * Se crea el archivo `index.html` con el formulario de acceso administrativo utilizando etiquetas semánticas de HTML5.

* **style: modular CSS**
  * Se crean los módulos de estilos independientes `global.css` y `login.css` dentro de la carpeta `src/css`.
  * Se importan ambos archivos en la raíz del proyecto a través de `@import` en el fichero `style.css`.

* **feat: implementar logica de validacion de credenciales en auth.js**
  * Se añade la lógica de JavaScript para capturar el evento submit, validar el formato de email, comprobar la longitud y dígitos de la contraseña, y gestionar la sesión guardándola en el localStorage.