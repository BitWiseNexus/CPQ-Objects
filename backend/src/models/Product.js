import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: String,
  description: String,
  price: Number,
  quantity: Number,
  pricingMethod: String,
  subscriptionTerm: Number,
  subscriptionType: String,
  taxable: Boolean,
});

export default mongoose.model("Product", productSchema);
