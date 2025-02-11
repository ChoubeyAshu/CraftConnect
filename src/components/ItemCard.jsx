import React, { useState } from 'react';
import { useCart } from '../Constants/Values/CartContext';  // Correct import path

function ItemCard({ product }) {
  const { addToCart } = useCart();  // Get the addToCart function
  const [showModal, setShowModal] = useState(false);  // State for showing modal
  const [quantity, setQuantity] = useState(1);  // Default quantity to 1

  const handleAddToCart = () => {
    setShowModal(true);  // Show the modal when "Add to Cart" is clicked
  };

  const handleConfirmAddToCart = () => {
    addToCart({ ...product, quantity });  // Add the product with quantity to cart
    setShowModal(false);  // Close the modal
  };

  const handleCloseModal = () => {
    setShowModal(false);  // Close the modal
  };

  return (
    <div key={product.key} className="w-full sm:w-60 h-80 bg-gray-50 shadow-md rounded-lg p-3 flex flex-col gap-1">
      <div 
        className="duration-500 h-48" 
        style={{
          backgroundImage: `url(${product.img})`,  
          backgroundSize: 'cover', 
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold">{product.name}</span>
            <p className="text-xs text-gray-700">{"seller : "+product.seller}</p>
          </div>
          <span className="font-bold text-red-600">{product.price+product.unit}</span>
        </div>
<button
  class="rounded-lg relative w-full h-10 cursor-pointer flex items-center border border-greenMain bg-greenMain group hover:bg-greenMain active:bg-greenMain active:border-greenMain"
        onClick={handleAddToCart}
>
  <span
    class="text-gray-700 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300"
    >Add Item</span
  >
  <span
    class="absolute right-0 h-full w-10 rounded-lg bg-greenMain flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
  >
    <svg
      class="svg w-8 text-gray-700"
      fill="none"
      height="24"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="12" x2="12" y1="5" y2="19"></line>
      <line x1="5" x2="19" y1="12" y2="12"></line>
    </svg>
  </span>
</button>

      </div>

      {/* Modal for Quantity and Confirmation */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] sm:w-96">
            <h2 className="text-xl font-semibold mb-4">Add {product.name} to Cart</h2>
            <div className="mb-4">
              <p><strong>Price:</strong> {product.price + product.unit}</p>
              <div className="flex items-center gap-2 mt-2">
                <label htmlFor="quantity" className="text-lg">Quantity:</label>
                <input 
                  type="number" 
                  id="quantity" 
                  value={quantity} 
                  min="1" 
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border px-2 py-1 w-20" 
                />
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button 
                className="bg-gray-500 text-white px-4 py-2 rounded-md" 
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button 
                className="bg-greenMain text-white px-4 py-2 rounded-md" 
                onClick={handleConfirmAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemCard;
