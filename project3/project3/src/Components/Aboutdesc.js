import Image from "../images/about2.png"
import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
function About() {
    return(
        <div className="testimonials-section">
      <Container >
       <center> <h1 className="text-white word">ABOUT US</h1></center> 
        <p className="text-white py-5 text-center" >Welcome to CRICKETONGRASS, where passion for cricket meets cutting-edge solutions. Founded with a vision to redefine sporting landscapes, we bring expertise in creating premier cricketing facilities tailored to your needs. With a commitment to excellence and a drive for innovation, we strive to exceed expectations, one pitch at a time.</p>
        <Card style={{border:"none"}}>
        <Row><Col lg={5} md={6} sm={12} xs={12}>
          <img className="img-fluid " style={{padding:"1px"}} src={Image} />
          </Col>
          <Col>
          <div className="text">
                <h1 className="class3 px-4">What we do</h1>
                <p className="class4 p-4" style={{lineHeight:"30px"}}> At CRICKETONGRASS, we specialise in an array of services designed to enhance your cricketing experience:<br/>
1. Box Cricket: Transform any space into a dynamic cricketing arena with our state-of-the-art box cricket setups, perfect for competitive matches and recreational play alike.<br/>
2. Artificial Grass: Revolutionise traditional turf with our high-quality artificial grass solutions, offering durability, consistency, and year-round playability.<br/>
3. Astro Turf Cricket Pitch: Experience the pinnacle of cricketing surfaces with our premium astro turf pitches, engineered for performance, resilience, and minimal maintenance.<br/>
4. Cricket Practice Net: Elevate your training regimen with our custom-designed cricket practice nets, providing a safe and controlled environment for honing your skills.<br/>
</p>
            </div>
          </Col>
          </Row>
          </Card>
        </Container>
        </div>
    )
}
export default About;