import { useSelector } from 'react-redux';

import { getTotalPrice } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';

const BillInfo = () => {
  const cartData = useSelector((state: RootState) => state.cart);
  const totalPrice = useSelector(getTotalPrice);
  //const taxRate = 6;

  /* const taxAmount = totalPrice * (taxRate / (100 + taxRate));
  const totalPriceWithTax = totalPrice + taxAmount
  */

  return (
    <>
      <div className='flex items-center justify-between px-5 mt-2'>
        <span className='text-xs text-[#ababab] font-medium mt-2'>
          Items({cartData.length})
        </span>
        <span className='text-base text-[#f5f5f5] font-bold'>
          Total: €{totalPrice.toFixed(2)}
        </span>
      </div>
      {/* <div className='flex items-center justify-between px-5 mt-2'>
        <span className='text-xs text-[#ababab] font-medium mt-2'>Tax(6%)</span>
        <span className='text-base text-[#f5f5f5] font-bold'>€{taxAmount}</span>
      </div> */}
      <div className='flex items-center gap-3 px-5 mt-4'>
        <button className='bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold cursor-pointer'>
          Cash
        </button>
        <button className='bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold cursor-pointer'>
          Card
        </button>
      </div>
      <div className='flex items-center gap-3 px-5 mt-4'>
        <button className='bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] text-lg font-semibold cursor-pointer'>
          Print Receipt
        </button>
        <button className='bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] text-lg font-semibold cursor-pointer'>
          Place Order
        </button>
      </div>
    </>
  );
};
export default BillInfo;
