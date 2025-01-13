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
        return "bg-red-500 text-white";
      case "Low Stock":
        return "bg-yellow-500 text-white";
      case "Full Stock":
        return "bg-green-500 text-white";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Inventory Management
      </h1>

      {/* Inventory Form */}
      <form
        onSubmit={isEditing ? handleSaveEdit : handleAddItem}
        className="mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="p-2 border rounded"
            required
          />
          <button
            type="submit"
            className={`p-2 rounded text-white ${
              isEditing ? "bg-yellow-500" : "bg-blue-500"
            } hover:opacity-90`}
          >
            {isEditing ? "Save" : "Add Item"}
          </button>
        </div>
      </form>

      {/* Inventory Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Item Name</th>
            <th className="border border-gray-300 p-2">Quantity</th>
            <th className="border border-gray-300 p-2">Stock Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => {
            const status = getStockStatus(item.quantity);
            return (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2">{item.name}</td>
                <td className="border border-gray-300 p-2">{item.quantity}</td>
                <td
                  className={`border border-gray-300 p-2 text-center font-semibold rounded ${getStatusStyles(
                    status
                  )}`}
                >
                  {status}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => handleEditItem(item)}
                    className="bg-yellow-500 text-white py-1 px-2 rounded mr-2 hover:opacity-90"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:opacity-90"
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
  );
};

export default Inventory;
