import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus } from 'lucide-react';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex flex-col sm:flex-row gap-6 p-4 border-b border-gray-200 bg-white">
      {/* Image & Controls */}
      <div className="flex flex-col items-center gap-4 sm:w-1/4">
        <div className="h-32 w-32 relative">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => updateQuantity(item.id, -1)}
            disabled={item.quantity <= 1}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 hover:bg-gray-50"
          >
            <Minus size={16} />
          </button>
          <span className="w-10 text-center font-medium border border-gray-300 py-1">
            {item.quantity}
          </span>
          <button 
            onClick={() => updateQuantity(item.id, 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="font-medium text-gray-800 text-lg">{item.title}</h3>
        <p className="text-sm text-gray-500">Category: {item.category}</p>
        
        <div className="flex items-center gap-3 mt-2">
          {item.originalPrice > item.price && (
            <span className="text-gray-500 line-through text-sm">₹{item.originalPrice.toLocaleString()}</span>
          )}
          <span className="font-bold text-xl">₹{item.price.toLocaleString()}</span>
          {item.discount > 0 && (
            <span className="text-green-600 font-medium text-sm">{item.discount}% Off</span>
          )}
        </div>

        <div className="mt-4 flex gap-6">
          <button className="font-medium text-gray-800 hover:text-primary uppercase text-sm">
            Save for later
          </button>
          <button 
            onClick={() => removeFromCart(item.id)}
            className="font-medium text-gray-800 hover:text-red-500 uppercase text-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
