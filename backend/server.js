const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API del Backend' });
});

app.get('/api/home', (req, res) => {
  res.json({
    message: 'Datos de Home desde el backend',
    data: {
      title: 'Home',
      description: 'Esta información viene del servidor backend'
    }
  });
});

app.get('/api/acerca', (req, res) => {
  res.json({
    message: 'Datos de Acerca desde el backend',
    data: {
      title: 'Acerca de Nosotros',
      description: 'Información sobre la aplicación desde el servidor',
      version: '1.0.0'
    }
  });
});

// Ruta para obtener todos los datos
app.get('/api/datos', (req, res) => {
  res.json({
    message: 'Lista de datos',
    items: [
      { id: 1, nombre: 'Item 1' },
      { id: 2, nombre: 'Item 2' },
      { id: 3, nombre: 'Item 3' }
    ]
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
