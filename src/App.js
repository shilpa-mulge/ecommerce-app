
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Product from './Layouts/Product';
import EcontextProvider from './store/EcontextProvider';
import About from './About/About';
import Home from './Home/Home';
import Root from './Header/Root';
import ContactUs from './ContactUs';
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
      }
    ]
  },
])

const App = () => {
  /*  const [CartIsShown, setCartIsShown] = useState(false)
   const onShowHandler = () => {
     setCartIsShown(true)
   }
   const onCloseHandler = () => {
     setCartIsShown(false)
   }
  */
  return (
    <EcontextProvider>
      <RouterProvider router={router} />
    </EcontextProvider>
    /*    <EcontextProvider>
    {CartIsShown && <Cart onClose={onCloseHandler} />}
      <Header onShow={onShowHandler} />
      <HeaderTitle />
      <About />
      <Product />
      <Footer /> 
      
    </EcontextProvider> */

  );
}

export default App;
