import express from 'express';

import {
  registerUser,
  authenticateUser,
  unauthenticateUser,
} from '../controllers/index.js';
import { authorization } from '../../common/middlewares/auth.middlewares.js';

const router = express.Router();

router
  .route('/signup')
  .post(registerUser);

router
  .route('/signin')
  .post(authenticateUser);

router
  .route('/signout')
  .get(authorization, unauthenticateUser);

export default router;
