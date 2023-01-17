import React,{useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import {Container, Row, Col} from "reactstrap";
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductList from '../components/UI/ProductList';

const Shop = () => {

  const [productsData, setProducts] = useState(products);
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if(filterValue==="sofa"){
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      )

      setProducts(filteredProducts);
    }

    if(filterValue==="chair"){
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      )

      setProducts(filteredProducts);
    }

    if(filterValue==="mobile"){
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      )

      setProducts(filteredProducts);
    }

    if(filterValue==="watch"){
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      )

      setProducts(filteredProducts);
    }

    if(filterValue==="wireless"){
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      )

      setProducts(filteredProducts);
    }



  }

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    const searchedProduct = products.filter(item => item.productName.toLowerCase().includes(searchItem.toLowerCase()));

    setProducts(searchedProduct);
  }
  return (
    <Helmet title='Shop'>
      <CommonSection title="Products"/>

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className="filter-widget">
                <select onChange={handleFilter}>
                <option>Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
                </div>
            </Col>
            <Col lg='3' md='3'>
            <div className="filter-widget">
            <select>
                <option>Sort by</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
            </select>
            </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="search-box">
                <input type="text" placeholder='Search.....' onChange={handleSearch}/>
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {
              productsData.length === 0 ? <h1>No products are found!</h1> : <ProductList data={productsData}/>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop