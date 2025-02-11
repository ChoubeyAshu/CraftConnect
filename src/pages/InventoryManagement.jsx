import React, { useState } from 'react';

function InventoryManagement() {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: '' });

  // Handle input changes for new item
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  // Add new item to the inventory list
  const handleAddItem = () => {
    if (newItem.name && newItem.quantity) {
      setInventory([...inventory, { ...newItem, id: Date.now() }]);
      setNewItem({ name: '', quantity: '' });
    }
  };

  // Update quantity for a specific item
  const handleUpdateQuantity = (id, newQuantity) => {
    setInventory(
      inventory.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Inventory Management</h2>
      <p>Manage your stock levels and track inventory here.</p>

      {/* Add Item Form */}
      <div className="my-4">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={handleInputChange}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAddItem}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Add Item
        </button>
      </div>

      {/* Inventory List */}
      <ul className="mt-6 space-y-4">
        {inventory.map(item => (
          <li key={item.id} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{item.name}</span>
              <span>Quantity: {item.quantity}</span>
            </div>
            <input
              type="number"
              placeholder="Update Quantity"
              onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
              className="mt-2 w-full p-2 border border-gray-300 rounded"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryManagement;

  
