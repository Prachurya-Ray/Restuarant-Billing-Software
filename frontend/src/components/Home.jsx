
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../index'; // Import your CSS file

const Home = () => {
  const [itemData, setItemData] = useState([]);
  
  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/item/itemview");
      const data = response.data;
      console.log('Fetched data:', data); // Debugging log
      if (Array.isArray(data.item)) {
        setItemData(data.item);
      } else {
        console.error('Fetched data is not an array:', data);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/item/itemdelete/${id}`);
      getItem(); // Refresh items after deletion
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <h1>Click Uptel Billing Software</h1>
      <div>
        <h2>All Items</h2>
        <table width={"600px"} border={1}>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Description</th>
              <th>Item Price</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {itemData.map((item) => (
              <tr key={item._id}>
                <td>{item.item_name}</td>
                <td>{item.item_description}</td>
                <td>{item.item_price}</td>
                <td>
                  <a href={`updateitems/${item._id}`}>Edit</a>
                </td>
                <td>
                  <button onClick={() => deleteItem(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={'/'} className="link-button" type='submit'>Add Items</Link>
      </div>
    
    </>
  );
};

export default Home;
