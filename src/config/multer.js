import multer from 'multer';
import { extname, resolve } from 'path';
// preciso importar o path para definir a rota dos arquivos para pasta upload

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);
// número aleatório que será usado para renomear o arquivo recebido

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
      // essa função de cb recebe um erro no primeiro parâmetro se optei por colocar null
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
