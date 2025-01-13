import React, { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

const InventoryTable = ({
  inventory,
  handleEditItem,
  handleDeleteItem,
  handleShowDetails,
}) => {
  const getStockStatus = (quantity) => {
    if (quantity === 0) return "Out of Stock";
    if (quantity < 20) return "Low Stock";
    return "In Stock";
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "Out of Stock":
        return "text-red-600 bg-red-100";
      case "Low Stock":
        return "text-yellow-600 bg-yellow-100";
      case "In Stock":
        return "text-green-600 bg-green-100";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <table className="w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left font-semibold text-gray-600">
              Item Name
            </th>
            <th className="py-3 px-4 text-left font-semibold text-gray-600">
              Quantity
            </th>
            <th className="py-3 px-4 text-left font-semibold text-gray-600">
              Stock Status
            </th>
            <th className="py-3 px-4 text-left font-semibold text-gray-600">
              Last Updated
            </th>
            <th className="py-3 px-4 text-left font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {inventory.map((item) => {
            const status = getStockStatus(item.quantity);
            return (
              <tr key={item.id}>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.quantity}</td>
                <td
                  className={`py-3 px-4 rounded-md text-center ${getStatusStyles(
                    status
                  )}`}
                >
                  {status}
                </td>
                <td className="py-3 px-4">{item.date}</td>
                <td className="py-3 px-4 flex gap-2">
                  <button
                    onClick={() => handleShowDetails(item)}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleEditItem(item)}
                    className="text-yellow-500 hover:text-yellow-600"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
