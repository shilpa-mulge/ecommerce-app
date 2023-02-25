
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Product from './Products/Product';
import About from './About/About';
import Home from './Home/Home';
import Root from './Header/Root';
import ContactUs from './Contact/ContactUs';
import ProductDetailsPage from './Products/ProductsDetailsPage';
import Cart from './Cart/Cart';
import Login from './Login/Login';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Product',
        element: <Product />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/ContactUs',
        element: <ContactUs />
      },
      {
        path: '/Product/:id',
        element: <ProductDetailsPage />
      }, {
        path: '/Cart',
        element: <Cart />
      },
      {
        path: '/Login',
        element: <Login />
      }
    ]
  },
])

const App = () => {
  return (

    <RouterProvider router={router} />

  );
}

export default App;
