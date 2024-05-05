import { Router } from 'express';

const router = Router();

router.post('/api/v1/account/create', async (req, res) => {
    return res.status(200).send({});
});

export default router;
