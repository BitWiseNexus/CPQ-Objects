import React from 'react'

const QLITable = ({ qlis, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Quote Line Items</h2>
      {qlis.length === 0 ? (
        <p className="text-gray-500">No QLIs available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                
              </tr>
            </thead>
            <tbody>
              {qlis.map((qli) => {
                const total = (qli.quantity * qli.unitPrice * (1 - qli.discount / 100)).toFixed(2);
                return (
                  <tr key={qli._id} className="border-t">
                    <td className="border p-2">{qli.productName}</td>
                    <td className="border p-2">{qli.quantity}</td>
                    <td className="border p-2">₹{qli.unitPrice}</td>
                    <td className="border p-2">{qli.discount}%</td>
                    <td className="border p-2">₹{total}</td>
                    <td className="border p-2 text-sm">{qli.pricebook.name || qli.pricebook._id}</td>
                    <td className="border p-2 space-x-2">
                      <button
                        className="text-blue-600 hover:underline cursor-pointer"
                        onClick={() => onEdit(qli)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:underline cursor-pointer"
                        onClick={() => onDelete(qli._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default QLITable;
