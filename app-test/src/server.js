import app from './app.js';




---

  Cambio sobre un archivo que ya existe en el repositorio...

---




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
