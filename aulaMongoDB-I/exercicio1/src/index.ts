import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import connect from './models/connection';
dotenv.config();

const PORT = process.env.PORT || 3003;

const server = express()

server.use(express.json())

server.listen(PORT, () => { console.log(`Server running at PORT:${PORT}`) })
connect();
server.use(routes)