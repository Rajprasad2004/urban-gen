import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/data';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Mock Deals of the Day (random 5 products)
  const dealsOfTheDay = products.slice(0, 5);
  // Mock Best of Electronics
  const electronics = products.filter(p => p.category === 'Electronics').slice(0, 4);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 flex flex-col gap-4">
      
      {/* Hero Carousel (Mocked with static banner) */}
      <div className="bg-white p-2 rounded-sm shadow-sm cursor-pointer hover:shadow-md transition-shadow">
        <div className="w-full h-48 md:h-72 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center rounded-sm">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Big Billion Days</h1>
            <p className="text-lg md:text-xl">Up to 80% off on Electronics & Fashion</p>
          </div>
        </div>
      </div>

      {/* Deals of the Day (Horizontal Scroll) */}
      <div className="bg-white p-4 shadow-sm rounded-sm">
        <div className="flex items-center justify-between mb-4 border-b pb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-gray-800">Deals of the Day</h2>
            <div className="hidden sm:flex items-center gap-2 text-gray-500 text-sm">
              <span>Time Left: </span>
              <span className="bg-gray-100 p-1 rounded font-mono">12 : 34 : 56</span>
            </div>
          </div>
          <Link to="/products" className="bg-primary text-white px-4 py-1.5 rounded-sm text-sm font-medium shadow hover:shadow-md">
            VIEW ALL
          </Link>
        </div>
        
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
          {dealsOfTheDay.map(product => (
            <div key={product.id} className="min-w-[200px] w-[200px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Best of Electronics (Grid) */}
      <div className="bg-white p-4 shadow-sm rounded-sm">
        <div className="flex items-center justify-between mb-4 border-b pb-4">
          <h2 className="text-xl font-bold text-gray-800">Best of Electronics</h2>
          <button className="bg-primary p-1.5 rounded-full text-white shadow hover:shadow-md">
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {electronics.map(product => (
             <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
