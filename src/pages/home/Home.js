import React, { useEffect }  from 'react';
import "./Home.css";
// components
import DragableFile from '../../components/dragabeFile/DragableFile';

//images
import googeIconImg from "../../sources/googleIcon.webp"


//provider
import { googleProvider } from '../../configs/authMethod';
import socialmediaAuth from '../../services/auth';

//idClient:
//1037349674357-hldgpv9bp42g1edgn3uidc69qpmosikc.apps.googleusercontent.com

//secret:
//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

const Home = () => {


    const onClickLogin = async() => {
        const loginRespons = await socialmediaAuth(googleProvider);
        console.log("loginResponse ->" , loginRespons)
    }

  return (
    <div className='Home-parent'>
        <DragableFile />
        <div className='Home-displayText'>
            <div className='Home-displayText-title'>
                <h3>Bienvenido a DDrop</h3>
                <p>
                    Para subir tus archivos de forma simple a drive,  
                    puedes hacer LogIn a través de Google.
                </p>
            </div>

            <button className='Home-displayText-button' onClick={onClickLogin}>
                <img src={googeIconImg}></img>
                <p>Login con Google</p>
            </button>

            
            
        </div>
    </div>
  )
}

export default Home