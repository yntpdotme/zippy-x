import {ApiError, ApiResponse, asyncHandler} from '../../common/utils/index.js';
import {authValidator} from '../../common/validators/index.js';
import {authService} from '../services/index.js';

const {ValidateRegister, ValidateSignIn} = authValidator;

const registerUser = asyncHandler(async (req, res) => {
  const {error} = ValidateRegister(req.body);
  if (error) throw new ApiError(400, error.issues[0].message, []);

  const {name, email, password} = req.body;

  const {user, accessToken, refreshToken} = await authService.register(
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

  const {user, accessToken, refreshToken} = await authService.signIn(
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
  await authService.signOut(req.user._id);

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

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  const {accessToken, newRefreshToken} = await authService.refreshToken(
    incomingRefreshToken
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', newRefreshToken, options)
    .json({
      accessToken,
      refreshToken: newRefreshToken,
      message: 'Access token refreshed',
    });
});

export const authController = {
  registerUser,
  authenticateUser,
  unauthenticateUser,
  refreshAccessToken,
};
