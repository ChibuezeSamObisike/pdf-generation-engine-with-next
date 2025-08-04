import { NextRequest } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const route = url.searchParams.get('route') || '/';
  const targetUrl = `http://localhost:3000${route}`;

  const browser = await puppeteer.launch({
    headless: 'shell',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-software-rasterizer',
      '--disable-extensions',
      '--disable-features=IsolateOrigins,site-isolation-trials',
      '--no-zygote',
      '--font-render-hinting=medium',
      '--force-color-profile=srgb',
      '--window-size=595,842',
      '--hide-scrollbars',
      '--mute-audio',
      '--disable-speech-api',
    ],
    userDataDir: '/tmp/puppeteer-cache',
  });
  try {
    const page = await browser.newPage();
    await page.emulateMediaType('print');
    await page.setViewport({ width: 595, height: 842 });
    await page.evaluate(() => document.fonts.ready);
    await page.goto(targetUrl, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: true,
    });

    await browser.close();

    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="output.pdf"`,
      },
    });
  } catch (err) {
    return new Response(`Error generating PDF: ${err}`, { status: 500 });
  } finally {
    await browser?.close();
  }
}
