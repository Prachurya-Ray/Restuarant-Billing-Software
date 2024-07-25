import React from "react";
import { Menu } from "antd";
import { HomeOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { MdOutlineInventory } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
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
      <Menu.Item key="inventory">
        <Link to="/inventory" className="noUnderline">
          <MdOutlineInventory /> Inventory
        </Link>
      </Menu.Item>
      <Menu.Item key="menuitem">
        <Link to="/menuitem" className="noUnderline">
          <MdOutlineRestaurantMenu /> Add Menu Item
        </Link>
      </Menu.Item>
      <Menu.SubMenu
        key="billingDashboard"
        icon={<UnorderedListOutlined />}
        title="Billing Dashboard"
      >
        <Menu.Item key="allOrders">
          <Link to="/mainbillingdashboard" className="noUnderline">
            <CiViewList />
            Billing
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="logout">
        <Link to="/" onClick={handleLogout} className="noUnderline">
          <IoMdLogOut /> Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
