import express from 'express';
import {
  getAllQLIs,
  createQLI,
  updateQLI,
  deleteQLI
} from '../controllers/qli.controller.js';

const router = express.Router();

router.get('/', getAllQLIs);
router.post('/', createQLI);
router.put('/:id', updateQLI);
router.delete('/:id', deleteQLI);

export default router;
