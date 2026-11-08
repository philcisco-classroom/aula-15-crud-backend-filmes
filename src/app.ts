import express from 'express'
import cors from 'cors'
import { filmeRoutes } from './routes/filme.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/filmes',filmeRoutes);

export {app};
