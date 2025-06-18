import React, { useEffect, useState } from 'react'

const QLIForm = () => {
  const [formData, setFormData] = useState({
    product: '',
    quantity: 1,
    unitPrice: 0,
    discount: 0,
    pricebook: '',
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    } else {
      setFormData({
        product: '',
        quantity: 1,
        unitPrice: 0,
        discount: 0,
        pricebook: '',
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' || name === 'unitPrice' || name === 'discount'
        ? parseFloat(value)
        : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.product || !formData.pricebook) {
      alert('Product and Pricebook are required');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 space-y-4">
      <h2 className="text-xl font-semibold">{editData ? 'Edit' : 'Add'} Quote Line Item</h2>

      <div>
        <label className="block font-medium">Product</label>
        <input
          type="text"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            min="1"
          />
        </div>
        <div>
          <label className="block font-medium">Unit Price</label>
          <input
            type="number"
            name="unitPrice"
            value={formData.unitPrice}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            min="0"
          />
        </div>
      </div>

      <div>
        <label className="block font-medium">Discount (%)</label>
        <input
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          min="0"
          max="100"
        />
      </div>

      <div>
        <label className="block font-medium">Pricebook ID</label>
        <input
          type="text"
          name="pricebook"
          value={formData.pricebook}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {editData ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default QLIForm;
