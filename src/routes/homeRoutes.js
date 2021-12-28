import { Router } from 'express';
import homeControle from '../controllers/HomeControllers';

const router = new Router();

router.get('/', homeControle.index);

export default router;
