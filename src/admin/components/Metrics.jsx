const Metrics = ({ inventory }) => {
  const totalItems = inventory.length;
  const inStock = inventory.filter((item) => item.quantity > 20).length;
  const lowStock = inventory.filter(
    (item) => item.quantity > 0 && item.quantity <= 20
  ).length;
  const outOfStock = inventory.filter((item) => item.quantity === 0).length;

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="p-4 bg-white shadow rounded-lg">
        <h3 className="text-sm font-medium text-gray-500">Total Items</h3>
        <p className="text-2xl font-bold">{totalItems}</p>
      </div>
      <div className="p-4 bg-green-100 shadow rounded-lg">
        <h3 className="text-sm font-medium text-green-700">In Stock</h3>
        <p className="text-2xl font-bold">{inStock}</p>
      </div>
      <div className="p-4 bg-yellow-100 shadow rounded-lg">
        <h3 className="text-sm font-medium text-yellow-700">Low Stock</h3>
        <p className="text-2xl font-bold">{lowStock}</p>
      </div>
      <div className="p-4 bg-red-100 shadow rounded-lg">
        <h3 className="text-sm font-medium text-red-700">Out of Stock</h3>
        <p className="text-2xl font-bold">{outOfStock}</p>
      </div>
    </div>
  );
};

export default Metrics;
