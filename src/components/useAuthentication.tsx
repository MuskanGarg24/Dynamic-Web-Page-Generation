import React from "react";
import axios from "axios";

const useAuthentication = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
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
