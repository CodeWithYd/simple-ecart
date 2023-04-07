import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { BiSun, BiMoon, BiCart} from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";


const Header = () => {
    const { theme, setThemeMode } = useContext(ThemeContext); 
    const [darkMode, setDarkMode] = useState(theme);

    useEffect(()=>{
        setThemeMode(darkMode);
        console.log(darkMode)
    },[darkMode]);

    const {
        isEmpty,
        totalItems,
    } = useCart();

    return (
        <Navbar collapseOnSelect expand="md"
                variant={darkMode? 'dark':'light'}
                className={darkMode? 'bg-light-black border-bottom': 'bg-light border-bottom'}
                style={{ width: '100%', position: 'fixed', zIndex: 100}}
        >
        <Container>
          <Link to="/">
            <Navbar.Brand className={darkMode? 'text-dark-primary': 'text-light-primary'}>
                <b>E-CART</b>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="sign-in" className={`nav-link ${darkMode? 'text-dark-primary' : 'text-light-primary'}`}>
                Sign in
              </Link>
              <Nav.Link 
                className={darkMode? 'text-dark-primary': 'text-light-primary'}
                onClick={()=>setDarkMode(!darkMode)}
              >
                {darkMode? <BiSun size="1.7rem" />: <BiMoon size="1.7rem" />}
              </Nav.Link>
              <Link
                to="/cart"
                className={`${darkMode? 'text-dark-primary': 'text-light-primary'} d-flex align-items-center`}
              >
                <BiCart size="2rem"/>
                {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px'}}>{totalItems}</span>}
                <span style={{ marginLeft: !isEmpty ? '-13px': 0}}>&nbsp;Cart</span>
              </Link>
              <Link to="my-account" className={`nav-link ${darkMode? 'text-dark-primary': 'text-light-primary'}`}>
                  <VscAccount size="1.8rem"/>
                  &nbsp;My Account
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;