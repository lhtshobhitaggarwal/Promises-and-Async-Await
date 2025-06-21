import express from 'express';
import { getWithPromise, getWithAsync } from '../controllers/apiController.js';

const router = express.Router();

// Route to test Promise
router.get('/promise', getWithPromise);

// Route to test Async/Await
router.get('/async', getWithAsync);

export default router;
