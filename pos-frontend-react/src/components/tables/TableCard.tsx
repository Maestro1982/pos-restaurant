import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaPerson } from 'react-icons/fa6';

import { getRandomBG } from '../../utils';
import { updateTable } from '../../redux/slices/customerSlice';

interface TableCardProps {
  key: number;
  name: string;
  status: string;
  initial: string;
  seats: number;
}

const TableCard = ({ key, name, status, initial, seats }: TableCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (name: string) => {
    if (status === 'Booked') return;
    dispatch(updateTable({ tableNr: name }));
    navigate('/menu');
  };

  return (
    <div
      key={key}
      className='w-[300px] bg-[#262626] hover:bg-[#2c2c2c] p-4 rounded-lg cursor-pointer'
      onClick={() => handleClick(name)}
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
      <div className='text-[#ababab] flex items-center'>
        <FaPerson size={20} />
        <span className='ml-1'>{seats}</span>
      </div>
    </div>
  );
};
export default TableCard;
