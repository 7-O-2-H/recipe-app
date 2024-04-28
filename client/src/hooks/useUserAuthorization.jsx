import { useEffect, useState } from 'react';
import { userAuthorization } from '../helpers/tokenVerification';

const useUserAuthorization = (submitterId) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token.trim() !== '') {
      userAuthorization(token, submitterId)
        .then(authorizationInfo => {
          setIsAuthorized(authorizationInfo.authorized);
        })
        .catch(error => {
          console.error('Error authorizing user:', error);
        });
    }
  }, [submitterId]);

  return isAuthorized;
};

export default useUserAuthorization;

