import React, { useState } from 'react';

const PricebookForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    currency: 'INR',
    description: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() === '') return alert('Name is required');
    onSubmit(formData);
    setFormData({ name: '', currency: 'USD', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-6 space-y-4">
      <h2 className="text-xl font-semibold">Add Pricebook</h2>

      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Currency</label>
        <select
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="USD">USD ($)</option>
          <option value="INR">INR (₹)</option>
          <option value="EUR">EUR (€)</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Create Pricebook
      </button>
    </form>
  );
};

export default PricebookForm;
