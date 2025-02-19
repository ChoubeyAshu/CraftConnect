import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import ProductListing from './pages/ProductListing';
import OrderManagement from './pages/OrderManagement';
import Contact from './pages/Contact';
import ItemListing from './pages/ItemsList';
import CartPage from './pages/CartPage';
import { CartProvider } from './Constants/Values/CartContext.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/rural_commerce" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:category" element={<ItemListing />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
