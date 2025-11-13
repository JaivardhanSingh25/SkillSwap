import express from 'express';
import { configDotenv } from 'dotenv';
import { dbConnect } from './configs/dbConnect.js';
import cors from "cors";


configDotenv();
dbConnect();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server has started on ${port}`));
