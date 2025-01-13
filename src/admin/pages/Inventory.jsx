import React, { useState } from "react";

const Inventory = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Item 1", quantity: 25 },
    { id: 2, name: "Item 2", quantity: 10 },
    { id: 3, name: "Item 3", quantity: 0 },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    quantity: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add a new item
  const handleAddItem = (e) => {
    e.preventDefault();
    if (formData.name && formData.quantity) {
      setInventory([...inventory, { ...formData, id: Date.now() }]);
      setFormData({ id: null, name: "", quantity: "" });
    }
  };

  // Edit an item
  const handleEditItem = (item) => {
    setIsEditing(true);
    setFormData(item);
  };

  // Save edited item
  const handleSaveEdit = (e) => {
    e.preventDefault();
    setInventory(
      inventory.map((item) => (item.id === formData.id ? formData : item))
    );
    setIsEditing(false);
    setFormData({ id: null, name: "", quantity: "" });
  };

  // Delete an item
  const handleDeleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  // Determine stock status
  const getStockStatus = (quantity) => {
    if (quantity === 0) return "Out of Stock";
    if (quantity < 20) return "Low Stock";
    return "Full Stock";
  };

  // Determine stock status styles
  const getStatusStyles = (status) => {
    switch (status) {
      case "Out of Stock":
        return "text-red-600 bg-red-100";
      case "Low Stock":
        return "text-yellow-600 bg-yellow-100";
      case "Full Stock":
        return "text-green-600 bg-green-100";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Inventory Management
      </h1>

      {/* Inventory Form */}
      <form
        onSubmit={isEditing ? handleSaveEdit : handleAddItem}
        className="bg-white shadow-md rounded-lg p-6 mb-6"
      >
        <h2 className="text-2xl font-semibold mb-4">
          {isEditing ? "Edit Item" : "Add New Item"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Item Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className={`w-full p-3 rounded-lg text-white font-semibold ${
                isEditing ? "bg-yellow-500" : "bg-blue-500"
              } hover:opacity-90`}
            >
              {isEditing ? "Save Changes" : "Add Item"}
            </button>
          </div>
        </div>
      </form>

      {/* Inventory Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left font-medium text-gray-700 uppercase tracking-wider">
                Item Name
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-700 uppercase tracking-wider">
                Quantity
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-700 uppercase tracking-wider">
                Stock Status
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {inventory.map((item) => {
              const status = getStockStatus(item.quantity);
              return (
                <tr key={item.id}>
                  <td className="py-3 px-4 text-gray-800">{item.name}</td>
                  <td className="py-3 px-4 text-gray-800">{item.quantity}</td>
                  <td
                    className={`py-3 px-4 font-semibold text-sm rounded ${getStatusStyles(
                      status
                    )}`}
                  >
                    {status}
                  </td>
                  <td className="py-3 px-4 space-x-2">
                    <button
                      onClick={() => handleEditItem(item)}
                      className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:opacity-90"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:opacity-90"
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
    </div>
  );
};

export default Inventory;
