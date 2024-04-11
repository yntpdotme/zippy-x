import {useNavigate} from 'react-router-dom';

import {Button} from '@components/ui';

const GuestSignin = ({label}) => {
  const navigate = useNavigate();

  const handleGuestSignIn = async () => {
    navigate('/dashboard');
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
