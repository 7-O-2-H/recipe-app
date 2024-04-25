import { useEffect, useState } from 'react';
import { tokenVerification } from '../helpers/tokenVerification';

export function useVerification() {

  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        // retreive token
        // set user
        const userInfo = await tokenVerification(token);
        setUser(userInfo);

      } catch (error) {
        console.error('Error verifying token:', error);
      }
    };

    fetchData();
  }, []);

  return user;
};