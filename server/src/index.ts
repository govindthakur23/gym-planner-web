import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { profileRouter } from './routes/profile';
import { planRouter } from './routes/plan';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//api routes
app.use("/api/profileRouter", profileRouter);
app.use("/api/planRouter", planRouter);

app.listen(PORT, () => {
    console.log(`server runing on portt : ${PORT}`);
});


