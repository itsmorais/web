import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import connect from "./models/connection";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
connect(); // CONEXÃO DO MONGO DB NA APLICAÇÃO

app.listen(PORT, () => {
  console.log(`Server running at PORT:${PORT}`);
});

app.use(routes);
