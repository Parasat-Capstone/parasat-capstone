const Filters = ({ filters, handleFilterChange }) => {
  return (
    <div className="bg-gray-100 shadow-sm rounded-lg p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
          name="name"
          placeholder="Search Item"
          value={filters.name}
          onChange={handleFilterChange}
          className="p-2 bg-white border border-gray-300 rounded-md"
        />

        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={filters.startDate}
          onChange={handleFilterChange}
          className="p-2 bg-white border border-gray-300 rounded-md"
        />
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={filters.endDate}
          onChange={handleFilterChange}
          className="p-2 bg-white border border-gray-300 rounded-md"
        />

        <div className="flex gap-2">
          <input
            type="number"
            name="minQuantity"
            placeholder="Min Qty"
            value={filters.minQuantity}
            onChange={handleFilterChange}
            className="p-2 bg-white border border-gray-300 rounded-md"
          />
          <input
            type="number"
            name="maxQuantity"
            placeholder="Max Qty"
            value={filters.maxQuantity}
            onChange={handleFilterChange}
            className="p-2 bg-white border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
