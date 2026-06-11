import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/data';
import { ChevronDown } from 'lucide-react';

const ProductList = () => {
  const location = useLocation();
  const initialCategory = location.state?.category || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [appliedRatings, setAppliedRatings] = useState([]);

  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state?.category]);
  
  const categories = ['All', ...new Set(products.map(p => p.category))];

  const minRating = appliedRatings.length > 0 ? Math.min(...appliedRatings) : 0;

  const filteredProducts = products.filter(p => {
    const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;
    const ratingMatch = p.rating >= minRating;
    return categoryMatch && ratingMatch;
  });

  const handleRatingChange = (rating) => {
    setSelectedRatings(prev => 
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
  };

  const handleApplyRating = () => {
    setAppliedRatings(selectedRatings);
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 flex flex-col md:flex-row gap-4">
      
      {/* Filters Sidebar */}
      <aside className="w-full md:w-64 flex-shrink-0 bg-white shadow-sm rounded-sm p-4 hidden md:block">
        <h2 className="text-lg font-medium border-b pb-3 mb-3">Filters</h2>
        
        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-800 uppercase mb-3 flex justify-between items-center">
            Categories <ChevronDown size={16} />
          </h3>
          <ul className="space-y-2">
            {categories.map(category => (
              <li key={category}>
                <button 
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm hover:text-primary ${selectedCategory === category ? 'text-primary font-medium' : 'text-gray-600'}`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter (Mock) */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-800 uppercase mb-3 flex justify-between items-center">
            Price <ChevronDown size={16} />
          </h3>
          <div className="space-y-2">
             <input type="range" min="0" max="150000" className="w-full accent-primary" />
             <div className="flex justify-between text-xs text-gray-500">
                <span>₹Min</span>
                <span>₹150000+</span>
             </div>
          </div>
        </div>

        {/* Ratings Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-800 uppercase mb-3 flex justify-between items-center">
            Customer Ratings <ChevronDown size={16} />
          </h3>
          <ul className="space-y-2">
            {[4, 3, 2, 1].map(rating => (
              <li key={rating} className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id={`rating-${rating}`} 
                  className="accent-primary" 
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                />
                <label htmlFor={`rating-${rating}`} className="text-sm text-gray-600 cursor-pointer">
                  {rating}★ & above
                </label>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <button 
              onClick={handleApplyRating}
              className="bg-primary text-white text-xs px-4 py-1.5 rounded-sm shadow hover:shadow-md transition-shadow font-medium"
            >
              APPLY
            </button>
            {appliedRatings.length > 0 && (
               <button 
                 onClick={() => { setSelectedRatings([]); setAppliedRatings([]); }}
                 className="text-gray-500 text-xs px-3 py-1.5 hover:text-primary transition-colors font-medium"
               >
                 CLEAR
               </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white shadow-sm rounded-sm">
        <div className="p-4 border-b">
          <h1 className="text-lg font-medium">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory} 
            <span className="text-sm text-gray-500 font-normal ml-2">(Showing {filteredProducts.length} products)</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l">
          {filteredProducts.map(product => (
            <div key={product.id} className="border-r border-b">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

export default ProductList;
