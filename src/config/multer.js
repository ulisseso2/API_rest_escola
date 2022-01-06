import multer from 'multer';
import { extname, resolve } from 'path';
// preciso importar o path para definir a rota dos arquivos para pasta upload

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);
// número aleatório que será usado para renomear o arquivo recebido

export default {
  fileFilter: (req, file, cb) => { // com o fileFilter eu tenho atributos do multer
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivos suportados são png ou jpg'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
      // essa função de cb recebe um erro no primeiro parâmetro se optei por colocar null
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
