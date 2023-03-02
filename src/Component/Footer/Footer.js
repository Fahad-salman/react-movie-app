import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-style" >
      <Container>
        <Row>
          <Col md={4} className="py-3">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis ullamcorper nisl, ac hendrerit augue laoreet quis.</p>
          </Col>
          <Col md={4} className="py-3 offset-sm-1">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>1234 Main Street</li>
              <li>Anytown, USA 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </Col>
          <Col md={3} className="py-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="-">Facebook</a></li>
              <li><a href="-">Twitter</a></li>
              <li><a href="-">Instagram</a></li>
              <li><a href="-">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} My Website
      </div>
    </footer>
  )
}

export default Footer