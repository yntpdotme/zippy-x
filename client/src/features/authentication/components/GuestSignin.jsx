import {useNavigate} from 'react-router-dom';

import {AuthService} from '@features/authentication';
import {Button} from '@components/ui';

const GuestSignin = ({label}) => {
  const navigate = useNavigate();

  const handleGuestSignIn = async () => {
    try {
      const formData = {
        email: 'guest@email.com',
        password: 'Guest@1',
      };

      await AuthService.signin(formData);

      navigate('/dashboard');
    } catch (error) {
      let errorMessage = 'An unexpected error occurred.';

      if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      console.log(errorMessage);
    }
  };

  return (
    <>
      <Button
        onClick={handleGuestSignIn}
        variant="secondary"
        label={label || 'Sign In as Guest'}
        fullWidth
      />
    </>
  );
};

export default GuestSignin;
