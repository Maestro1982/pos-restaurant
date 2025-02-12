import { FaSearch } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../redux/store';
import { removeUser } from '../../redux/slices/userSlice';
import { logout } from '../../https';

import logo from '../../assets/images/logo.png';

const Header = () => {
  const userData = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      console.log(data);
      dispatch(removeUser());
      navigate('/auth');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className='flex items-center justify-between py-4 px-8 bg-[#1a1a1a]'>
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <img src={logo} alt='logo' className='size-8' />
        <span className='text-lg font-semibold text-[#f5f5f5]'>
          <span className='uppercase mr-1'>pos</span>
          Restaurant
        </span>
      </div>
      {/* Search */}
      <div className='flex items-center gap-4 bg-[#1f1f1f] rounded-[1rem] px-5 py-2 w-[31.25rem]'>
        <FaSearch className='text-[#f5f5f5]' />
        <input
          type='text'
          placeholder='Search...'
          className='bg-[#1f1f1f] outline-hidden text-[#f5f5f5]'
        />
      </div>
      {/* Logged User Details*/}
      <div className='flex items-center gap-4'>
        <div className='bg-[#1f1f1f] rounded-[1rem] p-3 cursor-pointer'>
          <FaBell className='text-[#f5f5f5] text-2xl' />
        </div>
        <div className='flex items-center gap-3 cursor-pointer'>
          <FaUserCircle className='text-[#f5f5f5] text-2xl' />
          <div className='flex flex-col items-start'>
            <span className='text-base text-[#f5f5f5] font-semibold'>
              {userData.name || 'TEST USER'}
            </span>
            <span className='text-xs text-[#ababab] font-medium'>
              {userData.role || 'Role'}
            </span>
          </div>
          <IoLogOut
            onClick={handleLogout}
            className='text-[#f5f5f5] ml-2'
            size={40}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
