import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';

const Checkout = () => {
  const { currency } = useContext(ShopContext);

  return (
    <div className="px-4 md:px-20 py-10 flex flex-col md:flex-row gap-10">
      {/* Left Section: Delivery Info */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-6">DELIVERY <span className="text-black">INFORMATION</span></h2>
        <form className="grid grid-cols-2 gap-4 text-sm">
          <input type="text" placeholder="First name" className="border p-2" />
          <input type="text" placeholder="Last name" className="border p-2" />
          <input type="email" placeholder="Email address" className="col-span-2 border p-2" />
          <input type="text" placeholder="Street" className="col-span-2 border p-2" />
          <input type="text" placeholder="City" className="border p-2" />
          <input type="text" placeholder="State" className="border p-2" />
          <input type="text" placeholder="Zip code" className="border p-2" />
          <input type="text" placeholder="Country" className="border p-2" />
          <input type="text" placeholder="Phone" className="col-span-2 border p-2" />
        </form>
      </div>

      {/* Right Section: Cart Totals & Payment */}
      <div className="flex-1 space-y-8">
        {/* Cart Totals */}
        <CartTotal />

        {/* Payment Method */}
        <div>
          <h3 className="text-sm font-medium mb-4">PAYMENT <span className="text-black">METHOD</span></h3>
          <div className="flex flex-wrap gap-4 items-center text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" />
               <img src={assets.stripe_logo} alt="stipe" className="w-8 h-3" />
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" />
              <img src={assets.razorpay_logo} alt="razorpay" className="w-10 h-4" />
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" />
              <span>Cash on Delivery</span>
            </label>
          </div>
        </div>

        {/* Place Order Button */}
        <button className="bg-black text-white px-6 py-2 text-sm font-medium">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default Checkout;
