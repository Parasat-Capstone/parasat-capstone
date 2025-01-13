import React, { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

const Inventory = () => {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Item 1",
      quantity: 25,
      location: "Warehouse A",
      date: "2023-01-12",
    },
    {
      id: 2,
      name: "Item 2",
      quantity: 10,
      location: "Warehouse B",
      date: "2023-01-10",
    },
    {
      id: 3,
      name: "Item 3",
      quantity: 0,
      location: "Warehouse C",
      date: "2023-01-08",
    },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    quantity: "",
    location: "",
    date: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    location: "",
    name: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add or edit item
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setInventory(
        inventory.map((item) => (item.id === formData.id ? formData : item))
      );
    } else {
      setInventory([...inventory, { ...formData, id: Date.now() }]);
    }
    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setFormData({ id: null, name: "", quantity: "", location: "", date: "" });
    setIsEditing(false);
  };

  // Edit item
  const handleEditItem = (item) => {
    setIsEditing(true);
    setFormData(item);
  };

  // Delete item
  const handleDeleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  // Filter inventory
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredInventory = inventory.filter((item) => {
    const status =
      item.quantity === 0
        ? "Out of Stock"
        : item.quantity < 20
        ? "Low Stock"
        : "In Stock";
    return (
      (filters.status ? status === filters.status : true) &&
      (filters.location
        ? item.location.toLowerCase().includes(filters.location.toLowerCase())
        : true) &&
      (filters.name
        ? item.name.toLowerCase().includes(filters.name.toLowerCase())
        : true)
    );
  });

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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>

      {/* Filters and Add/Edit Form */}
      <form
        onSubmit={handleFormSubmit}
        className="bg-gray-100 shadow-sm rounded-lg p-4 mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="p-2 bg-white border border-gray-300 rounded-md"
          >
            <option value="">All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
          <input
            type="text"
            name="location"
            placeholder="Warehouse Location"
            value={filters.location}
            onChange={handleFilterChange}
            className="p-2 bg-white border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="name"
            placeholder="Search Item"
            value={filters.name}
            onChange={handleFilterChange}
            className="p-2 bg-white border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-2 bg-white border border-gray-300 rounded-md"
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="p-2 bg-white border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleInputChange}
            className="p-2 bg-white border border-gray-300 rounded-md"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="p-2 bg-white border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`py-2 px-4 rounded-md text-white ${
              isEditing
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isEditing ? "Save Changes" : "Add Item"}
          </button>
        </div>
      </form>

      {/* Inventory Table */}
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
                Location
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
            {filteredInventory.map((item) => {
              const status = getStockStatus(item.quantity);
              return (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.quantity}</td>
                  <td
                    className={`py-3 px-4 rounded-md text-center ${getStatusStyles(
                      status
                    )}`}
                  >
                    {status}
                  </td>
                  <td className="py-3 px-4">{item.location}</td>
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4 flex gap-2">
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
    </div>
  );
};

export default Inventory;
