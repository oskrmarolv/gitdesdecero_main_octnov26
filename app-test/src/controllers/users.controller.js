import users from '../data/users.js';

// GET /api/users
export const getUsers = (req, res) => {


  /*
    cambio 1


    cambio 3

    cambio 2
    cambio 2


    cambio 3




  */
  res.json(users);
};

// POST /api/users
export const createUser = (req, res) => {
  const { name, email } = req.body ?? {};

  if (!name || !email) {
    return res.status(400).json({ message: 'name y email son requeridos' });
  }

  const newUser = { id: users.length + 1, name, email };
  res.status(201).json(newUser);
};

// GET /api/users/:id
export const getUserById = (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  res.json(user);
};

// PATCH /api/users/:id
export const updateUser = (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  res.json({ ...user, ...req.body, id: user.id });
};

// DELETE /api/users/:id
export const deleteUser = (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  res.json({ message: `Usuario ${user.id} eliminado`, user });
};
