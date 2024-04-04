import jwt from 'jsonwebtoken';

import {User} from '../../common/models/index.js';
import {ApiError, getAvatarName} from '../../common/utils/index.js';

const generateAccessAndRefreshTokens = async userId => {
  try {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // attach refresh token to user document to avoid refreshing access token with multiple refresh tokens
    user.refreshToken = refreshToken;

    await user.save();

    return {accessToken, refreshToken};
  } catch (error) {
    throw new ApiError(
      500,
      'Something went wrong while generating the access token'
    );
  }
};

const registerUser = async (name, email, password) => {
  let user = await User.findOne({email});
  if (user) throw new ApiError(409, 'User with email already exists');

  const avatar = `https://ui-avatars.com/api/?name=${getAvatarName(
    name
  )}&size=250&background=4d2be2&color=ffffff`;

  user = await User.create({
    name,
    email,
    password,
    avatar,
  });

  const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(
    user._id
  );

  // get the user document ignoring the password and refreshToken field
  const createdUser = await User.findById(user._id).select(
    '-password -refreshToken -__v'
  );

  if (!createdUser)
    throw new ApiError(500, 'Something went wrong while registering the user');

  return {user: createdUser, accessToken, refreshToken};
};

const signInUser = async (email, password) => {
  const user = await User.findOne({email});
  if (!user) throw new ApiError(401, 'Email and password do not match');

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, 'Email and password do not match');
  }

  const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(
    user._id
  );

  // get the user document ignoring the password and refreshToken field
  const signedInUser = await User.findById(user._id).select(
    '-password -refreshToken -__v'
  );

  return {user: signedInUser, accessToken, refreshToken};
};

const signOutUser = id => {
  return User.findByIdAndUpdate(
    id,
    {
      $set: {
        refreshToken: '',
      },
    },
    {new: true}
  );
};

const refreshAccessToken = async refreshToken => {
  if (!refreshToken) {
    throw new ApiError(401, 'Unauthorized request');
  }

  try {
    const decodedToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, 'Invalid refresh token');
    }

    if (refreshToken !== user?.refreshToken) {
      // If token is valid but is used already
      throw new ApiError(401, 'Refresh token is expired or used');
    }

    const {accessToken, refreshToken: newRefreshToken} =
      await generateAccessAndRefreshTokens(user._id);

    return {accessToken, newRefreshToken};
  } catch (error) {
    throw new ApiError(401, error?.message || 'Invalid refresh token');
  }
};

export const authService = {
  register: registerUser,
  signIn: signInUser,
  signOut: signOutUser,
  refreshToken: refreshAccessToken,
};
