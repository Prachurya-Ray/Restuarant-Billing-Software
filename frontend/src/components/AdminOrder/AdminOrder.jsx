import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DishForm from '../Dishes/DishForm';
import DishList from '../Dishes/DishList';

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/orders');
        setOrders(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('There was an error fetching the orders!', error);
      }
    };

    fetchOrders();
  }, []);

  const deleteOrder = (orderId) => {
    try {
      // const response = await axios.delete(`http://localhost:8080/api/orders/${orderId}`);
      // console.log(response.data); // Assuming backend returns success message
      // Update state to reflect the deleted order
      setOrders(orders?.data?.filter(order => order._id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <div>
      <DishForm />
      <DishList isAdmin={true} />
      <h2>Orders</h2>
      <ul>
        {orders?.data?.map((order, index) => (
          <li key={index}>
            <h3>Order #{index + 1}</h3>
            <ul>

              
              <li>
                {order?.dishes[0]?.name} - ${order?.dishes[0]?.price} x {order?.dishes[0]?.quantity}
              </li>
            </ul>
            {order.total !== undefined && <strong>Total: ${order.total}</strong>}
            <button onClick={() => deleteOrder(order?._id)}>Delete Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminOrder;
