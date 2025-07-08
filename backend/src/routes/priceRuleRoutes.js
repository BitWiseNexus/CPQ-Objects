import express from 'express';
import { createPriceRule, getAllPriceRules } from '../controllers/priceRuleController.js';

const router = express.Router();

router.post('/', createPriceRule);
router.get('/', getAllPriceRules);

export default router;
