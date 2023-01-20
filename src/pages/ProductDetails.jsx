import React ,  {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import'../styles/product-details.css';
import { motion } from 'framer-motion';


const ProductDetails = () => {
  const[tab, setTab] = useState('desc');
  const {id}= useParams();
  const product = products.find((item)=>item.id===id);
  const{imgUrl, productName, price, avgRating, shortDesc, reviews, description } = product;

  return (
    <Helmet title={productName}>
     <CommonSection title={productName}/>
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

     <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="tab-wrapper d-flex align-items-center gap-5">
              <h6 className={`${tab==='desc' ? 'active-tab' : ''}`} onClick={()=>setTab('desc')}>Description</h6>
              <h6 className={`${tab==='rev' ? 'active-tab' : ''}`} onClick={()=>setTab('rev')}>Reviews ({reviews.length})</h6>
            </div>

            {
              tab === 'desc' ? ( <div className="tab-content mt-5">
              <p>{description}</p>
            </div> ) : (
            <div className='product-review mt-5'>
              <div className="review-wrapper">
                <ul>
                  {
                    reviews?.map((item, index)=>(
                      <li key={index}>
                        <span>{item.rating}( ratings)</span>
                        <p className='mt-2 mb-2'>{item.text}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
              </div>
            )
            }

           
          </Col>
        </Row>
      </Container>
     </section>
    </Helmet>  
    )
}

export default ProductDetails