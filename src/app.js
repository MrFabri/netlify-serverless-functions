import express from 'express';
import routes from './routes/main.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

app.get('*', (req, res) => {
    res.json({
        'error': `[ ${req.path} ] route doesn't exit`
    })
});

export default app;