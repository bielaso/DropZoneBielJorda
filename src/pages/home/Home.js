import React, { useEffect , useState }  from 'react';
import "./Home.css";
// components
import DragableFile from '../../components/dragabeFile/DragableFile';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';

//hooks
import UseUserGoogle from '../../hooks/UseUserGoogle';

//idClient:
//1037349674357-hldgpv9bp42g1edgn3uidc69qpmosikc.apps.googleusercontent.com

//secret:
//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

const Home = () => {


    const {isLogged , userGoogle} =  UseUserGoogle();

    useEffect(()=> {
        console.log("userGoogle->" , userGoogle)
    } , [userGoogle]);

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

            <ButtonLogin />

        </div>
    </div>
  )
}

export default Home