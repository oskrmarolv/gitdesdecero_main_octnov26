import express from 'express';
import routes from './routes/index.js';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// Middlewares globales
app.use(express.json());

// Rutas
app.use('/', routes);

// Manejo de rutas inexistentes y errores
app.use(notFound);
app.use(errorHandler);

export default app;
