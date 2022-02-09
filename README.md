# PancakeSwapBot

Skript that visits the pancakeswaap site, saves a screenshot to the project folder and logs
the current status to the console.

#### Setup

This project relies on Puppeteer and NodeJS >8.0.
https://github.com/puppeteer/puppeteer

To install under Linux in cmd type:
$ sudo npm i puppeteer --save

If you run into permission conflicts during chromium installation change permissions on folder
node_modules temporarily:
$sudo chown -cR $USER:$USER ~/node_modules/

#### Usage

To run the skript type:
$ node pancakeswap-bot.js
