# Proyecto Full-Stack Angular + Node.js/Express

Proyecto completo con frontend en Angular y backend en Node.js/Express.

## Estructura del Proyecto

```
mi-proyecto-angular/
├── src/                      # Frontend Angular
│   ├── app/
│   │   ├── home/            # Componente Home
│   │   ├── acerca/          # Componente Acerca
│   │   ├── app.ts           # Componente principal
│   │   ├── app.html         # Template con menú de navegación
│   │   ├── app.routes.ts    # Configuración de rutas
│   │   └── app.config.ts    # Configuración de la app
│   ├── index.html
│   └── main.ts
├── backend/                  # Backend Node.js/Express
│   ├── server.js            # Servidor Express con rutas API
│   ├── package.json
│   └── node_modules/
├── public/                   # Archivos públicos
├── angular.json             # Configuración Angular
├── package.json             # Dependencias del frontend
├── ENRUTAMIENTO.md          # Documentación de enrutamiento
└── README-PROYECTO.md       # Este archivo
```

## Características Implementadas

### Frontend (Angular)

- Proyecto Angular 20
- Sistema de rutas con Angular Router
- Componentes:
  - Home: Página principal
  - Acerca: Página de información
- Menú de navegación con `routerLink`
- Estilos CSS personalizados
- Arquitectura standalone (sin módulos)

### Backend (Node.js/Express)

- Servidor Express
- CORS configurado
- Rutas API:
  - `GET /` - Mensaje de bienvenida
  - `GET /api/home` - Datos para Home
  - `GET /api/acerca` - Datos para Acerca
  - `GET /api/datos` - Lista de items
- Nodemon para desarrollo

## Instalación

### Frontend

```bash
# Navegar a la raíz del proyecto
cd mi-proyecto-angular

# Instalar dependencias (si es necesario)
npm install

# Ejecutar en modo desarrollo
npm start
# o
ng serve
```

El frontend estará disponible en: **http://localhost:4200**

### Backend

```bash
# Navegar a la carpeta backend
cd mi-proyecto-angular/backend

# Instalar dependencias (si es necesario)
npm install

# Ejecutar en modo desarrollo
npm run dev
# o para producción
npm start
```

El backend estará disponible en: **http://localhost:3000**

## Uso

1. **Iniciar el Backend**:
   ```bash
   cd backend
   npm run dev
   ```

2. **Iniciar el Frontend** (en otra terminal):
   ```bash
   npm start
   ```

3. **Abrir el navegador**:
   - Visita `http://localhost:4200`
   - Navega entre "Home" y "Acerca" usando el menú

## Rutas del Frontend

- `/` → Redirige a `/home`
- `/home` → Página principal
- `/acerca` → Página de información

## Endpoints del Backend

- `GET /` → Mensaje de bienvenida de la API
- `GET /api/home` → Datos para la página Home
- `GET /api/acerca` → Datos sobre la aplicación
- `GET /api/datos` → Lista de items de ejemplo

## Tecnologías Utilizadas

### Frontend
- Angular 20.3.7
- TypeScript
- Angular Router
- CSS3

### Backend
- Node.js
- Express 5.1.0
- CORS 2.8.5
- Nodemon 3.1.11 (dev)

## Documentación Adicional

Ver `ENRUTAMIENTO.md` para información detallada sobre:
- Configuración de rutas en Angular
- Uso de routerLink y router-outlet
- Rutas del backend
- Conexión frontend-backend
- Ejemplos de código

## Scripts Disponibles

### Frontend
- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta los tests

### Backend
- `npm start` - Inicia el servidor en modo producción
- `npm run dev` - Inicia el servidor con nodemon (auto-reload)

## Notas

- El frontend y backend corren en puertos diferentes (4200 y 3000)
- CORS está habilitado para permitir peticiones entre puertos
- El proyecto usa la arquitectura standalone de Angular (sin NgModules)
- Los componentes están organizados en carpetas separadas

## Próximos Pasos

Para extender el proyecto, puedes:

1. Conectar el frontend con el backend usando HttpClient
2. Agregar más componentes y rutas
3. Implementar autenticación
4. Agregar una base de datos al backend
5. Crear servicios en Angular para manejar la lógica de negocio
6. Implementar guards para proteger rutas
