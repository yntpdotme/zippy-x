import express from 'express';

import {registerUser, authenticateUser} from '../controllers/index.js';

const router = express.Router();

router
  .route('/signup')
  .post(registerUser);

router
  .route('/signin')
  .post(authenticateUser);

export default router;
