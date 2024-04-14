import {publicClient as apiClient, privateClient} from '@services';

const AuthService = {
  signUp: formData => apiClient.post('/auth/signup', formData),

  signIn: formData => apiClient.post('/auth/signin', formData),

  signOut: () => privateClient.get('/auth/signout'),

  checkAuthStatus: () => privateClient.get('/auth/status'),
};

export default AuthService;
