import express from 'express';
import { authMiddle } from '../middlewares/auth.js';
import { getUserInfo, updateUserInfo, searchUsers } from '../controllers/userControllers.js';

const userRouter = express.Router();




userRouter.get('/search', authMiddle, searchUsers); // you can tell in the interview that you encountered this problem.. that you earlier wrote this below /:id   so what happened is that second one was being picked by express and in the front end where you wrote /search.. :id was being considered as id... thats why i had to reorder the express routes here
userRouter.get('/:id', authMiddle, getUserInfo);
userRouter.put('/:id', authMiddle, updateUserInfo);







export default userRouter