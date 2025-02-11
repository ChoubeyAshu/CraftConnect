import React, { useState, useEffect } from 'react';

function Analytics() {
  const [analyticsData, setAnalyticsData] = useState({
    totalSales: 0,
    popularProducts: [],
    salesTrend: []
  });

  // Mock data for analytics
  useEffect(() => {
    // Mock data simulating an API response
    const data = {
      totalSales: 12500,
      popularProducts: [
        { id: 1, name: 'Organic Honey', sales: 250 },
        { id: 2, name: 'Handwoven Cotton Scarf', sales: 180 },
        { id: 3, name: 'Herbal Tea Blend', sales: 150 }
      ],
      salesTrend: [
        { month: 'January', sales: 2000 },
        { month: 'February', sales: 2200 },
        { month: 'March', sales: 1800 },
        { month: 'April', sales: 2400 },
        { month: 'May', sales: 3100 }
      ]
    };
    setAnalyticsData(data);
  }, []);

  return (
    <div className="p-8 bg-gray-100 rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      <p className="mb-6">Insights and reports on sales, demand trends, and more.</p>

      {/* Total Sales */}
      <div className="mb-4 p-4 bg-white rounded shadow">
        <h3 className="text-lg font-semibold">Total Sales</h3>
        <p className="text-2xl font-bold text-green-500">${analyticsData.totalSales}</p>
      </div>

      {/* Popular Products */}
      <div className="mb-4 p-4 bg-white rounded shadow">
        <h3 className="text-lg font-semibold">Popular Products</h3>
        <ul className="mt-2 space-y-2">
          {analyticsData.popularProducts.map(product => (
            <li key={product.id} className="flex justify-between">
              <span>{product.name}</span>
              <span className="font-semibold">{product.sales} sales</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sales Trend */}
      <div className="p-4 bg-white rounded shadow">
        <h3 className="text-lg font-semibold">Sales Trend</h3>
        <ul className="mt-2 space-y-2">
          {analyticsData.salesTrend.map((monthData, index) => (
            <li key={index} className="flex justify-between">
              <span>{monthData.month}</span>
              <span className="font-semibold">${monthData.sales}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Analytics;
