import mongoose from 'mongoose';

const pricebookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  currency: {
    type: String,
    default: 'INR',
  },
  description: String,
  isActive: {
    type: Boolean,
    default: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      discount: {
        type: Number,
        default: 0,
      },
    }
  ],
}, {
  timestamps: true,
});
 
const Pricebook = mongoose.model('Pricebook', pricebookSchema);
export default Pricebook;