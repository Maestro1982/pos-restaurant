import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GrRadialSelected } from 'react-icons/gr';
import { FaShoppingCart } from 'react-icons/fa';

import { menus } from '../../constants/constants';
import { addItem } from '../../redux/slices/cartSlice';

interface MenuItem {
  id: number;
  name: string;
  price: number;
}

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState<number>(0);
  const [itemId, setItemId] = useState<number | null>(null);
  const dispatch = useDispatch();

  const decrementItemCount = (id: number) => {
    setItemId(id);
    if (itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
  };

  const incrementItemCount = (id: number) => {
    setItemId(id);
    setItemCount((prev) => prev + 1);
  };

  const handleAddItemToCart = (item: MenuItem) => {
    if (itemCount === 0) return;

    const { name, price } = item;
    const newObj = {
      id: new Date(),
      name,
      pricePerQuantity: price,
      quantity: itemCount,
      price: price * itemCount,
    };
    dispatch(addItem(newObj));
    setItemCount(0);
  };

  return (
    <>
      <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%]'>
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className='flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer'
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu);
                setItemId(0);
                setItemCount(0);
              }}
            >
              <div className='flex items-center justify-between w-full'>
                <h1 className='text-[#f5f5f5] text-lg font-semibold'>
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className='text-white' size={20} />
                )}
              </div>
              <span className='text-[#f5f5f5] text-sm font-semibold'>
                {menu.items.length} items
              </span>
            </div>
          );
        })}
      </div>
      <hr className='border-[#2a2a2a] border-t-2 mt-4' />
      <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%]'>
        {selected?.items.map((item) => {
          return (
            <div
              key={item.id}
              className='flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer bg-[#1a1a1a] hover:bg-[#2a2a2a]'
            >
              <div className='flex items-start justify-between w-full'>
                <h1 className='text-[#f5f5f5] text-lg font-semibold'>
                  {item.name}
                </h1>
                <button
                  onClick={() => handleAddItemToCart(item)}
                  className='bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg cursor-pointer'
                >
                  <FaShoppingCart size={20} />
                </button>
              </div>
              <div className='flex items-center justify-between w-full'>
                <span className='text-[#f5f5f5] text-xl font-bold'>
                  €{item.price.toFixed(2)}
                </span>
                <div className='flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6'>
                  <button
                    className='text-yellow-500 text-2xl cursor-pointer'
                    onClick={() => decrementItemCount(item.id)}
                  >
                    &minus;
                  </button>
                  <span className='text-white'>
                    {item.id === itemId ? itemCount : '0'}
                  </span>
                  <button
                    className='text-yellow-500 text-2xl cursor-pointer'
                    onClick={() => incrementItemCount(item.id)}
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MenuContainer;
