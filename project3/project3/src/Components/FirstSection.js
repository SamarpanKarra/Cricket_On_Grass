
import React, { useState } from 'react';
import "../css/text.css" 
import Image from "../images/arrow.png";
import Button from "react-bootstrap/Button"
function App1() {
  const [backgroundVideoStyle, setBackgroundVideoStyle] = useState({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const data = [
    { 
      title: "Box Cricket",
      description: "Experience the thrill of cricket in a compact and dynamic format with our box cricket services.",
      video: require("../images/box-cricket.mp4") 
    },
  
  ];

  return (
    <div className="App1">
      {data.map((item, index) => (
        <div key={index} className="background-video video-container" style={{ ...backgroundVideoStyle }}>
          <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content1">
            <div className="centered1">
              <h1 className='word '>{item.title}</h1>
              <p className=' des'>{item.description}</p>
              <a href="/services/1/" className='text-white'>View More</a>
              <div className="buttons1">
              <Button style={{padding:"10px 75px 10px 75px",borderRadius:"25px"}} variant="dark" href="tel:+9492438138">CALL</Button>
                <span className='px-4'><Button href="https://wa.me/9492438138" style={{borderRadius:"25px"}}className="px-5 py-2" variant="secondary">WHATSAPP</Button></span>
              </div>
            
            </div>
           
          </div>
        </div>
      ))}
    </div>

  );
}

export default App1;
