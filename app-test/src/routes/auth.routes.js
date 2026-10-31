import { Router } from 'express';
import { login, logout } from '../controllers/auth.controller.js';

const router = Router();

router.post('/login', login);
router.all('/logout', logout); // Acepta cualquier método HTTP

export default router;
