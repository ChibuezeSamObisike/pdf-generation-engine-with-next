/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const DetailsCard = ({
  title,
  img,
}: {
  title: string;
  img?: string;
}) => {
  return (
    <div className='flex gap-2 my-4 bg-white border border-gray-200 rounded-md overflow-hidden'>
      <div className='w-[200px] h-[100px] flex-shrink-0'>
        <img src={img} alt='img-fd' className='w-full h-full object-cover' />
      </div>
      <div className='p-3 text-[#032b69] flex flex-col justify-center'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-[10pt] text-gray-500'>
          July 18, 2025 · Updated July 25, 2025
        </p>
      </div>
    </div>
  );
};
