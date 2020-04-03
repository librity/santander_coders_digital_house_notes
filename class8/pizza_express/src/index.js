import 'dotenv/config';

import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { join, resolve } from 'path';
import cors from 'cors';
import methodOverride from 'method-override';

import youch from './config/youch';
import router from './routes/router';

const app = express();

app.set('view engine', 'ejs');
app.set('views', join(__dirname, '/views'));

app.use(expressLayouts);
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)
app.set('layout extractMetas', true)

app.use(express.static(resolve(__dirname, '..', 'public')));

app.use(express.static(join('/public')));
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(methodOverride('_method'));

app.use(youch);

app.use(router);

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
