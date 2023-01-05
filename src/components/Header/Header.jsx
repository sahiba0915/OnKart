import React from 'react';
import './header.css';
import {NavLink} from 'react-router-dom'
import { Container, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';

const nav_links= [
  {
    path : 'home',
    display: 'Home'
  },
  {
    path : 'shop',
    display: 'Shop'
  },
  {
    path : 'cart',
    display: 'Cart'
  }
]



const Header = () => {
  return (
    <header className='header'>
    <Container>
      <Row>
         <div className='nav-wrapper'>
          <div className='logo'>
             <img src={logo} alt="logo" />
             <div>
              <h1>OnKart</h1>
             </div>
          </div>

          <div className='navigation'>
             <ul className="menu">
             {
              nav_links.map((item, index)=>(
                <li className="nav-item" key={index}>
                  <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav-active' : ''}>{item.display}</NavLink>
                </li>
              ))
             }
             </ul>
          </div>


          <div className="nav-icons">
            <span className='wishlist_icon'>
              <i className="ri-heart-fill"></i>
              <span className="badge">1</span>
            </span>
            <span className='cart_icon'>
              <i className="ri-shopping-bag-fill"></i>
              <span className="badge">1</span>
            </span>
            <span><motion.img whileTap={{scale: 1.2}} src={userIcon} alt="user-icon" /></span>
          </div>

          <div className="mobile-menu">
            <span>
              <i className="ri-menu-line"></i>
            </span>
          </div>
         </div>
      </Row>
    </Container>  
    </header>
    )
}

export default Header