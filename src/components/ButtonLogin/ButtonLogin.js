import React, { useEffect } from 'react';

import useGapi from '@use-gapi/react';
//hooks
import UseUserGoogle from '../../hooks/UseUserGoogle';

//images
import googeIconImg from "../../sources/googleIcon.webp"

//firebase
import socialmediaAuth from '../../services/auth';
import { googleProvider } from '../../configs/authMethod';

const ButtonLogin = () => {

    const CLIENT_ID = "1037349674357-hldgpv9bp42g1edgn3uidc69qpmosikc.apps.googleusercontent.com"
    const API_KEY = "AIzaSyAhZXzK3HABxqU_5vxiZse2Lp0gsbL3V1Q"
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
    const SCOPES = "https://www.googleapis.com/auth/drive"

    const {isLogged , loginGoogle , logoutGoogle , userGoogle} =  UseUserGoogle();

    const { client } = useGapi({
        apiKey: "YOUR_API_KEY",
        clientId: "YOUR_CLIENTID",
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
     })

    useEffect(()=>  {
    } , [])

    const onClickLogin = async() => {
        const loginRespons = await socialmediaAuth(googleProvider);
        console.log("loginResponse ->" , loginRespons);
        loginGoogle(loginRespons);
    }
    

    return (
    <div style={{width: "100%"}}>
        {isLogged ?
            <button className='Home-displayText-button' onClick={logoutGoogle}>
                <img src={userGoogle.user.photoURL}></img>
                <p>
                    Logout {userGoogle.additionalUserInfo.profile.name && userGoogle.additionalUserInfo.profile.name}
                </p>
            </button>
        : 
            <button className='Home-displayText-button' onClick={onClickLogin}>
                <img src={googeIconImg}></img>
                <p>Login con Google</p>
            </button> 
        }
    </div>
    )
}

export default ButtonLogin