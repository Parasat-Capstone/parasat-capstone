const ItemDetailsModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{item.name}</h2>
        <p>Quantity: {item.quantity}</p>
        <p>
          Status:{" "}
          {item.quantity > 20
            ? "In Stock"
            : item.quantity > 0
            ? "Low Stock"
            : "Out of Stock"}
        </p>
        <p>Location: {item.location}</p>
        <p>Last Updated: {item.date}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ItemDetailsModal;
