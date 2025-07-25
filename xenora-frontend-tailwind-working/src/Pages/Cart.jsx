import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, CartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const productId in CartItems) {
      for (const size in CartItems[productId]) {
        if (CartItems[productId][size] > 0) {
          const product = products.find(p => p._id === productId);
          if (product) {
            tempData.push({
              _id: productId,
              name: product.name,
              price: product.price,
              image: product.image[0],
              size,
              quantity: CartItems[productId][size],
            });
          }
        }
      }
    }

    setCartData(tempData);
  }, [CartItems, products]);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-lg sm:text-xl font-semibold mb-6 border-b pb-2">
        YOUR <span className="font-bold">CART</span>
      </h2>

      {cartData.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {/* Cart Items */}
          {cartData.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4">
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="text-sm">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">Size: {item.size}</p>
                  <p className="text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>
              <div className="text-sm font-medium">
                {currency}{(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          {/* Cart Total Component */}
          <div className="mt-10">
            <CartTotal />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
