import { Router } from 'express';

import fotoController from '../controllers/FotoController'; // Importo o controller
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotoController.store);
// posso escoler receber um ou mais arquivos, usei single para um arquivo
// nas aspas eu coloco o nome do campo criado no imsomnia

export default router;
