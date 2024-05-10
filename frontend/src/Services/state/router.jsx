import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/HomePage.jsx';
import Shop from '../../pages/Shop.jsx';
import ProductDescription from '../../pages/ProductDescription.jsx';
import FaqPage from '../../pages/FaqPage.jsx';
import DashBoardPage from '../../pages/DashBoardPage.jsx';
import CheckoutPage from '../../pages/CheckoutPage.jsx';
import ContactUsPage from '../../pages/ContactUsPage.jsx';
import Cart from '../../pages/Cart.jsx';
import BlogPage from '../../pages/Blogpage.jsx';
import BlogDescriptionPage from '../../pages/BlogDescriptionPage.jsx'
import Aboutuspage from '../../pages/AboutUspage.jsx'
import NotFoundPage from '../../pages/NotFoundPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/Shop',
    element: <Shop />
  },
  {
    // the path should be the productname
    path: '/ProductDecription',
    element: <ProductDescription />
  },
  {
    path: '/Faq',
    element: <FaqPage />
  },
  {
    path: '/Dashboard',
    element: <DashBoardPage />
  },
  {
    path: "/Checkout",
    element: <CheckoutPage />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/ContactUs',
    element: <ContactUsPage />
  },
  {
    path: '/Blog',
    element: <BlogPage />
  },
  {
    // should contain the name of the blog post
    path:'/BlogDescription/:postname',
    element: <BlogDescriptionPage />
  },
  {
    path:'/Aboutus',
    element: <Aboutuspage />
  }
]);

