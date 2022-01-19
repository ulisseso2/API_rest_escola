import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// As duas rotas abaixo foram criadas para exemplo de index e show, mas não devem existir em
// aplicações normais, a menos que precisemos exibir os usuários.
router.get('/', loginRequired, userController.index);
// router.get('/:id', loginRequired, userController.show); // essa rota recebe o parâmetro ID

router.post('/', userController.store); // os método aqui será store pois quero criar um usuário
router.put('/', loginRequired, userController.update); // essa rota atualiza o usuário
router.delete('/', loginRequired, userController.delete);
// Removi o ID de ('/:id') pois o acesso será apenas do próprio usuário e será validado por token
export default router;

/* Metodos:
index - lista todos - GET
store/create - cria um - POST
delete - deleta um - DELETE
show - mostra um - GET
update - atualiza um - PATCH ou PUT
*/
