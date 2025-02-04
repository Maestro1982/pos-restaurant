const CustomerInfo = () => {
  return (
    <div className='flex items-center justify-between px-4 py-3'>
      <div className='flex flex-col items-start'>
        <h1 className='text-base text-[#f5f5f5] font-semibold tracking-wide'>
          Customer Name
        </h1>
        <span className='text-[#ababab] text-sm font-medium mt-1'>
          #101/Dine in
        </span>
        <span className='text-[#ababab] text-sm font-medium mt-2'>
          February 3, 2025 17:35 PM
        </span>
      </div>
      <button className='bg-[#f6b100] text-xl p-3 font-bold rounded-lg'>
        CN
      </button>
    </div>
  );
};
export default CustomerInfo;
