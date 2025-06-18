// models/qli.model.js
import mongoose from 'mongoose';

const qliSchema = new mongoose.Schema({
  productName: { 
    type: String, 
    required: true 
  },
  quantity: { 
    type: Number, 
    default: 1 
  },
  unitPrice: { 
    type: Number, 
    required: true 
  },
  discount: { 
    type: Number, 
    default: 0 
  }, // in percent
  totalPrice: { 
    type: Number 
  }, // calculated
  pricebook: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Pricebook', 
    required: true 
  },
}, {
  timestamps: true
});

qliSchema.pre('save', function (next) {
  const discountedPrice = this.unitPrice * (1 - this.discount / 100);
  this.totalPrice = discountedPrice * this.quantity;
  next();
});

export default mongoose.model('QLI', qliSchema);
