import express from "express";
import cors from 'cors';
import db from "./database/db.js";
import blogRoutes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);

// Establecer el puerto de escucha dinámico
const PORT = process.env.PORT || 8000;

// Cambiar el método de escucha para usar el puerto dinámico
app.listen(PORT, async () => {
    try {
        // Autenticar la conexión a la base de datos
        await db.authenticate();
        console.log('Conexion exitosa a la BD');
        console.log(`Servidor UP running in http://localhost:${PORT}/`);
    } catch (error) {
        console.log(`El error de conexion es: ${error}`);
    }
});