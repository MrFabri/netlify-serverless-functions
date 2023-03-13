import { Router } from 'express';

const router = Router();

const users = ['Dave', 'Rose', 'Jack']

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    const { name } = req.body;
    users.push(name)
    res.json(users);
});

export default router;