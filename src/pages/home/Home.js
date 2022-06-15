import React, { useEffect }  from 'react';
import "./Home.css";

// components
import DragableFile from '../../components/dragabeFile/DragableFile';

//images
import googeIconImg from "../../sources/googleIcon.webp"

const Home = () => {
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

            <button className='Home-displayText-button'>
                <img src={googeIconImg}></img>
                <p>Login con Google</p>
            </button>
            
        </div>
    </div>
  )
}

export default Home