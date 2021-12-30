import Aluno from '../models/Aluno';

// CRUD de Alunos
class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Julia',
      sobrenome: 'Oliveira',
      email: 'julia@gmail.com',
      idade: 17,
      peso: 56,
      altura: 1.68,
    }); // teste de criação de aluno
    res.json(novoAluno);
  }
}

export default new HomeController();
