import { useEffect, useState } from 'react';
import { tokenVerification } from '../helpers/tokenVerification';

export function useVerification() {

  const [userId, setUserId] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // retreive token
        const token = localStorage.getItem('token');
        // set user
        const userInfo = await tokenVerification(token);
        setUserId(userInfo);

      } catch (error) {
        console.error('Error verifying token:', error);
      }
    };

    fetchData();
  }, []);

  return userId;
};