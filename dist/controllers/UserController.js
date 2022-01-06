"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

// CRUD de Usuários
class UserController {
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      // libera requisição no body da aplcação consumindo a API
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      }); // cria usuário
    }
  }

  // Index - Exibe todos
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });// setei os atributos para exibir apenas o necessário
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show - exibe 1 usando o ID
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id); // Busca pela primeira chave
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // update - Atualiza 1 usando o ID
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId); // Busca pela primeira chave

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        }); // Valida existência do ID
      }

      // Edita o dado informado do body
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete - apaga o usuário
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId); // Busca pela primeira chave

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
