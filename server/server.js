import express from 'express';
import { configDotenv } from 'dotenv';
import { dbConnect } from './configs/dbConnect.js';
import cors from "cors";
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import requestRouter from './routes/requestRoutes.js';


configDotenv();
dbConnect();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/request', requestRouter);
app.use('/api/user', userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server has started on ${port}`));
