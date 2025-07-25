import React, { useContext, useState } from 'react';
import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
  

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 const { login } = useContext(ShopContext); // ✅ this makes login available


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = currentState === 'Sign Up'
      ? { fullName, email, password }
      : { email, password };
    
    try {
      const endpoint = currentState === 'Sign Up' ? 'http://127.0.0.1:8000/signup/' : 'http://127.0.0.1:8000/login/';
      const response = await axios.post(endpoint, payload);
      alert(response.data.user_data.username);
      login(response.data.user_data);
      navigate('/')
      
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-sm'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState === 'Login' ? null : (
        <input
          type="text"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      )}

      <input
        type="email"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
          ) : (
            <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Instead</p>
          )
        }
      </div>

      <button
        type="submit"
        className='w-full bg-black text-white py-2 mt-2 hover:bg-gray-900 transition-all'
      >
        {currentState}
      </button>
    </form>
  );
};

export default Login;
