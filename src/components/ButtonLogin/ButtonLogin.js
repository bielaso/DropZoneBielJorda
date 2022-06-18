import React from 'react';

//hooks
import UseUserGoogle from '../../hooks/UseUserGoogle';

//images
import googeIconImg from "../../sources/googleIcon.webp"

//firebase
import socialmediaAuth from '../../services/auth';
import { googleProvider } from '../../configs/authMethod';

const ButtonLogin = () => {

    const {isLogged , loginGoogle , logoutGoogle , userGoogle} =  UseUserGoogle();

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