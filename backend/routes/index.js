import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { createInstance, getInstances } from "../controllers/Instances.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/api/users', verifyToken, getUsers);
router.post('/api/users', Register);
router.post('/api/login', Login);
router.get('/api/token', refreshToken);
router.delete('/api/logout', Logout);
router.post('/api/createinstance', verifyToken, createInstance);
router.get('/api/getinstances', verifyToken, getInstances);

export default router;