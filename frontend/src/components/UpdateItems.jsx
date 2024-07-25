
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateItems = () => {


   // auto refesh 

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     window.location.reload();
  //   }, 1000); // 10000 milliseconds = 10 seconds

  //   return () => clearInterval(interval);
  // }, []);

  
  const navigate = useNavigate();
  const { bid } = useParams();

  const formField = {
    width: "300px",
    padding: "10px",
    margin: "auto",
    borderRadius: "10px",
  };

  const [itemData, setItemData] = useState({
    item_name: "",
    item_description: "",
    item_price: "",
  });

  // Fetch item data on component mount
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/item/itemview/${bid}`)
      .then((response) => {
        const { item_name, item_description, item_price } = response.data.item;
        setItemData({
          item_name,
          item_description,
          item_price,
        });
      })
      .catch((error) => {
        console.log("Error fetching item:", error);
      });
  }, [bid]); // Include bid in dependencies to fetch data when it changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemData({
      ...itemData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/api/item/itemupdate/${bid}`,
        itemData
      );
      console.log(response.data);
      setItemData({
        item_name: "",
        item_description: "",
        item_price: "",
      });
      navigate("/home");
    } catch (error) {
      console.log("Error updating item:", error);
    }
  };

  return (
    <>
      <h1>Update Item</h1>

      <div>
        <fieldset style={formField}>
          <legend>Update Item Details</legend>
          <form onSubmit={handleFormSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>Item Name</td>
                  <td>
                    <input
                      type="text"
                      name="item_name"
                      value={itemData.item_name}
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
                      value={itemData.item_description}
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
                      value={itemData.item_price}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} align="center">
                    <input
                      type="submit"
                      value="Update Item"
                      name="UpdateItem"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </fieldset>
      </div>
    </>
  );
};

export default UpdateItems;
