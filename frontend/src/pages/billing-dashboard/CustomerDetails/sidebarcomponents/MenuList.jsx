import React from "react";
import { Menu } from "antd";
import { HomeOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { MdOutlineInventory } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
const MenuList = ({ darkTheme }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />} className="noUnderline">
        <Link to="/" className="noUnderline">
          {" "}
          Home
        </Link>
      </Menu.Item>
      {/* Billing */}
      <Menu.Item key="inventory" icon={<MdOutlineInventory />}>
        <Link to="/inventory" className="noUnderline">
           Inventory
        </Link>
      </Menu.Item>
      <Menu.Item key="menuitem" icon={<MdOutlineRestaurantMenu />}>
        <Link to="/menuitem" className="noUnderline">
           Add Menu Item
        </Link>
      </Menu.Item>
      <Menu.Item key="customer-details" icon={<FaUserFriends />}>
        <Link to="/customerdata" className="noUnderline">
        Customer Details
        </Link>
      </Menu.Item>
      <Menu.SubMenu
        key="billingDashboard"
        icon={<UnorderedListOutlined />}
        title="Billing Dashboard"
      >
        <Menu.Item key="allOrders" icon={<CiViewList />}>
          <Link to="/mainbillingdashboard" className="noUnderline">
            
            Billing
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="logout" icon={<IoMdLogOut />}>
        <Link to="/" onClick={handleLogout} className="noUnderline">
           Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
