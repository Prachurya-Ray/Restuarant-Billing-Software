import React, { useEffect, useState } from "react";
import { Button, Layout, Input, Form, Table, Modal, theme } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Logo from "./sidebarcomponents/Logo";
import MenuList from "./sidebarcomponents/MenuList";
import ToggleThemeButton from "./sidebarcomponents/ToggleThemeButton";
import axios from "axios";

const { Header, Content, Footer, Sider } = Layout;

const  Inventory = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [inventoryItemData, setInventoryItemData] = useState([]);
  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();
  const [editItem, setEditItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    getInventoryItem();
  }, []);

  const getInventoryItem = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/inventory/inventoryitemsview"
      );
      const data = response.data;
      console.log("Fetched data:", data);
      if (Array.isArray(data.inventory)) {
        setInventoryItemData(data.inventory);
      } else {
        console.error("Fetched data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching inventory items:", error);
    }
  };

  const deleteInventoryItem = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/inventory/inventoryitemdelete/${id}`
      );
      getInventoryItem();
    } catch (error) {
      console.error("Error deleting inventory item:", error);
    }
  };

  const handleFormSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/inventory/inventoryitems",
        values
      );
      console.log("Inventory Item added:", response.data);
      addForm.resetFields();
      getInventoryItem();
    } catch (error) {
      console.error("Error adding inventory item:", error);
    }
  };

  const handleFormSubmitUpdate = async (values) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/inventory/inventoryitemsupdate/${editItem._id}`,
        values
      );
      console.log("Inventory Item updated:", response.data);
      closeEditModal();
      getInventoryItem(); // Refresh the item list after update
    } catch (error) {
      console.error("Error updating inventory item:", error);
    }
  };

  const columns = [
    {
      title: "Inventory Item Name",
      dataIndex: "inventoryItemName",
      key: "inventoryItemName",
    },
    {
      title: "Inventory Item Description",
      dataIndex: "inventoryItemDescription",
      key: "inventoryItemDescription",
    },
    {
      title: "Inventory Item Code",
      dataIndex: "inventoryItemCode",
      key: "inventoryItemCode",
    },
    {
      title: "Quantity",
      dataIndex: "inventoryItemQty",
      key: "inventoryItemQty",
    },
    {
      title: "Unit",
      dataIndex: "inventoryItemUnit",
      key: "inventoryItemUnit",
    },
    {
      title: "Inventory Item Price",
      dataIndex: "inventoryItemPrice",
      key: "inventoryItemPrice",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button type="link" onClick={() => showEditModal(record)}>
            <EditOutlined /> Edit
          </Button>
          <Button type="link" onClick={() => showDeleteConfirm(record._id)}>
            <DeleteOutlined /> Delete
          </Button>
        </span>
      ),
    },
  ];

  const showEditModal = (inventory) => {
    setEditItem(inventory);
    setIsModalVisible(true);
    editForm.setFieldsValue(inventory); // Initialize form with item values
  };

  const closeEditModal = () => {
    setIsModalVisible(false);
    setEditItem(null);
    editForm.resetFields();
  };

  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: "Are you sure delete this item?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteInventoryItem(id);
      },
    });
  };

  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapse}
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="sidebar"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          zIndex: 100,
        }}
      >
        <Logo />
        <MenuList darkTheme={darkTheme} />
        {/* <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} /> */}
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header
          style={{
            background: colorBgContainer,
            padding: 0,
            position: "fixed",
            zIndex: 100,
            width: `calc(100% - ${collapsed ? 80 : 200}px)`,
            left: collapsed ? 80 : 200,
          }}
        >
          <Button
            className="trigger"
            onClick={() => setCollapsed(!collapsed)}
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Header>
        <Content
          style={{
            margin: "64px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <div>
              <h1>Add Inventory Items</h1>
              <Form
                form={addForm}
                layout="vertical"
                onFinish={handleFormSubmit}
                style={{ maxWidth: 400 }}
              >
                <Form.Item
                  name="inventoryItemName"
                  label="Inventory Item Name"
                  rules={[
                    { required: true, message: "Please enter item name!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="inventoryItemDescription"
                  label=" Inventory Item Description"
                  rules={[{ message: "Please enter item description!" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="inventoryItemCode"
                  label=" Inventory Item Code"
                  rules={[{ message: "Please enter item code!" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="inventoryItemQty"
                  label=" Quantity"
                  rules={[{ message: "Please enter item description!" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="inventoryItemUnit"
                  label=" Unit"
                  rules={[{ message: "Please enter item description!" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="inventoryItemPrice"
                  label="Inventory Item Price"
                  rules={[
                    { required: true, message: "Please enter item price!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Add Inventory Item
                  </Button>
                </Form.Item>
              </Form>
            </div>

            <div>
              <h2>All Inventory Items</h2>
              <Table columns={columns} dataSource={inventoryItemData} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
        </Footer>
      </Layout>

      {/* Edit Item Modal */}
      <Modal
        title="Update Inventory Item"
        visible={isModalVisible}
        onCancel={closeEditModal}
        footer={null}
      >
        {editItem && (
          <Form
            form={editForm}
            layout="vertical"
            onFinish={handleFormSubmitUpdate}
            initialValues={editItem} // Initialize form with current item values
            style={{ maxWidth: 400 }}
          >
            <Form.Item
              name="inventoryItemName"
              label="Inventory Item Name"
              rules={[{ required: true, message: "Please enter Inventory item name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="inventoryItemDescription"
              label="Inventory Item Description"
              rules={[{ message: "Please enter inventory item description!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="inventoryItemCode"
              label="Inventory Item Code"
              rules={[{ message: "Please enter inventory item code!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="inventoryItemQty"
              label="Inventory Item Quantity"
              rules={[{ message: "Please enter inventory item quantity!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="inventoryItemUnit"
              label="Inventory Item Unit"
              rules={[{ message: "Please enter inventory item unit!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="inventoryItemPrice"
              label="Inventory Item Price"
              rules={[{ required: true, message: "Please enter inventory item price!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update Inventory Item
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </Layout>
  );
};

export default Inventory;
