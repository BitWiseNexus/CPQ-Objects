    import express from 'express';
    import { getAllPricebooks, createPricebook, updatePricebook, deletePricebook } from '../controllers/pricebook.controller.js';

    const router = express.Router();

    router.get('/', getAllPricebooks);
    router.post('/', createPricebook);
    router.put('/:id', updatePricebook);
    router.delete('/:id', deletePricebook); 

    export default router;
