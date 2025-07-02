import React, { useEffect, useState } from 'react';

const initialCondition = { field: '', operator: '', value: '' };
const initialAction = { actionType: '', targetProductId: '', message: '' };

const ProductRuleForm = ({ onSubmit, editData }) => {
  const [formData, setFormData] = useState({
    ruleName: '',
    ruleType: '',
    conditions: [initialCondition],
    actions: [initialAction],
    scope: 'QuoteLine',
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    } else {
      setFormData({
        ruleName: '',
        ruleType: '',
        conditions: [initialCondition],
        actions: [initialAction],
        scope: 'QuoteLine',
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConditionChange = (index, field, value) => {
    const updated = [...formData.conditions];
    updated[index][field] = value;
    setFormData({ ...formData, conditions: updated });
  };

  const handleActionChange = (index, field, value) => {
    const updated = [...formData.actions];
    updated[index][field] = value;
    setFormData({ ...formData, actions: updated });
  };

  const addCondition = () => setFormData({ ...formData, conditions: [...formData.conditions, initialCondition] });
  const addAction = () => setFormData({ ...formData, actions: [...formData.actions, initialAction] });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.ruleName || !formData.ruleType) {
      alert('Rule Name and Rule Type are required.');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 space-y-4">
      <h2 className="text-xl font-semibold">{editData ? 'Edit' : 'Add'} Product Rule</h2>

      <div>
        <label className="block font-medium">Rule Name</label>
        <input
          type="text"
          name="ruleName"
          value={formData.ruleName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Rule Type</label>
        <select
          name="ruleType"
          value={formData.ruleType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select type</option>
          <option value="Validation">Validation</option>
          <option value="Selection">Selection</option>
          <option value="Filter">Filter</option>
          <option value="Alert">Alert</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Scope</label>
        <select
          name="scope"
          value={formData.scope}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="QuoteLine">Quote Line</option>
          <option value="Configuration">Configuration</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Conditions</label>
        {formData.conditions.map((cond, i) => (
          <div key={i} className="grid grid-cols-3 gap-2 mb-2">
            <input
              type="text"
              placeholder="Field"
              value={cond.field}
              onChange={(e) => handleConditionChange(i, 'field', e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Operator"
              value={cond.operator}
              onChange={(e) => handleConditionChange(i, 'operator', e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Value"
              value={cond.value}
              onChange={(e) => handleConditionChange(i, 'value', e.target.value)}
              className="p-2 border rounded"
            />
          </div>
        ))}
        <button type="button" onClick={addCondition} className="text-blue-600 mt-2">+ Add Condition</button>
      </div>

      <div>
        <label className="block font-medium">Actions</label>
        {formData.actions.map((action, i) => (
          <div key={i} className="grid grid-cols-3 gap-2 mb-2">
            <select
              value={action.actionType}
              onChange={(e) => handleActionChange(i, 'actionType', e.target.value)}
              className="p-2 border rounded"
              required
            >
              <option value="">Action Type</option>
              <option value="AddProduct">Add Product</option>
              <option value="RemoveProduct">Remove Product</option>
              <option value="ShowMessage">Show Message</option>
              <option value="HideOption">Hide Option</option>
            </select>
            <input
              type="text"
              placeholder="Target Product ID"
              value={action.targetProductId}
              onChange={(e) => handleActionChange(i, 'targetProductId', e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Message (optional)"
              value={action.message}
              onChange={(e) => handleActionChange(i, 'message', e.target.value)}
              className="p-2 border rounded"
            />
          </div>
        ))}
        <button type="button" onClick={addAction} className="text-blue-600 mt-2">+ Add Action</button>
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

export default ProductRuleForm;
