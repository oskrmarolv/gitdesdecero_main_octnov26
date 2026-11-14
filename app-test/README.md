# App Test: API de ejemplo con Express.js

Aplicación de prueba para el curso **GIT desde Cero**. Es una API REST sencilla construida con [Express.js](https://expressjs.com/) que sirve como base de código para practicar los comandos de Git (commits, ramas, merges, conflictos, etc.).

> **Nota:** la aplicación **no usa base de datos**. Todas las rutas devuelven datos ficticios y ningún cambio se guarda entre peticiones.

## Requisitos

- [Node.js](https://nodejs.org/) v22 o superior (ver `.nvmrc`)
- npm

## Instalación

```bash
cd app-test
npm install
```

Opcionalmente, crea un archivo `.env` a partir del ejemplo para cambiar el puerto:

```bash
cp .env.example .env
```

| Variable | Descripción             | Valor por defecto |
|----------|-------------------------|-------------------|
| `PORT`   | Puerto del servidor HTTP | `3000`            |

## Ejecución

```bash
# Modo desarrollo: se reinicia automáticamente al guardar cambios
npm run dev

# Modo normal
npm start
```

El servidor queda disponible en `http://localhost:3000`.

## Estructura del proyecto

```
app-test/
├── package.json
├── .env.example
├── .gitignore
├── .nvmrc
└── src/
    ├── server.js              # Punto de entrada: levanta el servidor
    ├── app.js                 # Configuración de Express y middlewares
    ├── routes/                # Definición de rutas
    │   ├── index.js
    │   ├── auth.routes.js
    │   └── users.routes.js
    ├── controllers/           # Lógica de cada ruta
    │   ├── auth.controller.js
    │   └── users.controller.js
    ├── data/
    │   └── users.js           # Usuarios ficticios
    └── middlewares/
        ├── notFound.js        # Respuesta 404 para rutas inexistentes
        └── errorHandler.js    # Manejo centralizado de errores
```

El flujo de una petición es: `server.js` → `app.js` → `routes/` → `controllers/` → respuesta JSON.

## Endpoints

### Autenticación

| Método     | Ruta      | Body                    | Descripción                                   |
|------------|-----------|-------------------------|-----------------------------------------------|
| `POST`     | `/login`  | `{ "email", "password" }` | Devuelve un token falso y los datos del usuario |
| Cualquiera | `/logout` | —                       | Devuelve un mensaje de sesión cerrada          |

### Usuarios

| Método   | Ruta              | Body                   | Descripción                          |
|----------|-------------------|------------------------|--------------------------------------|
| `GET`    | `/api/users`      | —                      | Lista todos los usuarios             |
| `POST`   | `/api/users`      | `{ "name", "email" }`  | Simula la creación de un usuario (201) |
| `GET`    | `/api/users/:id`  | —                      | Obtiene un usuario por su `id`       |
| `PATCH`  | `/api/users/:id`  | Campos a modificar     | Simula la actualización de un usuario |
| `DELETE` | `/api/users/:id`  | —                      | Simula la eliminación de un usuario  |

### Códigos de respuesta

| Código | Significado                                         |
|--------|-----------------------------------------------------|
| `200`  | Petición correcta                                   |
| `201`  | Usuario creado                                      |
| `400`  | Faltan campos requeridos en el body                 |
| `404`  | Usuario o ruta no encontrados                       |
| `500`  | Error interno del servidor                          |

## Ejemplos con curl

```bash
# Login
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"ana@example.com","password":"123456"}'

# Logout
curl -X POST http://localhost:3000/logout

# Listar usuarios
curl http://localhost:3000/api/users

# Crear usuario
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Pedro","email":"pedro@example.com"}'

# Obtener usuario
curl http://localhost:3000/api/users/1

# Actualizar usuario
curl -X PATCH http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Ana G."}'

# Eliminar usuario
curl -X DELETE http://localhost:3000/api/users/1
```

Ejemplo de respuesta de `GET /api/users`:

```json
[
  { "id": 1, "name": "Ana García", "email": "ana@example.com" },
  { "id": 2, "name": "Luis Pérez", "email": "luis@example.com" },
  { "id": 3, "name": "María López", "email": "maria@example.com" }
]
```

## Licencia

MIT
