import { LastPage } from '@/component/last-page';
import { Page } from '@/component/page';
import { AboutPage } from '@/modules/about-page';
import { FrontPage } from '@/modules/front-page';
import { MoneyMarketPage } from '@/modules/money-market-page';
import { ReturnDetailsPage } from '@/modules/return-details-page';

export default function Home() {
  return (
    <>
      <Page noPadding>
        <FrontPage />
      </Page>
      <Page>
        <AboutPage />
      </Page>
      <Page>
        <ReturnDetailsPage />
      </Page>
      {[1, 2].map((item) => (
        <Page key={item}>
          <MoneyMarketPage />
        </Page>
      ))}
      <Page noPadding>
        <LastPage />
      </Page>
    </>
  );
}
