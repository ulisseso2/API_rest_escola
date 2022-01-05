import { Router } from 'express';
import multer from 'multer'; // Importo o multer para usar nas rotas

import fotoController from '../controllers/FotoController'; // Importo o controller

import multerConfig from '../config/multer'; // Importo o multerConfig com as configurações

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), fotoController.store);
// posso escoler receber um ou mais arquivos, usei single para um arquivo
// nas aspas eu coloco o nome do campo criado no imsomnia

export default router;
