import { TbReceiptEuro } from 'react-icons/tb';
import { GiSandsOfTime } from 'react-icons/gi';

import Greetings from '../components/home/Greetings';
import MiniCard from '../components/home/MiniCard';
import BottomNav from '../components/shared/BottomNav';

const Home = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
      {/* Left Side */}
      <div className='flex-[3]'>
        <Greetings />
        <div className='flex items-center w-full gap-3 px-8 mt-8'>
          <MiniCard
            title='Total Earnings'
            icon={TbReceiptEuro}
            number={512}
            footerNum={1.6}
          />
          <MiniCard
            title='In Progress'
            icon={GiSandsOfTime}
            number={16}
            footerNum={3.6}
          />
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-[2] bg-[#1a1a1a]'></div>
      <BottomNav />
    </section>
  );
};

export default Home;
