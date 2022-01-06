"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// As duas rotas abaixo foram criadas para exemplo de index e show, mas não devem existir em
// aplicações normais, a menos que precisemos exibir os usuários.
// router.get('/', loginRequired, userController.index);
router.get('/:id', _loginRequired2.default, _UserController2.default.show); // essa rota recebe o parâmetro ID

router.post('/', _loginRequired2.default, _UserController2.default.store); // os método aqui será store pois quero criar um usuário
router.put('/', _loginRequired2.default, _UserController2.default.update); // essa rota atualiza o usuário
router.delete('/', _loginRequired2.default, _UserController2.default.delete);
// Removi o ID de ('/:id') pois o acesso será apenas do próprio usuário e será validado por token
exports. default = router;

/* Metodos:
index - lista todos - GET
store/create - cria um - POST
delete - deleta um - DELETE
show - mostra um - GET
update - atualiza um - PATCH ou PUT
*/
