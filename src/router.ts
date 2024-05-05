import { Router } from 'express';

import createAccountRoute from './routes/Accounts/createAccountRoute';

const router = Router();

router.use(createAccountRoute);

export default router;
