import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DishList from '../Dishes/DishList';

const UserOrder = () => {
  const [order, setOrder] = useState([]);
  const [orders, setOrders] = useState([]);
  const [userOrders, setUserOrders] = useState([]);

  const deleteOrder = async (orderId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/orders/${orderId}`);
      console.log(response.data); 
      setOrders(orders.filter(order => order._id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders');
        setUserOrders(response.data);
      } catch (error) {
        console.error('There was an error fetching the orders!', error);
      }
    };

    fetchOrders();
  }, []);

  const addToOrder = (dish) => {
    setOrder([...order, { ...dish, quantity: 1 }]);
  };

  const submitOrder = async () => {
    const total = order.reduce((sum, dish) => sum + dish.price, 0);

    try {
      const response = await axios.post('http://localhost:5000/api/orders', {
        dishes: order,
        total,
      });
      alert(response.data);
      setOrder([]);

    } catch (error) {
      console.error('There was an error placing the order!', error);
    }
  };

  return (
    <div>
      <DishList isAdmin={false} addToOrder={addToOrder} />
      <h2>Your Current Order</h2>
      <ul>
        {order.map((dish, index) => (
          <li key={index}>
            {dish.name} - ${dish.price} x {dish.quantity}
          </li>
        ))}
      </ul>
      {order.length > 0 && <button onClick={submitOrder}>Submit Order</button>}

      <h2>Your Orders History</h2>
      <ul>
        {userOrders.map((order, idx) => (
          <li key={idx}>
            <h3>Order #{idx + 1}</h3>
            <ul>
              {order.dishes.map((dish, index) => (
                <li key={index}>
                  {dish.name} - ${dish.price} x {dish.quantity}
                </li>
              ))}
            </ul>
            {order.total !== undefined && <strong>Total: ${order.total}</strong>}
            <button onClick={() => deleteOrder(order._id)}>Delete Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserOrder;
