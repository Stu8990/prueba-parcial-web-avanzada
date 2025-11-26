# Documentación de Enrutamiento

Este documento explica cómo funciona el enrutamiento en el proyecto Angular y cómo se conecta con el backend.

## Estructura del Proyecto

```
mi-proyecto-angular/
├── src/              # Código fuente del frontend Angular
├── backend/          # Servidor Node.js/Express
└── ENRUTAMIENTO.md   # Este documento
```

## Enrutamiento Frontend (Angular)

### Configuración de Rutas

Las rutas de Angular están configuradas en `src/app/app.routes.ts`:

```typescript
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'acerca',
    component: Acerca
  }
];
```

### Componentes

**1. Componente Principal (App)**
- **Ubicación**: `src/app/app.ts`
- **Template**: `src/app/app.html`
- **Función**: Contiene el menú de navegación y el router-outlet

**2. Componente Home**
- **Ubicación**: `src/app/home/`
- **Ruta**: `/home`
- **Función**: Página principal de la aplicación

**3. Componente Acerca**
- **Ubicación**: `src/app/acerca/`
- **Ruta**: `/acerca`
- **Función**: Página de información sobre la aplicación

### Navegación

La navegación se realiza mediante `routerLink` en el template `app.html`:

```html
<nav>
  <ul>
    <li><a routerLink="/home">Home</a></li>
    <li><a routerLink="/acerca">Acerca</a></li>
  </ul>
</nav>

<router-outlet />
```

### Cómo Funciona

1. **routerLink**: Directiva de Angular que permite navegar entre rutas sin recargar la página
2. **router-outlet**: Marca el lugar donde se cargarán los componentes según la ruta activa
3. **Redirección**: La ruta vacía (`''`) redirige automáticamente a `/home`

## Enrutamiento Backend (Express)

### Servidor API

El backend está en `backend/server.js` y proporciona las siguientes rutas:

```javascript
// Ruta raíz
GET /
→ Mensaje de bienvenida de la API

// Datos para Home
GET /api/home
→ Retorna información para la página Home

// Datos para Acerca
GET /api/acerca
→ Retorna información sobre la aplicación

// Lista de datos
GET /api/datos
→ Retorna una lista de items de ejemplo
```

### Configuración de CORS

El servidor usa CORS para permitir peticiones desde el frontend Angular:

```javascript
app.use(cors());
```

## Cómo Ejecutar el Proyecto

### Frontend (Angular)

```bash
cd mi-proyecto-angular
npm start
```

El frontend estará disponible en: `http://localhost:4200`

### Backend (Express)

```bash
cd mi-proyecto-angular/backend
npm run dev
```

El backend estará disponible en: `http://localhost:3000`

## Flujo de Navegación

1. Usuario accede a la aplicación (`http://localhost:4200`)
2. Angular carga el componente App
3. La ruta vacía redirige automáticamente a `/home`
4. Se carga el componente Home
5. Usuario hace clic en "Acerca" en el menú
6. Angular navega a `/acerca` sin recargar la página
7. Se carga el componente Acerca

## Rutas Anidadas (Concepto)

Aunque en este proyecto las rutas son simples, Angular permite crear rutas anidadas:

```typescript
{
  path: 'admin',
  component: AdminComponent,
  children: [
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'config', component: ConfigComponent }
  ]
}
```

Esto crearía rutas como:
- `/admin/usuarios`
- `/admin/config`

## Conexión Frontend-Backend

Para consumir los datos del backend desde Angular, puedes usar HttpClient:

```typescript
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {}

obtenerDatos() {
  this.http.get('http://localhost:3000/api/home')
    .subscribe(datos => {
      console.log(datos);
    });
}
```

## Resumen

- **Frontend**: Usa Angular Router para navegación del lado del cliente (SPA)
- **Backend**: Usa Express Router para crear endpoints de API
- **Comunicación**: El frontend puede consumir las APIs del backend usando HTTP
- **CORS**: Configurado para permitir peticiones entre diferentes puertos
