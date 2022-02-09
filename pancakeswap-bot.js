const puppeteer = require('puppeteer');

const url = 'https://pancakeswap.finance/swap';
const xpath = '/html/body/div[1]/div[1]/div[3]/div/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]';

function run () {
  return new Promise(async (resolve, reject) => {
      try {
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto(url);

          await page.screenshot({path: 'screenshot.png'});

          await page.waitForXPath(xpath);
          let [element] = await page.$x(xpath);
          let value = await element.evaluate(el => el.innerText);

          browser.close();

          console.log('current status: ', value);

          return resolve(value);
      } catch (e) {
          return reject(e);
      }
  })
}

run()
  .then(console.log)
  .catch(console.error);