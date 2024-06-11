import Image from "../images/about.png"
import Button from "react-bootstrap/Button"
const AboutHead = () => {
    const styles = {
      
        minHeight: "65vh",
        position: "relative",
        backgroundSize: "cover",
        backgroundImage: `url(${Image})`,
      };
    
    return (
      <section
        className="w-100 bg-fixed d-flex align-items-center justify-content-center bg-secondary background-about"
        style={styles}
      >
        <div
          style={{
            zIndex: 1,
            width: "90%",
            maxWidth: "700px",
            backgroundColor: "rgba(0,0,0,0.5)",
            margin: "60px 0 70px 0",
          }}
          className="d-flex align-items-center justify-content-center py-5 rounded flex-column text-white"
        >
          <h2 className="px-2 text-center" style={{ fontSize: "32px" }}>
          Transforming Fields into Arenas, Dreams into Reality.
          </h2>
          <p
            className="px-2 mt-2 text-center"
            style={{ maxWidth: "500px", fontSize: "16px" }}
          >
          At CRICKETONGRASS, we pioneer the fusion of sports and innovation, crafting
 experiences that transcend boundaries and elevate the game.
          </p>
        </div>
        <div
          className="position-absolute bottom-0 start-50 translate-middle-x d-flex align-items-center justify-content-center gap-3"
          style={{ marginBottom: "1rem", width: "95%", maxWidth: "400px" }}
        >
       <Button style={{padding:"10px 75px 10px 75px",borderRadius:"25px"}} variant="dark" href="tel:+9492438138">CALL</Button>
                <span className='px-4'><Button href="https://wa.me/9492438138" style={{borderRadius:"25px"}}className="px-5 py-2" variant="secondary">WHATSAPP</Button></span>
        </div>
      </section>
    );
  };
  
  export default AboutHead;
  