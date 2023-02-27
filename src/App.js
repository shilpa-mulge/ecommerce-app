
import { Routes, Navigate, Route } from 'react-router-dom';
import './App.css';
import Product from './Products/Product';
import About from './About/About';
import Home from './Home/Home';
import Root from './MainNavigation/Root';
import ContactUs from './Contact/ContactUs';
import ProductDetailsPage from './Products/ProductsDetailsPage';
import Cart from './Cart/Cart';
import Login from './Login/Login';
import { useContext } from 'react';
import Econtext from './store/ecom-context';
import NotFound from './NotFound/NotFound';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import SignupForm from './Signup/SignUpForm';
import Account from './UserAccount/Account';

const App = () => {
  const ctx = useContext(Econtext);
  return (
    <>
      <Root>
        <Routes>
          <Route path='/'
            element={<Navigate to='/home' replace />}
          />
          <Route path='/home' element={
            <> <Header />
              <Home />
              <Footer />
            </>
          } />

          {ctx.isLogedin && <Route path='/Login/Product/:email' element={<> <Header />
            <Product />
            <Footer />
          </>} />}

          {ctx.isLogedin && <Route path='/Product/:id' element={
            <>
              <Header />
              <ProductDetailsPage />
              <Footer />
            </>
          } />
          }
          {ctx.isLogedin && <Route path='/Login/Cart/:userId' element={
            <>
              <Header />
              <Cart />
              <Footer />
            </>
          } />}
          <Route path='/About' element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          } />
          <Route path='/ContactUs' element={
            <>
              <Header />
              <ContactUs />
              <Footer />
            </>
          } />
          <Route path='/Login' element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          } />
          <Route path='/Signup' element={
            <>
              <Header />
              <SignupForm />
              <Footer />
            </>
          } />
          {ctx.isLogedin && <Route path='/Login/:emailId' element={
            <>
              <Header />
              <Account />
              <Footer />
            </>
          } />}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Root>
    </>

  );
}

export default App;
