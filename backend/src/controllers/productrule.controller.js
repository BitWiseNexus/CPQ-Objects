import ProductRule from '../models/productrule.model.js';

export const getAllProductRules = async (req, res) => {
  try {
    const rules = await ProductRule.find().populate('actions.targetProductId');
    res.status(200).json(rules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProductRule = async (req, res) => {
  try {
    const newRule = await ProductRule.create(req.body);
    res.status(201).json(newRule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProductRule = async (req, res) => {
  try {
    const updated = await ProductRule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProductRule = async (req, res) => {
  try {
    await ProductRule.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product rule deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};