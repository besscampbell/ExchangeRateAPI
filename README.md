 # Currency Exchange

####  Convert USD to other monies, 11.20.2020

#### By _**Bess Campbell**_

## Description

 About to travel? Use this program to determine what you exchange rate is going to look like. A user should be able to type in an amount in US dollars and then choose which currency it should be converted to. To determine the most recent exchange rate the program will be using an exchange rate API.
  

## Installation Requirements

*  Up to date internet browser ([Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQjw28T8BRDbARIsAEOMBcy9jwgkNels1LOSIWTx4sDazLfEgC6PylTug62KqyWPeA0EMyr3254aAjTTEALw_wcB&gclsrc=aw.ds), [Mozilla](https://www.mozilla.org/en-US/firefox/), [Opera](https://www.opera.com/)) 
*  Code editor like [VSCode](https://code.visualstudio.com/download) to view source code 
*  With [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) installed 
* Your own unique API key from <https://www.exchangerate-api.com/>

## Setup

#### From the web
1. Go to this [GitHub Repo Page](https://github.com/besscampbell/ExchangeRateAPI.git).
2. Click the "Code" and click the 'Download zip' option.
3. Unzip the file, navigate to the root directory (ExchangeRateAPI).
4. Follow directions for setting up your API key below
5. In your Terminal navigate to the root directy where the project exists and install webpack by typing:
    `npm install`
6. Once the install has finished  type `npm run build` into the terminal to compile the project
7. Open the `index.html` file that inside of your `dist` folder in your browser.

--or--

#### From Terminal

1. Open a terminal in your code editor and type 
: `git clone https://github.com/besscampbell/ExchangeRateAPI.git`
2. Navigate to the ExchangeRateAPI directory in the terminal (`cd ExchangeRateAPI`)
3. Follow directions for setting up your API key below
4. In the terminal type `npm install` to install the JSON package
5. Once the install has finished  type `npm run build` into the terminal to compile the project
6. Right click on the `index.html` file inside of the `dist` folder and select "Copy file path"
7. Paste the link into your web browser window

#### API Key Instructions

##### Creating a key
1. Go to <https://www.exchangerate-api.com/> and sign up for your own API key.
2. You will be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
3. You will then be given access to a dashboard that includes your API key and your remaining calls for the month.

##### Setup
1. Create your own enviromental variable file by naigating to the project directory and typing `touch .env` into the terminal.
2. Put your API key in your `.env` file like this: `API_KEY={YOUR KEY HERE}`, omitting the curly braces.



## Specs

| Test | Describe     |      Test     | `expect().toEqual()` |
|:------:| :------------ |:-------------| :---------------------------|
| 1 | **Conversion(countryCode, rate, cashConverted)**  |_"It should create a conversion object using the constructor"_ | let conversion = new Conversion("AED", 3.67, 0)<br>**expect**`(conversion.countryCode).toEqual("AED")<br>**expect**(conversion.rate).toEqual(3.67)`<br>**expect**`(conversion.cash).toEqual(0)` |
|   | | | |
|2 | **convertMonies()** |_"It should correctly take the amount input and times it by rate to get the amount in another currency"_ |**expect**(`(convertMonies(10)).toEqual(36.7)` |


 

## Known Bugs

 TODO 

## Support and contact details

 Please contact <bess.k.campbell@gmail.com> with any questions or comments. 

## Technologies Used

*  HTML
*  Git 
*  CSS 
*  Bootstrap 
*  JavaScript 
*  jQuery 
*  Node.js 
*  NPM 
*  Webpack
*  Exchange Rate API

### License

[MIT license](https://opensource.org/licenses/MIT)

Copyright (c) 2020 **_Bess Campbelll_**