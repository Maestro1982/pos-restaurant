import { useState } from 'react';

import OrderCard from '../components/orders/OrderCard';
import BackButton from '../components/shared/BackButton';
import BottomNav from '../components/shared/BottomNav';

const Orders = () => {
  const [status, setStatus] = useState<string>('all');
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
      <div className='flex items-center justify-between px-10 py-4 mt-2'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>
            Orders
          </h1>
        </div>
        <div className='flex items-center justify-around gap-4'>
          <button
            className={`text-[#ababab] text-lg  rounded-lg px-5 py-2 font-semibold ${
              status === 'all' && 'bg-[#383838]'
            }`}
            onClick={() => setStatus('all')}
          >
            All
          </button>
          <button
            className={`text-[#ababab] text-lg  rounded-lg px-5 py-2 font-semibold ${
              status === 'progress' && 'bg-[#383838]'
            }`}
            onClick={() => setStatus('progress')}
          >
            In Progress
          </button>
          <button
            className={`text-[#ababab] text-lg  rounded-lg px-5 py-2 font-semibold ${
              status === 'ready' && 'bg-[#383838]'
            }`}
            onClick={() => setStatus('ready')}
          >
            Ready
          </button>
          <button
            className={`text-[#ababab] text-lg  rounded-lg px-5 py-2 font-semibold ${
              status === 'completed' && 'bg-[#383838]'
            }`}
            onClick={() => setStatus('completed')}
          >
            Completed
          </button>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 px-16 py-4 overflow-y-scroll scrollbar-hide h-[70vh] w-full max-w-[calc(100%-8rem)] mx-auto'>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      <BottomNav />
    </section>
  );
};
export default Orders;
