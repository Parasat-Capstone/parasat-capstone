import React, { useState, useEffect } from "react";
import Metrics from "../components/Metrics";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import InventoryTable from "../components/InventoryTable";
import ItemDetailsModal from "../components/ItemDetailsModal";
import ItemModal from "../components/ItemModal";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import { db } from "../../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    quantity: "",
    date: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [filters, setFilters] = useState({ status: "", name: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(5);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    const fetchInventory = async () => {
      const inventoryCollection = collection(db, "inventory");
      const inventorySnapshot = await getDocs(inventoryCollection);
      const inventoryList = inventorySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setInventory(inventoryList);
    };

    fetchInventory();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      const itemDoc = doc(db, "inventory", formData.id);
      await updateDoc(itemDoc, formData);
      setInventory(
        inventory.map((item) => (item.id === formData.id ? formData : item))
      );
      toast.success("Item updated successfully!");
    } else {
      const newItem = await addDoc(collection(db, "inventory"), formData);
      setInventory([...inventory, { ...formData, id: newItem.id }]);
      toast.success("Item added successfully!");
    }
    resetForm();
    setIsModalOpen(false);
  };

  const resetForm = () => {
    setFormData({ id: null, name: "", quantity: "", date: "" });
    setIsEditing(false);
  };

  const handleEditItem = (item) => {
    setIsEditing(true);
    setFormData(item);
    setIsModalOpen(true);
  };

  const handleDeleteItem = (id) => {
    setItemToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteItem = async () => {
    await deleteDoc(doc(db, "inventory", itemToDelete));
    setInventory(inventory.filter((item) => item.id !== itemToDelete));
    setIsDeleteModalOpen(false);
    toast.success("Item deleted successfully!");
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleShowDetails = (item) => {
    setSelectedItem(item);
  };

  const handleCloseDetails = () => {
    setSelectedItem(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
      (filters.name
        ? item.name.toLowerCase().includes(filters.name.toLowerCase())
        : true)
    );
  });

  const paginatedInventory = filteredInventory.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>

      <Metrics inventory={inventory} />
      <Filters filters={filters} handleFilterChange={handleFilterChange} />
      <button
        onClick={() => {
          resetForm();
          setIsModalOpen(true);
        }}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-6"
      >
        Add Item
      </button>
      <InventoryTable
        inventory={paginatedInventory}
        handleShowDetails={handleShowDetails}
        handleEditItem={handleEditItem}
        handleDeleteItem={handleDeleteItem}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredInventory.length / itemPerPage)}
        onPageChange={handlePageChange}
      />
      <ItemDetailsModal item={selectedItem} onClose={handleCloseDetails} />
      <ItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        isEditing={isEditing}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDeleteItem}
      />
      <ToastContainer />
    </div>
  );
};

export default Inventory;
