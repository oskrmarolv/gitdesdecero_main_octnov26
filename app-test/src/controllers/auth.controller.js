// Datos ficticios: no hay validación real de credenciales

/*

  cambio 4
  cambio 4

  cambio 6

  cambio 4

  cambio 6

*/

export const login = (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({ message: 'email y password son requeridos' });
  }

  res.json({
    message: 'Login exitoso',
    token: 'fake-jwt-token-123456',
    user: { id: 1, name: 'Ana García', email },
  });
};

export const logout = (req, res) => {
  res.json({ message: 'Sesión cerrada correctamente' });
};
