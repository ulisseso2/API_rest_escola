import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store); // os método aqui será store pois quero criar um usuário
router.get('/', userController.index);
router.get('/:id', userController.show); // essa rota recebe o parâmetro ID
router.put('/:id', userController.update); // essa rota atualiza o usuário
router.delete('/:id', userController.delete);

export default router;

/* Metodos:
index - lista todos - GET
store/create - cria um - POST
delete - deleta um - DELETE
show - mostra um - GET
update - atualiza um - PATCH ou PUT
*/
