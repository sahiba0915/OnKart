import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import'../styles/product-details.css';
import { motion } from 'framer-motion';


const ProductDetails = () => {

  const {id}= useParams();
  const product = products.find((item)=>item.id===id);
  const{imgUrl, productName, price, avgRating, shortDesc, review, description } = product;

  return (
    <Helmet>
     <CommonSection/>
     <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='6'>
            <img src={imgUrl} alt=''/>
            </Col>
          <Col lg='6'>
            <div className="product-details">
              <h2>{productName}</h2>
            <div className="product-ratings d-flex align-items-center gap-5 mb-4">
              <div>
                <span>
                <i class="ri-star-s-fill"></i>
                </span>
                <span>
                <i class="ri-star-s-fill"></i>
                </span>
                <span>
                <i class="ri-star-s-fill"></i>
                </span>
                <span>
                <i class="ri-star-s-fill"></i>
                </span>
                <span>
                <i class="ri-star-half-s-fill"></i>
                </span>
              </div>
              <p>(<span>{avgRating}</span> ratings)</p>
            </div>
            <span className='product-price'>${price}</span>
            <p className='mt-3'>{shortDesc}</p>

            <motion.button whileTap={{scale: 1.2}} className="buy-btn">Add to Cart</motion.button>
            </div>
          </Col>
        </Row>
      </Container>
     </section>
    </Helmet>  
    )
}

export default ProductDetails