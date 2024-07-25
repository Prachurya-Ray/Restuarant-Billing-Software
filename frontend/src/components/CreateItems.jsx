import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateItems = () => {
  const formField = {
    width: "300px",
    padding: "10px",
    margin: "auto",
    borderRadius: "10px",
  };

  const [item, setItem] = useState({
    item_name: "",
    item_description: "",
    item_price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/item/items",
        item
      );
      console.log(response.data);
      setItem({
        item_name: "",
        item_description: "",
        item_price: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Add Items</h1>
      <div>
        <fieldset style={formField}>
          <legend>Item Details</legend>
          <form onSubmit={handleFormSubmit}>
            <tr>
              <td>Item Name</td>
              <td>
                <input
                  type="text"
                  name="item_name"
                  value={item.item_name}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Item Description</td>
              <td>
                <input
                  type="text"
                  name="item_description"
                  value={item.item_description}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Item Price</td>
              <td>
                <input
                  type="text"
                  name="item_price"
                  value={item.item_price}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="center">
                <input
                  type="submit"
                  value="Add Item"
                  name="AddItem"
                  onClick={handleFormSubmit}
                />
                <Link to={"/home"} className="link-button" type="submit">
                  Show Items
                </Link>
              </td>
            </tr>
          </form>
        </fieldset>
      </div>
    </> 
  );
};

export default CreateItems;
