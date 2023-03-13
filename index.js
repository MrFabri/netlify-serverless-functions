// This runs the backend without serverless functions \\
// Type npm run express:start in the terminal \\
// This will only run your backend

import app from './src/app.js';

app.listen('8080', () => {
    console.log('Server running on', 'http://localhost:8080/api/');
});