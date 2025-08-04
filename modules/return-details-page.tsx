import { AnnualReturns } from '@/component/annual-returns';
import { DetailsCard } from '@/component/details-card';
import React from 'react';

export const ReturnDetailsPage = () => {
  return (
    <div>
      <AnnualReturns />
      {[
        {
          title:
            'The Silent Killer of Business Growth: Idle Cash (And What to Do About It)',
          img: 'https://cowrywise.com/blog/wp-content/uploads/2022/06/Sprout-Blog-Header-1-2048x1152-1.png',
        },
        {
          title:
            'NGX Smashes Through 130,000 Points: What Today’s Record High Means for Your Portfolio',
          img: 'https://cowrywise.com/blog/wp-content/uploads/2025/06/Stocks-is-coming-to-Cowrywise.-1.webp',
        },
        {
          title:
            'What Stocks Really Are,  And Why You Don’t Need Millions to Start',
          img: 'https://cowrywise.com/blog/wp-content/uploads/2025/06/Cowrywise_Blog_FeatureImage_ide-Drive-or-Danfo_-The-2025-Transport-Playbook-for-Young-Nigerians.png',
        },
        {
          title:
            'Ride, Drive, or Danfo: The 2025 Transport Playbook for Young Nigerians',
          img: 'https://cowrywise.com/blog/wp-content/uploads/2025/06/Cowrywise_Blog_FeatureImage_Blessing_6years.png',
        },
        {
          title:
            'Employee Spotlight: From a Cold Email to a Career I’m Proud Of: My 6-Year Journey at Cowrywise',
          img: 'https://cowrywise.com/blog/wp-content/uploads/2023/03/Saving-Money-In-The-Olden-Days.png',
        },
        {
          title:
            'From Ram to ROI: Replenish Your Wallet After Sallah in 30 Days',
          img: 'https://cowrywise.com/blog/wp-content/uploads/2023/02/Capital-Market-scaled.webp',
        },
      ].map((card, item) => (
        <DetailsCard {...card} key={item} />
      ))}
    </div>
  );
};
