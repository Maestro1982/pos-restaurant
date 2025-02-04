import { useSelector } from 'react-redux';
import { useState } from 'react';

import { RootState } from '../../redux/store';
import { formatDate, formatTime, getAvatarName } from '../../utils';

const CustomerInfo = () => {
  const customerData = useSelector((state: RootState) => state.customer);
  const [date] = useState<Date>(new Date());
  const [dateTime] = useState<Date>(new Date());
  return (
    <div className='flex items-center justify-between px-4 py-3'>
      <div className='flex flex-col items-start'>
        <h1 className='text-base text-[#f5f5f5] font-semibold tracking-wide'>
          {customerData.customerName || 'Customer Name'}
        </h1>
        <span className='text-[#ababab] text-sm font-medium mt-1'>
          #{customerData.orderId || 'N/A'} / Dine in
        </span>
        <span className='text-[#ababab] text-sm font-medium mt-2'>
          {formatDate(date)} {formatTime(dateTime)}
        </span>
      </div>
      <button className='bg-[#f6b100] text-xl p-3 font-bold rounded-lg'>
        {getAvatarName(customerData.customerName) || 'CN'}
      </button>
    </div>
  );
};
export default CustomerInfo;
