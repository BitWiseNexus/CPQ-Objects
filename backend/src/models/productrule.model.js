import mongoose from 'mongoose';

const productRuleSchema = new mongoose.Schema({
  ruleName: {
    type: String,
    required: true,
  },
  ruleType: {
    type: String,
    enum: ['Validation', 'Selection', 'Filter', 'Alert'],
    required: true,
  },
  conditions: [
    {
      field: String,
      operator: String,
      value: mongoose.Schema.Types.Mixed,
    }
  ],
  actions: [
    {
      actionType: {
        type: String,
        enum: ['AddProduct', 'RemoveProduct', 'ShowMessage', 'HideOption'],
        required: true,
      },
      targetProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      message: String,
    }
  ],
  scope: {
    type: String,
    enum: ['Configuration', 'QuoteLine'],
    default: 'QuoteLine',
  }
}, { timestamps: true });

export default mongoose.model('ProductRule', productRuleSchema);
