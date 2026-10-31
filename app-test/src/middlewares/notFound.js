const notFound = (req, res) => {
  res.status(404).json({ message: `Ruta ${req.method} ${req.originalUrl} no encontrada` });
};

export default notFound;
