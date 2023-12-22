import { Container, Row } from 'reactstrap';
import './Header.css';
import {motion} from 'framer-motion';
import { NavLink,useNavigate } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import 'remixicon/fonts/remixicon.css';
import { useRef, useEffect} from 'react';
import {useSelector} from "react-redux";

const nav_link = [
  {
    path: 'Home',
    display: 'Home',
  },
  {
    path: 'shop',
    display: 'Shop',
  },
  {
    path: 'cart',
    display: 'Cart',
  },
];

const Header = () => {
  const HeaderRef=useRef(null);
  const totalQuantity=useSelector(state=>state.cart.totalQuantity)

const navigate=useNavigate()

  const menuRef=useRef(null);
  const stickyHeaderFunc=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        HeaderRef.current.classList.add('sticky_header');
      } else{
        HeaderRef.current.classList.remove('sticky_header');
      }
    })
  }
  useEffect(()=>{
    stickyHeaderFunc()

    return()=>window.removeEventListener("scroll",stickyHeaderFunc)
  })
  const menuToggle=()=>menuRef.current.classList.toggle('active_menu')


  const navigateTocart=()=>{
navigate('/cart')
  }
  return (
    <header className="header" ref={HeaderRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="center-section">
              <div className="logo">
                <img src={logo} alt="logo" />
                <div>
                  <h1>MyGoMart</h1>

                </div>
              </div>
              <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
                  {nav_link.map((item, index) => (
                    <li className="nav_item" key={index}>
                      <NavLink
                        to={item.path}
                        activeClassName="nav_active" 
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="nav-icons">
              <span className="fav_icon">
                <i className="ri-heart-line"></i> 
                <span className="badge">2</span>
              </span>
              <span className="cart_icon" onClick={navigateTocart}>
                <i className="ri-shopping-bag-line"></i> 
                <span className="badge">{totalQuantity}</span>
              </span>

              <span className="user-icon">
                < motion.img whileTap={{scale:1.2}} src={userIcon} alt="" />
              </span>
              <div className='mobile_menu'>
                <span onClick={menuToggle}>
                  <i className='ri-menu-line'></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;