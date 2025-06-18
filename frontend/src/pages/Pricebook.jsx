import React, { useEffect, useState } from 'react';
import PricebookForm from '../components/PricebookForm';
import PricebookTable from '../components/PricebookTable';
import { getAllPricebooks, createPricebook, updatePricebook } from '../apis/pricebook';

const Pricebook = () => {
  const [pricebooks, setPricebooks] = useState([]);
  const [editData, setEditData] = useState(null); // for editing

  const fetchPricebooks = async () => {
    const data = await getAllPricebooks();
    setPricebooks(data);
  };

  useEffect(() => {
    fetchPricebooks();
  }, []);

  const handleCreateOrUpdate = async (data) => {
    if (editData) {
      await updatePricebook(editData._id, data);
      setEditData(null);
    } else {
      await createPricebook(data);
    }
    fetchPricebooks();
  };

  const handleEditClick = (pricebook) => {
    setEditData(pricebook);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Pricebook Management</h1>
      <PricebookForm onSubmit={handleCreateOrUpdate} editData={editData} />
      <PricebookTable data={pricebooks} onEdit={handleEditClick} />
    </div>
  );
};

export default Pricebook;
