import { Router } from 'express';
import userRoutes from './users.routes';

const router = Router();

router.use('/users', userRoutes);

router.get('/', (req, res) => {
    res.json({
        'message': 'Hello from netlify functions!'
    });
});

export default router;