import { FaHome } from 'react-icons/fa';
import { MdOutlineReorder, MdTableBar } from 'react-icons/md';
import { CiCircleMore } from 'react-icons/ci';
import { BiSolidDish } from 'react-icons/bi';

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 flex justify-around h-16'>
      <button className='text-[#f5f5f5] bg-[#343434] w-[12rem] rounded-[1.25rem] flex items-center justify-center'>
        <FaHome className='inline mr-4' size={20} />
        <span>Home</span>
      </button>
      <button className='text-[#f5f5f5] bg-[#343434] w-[12rem] rounded-[1.25rem] flex items-center justify-center'>
        <MdOutlineReorder className='inline mr-4' size={20} />
        <span>Orders</span>
      </button>
      <button className='text-[#f5f5f5] bg-[#343434] w-[12rem] rounded-[1.25rem] flex items-center justify-center'>
        <MdTableBar className='inline mr-4' size={20} />
        <span>Tables</span>
      </button>
      <button className='text-[#f5f5f5] bg-[#343434] w-[12rem] rounded-[1.25rem] flex items-center justify-center'>
        <CiCircleMore className='inline mr-4' size={20} />
        <span>More</span>
      </button>
      <button className='absolute bottom-6 bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 items-center'>
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};
export default BottomNav;
