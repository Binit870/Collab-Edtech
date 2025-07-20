import express from 'express';
import { requestMentor, getMentorRequests } from '../controllers/mentorController.js';

const router = express.Router();

router.post('/request', requestMentor);
router.get('/requests/:mentorId', getMentorRequests);

export default router;
