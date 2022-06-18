import {useContext, useCallback, useEffect } from 'react'
import Context from '../context/userGoogleContext';


export default function UseUserGoogle () {

    const {userGoogle , setUserGoogle} = useContext(Context);

    const loginGoogle = useCallback((user) => {
        console.log("user->login ",user);
        const userUpload = JSON.stringify(user);
        window.sessionStorage.setItem('userGoogle', userUpload)
        setUserGoogle(userUpload);
      }, [setUserGoogle]);
    
    const logoutGoogle = useCallback(() => {
        setUserGoogle(null);
        window.sessionStorage.removeItem('userGoogle');
    }, [setUserGoogle]);


    return {
        isLogged: Boolean(userGoogle),
        userGoogle: JSON.parse(userGoogle),
        loginGoogle,
        logoutGoogle,
    }
}