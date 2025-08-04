import React from 'react';

const historicalReturns = [
  { year: 2022, value: '16.20%' },
  { year: 2023, value: '14.18%' },
  { year: 2024, value: '24.17%' },
];

export const AnnualReturns = () => {
  return (
    <div className='w-full'>
      <h4 className='font-bold text-xl mb-5'>
        Historical performance annual returns
      </h4>

      <div className='space-y-6 bg-white p-6 rounded-md'>
        {historicalReturns.map((entry) => (
          <div
            key={entry.year}
            className='flex justify-between items-center border-b last:border-0 border-gray-100 pb-2'
          >
            <span className='text-blue-900 text-lg font-medium'>
              {entry.year}
            </span>
            <span className='text-green-500 text-lg font-semibold'>
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
