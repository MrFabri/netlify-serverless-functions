# Serverless functions and static site
<a href="https://serverless-functions-express.netlify.app/">Demo website</a>

The static website is served from the dist folder, you can refer to it as the frontend because all the files in there will be available on the web! 
If you are using a framework put your compiled files in this directory!

The backend "express rest api" is in the src folder! The backend is imported into the function called "server" and therefore served as a serverless function.

Run this to host the website locally
`npm start`

Run this to publish your site to netlify
`npm run deploy`

If you want to run your backend only without netlify functions
`npm run express:start`

## Guide

1. Fork this repository
3. Install dependencies `npm install`
4. Run `npm start` and see the magic happen!

### Preview
![image](https://user-images.githubusercontent.com/32011023/224772960-72a949c5-21a4-42d9-892b-42eba91d75bf.png)
