# Serverless functions and static site

The static site is served from the dist folder, you can refer to it as the frontend because all the files in there will be available on the web!

The backend "express rest api" is in the src folder! The backend is imported into the function called "server" and therefore served as a serverless function.

Run this to host the website locally
`npm start`

Run this to publish your site to netlify
`npm run deploy`

If you want to run your backend only without netlify functions
`npm run express:start`