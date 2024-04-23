import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuthentication = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isBrowser = typeof window !== `undefined`;
    const token = window.localStorage.getItem('token');
    if (isBrowser && token) {
      axios.get("http://localhost:3000/verify", {
        headers: {
          Authorization: token
        }
      })
        .then(() => {
          setLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        })
    } else {
      console.log("No token found");
    }
  }, []);

  return loggedIn;
};

export default useAuthentication;