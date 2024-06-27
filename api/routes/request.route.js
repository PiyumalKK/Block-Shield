import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createRequest, deleterequest, getrequest, updaterequest } from '../controllers/request.controller.js';

const router = express.Router();

router.post('/createreq', verifyToken, createRequest);
router.get('/getreq', verifyToken, getrequest);
router.delete('/deletereq/:requestId/:userId', verifyToken, deleterequest);
router.put('/updatereq/:requestId/:userId', verifyToken, updaterequest);

export default router; 