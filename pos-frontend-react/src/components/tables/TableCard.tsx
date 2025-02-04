import { useNavigate } from 'react-router-dom';
import { FaPerson } from 'react-icons/fa6';

import { getRandomBG } from '../../utils';

interface TableCardProps {
  key: number;
  name: string;
  status: string;
  initial: string;
  seats: number;
}

const TableCard = ({ key, name, status, initial, seats }: TableCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (status === 'Booked') return;
    navigate('/menu');
  };

  return (
    <div
      key={key}
      className='w-[300px] bg-[#262626] hover:bg-[#2c2c2c] p-4 rounded-lg cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex items-center justify-between px-1'>
        <h1 className='text-[#f5f5f5] text-xl font-semibold'>{name}</h1>
        <span
          className={`${
            status === 'Booked'
              ? 'text-white bg-[#ff000068]'
              : 'text-white bg-[#2e4a40]'
          } px-2 py-1 rounded-lg`}
        >
          {status}
        </span>
      </div>
      <div className='flex items-center justify-center mt-5 mb-9'>
        <span className=' text-white rounded-full p-5' style={getRandomBG()}>
          {initial}
        </span>
      </div>
      <div className='text-white flex items-center'>
        <FaPerson size={25} />
        <span className='ml-1'>{seats}</span>
      </div>
    </div>
  );
};
export default TableCard;
