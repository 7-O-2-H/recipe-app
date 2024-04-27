import { useEffect, useState } from 'react';
import { tokenVerification } from '../helpers/tokenVerification';

const useVerification = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      tokenVerification(token)
        .then(userInfo => {
          setUserId(userInfo);
        })
        .catch(error => {
          console.error('Error verifying token:', error);
        });
    }
  }, []);

  return userId;
};

export default useVerification;
