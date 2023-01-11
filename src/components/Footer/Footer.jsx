import React from 'react';
import './footer.css';
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png';

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
          <div className='logo'>
             <div>
              <h1 className="text-white">OnKart</h1>
             </div>
             </div>
             <p className="footer-text mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta illum architecto, 
              hic esse perspiciatis magni deleniti natus quam,
               minima delectus quod quas asperiores iusto eligendi omnis fugiat est? Dignissimos, rem?
             </p>
          </Col>

          <Col lg='3'>
          <div className='footer-quick-links'>
              <h4 className="quick-link-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className='ps-0 border-0'>
                  <Link to= '#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to= '#'>Arm Chairs</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to= '#'>Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to= '#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>


          <Col lg='2'>
            <div className='footer-quick-links'>
              <h4 className="quick-link-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3'>
          <div className='footer-quick-links'>
              <h4 className="quick-link-title">Contact</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className='ps-0 border-0'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>123, Jamshedpur</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+91 123456789</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <span><i class="ri-mail-line"></i></span>
                  <p>example123@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className="footer-copyright text-center">Copyright {year} developed by Sahiba Kumari</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer