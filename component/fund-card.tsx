/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const FundCard = () => {
  return (
    <div className=' bg-white my-2 p-6 rounded-2xl border border-gray-100'>
      {/* Header */}
      <div className='flex items-start justify-between mb-6'>
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
            <img
              src='https://cowrywise.com/images/icons/funds/trustbanc.png'
              alt='TrustBanc Logo'
              className='w-6 h-6 object-contain'
            />
          </div>
          <h3 className='text-lg font-bold text-blue-900 leading-tight'>
            TrustBanc Money Market Fund
          </h3>
        </div>
      </div>

      <div className='mb-6'>
        <p className='text-gray-400 text-sm'>Annual Returns</p>
        <p className='text-green-500 text-3xl font-bold'>
          20.33<span className='text-xl align-top'>%</span>
        </p>
      </div>

      <div className='mb-6'>
        <p className='text-gray-400 text-sm mb-4'>
          Historical performance of annual returns
        </p>
        <div className='space-y-3'>
          <div className='flex justify-between text-sm'>
            <span className='text-blue-900'>2021</span>
            <span className='text-green-500 font-semibold'>4.27%</span>
          </div>
          <div className='flex justify-between text-sm'>
            <span className='text-blue-900'>2022</span>
            <span className='text-green-500 font-semibold'>9.30%</span>
          </div>
          <div className='flex justify-between text-sm'>
            <span className='text-blue-900'>2023</span>
            <span className='text-green-500 font-semibold'>13.16%</span>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between mt-6'>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold'>
          Invest Now
        </button>
        <button className='text-blue-600 font-semibold flex items-center space-x-1'>
          <span>Learn More</span>
          <svg
            className='w-4 h-4 mt-0.5'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
