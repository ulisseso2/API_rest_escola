import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.get('/:id', alunoController.show);
router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.delete('/:id', loginRequired, alunoController.delete);

// para atualizar os alunos eu preciso do ID, por isso a rota contem esse parâmetro
export default router;
