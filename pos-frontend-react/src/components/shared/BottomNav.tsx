import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdOutlineReorder, MdTableBar } from 'react-icons/md';
import { CiCircleMore } from 'react-icons/ci';
import { BiSolidDish } from 'react-icons/bi';

import Modal from './Modal';

const BottomNav = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [guestCount, setGuestCount] = useState<number>(0);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const decrementGuestCount = () => {
    if (guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  };

  const incrementGuestCount = () => {
    if (guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 flex justify-around h-16'>
      <button
        className='text-[#f5f5f5] bg-[#343434] w-[12rem] rounded-[1.25rem] flex items-center justify-center cursor-pointer'
        onClick={() => navigate('/')}
      >
        <FaHome className='inline mr-4' size={20} />
        <span>Home</span>
      </button>
      <button
        className='text-[#f5f5f5] bg-[#343434] w-[12rem] rounded-[1.25rem] flex items-center justify-center cursor-pointer'
        onClick={() => navigate('/orders')}
      >
        <MdOutlineReorder className='inline mr-4' size={20} />
        <span>Orders</span>
      </button>
      <button
        className='text-[#f5f5f5] bg-[#343434] w-[12rem] rounded-[1.25rem] flex items-center justify-center cursor-pointer'
        onClick={() => navigate('/tables')}
      >
        <MdTableBar className='inline mr-4' size={20} />
        <span>Tables</span>
      </button>
      <button className='text-[#f5f5f5] bg-[#343434] w-[12rem] rounded-[1.25rem] flex items-center justify-center cursor-pointer'>
        <CiCircleMore className='inline mr-4' size={20} />
        <span>More</span>
      </button>
      <button
        className='absolute bottom-6 bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 items-center cursor-pointer'
        onClick={openModal}
      >
        <BiSolidDish size={30} />
      </button>
      <Modal title='Create Order' isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <label className='block text-[#ababab] text-sm font-medium mb-2'>
            Customer Name
          </label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
            <input
              type='text'
              placeholder='Enter customer name...'
              className='bg-transparent flex-1 text-white focus:outline-none'
            />
          </div>
        </div>
        <div>
          <label className='block text-[#ababab] text-sm font-medium mb-2 mt-3'>
            Customer Phone
          </label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
            <input
              type='number'
              placeholder='+32 0485 12 34 56'
              className='bg-transparent flex-1 text-white focus:outline-none'
            />
          </div>
        </div>
        <div>
          <label className='block text-[#ababab] text-sm font-medium mb-2 mt-3'>
            Guest
          </label>
          <div className='flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg'>
            <button
              className='text-yellow-500 text-2xl cursor-pointer'
              onClick={decrementGuestCount}
            >
              &minus;
            </button>
            <span className='text-white'>
              {guestCount === 1
                ? `${guestCount} Person`
                : `${guestCount} Persons`}
            </span>
            <button
              className='text-yellow-500 text-2xl cursor-pointer'
              onClick={incrementGuestCount}
            >
              &#43;
            </button>
          </div>
        </div>
        <button
          className='w-full bg-[#f6b100] text-[#f5f5f5] rounded-lg py-3 mt-8 cursor-pointer hover:bg-yellow-700'
          onClick={() => navigate('/tables')}
        >
          Create Order
        </button>
      </Modal>
    </div>
  );
};
export default BottomNav;
