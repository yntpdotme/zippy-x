import {ApiError, ApiResponse, asyncHandler} from '../../common/utils/index.js';
import {userValidator} from '../../common/validators/index.js';
import {userService} from '../services/index.js';

const {ValidateRegister, ValidateSignIn} = userValidator;

const registerUser = asyncHandler(async (req, res) => {
  const {error} = ValidateRegister(req.body);
  if (error) throw new ApiError(400, error.issues[0].message, []);

  const {name, email, password} = req.body;

  const {user, accessToken, refreshToken} = await userService.register(
    name,
    email,
    password
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  return res
    .status(201)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(
        201,
        {user, accessToken, refreshToken},
        'User registered successfully'
      )
    );
});

const authenticateUser = asyncHandler(async (req, res) => {
  const {error} = ValidateSignIn(req.body);
  if (error) throw new ApiError(400, error.issues[0].message, []);

  const {email, password} = req.body;

  const {user, accessToken, refreshToken} = await userService.signIn(
    email,
    password
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  return res
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {user, accessToken, refreshToken},
        'User signed in successfully'
      )
    );
});

const unauthenticateUser = asyncHandler(async (req, res) => {
  await userService.signOut(req.user._id);

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  return res
    .status(200)
    .clearCookie('accessToken', options)
    .clearCookie('refreshToken', options)
    .json(new ApiResponse(200, {}, 'User Signed out'));
});

export {registerUser, authenticateUser, unauthenticateUser};
