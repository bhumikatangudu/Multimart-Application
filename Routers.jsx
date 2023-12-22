import { Routes,Route,Navigate } from 'react-router-dom';
import Home from '../Components/Pages/Home';
import Shop from '../Components/Pages/Shop';
import Cart from '../Components/Pages/Cart';
import ProductDetails from '../Components/Pages/ProductDetails';
import Checkout from '../Components/Pages/Checkout';
import Login from '../Components/Pages/Login';
import SignUp from '../Components/Pages/SignUp';

const Routers = () =>{
  return <Routes>
    <Route path="/" element={<Navigate to="home"/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='productdetails' element={<ProductDetails/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='signup' element={<SignUp/>}/>
  </Routes>
}

export default Routers

