import React, { useEffect, useState } from 'react';
import {
  getAllProductRules,
  createProductRule,
  updateProductRule,
  deleteProductRule
} from '../apis/productrule';
import ProductRuleForm from '../components/ProductruleForm';
import ProductRuleTable from '../components/ProductruleTable';

const ProductRule = () => {
  const [rules, setRules] = useState([]);
  const [editData, setEditData] = useState(null);

  const fetchRules = async () => {
    const data = await getAllProductRules();
    setRules(data);
  };

  useEffect(() => {
    fetchRules();
  }, []);

const handleCreateOrUpdate = async (data) => {
  try {
    if (editData) {
      await updateProductRule(editData._id, data);
      setEditData(null);
    } else {
      await createProductRule(data);
    }
    fetchRules();
  } catch (err) {
      alert("Something went wrong while saving the rule.");
      console.error(err);
    }
};

const handleEditClick = (rule) => {
  setEditData(rule);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleDeleteClick = async (id) => {
  const confirm = window.confirm('Are you sure you want to delete this rule?');
  if (confirm) {
    await deleteProductRule(id);
    fetchRules();
  }
};

return (
  <div className="max-w-4xl mx-auto py-10 px-4">
    {/* <h1 className="text-2xl font-bold mb-6">Product Rule Management</h1>
      <ProductRuleForm onSubmit={handleCreateOrUpdate} editData={editData} />
      <div className="mt-10">
        <ProductRuleTable rules={rules} onEdit={handleEditClick} onDelete={handleDeleteClick} />
      </div> */}
  </div>
);
};

export default ProductRule;
