/* eslint-disable @next/next/no-img-element */
import { FundCard } from '@/component/fund-card';
import { PortfolioAbout } from '@/component/portfolio-about';
import React from 'react';

export const AboutPage = () => {
  return (
    <div>
      <div className='flex gap-4 items-center'>
        <img
          src='https://cowrywise.com/images/icons/funds/cw-fund.png'
          width={22}
          height={22}
          style={{ aspectRatio: 33 / 32 }}
          alt=''
        />
        <h4 className='font-bold text-xl'>Cowrywise investment portfolio</h4>
      </div>
      <PortfolioAbout />
      <div className='grid mt-4 grid-cols-2 gap-x-3'>
        {[1, 2].map((item) => (
          <FundCard key={item} />
        ))}
      </div>
    </div>
  );
};
