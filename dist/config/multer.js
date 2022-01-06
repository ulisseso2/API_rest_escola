"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');
// preciso importar o path para definir a rota dos arquivos para pasta upload

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);
// número aleatório que será usado para renomear o arquivo recebido

exports. default = {
  fileFilter: (req, file, cb) => { // com o fileFilter eu tenho atributos do multer
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer2.default.MulterError('Arquivos suportados são png ou jpg'));
    }
    return cb(null, true);
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images'));
      // essa função de cb recebe um erro no primeiro parâmetro se optei por colocar null
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};
