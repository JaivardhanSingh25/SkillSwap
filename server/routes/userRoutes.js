import express from 'express';
import { authMiddle } from '../middlewares/auth';


const userRouter = express.Router();




userRouter.get('/:id', authMiddle, getUserInfo);
userRouter.put('/:id', authMiddle, updateUserInfo);
userRouter.get('/search', authMiddle, searchUsers);







export default userRouter