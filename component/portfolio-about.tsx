import React from 'react';

export const PortfolioAbout = () => {
  return (
    <div className='mt-6 p-6 bg-white rounded-lg'>
      <h2 className='text-2xl font-bold text-blue-900 mb-4'>About</h2>
      <p className='text-gray-500 mb-6 leading-relaxed'>
        This portfolio is a mix of diversified low-risk assets such as T-bills
        and commercial papers. It provides capital preservation, flexibility and
        competitive returns.
      </p>

      <div className='space-y-4'>
        <div className='flex justify-between text-gray-500'>
          <span>Risk Level</span>
          <span className='text-blue-900 font-medium'>Conservative</span>
        </div>
        <div className='flex justify-between text-gray-500'>
          <span>Custodian</span>
          <span className='text-blue-900 font-medium truncate max-w-[150px] text-right'>
            Zenith Nominees Li...
          </span>
        </div>
        <div className='flex justify-between text-gray-500'>
          <span>Fund Size</span>
          <span className='text-blue-900 font-medium'>₦ 30.0B</span>
        </div>
        <div className='flex justify-between text-gray-500'>
          <span>Returns Payment</span>
          <span className='text-blue-900 font-medium'>Quarterly</span>
        </div>
      </div>

      <div className='mt-8'>
        <h3 className='text-gray-500 mb-2 font-medium'>Fund Composition</h3>
        {/* Progress bar */}
        <div className='w-full h-2 rounded-full bg-gray-200 overflow-hidden mb-4 flex'>
          <div className='bg-sky-300' style={{ width: '25%' }} />
          <div className='bg-blue-500' style={{ width: '35%' }} />
          <div className='bg-blue-900' style={{ width: '40%' }} />
        </div>

        {/* Legend */}
        <div className='space-y-2 text-sm'>
          <div className='flex items-center space-x-2'>
            <div className='w-3 h-3 bg-sky-300 rounded-sm' />
            <span className='text-blue-900 font-medium'>T-Bills: 25%</span>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-3 h-3 bg-blue-500 rounded-sm' />
            <span className='text-blue-900 font-medium'>
              Commercial Papers: 35%
            </span>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-3 h-3 bg-blue-900 rounded-sm' />
            <span className='text-blue-900 font-medium'>
              Bank Placement: 40%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
