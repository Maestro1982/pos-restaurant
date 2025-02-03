import { FaCheckDouble, FaCircle } from 'react-icons/fa';

const OrderList = () => {
  return (
    <div className='flex items-center gap-5 mb-3'>
      <button className='bg-[#f6b100] p-3 text-xl font-bold rounded-lg'>
        AM
      </button>
      <div className='flex items-center justify-between w-[100%]'>
        <div className='flex flex-col items-start gap-1'>
          <span className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>
            John Doe
          </span>
          <span className='text-[#ababab] text-sm'>8 items</span>
        </div>
        <div>
          <span className='text-[#f6b100] font-semibold border border-[#f6b100] rounded-lg p-1'>
            Table Nr: 3
          </span>
        </div>
        <div className='flex flex-col items-end gap-2'>
          <span className='text-green-600'>
            <FaCheckDouble className='inline mr-2' /> Ready
          </span>
          <span className='text-[#ababab] text-sm'>
            <FaCircle className='inline mr-2 text-green-600' /> Ready to serve
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
