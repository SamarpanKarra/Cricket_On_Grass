import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Profile from "../images/profile.png";
import "../css/about.css";

function  Section(){
    return(
        <div className="testimonials-section">
        <Container>
          <h2 className="text-center mb-5 word" style={{ color: '#fff' }}>Testimonials</h2>
          <Row>
            <Col md={4}>
            <Card className='rectangle my-2'>
          <Card.Body>
          <div>
            <img src={Profile} className="rounded-circle mt-1 custom" alt="Esther Howard" />
          </div>
          <div className='mb-3 pos'>
                        <b><p className="mb-0" style={{fontWeight:500}}>Esther Howard</p></b>
                        <p className="mb-0" style={{color:'F5DE10'}}>Louis Vuitton Garden</p>
                        <div className="rating">
                        <span className="fa fa-star checked "></span>
                        <span className="fa fa-star checked mx-1"></span>
                        <span className="fa fa-star checked mx-1"></span>
                        <span className="fa fa-star checked mx-1"></span>
                        <span className="fa fa-star checked mx-1"></span>
                      </div>
            </div>
          <p>
          CRICKETONGRASS exceeded our expectations with their professionalism and attention to detail. Our artificial grass pitch has transformed our facility, providing a playing surface that's consistent and reliable, regardless of the weather.
        </p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
            <Card className='rectangle my-2'>
          <Card.Body>
          <div>
            <img src={Profile} className="rounded-circle mt-1 custom" alt="Esther Howard" />
          </div>
          <div className='mb-3 pos'>
                        <b><p className="mb-0" style={{fontWeight:500}}>Esther Howard</p></b>
                        <p className="mb-0" style={{color:'F5DE10'}}>Louis Vuitton Garden</p>
                        <div className="rating">
                        <span className="fa fa-star checked "></span>
                        <span className="fa fa-star checked mx-1"></span>
                        <span className="fa fa-star checked mx-1"></span>
                        <span className="fa fa-star checked mx-1"></span>
                        <span className="fa fa-star checked mx-1"></span>
                      </div>
            </div>
          <p>
          We couldn't be happier with the box cricket setup CRICKETONGRASS installed for us. It's become the centrepiece of our recreational activities, bringing our community together for spirited matches and unforgettable moments.
        </p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
            <Card className='rectangle my-2'>
          <Card.Body>
          <div>
            <img src={Profile} className="rounded-circle mt-1 custom" alt="Esther Howard" />
          </div>
          <div className='mb-3 pos'>
                        <b><p className="mb-0" style={{fontWeight:500}}>Esther Howard</p></b>
                        <p className="mb-0" style={{color:'F5DE10'}}>Louis Vuitton Garden</p>
                        <div className="rating">
                        <span className="fa fa-star checked "></span>
                        <span className="fa fa-star checked mx-1"></span>
                        <span className="fa fa-star checked mx-1"></span>
                        <span className="fa fa-star checked mx-1"></span>
                        <span className="fa fa-star checked mx-1"></span>
                      </div>
            </div>
          <p>
          The astro turf cricket pitch installed by CRICKETONGRASS has truly elevated our training sessions. Its performance and durability have surpassed anything we've experienced before, allowing us to focus on our game and push our limits.
        </p>
          </Card.Body>
        </Card>
      </Col>    
      </Row>
        </Container>
      </div>
    )
}
export default Section;