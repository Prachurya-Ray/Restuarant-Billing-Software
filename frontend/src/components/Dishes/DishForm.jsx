import React, { useState } from 'react';
import axios from 'axios';

const DishForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/dishes', formData);
      alert(response.data);
      setFormData({
        name: '',
        price: '',
      });
      console.log(response)
    } catch (error) {
      console.error('There was an error adding the dish!', error);
    }
  };

  return (
    <div>
      <h1>Add a Dish</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Dish Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Dish</button>
      </form>
    </div>
  );
};

export default DishForm;
