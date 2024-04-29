// imports
import { useState, useEffect } from 'react';

export function useLoggedInStatus() {

  const [loggedIn, setLoggedIn]  = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (typeof window!== 'undefined') {
      // get logged in status
      const storedLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));
      const storedUserName = localStorage.getItem('userName');
      if (storedLoggedIn !== null) {
        setLoggedIn(storedLoggedIn);
        setUserName(storedUserName);
      }
    };
  }, []);

  return { loggedIn, userName };

};

