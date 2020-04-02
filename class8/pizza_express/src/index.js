import express from 'express';
import path from 'path';
import cors from 'cors';
import methodOverride from 'method-override';

import youchConfig from './config/youchConfig';
import router from './routes/router';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.use(express.static(path.join('/public')));
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(methodOverride('_method'));

app.use(youchConfig);

app.use(router);

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
