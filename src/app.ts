import express from 'express';
import { router } from './routes';
import cors from 'cors';

export const app = express()

app.use(cors());
app.use('/user', router);
app.use('/', (req, res) => res.send("API solid"));

// export { app }