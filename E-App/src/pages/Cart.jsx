import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, cartCount, cartTotal, cartOriginalTotal, discountTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[60vh]">
        <div className="bg-white p-8 rounded-sm shadow-sm w-full max-w-4xl text-center">
          <img
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt="Empty Cart"
            className="w-64 mx-auto mb-6"
          />
          <h2 className="text-xl font-medium mb-2">Your cart is empty!</h2>
          <p className="text-sm text-gray-500 mb-6">Explore our wide selection and find something you like</p>
          <Link to="/products" className="bg-primary text-white px-16 py-3 rounded-sm shadow font-medium hover:shadow-lg transition-shadow">
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 flex flex-col lg:flex-row gap-6 items-start">

      {/* Left: Cart Items */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        <div className="bg-white p-4 shadow-sm rounded-sm flex justify-between items-center">
          <h2 className="text-lg font-medium">UrbanGen ({cartCount})</h2>
        </div>

        <div className="bg-white shadow-sm rounded-sm">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="p-4 border-t flex justify-end sticky bottom-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-10">
            <button className="bg-[#fb641b] text-white px-10 py-3 rounded-sm shadow font-medium text-lg uppercase hover:shadow-lg transition-shadow">
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Right: Price Details */}
      <div className="w-full lg:w-1/3 bg-white shadow-sm rounded-sm p-4 lg:sticky lg:top-20">
        <h2 className="text-gray-500 font-medium uppercase border-b pb-4 mb-4">Price Details</h2>

        <div className="flex flex-col gap-4 text-sm md:text-base">
          <div className="flex justify-between">
            <span>Price ({cartCount} items)</span>
            <span>₹{cartOriginalTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>- ₹{discountTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="flex justify-between border-t border-dashed py-4 mt-2 text-lg font-bold">
            <span>Total Amount</span>
            <span>₹{cartTotal.toLocaleString()}</span>
          </div>
        </div>

        <div className="text-green-600 font-medium text-sm mt-4">
          You will save ₹{discountTotal.toLocaleString()} on this order
        </div>
      </div>

    </div>
  );
};

export default Cart;
