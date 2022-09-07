import express from 'express';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;
const DB = proces.env.DB || 'moongodb://localhost/ ecommerce';

mongoose.connect(DB)
  .then(() => console.log('todo bien con la DB'))
  .catch(err => console.error(err));

const app = express();

app.set('view engine', 'pug');
app.set()

app.use(express.json());

import apiRouter from './routes/api.js';
app.use('/api', apiRouter);

app.get('/'), (req, res) => {
  res.send('soy una app de ecommerce');
};

app.get('/', unaFuncion)

app.listen(PORT, () => {
  console.log('Server escuchando en puerto ' + PORT);
})
