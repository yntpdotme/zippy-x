import {publicClient as apiClient, privateClient} from '@services';

const AuthService = {
  signup: formData => apiClient.post('/auth/signup', formData),

  signin: formData => apiClient.post('/auth/signin', formData),

  signout: () => privateClient.get('/auth/signout'),

  checkAuthStatus: () => privateClient.get('/auth/status'),
};

export default AuthService;
