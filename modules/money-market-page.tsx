import { FundCard } from '@/component/fund-card';
import React from 'react';

export const MoneyMarketPage = () => {
  return (
    <div>
      <div className='grid mt-4 grid-cols-2 gap-x-3'>
        {[1, 2, 3, 4].map((item) => (
          <FundCard key={item} />
        ))}
      </div>
      <div className='bg-[#0065f5] mt-5 p-10 leading-12 text-white rounded-md text-[30pt] font-bold'>
        Join over 1 million customers on Cowrywise today
      </div>
    </div>
  );
};
