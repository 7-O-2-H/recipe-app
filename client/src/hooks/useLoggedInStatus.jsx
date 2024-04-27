// imports
import { useState, useEffect } from 'react';

export function useLoggedInStatus() {

  const [loggedIn, setLoggedIn]  = useState(false);

  useEffect(() => {
    if (typeof window!== 'undefined') {
      // get logged in status
      const storedLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));
      if (storedLoggedIn !== null) {
        setLoggedIn(storedLoggedIn);
      }
    }
  }, []);

  return loggedIn;

};

