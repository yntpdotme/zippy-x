import express from 'express';

import {authController} from '../controllers/index.js';
import {authorization} from '../../common/middlewares/auth.middlewares.js';

const router = express.Router();

const {registerUser, authenticateUser, unauthenticateUser, refreshAccessToken} = authController;

router
  .route('/signup')
  .post(registerUser);

router
  .route('/signin')
  .post(authenticateUser);

router
  .route('/signout')
  .get(authorization, unauthenticateUser);

router
  .route('/refresh')
  .post(refreshAccessToken);

export default router;
