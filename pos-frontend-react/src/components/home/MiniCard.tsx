import { IconType } from 'react-icons';

interface MiniCardProps {
  title: string;
  icon: IconType;
  number: number;
  footerNum: number;
}

const MiniCard = ({ title, icon: Icon, number, footerNum }: MiniCardProps) => {
  return (
    <div className='bg-[#1a1a1a] py-5 px-5 rounded-lg w-[50%]'>
      <div className='flex items-start justify-between'>
        <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>
          {title}
        </h1>
        <button
          className={`${
            title === 'Total Earnings'
              ? 'bg-[#02ca3a] p-3 rounded-lg text-[#f5f5f5] text-2xl'
              : 'bg-[#f6b100] p-3 rounded-lg text-[#f5f5f5] text-2xl'
          }`}
        >
          <Icon size={30} />
        </button>
      </div>
      <div>
        <span className='text-[#f5f5f5] text-4xl font-bold mt-5'>{number}</span>
        <p className='text-[#f5f5f5] text-lg mt-2'>
          {' '}
          <span className='text-[#02ca3a]'>{footerNum}</span> since yesterday
        </p>
      </div>
    </div>
  );
};
export default MiniCard;
