/* eslint-disable @next/next/no-img-element */
import { FundCard } from '@/component/fund-card';
import React from 'react';

export const LastPage = () => {
  return (
    <div className='bg-[#0065f5] h-full w-full p-8 '>
      <h1 className='leading-12 text-white text-[30pt] mb-4 flex font-bold'>
        Put your money to work{' '}
        <img
          src='https://cowrywise.com/blog/wp-content/uploads/2023/03/Saving-Money-In-The-Olden-Days.png'
          alt=''
          className='w-[80px]'
        />{' '}
      </h1>

      <div className='grid grid-cols-2 gap-2'>
        {[1, 2, 3, 4].map((item) => (
          <FundCard key={item} />
        ))}
      </div>
    </div>
  );
};
