import express from 'express';
import { getAllPricebooks, createPricebook } from '../controllers/pricebook.controller.js';

const router = express.Router();

router.get('/', getAllPricebooks);
router.post('/', createPricebook);

export default router;
