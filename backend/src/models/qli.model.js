import mongoose from 'mongoose';

const qliSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    unitPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    pricebook: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pricebook',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('QLI', qliSchema);
