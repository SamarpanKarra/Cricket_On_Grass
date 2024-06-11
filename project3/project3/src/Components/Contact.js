
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '@fortawesome/fontawesome-free/css/all.css';
import "../css/indexx.css"
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';
const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleClose = () => setShowModal(false);
  const handleShow = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7sqp635', 'template_pi6kwqd',e.target,
        '1KIdCfqQ4W-r5xUy-')
      .then(
        () => {
         handleShow("Email was sent")
        },
        (error) => {
          handleShow(`FAILED... ${error.text}`);
        },
      );
    e.target.reset();
  };
  return (

    <section className="contact">

      <div className="content">
        <h2 className="--text-center">GET IN TOUCH</h2>
        <Container>
        <p>Have a question or want to discuss a project? Drop us a message below, and we'll get back to you promptly. Your inquiries are important to us, and we're eager to assist you in any way we can. Let's start the conversation! </p>
        </Container>
      </div>

      <div className="container">
        <Row>
          <Col>
            <div class="contactForm">
              <Form ref={form} onSubmit={sendEmail}>
                <Row><Col> <Form.Group controlId="formName" style={{ padding: "10px" }} >
                  <Form.Control type="text" placeholder="Name" name="user_name"  required />
                </Form.Group>
                </Col>
                  <Col> <Form.Group controlId="formEmail" style={{ padding: "10px" }}>
                    <Form.Control type="email" placeholder="Email" name="user_email" required />
                  </Form.Group></Col>
                </Row>
                <Form.Group controlId="formSubject" style={{ padding: "10px" }}>
                  <Form.Control type="text" placeholder="Subject" name="subject" required />
                </Form.Group>
                <Form.Group controlId="formMessage" style={{ padding: "10px" }}>
                  <Form.Control as="textarea" placeholder="Your message" name="message" rows={10} />
                </Form.Group>
                <div className="inputBox" style={{ padding: "10px" }}>
                  <button type="submit "  className="button py-2 w-100">Send Message</button>
                </div>
              </Form>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="contactInfo">

              <div className="box">
                <div className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                <div className="text">
                  <h3>Our Address</h3>
                  <p>52221, Hyathi palace Banjara hiulls</p>
                </div>
              </div>

              <div className="box">
                <div className="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                <div className="text">
                  <h3>Send your message</h3>
                  <p>52221, Hyathi palace Banjara hiulls</p>
                </div>
              </div>

              <div className="box">
                <div className="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                <div className="text">
                  <h3>Call us on</h3>
                  <p>52221, Hyathi palace Banjara hiulls</p>
                </div>
              </div>

              <div className="box">
                <div className="icon"><i class="fa fa-clock" aria-hidden="true"></i></div>
                <div className="text">
                  <h3>Work Time</h3>
                  <p>52221, Hyathi palace Banjara hiulls</p>
                </div>
              </div>

            </div>
          </Col>

        </Row>
      </div>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Email Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  )
}
export default Contact