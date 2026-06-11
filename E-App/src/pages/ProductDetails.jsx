import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/data';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Zap, Star, ShieldCheck, Tag } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-20 text-xl font-bold">Product not found!</div>;
  }

  // Mock multiple images for gallery
  const images = [product.image, product.image, product.image];

  const handleAddToCart = () => {
    addToCart(product);
    // Optional: show a toast or feedback
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 bg-white md:bg-transparent">
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 shadow-sm rounded-sm">
        
        {/* Left: Image Gallery */}
        <div className="w-full md:w-2/5 flex flex-col gap-4 sticky top-36 h-max">
          <div className="flex gap-2 h-96 relative border border-gray-200 p-4">
            {/* Thumbnail column */}
            <div className="flex flex-col gap-2 w-16 overflow-y-auto scrollbar-hide">
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`border-2 cursor-pointer p-1 ${activeImage === idx ? 'border-primary' : 'border-transparent hover:border-gray-300'}`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center p-4">
               <img src={images[activeImage]} alt={product.title} className="max-h-full object-contain" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 font-medium">
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-[#ff9f00] text-white py-4 rounded-sm flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
            >
              <ShoppingCart fill="currentColor" size={20} /> ADD TO CART
            </button>
            <button 
              onClick={handleBuyNow}
              className="flex-1 bg-[#fb641b] text-white py-4 rounded-sm flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
            >
              <Zap fill="currentColor" size={20} /> BUY NOW
            </button>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-3/5 flex flex-col gap-4">
          <div>
             <h1 className="text-xl md:text-2xl font-normal text-gray-900">{product.title}</h1>
             <div className="flex items-center gap-3 mt-2">
                <div className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded-sm flex items-center gap-1 font-medium">
                  {product.rating} <Star size={12} fill="currentColor" />
                </div>
                <span className="text-gray-500 font-medium text-sm">{product.reviews.toLocaleString()} Ratings & Reviews</span>
             </div>
          </div>

          <div className="flex items-end gap-3">
             <span className="text-3xl font-medium text-gray-900">₹{product.price.toLocaleString()}</span>
             {product.originalPrice > product.price && (
                <>
                  <span className="text-lg text-gray-500 line-through mb-1">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="text-base font-medium text-green-600 mb-1">{product.discount}% off</span>
                </>
             )}
          </div>

          {/* Offers */}
          <div className="mt-4 border-t border-b py-4">
            <h3 className="font-medium mb-3">Available offers</h3>
            <ul className="space-y-2 text-sm">
               <li className="flex gap-2 items-start"><Tag size={16} className="text-green-600 mt-0.5" /> <b>Bank Offer:</b> 5% Cashback on UrbanGen Axis Bank Card</li>
               <li className="flex gap-2 items-start"><Tag size={16} className="text-green-600 mt-0.5" /> <b>Special Price:</b> Get extra discount (price inclusive of cashback/coupon)</li>
               <li className="flex gap-2 items-start"><Tag size={16} className="text-green-600 mt-0.5" /> <b>Partner Offer:</b> Sign up for UrbanGen Pay Later and get UrbanGen Gift Card worth up to ₹500*</li>
            </ul>
          </div>

          {/* Highlights & Description */}
          <div className="flex flex-col md:flex-row mt-4 gap-8">
            <div className="flex gap-8 w-full md:w-1/2 text-sm">
               <span className="text-gray-500 w-24">Highlights</span>
               <ul className="list-disc pl-4 space-y-1">
                 <li>{product.category} product</li>
                 <li>High Quality Assured</li>
                 <li>7 Days Replacement Policy</li>
               </ul>
            </div>
            
            <div className="flex gap-8 w-full md:w-1/2 text-sm">
              <span className="text-gray-500 w-24 flex-shrink-0">Services</span>
              <ul className="space-y-2">
                 <li className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary"/> 1 Year Warranty</li>
                 <li className="flex items-center gap-2"><Zap size={18} className="text-primary"/> Cash on Delivery available</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-medium border-b pb-2 mb-4">Product Description</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
