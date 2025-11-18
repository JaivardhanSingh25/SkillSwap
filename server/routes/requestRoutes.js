import express from 'express';
import { authMiddle } from '../middlewares/auth.js';
import { createReq, acceptReq, declineReq, getConnections, getReq } from '../controllers/requestControllers.js';


const requestRouter = express.Router();




requestRouter.post('/', authMiddle, createReq);
requestRouter.put('/:id/accept', authMiddle, acceptReq);
requestRouter.delete('/:id/decline', authMiddle, declineReq);
requestRouter.get('/accepted/:userId', authMiddle, getConnections);
requestRouter.get('/pending/:userId', authMiddle, getReq);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     






export default requestRouter