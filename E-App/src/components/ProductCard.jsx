import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block bg-white hover:shadow-lg transition-shadow duration-300 rounded-sm overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative pt-[100%] bg-white p-4">
        <img 
          src={product.image} 
          alt={product.title} 
          className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Product Details */}
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-sm font-medium text-gray-800 truncate" title={product.title}>
          {product.title}
        </h3>
        
        <div className="flex items-center gap-2 mt-1">
          <div className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded-sm flex items-center gap-1">
            {product.rating} <Star size={10} fill="currentColor" />
          </div>
          <span className="text-gray-500 text-xs">({product.reviews.toLocaleString()})</span>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <span className="text-base font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <>
              <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
              <span className="text-sm font-medium text-green-600">{product.discount}% off</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
