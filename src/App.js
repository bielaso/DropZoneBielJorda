// import logo from './logo.svg';
import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect
  // Navigate
} from "react-router-dom";
import './App.css';

//components
import Home from "../src/pages/home/Home"
import GoogleLogin from '../src/pages/googleLogin/GoogleLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/GoogleLogin" element={<GoogleLogin/>}/>

        {/* <Route exact path="/" element={<Error404/>}/> */}
      </Routes>
    </Router>
    // <Home />
  );
}

export default App;
