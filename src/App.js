
import './App.css';
import './css/bootstrap.css';
import './js/bootstrap.bundle.js';
import HomePage from './pages/home-page';
import Product from './pages/product';
import ProductType from './pages/product-type';
import Login from './pages/login';
import SignUp from './pages/sign-up';
import Cart from './pages/cart';
import Pay from './pages/pay';
import { Route,Routes } from 'react-router-dom';


export default function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product-type" element={<ProductType />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pay" element={<Pay />} />
    </Routes>
   </>
  );
}

