import React from "react";
import './App.css';
import MultiItem from'./components/MultiItemCrousel';
import './components/BootstrapMulti'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer'
import { Router } from "@reach/router";


//Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import MyAccount from "./Pages/MyAccount";


function App() {
  const [theme] = useThemeHook();
  return (
  <>
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header/>
     <br/><br/><br/>
      <MultiItem/>
      <Router>
        <Home path="/" />
        <MyAccount path="my-account" />
        <SignIn path="sign-in"/>
        <Register path="register"/>
        <ProductDetails path="product-details/:productId"/>
        <Cart path="/cart" />
      </Router>
      <p style={{
        textAlign:'center',
        fontSize:20,
        color:'red',
        // fontWeight:'bolder',

      }}>Created By &#169; Anuj kashyap</p>
    </main>
   
    </>
  );
}

export default App;
