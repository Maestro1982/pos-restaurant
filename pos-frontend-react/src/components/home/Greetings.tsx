import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

const Greetings = () => {
  const userData = useSelector((state: RootState) => state.user);
  const [dateTime, setDateTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date): string => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(
      2,
      '0'
    )}, ${date.getFullYear()}`;
  };

  const formatTime = (date: Date): string => {
    return `${String(date.getHours()).padStart(2, '0')}:${String(
      date.getMinutes()
    ).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
  };

  return (
    <div className='flex items-center justify-between px-8 mt-5'>
      <div>
        <h1 className='text-[#f5f5f5] text-2xl font-semibold tracking-wide'>
          Hello, {userData.name || 'TEST USER'}
        </h1>
        <p className='text-[#ababab] text-sm'>
          Give your best services for our customers 😊
        </p>
      </div>
      <div className='flex flex-col items-start'>
        <span className='text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]'>
          {formatTime(dateTime)}
        </span>
        <span className='text-[#ababab] text-sm'>{formatDate(dateTime)}</span>
      </div>
    </div>
  );
};

export default Greetings;
