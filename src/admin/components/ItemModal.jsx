import React from "react";

const ItemModal = ({
  isOpen,
  onClose,
  formData,
  handleInputChange,
  handleFormSubmit,
  isEditing,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl mb-4">
          {isEditing ? "Edit Item" : "Add Item"}
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-4">
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
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="p-2 bg-white border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
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
      </div>
    </div>
  );
};

export default ItemModal;
