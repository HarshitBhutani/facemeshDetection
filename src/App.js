import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import { useCallback } from "react";
// import Particles from "react-tsparticles" ;

// import { loadFull } from "tsparticles";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from 'react-webcam';
import { drawMesh } from './utilities';
import ParticlesComponent from './components/Particles';

import Navbar from './components/Navbar';
import LetsStart from './components/LetsStart';
import Home from './components/Home';
import SlidesHome from './components/SlidesHome';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="header"  >
      {/* <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} /> */}
      <Router>

      
    <Navbar/>
    {/* <SlidesHome content={{ backgroundColor: '#ff7c7c', title: 'Slide 1' }} /> */}
    <Routes>

      <Route exact path="/" element={<Home/>} />
      <Route exact path="/letsStart" element={<LetsStart/>} />
    </Routes>
      {/* <Webcam ref={webcamRef} style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left : 0,
        right : 0,
        textAlign : "center",
        zIndex: 9,
        width: 650,
        height: 480
      }} ></Webcam>

      <canvas ref={canvasRef} style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left : 0,
        right : 0,
        textAlign : "center",
        zIndex: 9,
        width: 650,
        height: 480
      }}></canvas>
      <ParticlesComponent/> */}
      </Router>
    </div>
  );
}

export default App;
