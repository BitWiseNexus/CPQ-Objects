import React, { useEffect, useState } from 'react';
import { getAllQLIs, createQLI, updateQLI, deleteQLI } from '../apis/qli';
import QLIForm from '../components/QLIForm';
import QLITable from '../components/QLITable';

const QLI = () => {
  const [qlis, setQlis] = useState([]);
  const [editData, setEditData] = useState(null);

  const fetchQLIs = async () => {
    const data = await getAllQLIs();
    setQlis(data);
  };

  useEffect(() => {
    fetchQLIs();
  }, []);

  const handleCreateOrUpdate = async (data) => {
    if (editData) {
      await updateQLI(editData._id, data);
      setEditData(null);
    } else {
      await createQLI(data);
    }
    fetchQLIs();
  };

  const handleEditClick = (qli) => {
    setEditData(qli);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteClick = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      await deleteQLI(id);
      fetchQLIs();
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Quote Line Item Management</h1>
      <QLIForm onSubmit={handleCreateOrUpdate} editData={editData} />
      <div className="mt-10">
        <QLITable qlis={qlis} onEdit={handleEditClick} onDelete={handleDeleteClick} />
      </div>
    </div>
  );
};

export default QLI;
