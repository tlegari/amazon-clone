import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate
   } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';
import Auth from './pages/Auth';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/Product/ProductDetails';

function App() {
  return (
   <Router>
    <Navbar />
    <div>
      
      <Routes>

         <Route path='/' element={<Navigate to='/home' replace />} />

        {/* <Route path="/profile" element={<Dashboard />} />
         <Route path="/settings" element={<Settings />} />
         <Route path="/banking-details" element={<BankingDetails />} />*/}

        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>

        <Route path='/login' element={<Auth/>}/>

        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
