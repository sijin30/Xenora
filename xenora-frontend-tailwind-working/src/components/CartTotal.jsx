import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, CartItems, products } = useContext(ShopContext);

  // Subtotal calculation logic
  const getCartAmount = () => {
    let total = 0;
    for (const productId in CartItems) {
      for (const size in CartItems[productId]) {
        const quantity = CartItems[productId][size];
        const product = products.find(p => p._id === productId);
        if (product) {
          total += product.price * quantity;
        }
      }
    }
    return total;
  };

  const subtotal = getCartAmount();
  const total = subtotal + delivery_fee;

  return (
    <div className="w-full max-w-[400px] ml-auto px-2 sm:px-0">
      <div className="mb-6">
        <Title text1="CART" text2="TOTALS" />
      </div>

      <div className="text-sm font-medium space-y-4">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p>{currency}{subtotal.toFixed(2)}</p>
        </div>
        <hr className="border-t border-gray-300" />

        <div className="flex justify-between">
          <p className="text-gray-600">Shipping Fee</p>
          <p>{currency}{delivery_fee.toFixed(2)}</p>
        </div>
        <hr className="border-t border-gray-300" />

        <div className="flex justify-between text-base">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">{currency}{total.toFixed(2)}</p>
        </div>

        <button  onClick={() => navigate('/checkout')}
        className="mt-6 w-full bg-black text-white py-2 uppercase text-sm tracking-wide hover:bg-gray-900 transition-all">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
