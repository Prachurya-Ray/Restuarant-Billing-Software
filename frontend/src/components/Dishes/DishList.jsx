import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DishList = ({ isAdmin, addToOrder }) => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/dishes');
        setDishes(response.data);
      } catch (error) {
        console.error('There was an error fetching the dishes!', error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <div>
      <h1>Dish List</h1>
      <ul>
        {dishes.map((dish) => (
          <li key={dish._id}>
            {dish.name} - ${dish.price}
            {!isAdmin && (
              <button onClick={() => addToOrder(dish)}>Add to Order</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DishList;

