import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaNotesMedical } from 'react-icons/fa';

const CartInfo = () => {
  return (
    <div className='px-4 py-2'>
      <h1 className='text-lg text-[#e4e4e4] font-semibold tracking-wide'>
        Order Details
      </h1>
      <div className='mt-4 overflow-y-scroll scrollbar-hide h-[350px]'>
        <div className='bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2'>
          <div className='flex items-center justify-between'>
            <h1 className='text-base text-[#ababab] font-semibold tracking-wide'>
              Chicken Tikka
            </h1>
            <span className='text-[#ababab] font-semibold'>x2</span>
          </div>
          <div className='flex items-center justify-between mt-3'>
            <div className='flex items-center gap-3'>
              <RiDeleteBin2Fill
                className='text-[#ababab] cursor-pointer'
                size={20}
              />
              <FaNotesMedical
                className='text-[#ababab] cursor-pointer'
                size={20}
              />
            </div>
            <span className='text-base text-[#f5f5f5] font-bold'>€60</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartInfo;
