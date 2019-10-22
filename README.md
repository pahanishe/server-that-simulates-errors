# Srver that simulates errors :) njoy ;)

## Simple node/express server for testing that returns:     
{   
  '[HOST]:1000/': 'not responding ever',  
  '[HOST]:1000/404': '404 not found',  
  '[HOST]:1000/206': '206 partial data',  
  '[HOST]:1000/500':'500 server error',  
  '[HOST]:1000/504': '504 timeout error'  
}

## To run do the following:
git clone [this repo]  
npm install  
npm start  


