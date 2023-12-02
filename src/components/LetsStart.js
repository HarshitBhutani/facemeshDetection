import React, {useRef} from 'react'
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from 'react-webcam';
import { drawMesh } from '../utilities';
import ParticlesComponent from './Particles';


const LetsStart = ()=> {
     // setting up references
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // load facemesh
  const runFacemesh = async() =>{
    const net = await facemesh.load({
      inputResolution: {width:650, height: 480}, scale: 0.8   /* setup height and width here as of webcam*/ 
    })
    setInterval(() => {
      detect(net)
    }, 100);
  }

  // detct function
  const detect = async (net) => { /*if cond is checking that webcam is running & receiving data , readState== 4 means receiving data*/
    if(typeof webcamRef.current !== "undefined" && webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4){
        // get video properties
        const video = webcamRef.current.video;  // getting the video
        const videoWidth = webcamRef.current.video.videoWidth;  // widht setup for webcam
        const videoHeight = webcamRef.current.video.videoHeight;
        // set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
        // set canvas width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
        // make detections   // detect all our facial landmarks
        const face = await net.estimateFaces(video);  // line 26
        console.log(face);
        // get canvas context for drawing
        const ctx = canvasRef.current.getContext("2d");
        drawMesh(face, ctx);
    }
  }
  runFacemesh();
    return(
        <div>
            <Webcam ref={webcamRef} style={{
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
      <ParticlesComponent/>
        </div>
    )
}

export default LetsStart;