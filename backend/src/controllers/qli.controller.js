import QLI from '../models/qli.model.js';

// GET all QLIs
export const getAllQLIs = async (req, res) => {
  try {
    const qlis = await QLI.find().populate('pricebook').sort({ createdAt: -1 });
    res.status(200).json(qlis);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch QLIs', error });
  }
};

// CREATE QLI
export const createQLI = async (req, res) => {
  try {
    const { productName, quantity, unitPrice, discount, pricebook } = req.body;
    const totalPrice = quantity * unitPrice * (1 - discount / 100);

    const newQLI = await QLI.create({
      productName,
      quantity,
      unitPrice,
      discount,
      totalPrice,
      pricebook,
    });

    res.status(201).json(newQLI);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create QLI', error });
  }
};

// UPDATE QLI
export const updateQLI = async (req, res) => {
  const { id } = req.params;
  const { productName, quantity, unitPrice, discount, pricebook } = req.body;

  try {
    const totalPrice = quantity * unitPrice * (1 - discount / 100);

    const updated = await QLI.findByIdAndUpdate(
      id,
      { productName, quantity, unitPrice, discount, totalPrice, pricebook },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Update failed', error });
  }
};

// DELETE QLI
export const deleteQLI = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await QLI.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'QLI not found' });
    }
    res.json({ message: 'QLI deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete QLI', error });
  }
};
