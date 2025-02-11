import React, { useState } from 'react';
import PageNavbar from './../components/PageNav';

function OrderManagement() {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', product: 'Organic Honey', status: 'Processing' },
    { id: 2, customerName: 'Jane Smith', product: 'Handwoven Cotton Scarf', status: 'Shipped' },
    { id: 3, customerName: 'Alice Johnson', product: 'Herbal Tea Blend', status: 'Delivered' }
  ]);

  // Handle status update for an order
  const handleStatusChange = (id, newStatus) => {
    setOrders(
      orders.map(order =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <>
    {<PageNavbar className={'sticky'}/>}
    <div className='flex h-screen items-center'>
    <div className="p-8 bg-gray-100 rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Order Management</h2>
      <p className="mb-6">View and manage orders in progress.</p>

      {/* Order List */}
      <ul className="space-y-4">
        {orders.map(order => (
          <li key={order.id} className="p-4 bg-white rounded shadow">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold">{order.customerName}</span>
                <br />
                <span className="text-sm text-gray-600">{order.product}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 font-semibold">Status: {order.status}</span>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="p-1 border border-gray-300 rounded"
                >
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
}

export default OrderManagement;
