import React from 'react';
import { Container, Row , Col } from 'reactstrap';
import { motion } from 'framer-motion';
import './services.css';
import serviceData from '../assets/data/serviceData';

const services = () => {
  return (
    <section className='services'>
      <Container>
        <Row>
          {
            serviceData.map((item, index) => (
              <Col lg='3' md='4' key={index}>
                <motion.div whileHover={{scale: 1.1}}
                className="service-item" key={index} style={{background : `${item.bg}`}}>
                  <span><i class={item.icon}></i></span>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default services