import React from 'react';
import './App.css';
import Product from './Layouts/Product';
import Header from './Header/Header';
import HeaderTitle from './Header/headerTitle';
import Footer from "./Header/Footer";

const App = () => {
  return (
    <>
      <Header />
      <HeaderTitle />
      <Product />
      <Footer />
    </>

  );
}

export default App;
