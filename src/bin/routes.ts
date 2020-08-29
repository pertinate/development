import express from 'express';
import { testRoute } from './controllers/V1';

const router = express.Router();

//V1 Routes
router.get('/V1/test', testRoute);
//V2 Routes

export default router;
