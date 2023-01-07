import React , {useState, useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet';
import {Container, Row, Col} from "reactstrap";
import heroImg from '../assets/images/hero-img.png';
import '../styles/home.css';
import Services from '../services/services'
import ProductList from '../components/UI/ProductList';
import products from '../assets/data/products';

const Home = () => {

  const year = new Date().getFullYear(); 
  const [data, setData] = useState(products);

  useEffect(() => {
    const filteredProducts = products.filter(item => item.category === 'chair');
    setData(filteredProducts);
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
            <ProductList data={data}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home