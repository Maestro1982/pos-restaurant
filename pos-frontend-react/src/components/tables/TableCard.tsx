import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaPerson } from 'react-icons/fa6';
import { FaLongArrowAltRight } from 'react-icons/fa';

import { getAvatarName, getRandomBG } from '../../utils';
import { updateTable } from '../../redux/slices/customerSlice';

interface TableCardProps {
  id: string;
  name: string;
  status: string;
  initial: string;
  seats: number;
  onSelect: () => void;
}

const TableCard = ({
  id,
  name,
  status,
  initial,
  seats,
  onSelect,
}: TableCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (name: string, status: string) => {
    if (status === 'Booked') {
      navigate('/menu');
    } else {
      dispatch(updateTable({ tableNr: name }));
      onSelect();
      navigate('/menu');
    }
  };

  return (
    <div
      id={id}
      className='w-[300px] h-[200px] bg-[#262626] hover:bg-[#2c2c2c] p-4 rounded-lg cursor-pointer'
      onClick={() => handleClick(name, status)}
    >
      <div className='flex items-center justify-between px-1'>
        <h1 className='text-[#f5f5f5] text-xl font-semibold'>
          Table <FaLongArrowAltRight className='text-[#ababab] ml-2 inline' />{' '}
          {name}
        </h1>
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
          {getAvatarName(initial.toString()) || 'N/A'}
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
