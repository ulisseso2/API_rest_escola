import { Router } from 'express';
import homeControle from '../controllers/HomeController';

const router = new Router();

router.get('/', homeControle.index);

export default router;
