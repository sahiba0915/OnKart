import React, {useRef, useEffect} from 'react';
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
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky-header');
      }else {
        headerRef.current.classList.remove('sticky-header');
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc();
    return() => window.removeEventListener("scroll", stickyHeaderFunc);
  })

  const menuToggle = () => {
    menuRef.current.classList.toggle('active-menu');
  }
  return (
    <header className='header' ref={headerRef}>
    <Container>
      <Row>
         <div className='nav-wrapper'>
          <div className='logo'>
             <img src={logo} alt="logo" />
             <div>
              <h1>OnKart</h1>
             </div>
          </div>

          <div className='navigation' ref={menuRef} onClick={menuToggle}>
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
            <div className="mobile-menu">
            <span onClick={menuToggle}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
          </div>
         </div>
      </Row>
    </Container>  
    </header>
    )
}

export default Header