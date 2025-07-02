import React from 'react';

const ProductRuleTable = ({ rules, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Product Rules</h2>
      {rules.length === 0 ? (
        <p className="text-gray-500">No product rules available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-left">Rule Name</th>
                <th className="border p-2 text-left">Type</th>
                <th className="border p-2 text-left">Scope</th>
                <th className="border p-2 text-left">Conditions</th>
                <th className="border p-2 text-left">Actions</th>
                <th className="border p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rules.map((rule) => (
                <tr key={rule._id} className="border-t">
                  <td className="border p-2">{rule.ruleName}</td>
                  <td className="border p-2">{rule.ruleType}</td>
                  <td className="border p-2">{rule.scope}</td>
                  <td className="border p-2 text-sm">
                    {rule.conditions.map((c, i) => (
                      <div key={i}>
                        {c.field} {c.operator} {String(c.value)}
                      </div>
                    ))}
                  </td>
                  <td className="border p-2 text-sm">
                    {rule.actions.map((a, i) => (
                      <div key={i}>
                        {a.actionType} → {a.targetProductId?.name || a.targetProductId || '—'}
                        {a.message && <div className="text-xs text-gray-500">({a.message})</div>}
                      </div>
                    ))}
                  </td>
                  <td className="border p-2 space-x-2">
                    <button
                      className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded"
                      onClick={() => onEdit(rule)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded"
                      onClick={() => onDelete(rule._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductRuleTable;
