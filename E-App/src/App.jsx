import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <CategoryBar />
      <main className="flex-grow pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
