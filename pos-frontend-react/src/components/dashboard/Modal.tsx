import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  setIsTableModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setIsTableModalOpen }: ModalProps) => {
  const handleCloseModal = () => {
    setIsTableModalOpen(false);
  };

  return (
    <div className='fixed inset-0 bg-current/50 flex items-center justify-center z-50'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='bg-[#262626] p-6 rounded-lg shadow w-96'
      >
        {/* Modal Header */}
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-[#f5f5f5] text-xl font-semibold'>Add Table</h2>
          <button
            onClick={() => handleCloseModal()}
            className='text-[#f5f5f5] hover:text-red-500'
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <form className='space-y-4 mt-10'>
          <div>
            <label className='block text-sm text-[#ababab] mb-2 font-medium mt-3'>
              Table Number
            </label>
            <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
              <input
                type='number'
                name='tableNr'
                className='flex-1 bg-transparent text-white focus:outline-none'
                required
              />
            </div>
          </div>
          <div>
            <label className='block text-sm text-[#ababab] mb-2 font-medium mt-3'>
              Number of Seats
            </label>
            <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
              <input
                type='number'
                name='seats'
                className='flex-1 bg-transparent text-white focus:outline-none'
                required
              />
            </div>
          </div>
          <button
            type='submit'
            className='w-full mt-6 py-3 text-lg bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg cursor-pointer transition-colors'
          >
            Add Table
          </button>
        </form>
      </motion.div>
    </div>
  );
};
export default Modal;
