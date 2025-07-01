import mongoose from 'mongoose';

const conditionSchema = new mongoose.Schema({
  field: {
    type: String,
    required: true,
    trim: true
  },
  operator: {
    type: String,
    enum: ['==', '!=', '<', '<=', '>', '>=', 'includes'],
    required: true,
  },
  value: mongoose.Schema.Types.Mixed,
}, { _id: false });

const actionSchema = new mongoose.Schema({
  actionType: {
    type: String,
    enum: ['AddProduct', 'RemoveProduct', 'ShowMessage', 'HideOption'],
    required: true,
  },
  targetProductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  message: {
    type: String,
    trim: true,
  }
}, { _id: false });

const productRuleSchema = new mongoose.Schema({
  ruleName: {
    type: String,
    required: true,
    trim: true,
  },
  ruleType: {
    type: String,
    enum: ['Validation', 'Selection', 'Filter', 'Alert'],
    required: true,
  },
  conditions: [conditionSchema],
  actions: [actionSchema],
  scope: {
    type: String,
    enum: ['Configuration', 'QuoteLine'],
    default: 'QuoteLine',
  }
}, {timestamps: true}
);

export default mongoose.model('ProductRule', productRuleSchema);
