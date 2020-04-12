import 'dotenv/config';

import express from 'express';
import { resolve } from 'path';

import './database'
import router from './routes/router';

const app = express();

app.use(express.static(resolve(__dirname, '..', 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server 👂listening on ⚓port ${port}...`));
