import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

function Navbar() {
  const { getCartCount, user, logout } = useContext(ShopContext); // use user + logout

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/' className='font-medium'>Xenora</Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>HOME</NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>COLLECTION</NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>ABOUT</NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>CONTACT</NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt='Search' />

        {/* Profile dropdown */}
        <div className='group relative'>
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt='Profile' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-7 px-5 bg-slate-200 text-gray-500 rounded'>
              {user ? (
                <>
                  <p className='cursor-default text-black font-semibold'>{user.username}</p>
                  <p className='cursor-pointer hover:text-black'>My Profile</p>
                  <p className='cursor-pointer hover:text-black'>Orders</p>
                  <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                </>
              ) : (
                <>
                  <Link to='/login' className='hover:text-black'>Sign Up / Login</Link>
                </>
              )}
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
          <div className='absolute -bottom-1 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center'>
            {getCartCount()}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
