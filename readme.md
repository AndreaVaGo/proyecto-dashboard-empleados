# 📊 Dashboard Administrativo de Gestión de Empleados

## 📝 Descripción del Proyecto
Esta aplicación es un panel de administración dinámico y modular desarrollado íntegramente con **JavaScript Vanilla**. Permite a un usuario administrador autenticarse de forma segura mediante reglas estrictas de validación, visualizar un listado detallado de empleados consumido en tiempo real desde una API REST externa, realizar filtrados interactivos por la inicial del nombre y gestionar de forma segura el ciclo de vida de la sesión mediante almacenamiento local (`localStorage`).

---

## 🛠️ Tecnologías y Herramientas
* **Diseño y Prototipado:** Lovable, Figma & Stitch (Generación ágil de la interfaz, wireframes y flujo interactivo del sistema).
* **Tecnologías Core:** HTML5 Semántico, CSS3 Estructurado de forma Modular (`@import`) usando Flexbox y CSS Grid.
* **Entorno de Testing:** Vitest para la ejecución automatizada de pruebas unitarias de lógica de negocio.
* **Control de Versiones:** Git bajo la metodología de *Conventional Commits* alojado en GitHub.
* **Gestión del Proyecto:** Jira Software (Metodología Agile/Scrum).

---

## 🎨 Prototipo, Despliegue y Userflow
* **Enlace al Prototipo en Lovable:** [Haz clic aquí para acceder al prototipo interactivo en Lovable](https://id-preview-9b0ab2ae--91be1556-9d41-4a82-b07e-bdb22bd2371c.lovable.app/login)
* **Enlace del Despliegue en Producción (GitHub Pages):** 👉 [Haz clic aquí para ver la aplicación en producción](https://andreavago.github.io/proyecto-dashboard-empleados/)

### 📐 Wireframes
El diseño arquitectónico visual de la aplicación se planificó distinguiendo la interfaz de acceso respecto al panel privado de operaciones:

#### 1. Estructura de la Pantalla de Login (`index.html`)
![Wireframe - Formulario de Login](./src/assets/wireframe_login.png)

#### 2. Estructura del Panel de Administración (`dashboard.html`)
![Wireframe - Panel de Gestión de Empleados](./src/assets/wireframe_panel_administracion.png)

### Userflow del Sistema:
1. El Administrador accede a la pantalla de Login (`index.html`).
2. Al enviar el formulario, el sistema intercepta el evento y valida las credenciales en el frontend.
3. Si el correo contiene `@` y la contraseña posee $\ge 8$ caracteres con al menos un dígito numérico, genera un estado activo en `localStorage` y redirige a `dashboard.html`.
4. En el panel, el sistema consume la API de manera asíncrona, dibuja las fichas de empleados en una rejilla adaptativa y permite el filtrado dinámico por iniciales.
5. Al pulsar "Cerrar Sesión", se destruye el estado local de forma segura y se restringe el acceso volviendo al Login.

---

## 📈 Historial de Desarrollo y Control de Versiones (Git)
El proyecto se ha desarrollado siguiendo la convención internacional de **Conventional Commits**, garantizando un historial de desarrollo atómico, limpio y profesional:

* `test: implementar caso de prueba E2E con Playwright para el flujo de login` -> Automatización de la verificación de acceso y redirección correcta al dashboard.
* `docs: integrar la HU-05 de seguridad y control de acceso en el readme` -> Sincronización de la quinta historia de usuario y actualización de la documentación del repositorio.
* `docs: actualizar readme y añadir wireframes de las vistas` -> Sincronización final de la documentación con las capturas de diseño y optimización de contenido.
* `docs: actualizar entregables con enlaces definitivos de lovable y github pages` -> Configuración y enlace a los entornos estables de producción en la nube.
* `docs: guardar avance del README estructurado y correcciones de diseño en el dashboard` -> Registro del progreso de la estructura del documento guía del proyecto.
* `style: adaptar selectores a etiquetas nativas, centrar titulo y alinear cabecera` -> Limpieza y optimización visual del diseño del panel administrativo.
* `fix: corregir ruta del script, añadir type module e implementar redireccion del login al dashboard` -> Resolución del bug de enrutamiento y cambio hacia módulos nativos de JS.
* `docs: añadir .gitignore y captura de pantalla de vitest en assets` -> Inclusión de configuraciones de exclusión de ficheros y almacenamiento de evidencias técnicas.
* `test: implementar pruebas unitarias con vitest para la validacion del login` -> Desarrollo de la suite de tests automatizados para validar correos y contraseñas seguras.
* `feat: lógica de filtros por letra y comentarios explicativos completados` -> Renderizado dinámico de la botonera alfabética y captura del evento de filtrado en el DOM.
* `docs: añadir comentarios explicativos en login, api y dashboard` -> Incorporación de documentación interna del código fuente para mejorar el mantenimiento.
* `feat: implementar boton de cerrar sesion en el dashboard` -> Gestión del ciclo de vida de la sesión mediante el borrado controlado del almacenamiento local.
* `feat: estructura inicial del dashboard y configuracion de la api` -> Implementación de la petición asíncrona con fetch y mapeo de los datos del personal.
* `feat: implementar logica de validacion de credenciales en auth.js` -> Captura y procesamiento de las reglas del formulario de acceso.
* `style: implementar diseño responsivo y estilos globales con Tailwind CSS` -> Configuración del framework e integración de clases utilitarias para la interfaz.
* `feat: estructura semantica inicial del formulario de login en index.html` -> Maquetación base de la vista de acceso empleando etiquetas accesibles de HTML5.

---

## 🧪 Evidencias de Testing (Vitest)
Se han diseñado e implementado pruebas unitarias destinadas a blindar la seguridad del acceso. Los casos contemplan la validación de cadenas de texto para correos institucionales y contraseñas seguras. El profesor puede comprobar el resultado exitoso en la siguiente captura:

![Resultado de los Tests Automatizados](./src/assets/test-vitest.png)


## 🧪 Evidencias de Testing

### 🟢 Pruebas Unitarias (Vitest)
Se han diseñado e implementado pruebas unitarias destinadas a blindar la seguridad del acceso analizando la validación de strings para correos y contraseñas seguras:
![Resultado de los Tests Automatizados con Vitest](./src/assets/test-vitest.png)


### 🎭 Pruebas End-to-End (Playwright)
Se ha automatizado el flujo completo de usuario de manera real empleando Playwright, simulando la carga del login, la inserción de credenciales, el clic de envío y verificando la redirección exitosa al panel privado:
![Resultado del Test E2E con Playwright](./src/assets/test-playwright.png)

---

## 📅 Planificación del Proyecto (Jira)
El ciclo de vida del desarrollo se ha gestionado empleando metodologías ágiles a través de la herramienta **Jira Software**, organizando los requerimientos funcionales en historias de usuario estimadas con sus respectivas fechas de inicio y vencimiento dentro del Sprint de la semana.

* **Evidencia del Tablero de Jira:**
![Planificación de Tareas en Jira](./src/assets/jira.png)

---

## 👤 Historias de Usuario y Criterios de Aceptación

### HU-01: Acceso Seguro al Dashboard
* **Como:** Usuario administrador.
* **Quiero:** Un sistema de autenticación por email y contraseña.
* **Para:** Restringir el panel exclusivamente a personal autorizado.
* **Criterios de Aceptación:** Email con formato válido (`@`). Contraseña obligatoria de al menos 8 caracteres con mínimo un número. Redirección automática y persistencia inmediata en el navegador mediante `localStorage`.

### HU-02: Consumo de Datos de Empleados
* **Como:** Administrador autenticado.
* **Quiero:** Visualizar una galería con los datos de los empleados de la empresa.
* **Para:** Consultar su información de contacto de forma centralizada.
* **Criterios de Aceptación:** Consumo estable de la API REST externa de JSONPlaceholder (`/users`). Mapeo y renderizado dinámico en el DOM de Avatar, Name, Email y la dirección completa concatenando `street`, `suite`, `city` y `zipcode`.

### HU-03: Filtrado Dinámico de Personal
* **Como:** Administrador autenticado.
* **Quiero:** Filtrar a los empleados por la primera letra de su nombre.
* **Para:** Agilizar las búsquedas operativas diarias.
* **Criterios de Aceptación:** Botonera interactiva alfabética. Al pulsar una letra, la rejilla del DOM se actualiza en tiempo real de forma reactiva sin recargar la página.

### HU-04: Cierre de Sesión Seguro (Logout)
* **Como:** Administrador autenticado.
* **Quiero:** Disponer de una opción clara para cerrar mi sesión en la cabecera.
* **Para:** Revocar los permisos de acceso al abandonar el equipo de trabajo.
* **Criterios de Aceptación:** Botón dedicado que limpia las claves de sesión del almacenamiento local y redirige de manera forzosa al usuario al portal de login, bloqueando el reingreso directo por URL.


### HU-05: Control de Acceso y Redirección de Seguridad
* **Como:** Administrador del sistema.
* **Quiero:** Que la aplicación impida el acceso directo al panel privado si no existe una sesión activa en el navegador.
* **Para:** Proteger la confidencialidad de los datos del personal y evitar accesos no autorizados a través de la URL.
* **Criterios de Aceptación:** Al inicializarse el archivo `dashboard.html`, se evalúa mediante una estructura condicional la existencia de la clave de usuario en el `localStorage`. En caso de que el almacenamiento local se encuentre vacío, la aplicación intercepta la carga y ejecuta una redirección forzosa e inmediata hacia la pantalla de login principal (`index.html`).

---

## ✍️ Autor
* **Andrea** - Full Stack Developer