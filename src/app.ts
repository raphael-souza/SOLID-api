import express from 'express';
import { router } from './routes';
import cors from 'cors';

export const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use('/user', router);
