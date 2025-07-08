import React, { useState } from "react";
import axios from "axios";

const Product = () => {
  const [form, setForm] = useState({
    name: "",
    code: "",
    description: "",
    price: "",
    quantity: "",
    pricingMethod: "List",
    subscriptionTerm: "",
    subscriptionType: "One-time",
    taxable: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        price: parseFloat(form.price),
        quantity: parseInt(form.quantity),
        subscriptionTerm: parseInt(form.subscriptionTerm),
      };

      const res = await axios.post("http://localhost:5000/api/products", payload);
      alert("Product saved!");
      console.log(res.data);
    } catch (err) {
      alert("Error saving product");
      console.error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Create New Product</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>

        <div>
          <label className="block font-medium mb-1">Product Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="border p-2 rounded w-full" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Product Code</label>
          <input name="code" value={form.code} onChange={handleChange} className="border p-2 rounded w-full" />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} className="border p-2 rounded w-full" />
        </div>

        <div className="flex gap-4">
          <div className="w-full">
            <label className="block font-medium mb-1">Price</label>
            <input name="price" type="number" value={form.price} onChange={handleChange} className="border p-2 rounded w-full" required />
          </div>
          <div className="w-full">
            <label className="block font-medium mb-1">Quantity</label>
            <input name="quantity" type="number" value={form.quantity} onChange={handleChange} className="border p-2 rounded w-full" required />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-full">
            <label className="block font-medium mb-1">Pricing Method</label>
            <select name="pricingMethod" value={form.pricingMethod} onChange={handleChange} className="border p-2 rounded w-full">
              <option>List</option>
              <option>Cost</option>
              <option>Block</option>
              <option>Percent of Total</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block font-medium mb-1">Subscription Term</label>
            <input name="subscriptionTerm" type="number" value={form.subscriptionTerm} onChange={handleChange} className="border p-2 rounded w-full" />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="w-full">
            <label className="block font-medium mb-1">Subscription Type</label>
            <select name="subscriptionType" value={form.subscriptionType} onChange={handleChange} className="border p-2 rounded w-full">
              <option>One-time</option>
              <option>Renewal</option>
              <option>Evergreen</option>
            </select>
          </div>
          <div className="flex items-center mt-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="taxable" checked={form.taxable} onChange={handleChange} />
              Taxable
            </label>
          </div>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save Product</button>
      </form>
    </div>
  );
};

export default Product;
