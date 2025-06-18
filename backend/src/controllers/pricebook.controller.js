import Pricebook from '../models/pricebook.model.js';

export const getAllPricebooks = async (req, res) => {
  try {
    const pricebooks = await Pricebook.find().sort({ createdAt: -1 });
    res.status(200).json(pricebooks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch pricebooks', error });
  }
};

export const createPricebook = async (req, res) => {
  try {
    const { name, currency, description } = req.body;

    const existing = await Pricebook.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: 'Pricebook with this name already exists' });
    }

    const newPricebook = await Pricebook.create({
      name,
      currency,
      description,
    });

    res.status(201).json(newPricebook);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create pricebook', error });
  }
};
