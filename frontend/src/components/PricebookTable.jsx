import React from 'react';

const PricebookTable = ({ data, onEdit, onDelete }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-gray-600 italic">No pricebooks available.</div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left font-semibold border-b">Name</th>
            <th className="p-3 text-left font-semibold border-b">Currency</th>
            <th className="p-3 text-left font-semibold border-b">Description</th>
            <th className="p-3 text-left font-semibold border-b">Status</th>
            <th className="p-3 text-left font-semibold border-b">Created At</th>
            <th className="p-3 text-left font-semibold border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pricebook) => (
            <tr key={pricebook._id} className="hover:bg-gray-50">
              <td className="p-3 border-b">{pricebook.name}</td>
              <td className="p-3 border-b">{pricebook.currency}</td>
              <td className="p-3 border-b">{pricebook.description || '-'}</td>
              <td className="p-3 border-b">
                <span className={`px-2 py-1 rounded text-sm font-medium ${pricebook.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {pricebook.isActive ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td className="p-3 border-b">{new Date(pricebook.createdAt).toLocaleDateString()}</td>
              <td className="p-3 border-b space-x-3">
              <button
                className="text-blue-600 hover:underline cursor-pointer"
                onClick={() => onEdit(pricebook)}
              >
                Edit
              </button>
              <button
                className="text-red-600 hover:underline cursor-pointer"
                onClick={() => onDelete(pricebook._id)}
              >
                Delete
              </button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricebookTable;
