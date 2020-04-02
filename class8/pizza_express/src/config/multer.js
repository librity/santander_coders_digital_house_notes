import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

const pizzaThumbnails = {
  storage: multer.diskStorage({
    destination: resolve(
      __dirname,
      '..',
      '..',
      'public',
      'uploads',
      'pizzaThumbnails'
    ),

    filename: (req, file, cb) => {
      crypto.randomBytes(10, (err, res) => {
        if (err) return cb(err);

        const { name } = req.body;

        return cb(
          null,
          res.toString('hex') +
            '_' +
            Date.now() +
            '-' +
            name +
            +extname(file.originalname)
        );
      });
    },
  }),
};

export default { pizzaThumbnails };
