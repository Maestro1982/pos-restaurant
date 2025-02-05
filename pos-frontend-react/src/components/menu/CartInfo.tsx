import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaNotesMedical } from 'react-icons/fa';

import { RootState } from '../../redux/store';
import { removeItem } from '../../redux/slices/cartSlice';

const CartInfo = () => {
  const cartData = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [cartData]);

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <div className='px-4 py-2'>
      <h1 className='text-lg text-[#e4e4e4] font-semibold tracking-wide'>
        Order Details
      </h1>
      <div
        className='mt-4 overflow-y-scroll scrollbar-hide h-[350px]'
        ref={scrollRef}
      >
        {cartData.length === 0 ? (
          <span className='flex items-center justify-center text-sm text-[#ababab] h-[350px]'>
            Your cart is empty. Start adding items!
          </span>
        ) : (
          cartData?.map((item) => {
            return (
              <div className='bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-base text-[#ababab] font-semibold tracking-wide'>
                    {item.name}
                  </h1>
                  <span className='text-[#ababab] font-semibold'>
                    x{item.quantity}
                  </span>
                </div>
                <div className='flex items-center justify-between mt-3'>
                  <div className='flex items-center gap-3'>
                    <RiDeleteBin2Fill
                      onClick={() => handleRemoveItem(item.id)}
                      className='text-[#ababab] cursor-pointer'
                      size={20}
                    />
                    <FaNotesMedical
                      className='text-[#ababab] cursor-pointer'
                      size={20}
                    />
                  </div>
                  <span className='text-base text-[#f5f5f5] font-bold'>
                    €{item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default CartInfo;
