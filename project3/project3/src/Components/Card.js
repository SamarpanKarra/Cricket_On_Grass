import React, { useState } from 'react';
import '../css/card.css'; // Import CSS file for styling
import Button from "react-bootstrap/Button"
import Image from "../images/arrow.png"
function App1() {
  const [backgroundImageStyle, setBackgroundImageStyle] = useState({
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  // Define your data directly within the component
  const data = [
    { 
      title: "Box Cricket",
      description: "Experience the thrill of cricket in a compact and dynamic format with our box cricket services.       ",
      image: require("../images/box-cricket.png"),
      link:"/services/1/"
    },
    { 
      title: "Artificial Grass",
      description: "Transform your space with lush greenery that requires minimal maintenance. Artificial Grass 25mm 35mm 40 mm Fifa 50 mm football Grass",
      image: require("../images/artficial.jpg"),
      link:"/services/2/"
    },
    { 
      title: "Astro Turf Cricket Pitch",
      description: "Elevate your game with our Astro Turf cricket pitches. Designed for superior performance and durability. ",
      image: require("../images/truf.png"),
      link:"/services/4/"
    },
    { 
      title: "Cricket Practice Net",
      description: "Sharpen your skills and refine your technique with our cricket practice nets. ",
      image: require("../images/box-cricket.png"),
      link:"/services/4/"
    }
   
  ];

  return (
    <div className="App" >
      {data.map((item, index) => (
        <div key={index}  style={{ ...backgroundImageStyle, backgroundImage: `url(${item.image})` }}>
          <div className="content">
            <div className="centered">
            <h1 className='word '>{item.title}</h1>
              <p className=' des'>{item.description}</p>
              <a href={item.link} className='text-white'>View More</a>
              <div className="buttons">
        

              <Button style={{padding:"10px 75px 10px 75px",borderRadius:"25px"}} variant="dark" href="tel:+9492438138">CALL</Button>
                <span className='px-4'><Button href="https://wa.me/9492438138" style={{borderRadius:"25px"}}className="px-5 py-2" variant="secondary">WHATSAPP</Button></span>
              </div>
            </div>
            <div className='centered11' style={{top:"30%"}}>
            <img src={Image} className="animated-image"   alt="down-arrow"></img>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default App1;
