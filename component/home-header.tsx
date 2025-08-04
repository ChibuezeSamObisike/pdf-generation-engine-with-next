/* eslint-disable @next/next/no-img-element */
import { Page } from '@/component/page';
import React from 'react';

const HomeHeader = () => {
  return (
    <Page noPadding>
      <div className='w-full h-full relative overflow-hidden'>
        <div className='p-8'>
          <h4 className='text-[48pt] font-bold text-[#082552] leading-16'>
            Invest in the largest
            <br /> collection of mutual funds
          </h4>
          <p className='text-sm text-[#082552] leading-5 mt-3'>
            Invest any amount. Get guided on funds that work for you. Track
            <br /> your investment performance real time. No long forms.
          </p>
          <button className='bg-[#0065f5] text-white p-2 px-4 mt-4 rounded-md font-[500]'>
            Start investing now
          </button>
        </div>
        <img
          src='https://cowrywise.com/images/illos/invest-mutual-funds-nigeria-2.svg'
          alt='cowry-test'
          style={{
            scale: 2.5,
            position: 'absolute',
            bottom: 20,
            right: 100,
          }}
        />
      </div>
    </Page>
  );
};

export default HomeHeader;
