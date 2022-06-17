// import logo from './logo.svg';
import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate
} from "react-router-dom";
import './App.css';

//components
import Home from "../src/pages/home/Home"
import GoogleLogin from '../src/pages/googleLogin/GoogleLogin';
import { useEffect } from 'react';

function App() {

//   credential: {
  // accessToken: "ya29.a0ARrdaM_OgQZpGQLAuqS5PJPV7daoc4RCcrfoHt4WJmQQbnCTMFP8-KHtk20ySyN8ZDbtnccUvNra2Kl0uJboXqBczlwGPXwSSkQ_W0jNLItf0mR3deDTZ8DF1JyRLV2HB2c01QdDoo-K0PaTj3JCesbAm59y1g"
  // idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4MGFkYjBjMzJhMTc1ZDk1MGExYzE5MDFjMTgyZmMxNzM0MWRkYzQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTAzNzM0OTY3NDM1Ny1obGRncHY5YnA0MmcxZWRnbjN1aWRjNjlxcG1vc2lrYy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwMzczNDk2NzQzNTctaGxkZ3B2OWJwNDJnMWVkZ24zdWlkYzY5cXBtb3Npa2MuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDEwNjA0OTQxMTI4MzM4MjA4OTEiLCJlbWFpbCI6ImJpZWxqb3JkYTRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJPRGFHaUpJTTNMVzc5aUVXdmwxVEt3IiwiaWF0IjoxNjU1NDc3NDA3LCJleHAiOjE2NTU0ODEwMDd9.FImXHncEQHAv95XdI0qL7H__2sAEyYfpJkc17zVOFO_jWQDgBCPtVg_SUMYiMPp3xaHCe0pdvi4KOm6gv4-p9evzDZnFcNXwivKhiP0QcGhvZIuSZ-oH2q0JmY1-E9x15uLoIFL3HT4crirZ7hArAxJIi-TW6cQ9GuL8FrCvMJV-04GuVtQnXyiDqMa3f8lDsk-KscM5zw0qvTmVaLNabU9ZYQnk749wgRtvZx-je1nmOQuCxhUOHavXt_onFD4ERHj-ng7IBxcUQR7Qm0FDZ8WmHbNKQefxVSqyN4-bP4yXGur3kGJWgsbtEMcwHY65bX28QDNJMQ3ayXJ2t4G50Q"
  // providerId: "google.com"
//  }



  return (
    <Router>
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>

      </Routes>
    </Router>
    // <Home />
  );
}

export default App;
