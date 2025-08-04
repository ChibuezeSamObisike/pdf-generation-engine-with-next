import React, { ReactNode } from 'react';

export const Page = ({
  children,
  noPadding,
}: {
  children: ReactNode;
  noPadding?: boolean;
}) => {
  return (
    <div
      className={
        'print-page bg-blue-50 relative w-[210mm] h-[297mm] box-border ' +
        (noPadding ? 'p-0' : 'p-8')
      }
    >
      <div className='h-full w-full'>{children}</div>

      <div className='pageNumber absolute bottom-4 right-8 text-xs text-gray-500 print:block'>
        Page <span className='inline-block'></span>
      </div>
    </div>
  );
};
