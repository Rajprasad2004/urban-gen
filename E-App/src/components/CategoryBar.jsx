import React from 'react';
import { Smartphone, Monitor, Home, Utensils, Shirt, Plane, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Top Offers', icon: <Gift size={24} className="text-secondary" /> },
  { name: 'Mobiles', icon: <Smartphone size={24} className="text-blue-500" /> },
  { name: 'Electronics', icon: <Monitor size={24} className="text-purple-500" /> },
  { name: 'Appliances', icon: <Utensils size={24} className="text-orange-500" /> },
  { name: 'Fashion', icon: <Shirt size={24} className="text-pink-500" /> },
  { name: 'Home', icon: <Home size={24} className="text-green-500" /> },
  { name: 'Travel', icon: <Plane size={24} className="text-teal-500" /> },
];

const CategoryBar = () => {
  return (
    <div className="bg-white shadow-sm border-b overflow-x-auto scrollbar-hide w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between min-w-max md:justify-center md:gap-12 lg:gap-20">
        {categories.map((category, index) => (
          <Link 
            to="/products" 
            state={{ category: category.name === 'Top Offers' ? 'All' : category.name }}
            key={index} 
            className="flex flex-col items-center gap-1 group cursor-pointer px-4"
          >
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              {category.icon}
            </div>
            <span className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
