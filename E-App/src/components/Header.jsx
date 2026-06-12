import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Search, ShoppingCart, ChevronDown, User, MoreVertical, Bell, Headset, Plus, Package, Heart, Gift, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import LoginModal from './LoginModal';

const Header = () => {
  const { cartCount } = useCart();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(urlQuery);

  useEffect(() => {
    setSearchQuery(urlQuery);
  }, [urlQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/products');
    }
  };

  return (
    <header className="bg-primary text-white fixed top-0 w-full z-50 h-16 flex items-center shadow-md">
      <div className="container mx-auto px-4 md:px-10 flex items-center justify-between xl:justify-center xl:gap-8">

        {/* Logo */}
        <Link to="/" className="flex flex-col items-center xl:w-28 flex-shrink-0">
          <span className="italic font-bold text-xl tracking-wide">UrbanGen</span>

        </Link>

        {/* Search Bar - Hidden on small mobile, visible on sm and up */}
        <form onSubmit={handleSearch} className="hidden sm:flex relative w-full max-w-xl mx-4">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 px-4 rounded-sm text-gray-800 focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0 h-full px-3 text-primary">
            <Search size={20} />
          </button>
        </form>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 xl:gap-8 flex-shrink-0">
          <div className="group relative hidden md:flex items-center h-16 cursor-pointer">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="bg-white text-primary font-semibold px-8 py-1 rounded-sm shadow hover:bg-gray-50"
            >
              Login
            </button>

            {/* Login Dropdown Menu */}
            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-64 bg-white text-gray-800 shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col border border-gray-100 z-50">
              {/* Up Arrow (caret) */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45"></div>

              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
                <span className="font-medium text-sm">New customer?</span>
                <button onClick={() => setIsLoginOpen(true)} className="text-primary font-bold text-sm hover:underline">Sign Up</button>
              </div>
              <button onClick={() => setIsLoginOpen(true)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium border-b border-gray-100">
                <User size={18} className="text-primary" />
                My Profile
              </button>
              <button onClick={() => setIsLoginOpen(true)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium border-b border-gray-100">
                <Plus size={18} className="text-primary" />
                UrbanGen Plus Zone
              </button>
              <button onClick={() => setIsLoginOpen(true)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium border-b border-gray-100">
                <Package size={18} className="text-primary" />
                Orders
              </button>
              <button onClick={() => setIsLoginOpen(true)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium border-b border-gray-100">
                <Heart size={18} className="text-primary" />
                Wishlist
              </button>
              <button onClick={() => setIsLoginOpen(true)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium border-b border-gray-100">
                <Gift size={18} className="text-primary" />
                Rewards
              </button>
              <button onClick={() => setIsLoginOpen(true)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium">
                <CreditCard size={18} className="text-primary" />
                Gift Cards
              </button>
            </div>
          </div>

          {/* Mobile Login Icon */}
          <button onClick={() => setIsLoginOpen(true)} className="md:hidden text-white">
            <User size={24} />
          </button>



          <div className="group relative hidden md:flex items-center gap-1 cursor-pointer font-medium hover:text-gray-200 h-16">
            More <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />

            {/* Dropdown Menu */}
            <div className="absolute top-16 right-0 w-64 bg-white text-gray-800 shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col border border-gray-100 z-50">
              {/* Up Arrow (caret) */}
              <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45"></div>

              <Link to="/" className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium border-b border-gray-100">
                <Bell size={18} className="text-primary" />
                Notification Preferences
              </Link>
              <Link to="/" className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium">
                <Headset size={18} className="text-primary" />
                24x7 Customer Care
              </Link>
            </div>
          </div>

          <Link to="/cart" className="flex items-center gap-2 font-medium hover:text-gray-200">
            <div className="relative">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-black text-xs font-bold px-1.5 py-0.5 rounded-full border border-primary">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden md:block">Cart</span>
          </Link>

          {/* Mobile More Icon */}
          <button className="md:hidden text-white">
            <MoreVertical size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar - Visible only on very small screens */}
      <div className="absolute top-16 left-0 w-full bg-primary p-2 sm:hidden flex justify-center">
        <form onSubmit={handleSearch} className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 px-4 rounded-sm text-gray-800 focus:outline-none text-sm"
          />
          <button type="submit" className="absolute right-0 top-0 h-full px-3 text-primary">
            <Search size={18} />
          </button>
        </form>
      </div>

      {/* Render Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
};

export default Header;
