import React , {useState, useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet';
import {Container, Row, Col} from "reactstrap";
import heroImg from '../assets/images/hero-img.png';
import '../styles/home.css';
import Services from '../services/services'
import ProductList from '../components/UI/ProductList';
import products from '../assets/data/products';
import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {

  const year = new Date().getFullYear(); 
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(item => item.category === 'chair');
    const filteredBestSalesProducts = products.filter(item => item.category === 'sofa');
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);
  return (
    <Helmet title = {'Home'}>
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero-content">
                <p className="hero-subtitle">
                  Trending Product in {year}
                </p>
                <h2>Make your products more Minimalistic and Modern</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptate, aperiam voluptatibus et doloremque explicabo optio cupiditate nulla architecto doloribus asperiores
                   laborum temporibus perferendis distinctio totam amet tenetur! Necessitatibus, sapiente!
                </p>
                <button className="buy-btn">Shop Now</button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero-img">
                <img src={heroImg} alt="hero-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services/>
      <section className="trending-products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section-subtitle" >Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts}/>
          </Row>
        </Container>
      </section>

      <section className="best-sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section-title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>

      <section className="timer-count">
        <Container>
          <Row>
            <Col lg = '6' md = '6'>
              <div className="clock-top-content">
                <h4 className='text-white fs-6 mb-2'>Limited offers</h4>
                <h3 className='text-white fs-6 mb-3'>Quality</h3>
              </div>
              <Clock/>
              <motion.button whileTap={{scale: 1.2}} className="buy-btn store-btn">
                <Link to ="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg = '6' md = '6' className='text-end'>
              <img src={counterImg} alt="counter-img" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home