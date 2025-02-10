import { useState } from 'react';

import restaurant from '../assets/images/restaurant.jpg';
import logo from '../assets/images/logo.png';

import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  return (
    <div className='flex min-h-screen w-full'>
      {/* Left Section */}
      <div className='relative w-1/2 flex items-center justify-center bg-cover'>
        {/* BG Image */}
        <img
          src={restaurant}
          alt='Restaurant Image'
          className='w-full h-full object-cover'
        />
        {/* Black Overlay */}
        <div className='absolute inset-0 bg-current/80' />
        {/* Quote At Bottom */}
        <blockquote className='absolute bottom-10 px-8 mb-10 text-2xl text-white italic'>
          "Serve customers the best food with prompt and friendly service in a
          welcoming atmosphere, and they'll keep coming back."
          <br />
          <span className='block mt-4 text-yellow-400'>
            - Founder of POS Restaurant
          </span>
        </blockquote>
      </div>

      {/* Right Section */}
      <div className='w-1/2 min-h-screen bg-[#1a1a1a] p-10'>
        <div className='flex flex-col items-center gap-2'>
          <img
            src={logo}
            alt='Restaurant Logo'
            className='size-14 border-2 border-white rounded-full p-1'
          />
          <h1 className='text-lg text-[#f5f5f5] font-semibold tracking-wide'>
            POS Restaurant
          </h1>
        </div>
        <h2 className='text-4xl text-yellow-400 text-center mt-10 font-semibold mb-10'>
          {isRegistered ? 'Employee Registration' : 'Employee Login'}
        </h2>

        {/* Components */}
        {isRegistered ? <Register /> : <Login />}

        <div className='flex justify-center mt-6'>
          <span className='text-sm text-[#ababab]'>
            {isRegistered
              ? 'Already have an account?'
              : "Don't have an account?"}
            <a
              onClick={() => setIsRegistered(!isRegistered)}
              href='#'
              className='text-yellow-400 font-semibold hover:underline ml-1'
            >
              {isRegistered ? 'Sign In' : 'Sign Up'}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Auth;
