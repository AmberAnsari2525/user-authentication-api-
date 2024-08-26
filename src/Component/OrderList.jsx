import React, { useEffect, useState } from 'react';
import { getOrders } from '../Api/orderService';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <ul className="list-group">
        {orders.map((order) => (
          <li key={order.id} className="list-group-item">Order #{order.id} - {order.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;