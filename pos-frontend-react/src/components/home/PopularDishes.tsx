import { popularDishes } from '../../constants/constants';

const PopularDishes = () => {
  return (
    <div className='mt-6 pr-6'>
      <div className='bg-[#1a1a1a] w-full rounded-lg'>
        <div className='flex items-center justify-between px-6 py-4'>
          <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>
            Popular Dishes
          </h1>
          <a href='/' className='text-[#025cca] text-sm font-semibold'>
            View all
          </a>
        </div>
        <div className='overflow-y-scroll h-[680px] scrollbar-hide'>
          {popularDishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className='flex items-center gap-4 bg-[#1f1f1f] rounded-[1rem] px-6 py-4 mt-4 mx-6'
              >
                {/* Dish Number*/}
                <h1 className='text-[#f5f5f5] font-bold text-xl mr-4'>
                  {dish.id < 10 ? `0${dish.id}` : dish.id}
                </h1>

                {/* Dish Image */}
                <img
                  src={dish.image}
                  alt={dish.name}
                  className='w-[50px] h-[50px] rounded-full'
                />

                {/* Dish Details */}
                <div className='flex flex-col'>
                  <span className='text-[#f5f5f5] font-semibold tracking-wide'>
                    {dish.name}
                  </span>
                  <span className='text-[#f5f5f5] text-sm font-semibold'>
                    <span className='text-[#ababab]'>Orders: </span>
                    {dish.numberOfOrders}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
