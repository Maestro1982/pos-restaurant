import { FaCheckDouble, FaCircle } from 'react-icons/fa';

const OrderCard = () => {
  return (
    <div className='w-[500px] bg-[#262626] p-4 rounded-lg mb-4'>
      <div className='flex items-center gap-5'>
        <button className='bg-[#f6b100] p-3 text-xl font-bold rounded-lg'>
          AM
        </button>
        <div className='flex items-center justify-between w-[100%]'>
          <div className='flex flex-col items-start gap-1'>
            <span className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>
              John Doe
            </span>
            <span className='text-[#ababab] text-sm'>#101 / Dine in</span>
          </div>

          <div className='flex flex-col items-end gap-2'>
            <span className='text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg'>
              <FaCheckDouble className='inline mr-2' /> Ready
            </span>
            <span className='text-[#ababab] text-sm'>
              <FaCircle className='inline mr-2 text-green-600' /> Ready to serve
            </span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between mt-4 text-[#ababab]'>
        <span>3 Februari 2025 10:27AM</span>
        <span>8 items</span>
      </div>

      <hr className='mt-4 border-t-1 border-gray-500' />
      <div className='flex items-center justify-between mt-4'>
        <h1 className='text-[#f5f5f5] text-lg font-semibold'>Total</h1>
        <span className='text-[#f5f5f5] text-lg font-semibold'>€250.00</span>
      </div>
    </div>
  );
};
export default OrderCard;
