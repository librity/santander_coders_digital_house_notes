import { diskStorage } from 'multer';
import { randomBytes } from 'crypto';
import { extname, join } from 'path';

export default {
  storage: diskStorage({
    destination: join('public', 'uploads', 'pizzaThumbnails'),

    filename: (req, file, cb) => {
      randomBytes(10, (err, res) => {
        if (err) return cb(err);

        const { name } = req.body;

        return cb(
          null,
          res.toString('hex') +
            '_' +
            Date.now() +
            '-' +
            name +
            extname(file.originalname)
        );
      });
    },
  }),
};
