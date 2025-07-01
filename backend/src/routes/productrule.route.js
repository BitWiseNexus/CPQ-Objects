import express from 'express';
import {
  getAllProductRules,
  createProductRule,
  updateProductRule,
  deleteProductRule
} from '../controllers/productrule.controller.js';

const router = express.Router();

router.get('/', getAllProductRules);
router.post('/', createProductRule);
router.put('/:id', updateProductRule);
router.delete('/:id', deleteProductRule);

export default router;
