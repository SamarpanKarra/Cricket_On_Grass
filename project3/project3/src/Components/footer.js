import { Container,Row,Col } from "react-bootstrap";
import Facebook from "../images/facebook.png";
import Image2 from "../images/twitter.png";
import Image3 from "../images/insta.png";
import Image from "../images/CricOnGrass-Nav.png";
function footer() {
    return(
      <>
       <Container className="py-5 px-5" fluid>
               <Row className="my-5">
                 
                  <Col lg={3} md={4} sm={6} xs={6} >
                   <h5 ><img src={Image} style={{width:"60px"}}></img></h5>
                    <ul class="nav flex-column py-3">
                      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">PLOT NO 12</a></li>
                      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">WEST PART</a></li>
                      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">VINAYAKA HILLS PH II</a></li>
                      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">ROAD NO 4</a></li>
                      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">ALMASGUDA</a></li>
                   </ul>
                  </Col>
                  <Col lg={3} md={4} sm={6} xs={6} >
                  <h5>COMPANY</h5>
                    <ul class="nav flex-column py-3">
                      <li class="nav-item mb-2"><a href='/services/1/' class="nav-link p-0 text-body-secondary">Box Cricket</a></li>
                      <li class="nav-item mb-2"><a href='/services/2/' class="nav-link p-0 text-body-secondary">Artificial Grass</a></li>
                      <li class="nav-item mb-2"><a href='/services/3/' class="nav-link p-0 text-body-secondary">Astro Turf</a></li>
                      <li class="nav-item mb-2"><a href='/services/4/' class="nav-link p-0 text-body-secondary">Cricket Net</a></li>
                   </ul>
                  </Col>
                  <Col lg={3} md={4} sm={6} xs={12}>
                      <h5>CONTACT US</h5>
                      <ul class="nav flex-column py-3">
                          <li class="nav-item mb-2">
                              <a href="tel:+9492438138" class="nav-link p-0 text-body-secondary d-flex align-items-center">
                                  <i class="fas fa-phone me-2"></i> 
                                  +91 94924 38138
                              </a>
                          </li>
                          <li class="nav-item mb-2">
                              <a href="mailto:cricketongrass@gmail.com" class="nav-link p-0 text-body-secondary d-flex align-items-center">
                                  <i class="fas fa-envelope me-2"></i> 
                                  cricketongrass@gmail.com
                              </a>
                          </li>
                      </ul>
                  </Col>
                
                 <Col lg={3} md={4} sm={6} xs={12} >
                      <h5>CONNECT</h5>
                     
                          <div style={{gap:"10px"}} class=" gap-3 py-3">
                     
                         <img src={Facebook} alt="facebook-icon" style={{width:"40px"}}></img> <img src={Image2} alt="Twitter-icon"  style={{width:"38px"}}></img> <img   style={{width:"40px"}} src={Image3} alt="Instagram-icon"></img>
                         </div>
                         
                 </Col>
                  </Row>
               
                <div class="  py-3 mt-4 border-top border-dark text-center">
                  <p><center>All information is subject to specific conditions.© 2023  cricketongrass.All rights reserved.</center></p>
                </div>
         
           
           
    </Container>
    </>
    )
}
export default footer;