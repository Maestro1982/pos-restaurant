import { useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className='bg-[#025cca] p-2 text-xl font-bold rounded-full text-white cursor-pointer'
      onClick={() => navigate(-1)}
    >
      <IoArrowBackOutline />
    </button>
  );
};
export default BackButton;
