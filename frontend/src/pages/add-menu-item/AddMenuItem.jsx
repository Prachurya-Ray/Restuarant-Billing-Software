
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

const AddMenuItems = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [menuItemData, setMenuItemData] = useState([]);
  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();
  const [editMenuItem, setEditMenuItem] = useState(null);
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
    getMenuItem();
  }, []);

  const getMenuItem = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/menu/menuview"
      );
      const data = response.data;
      console.log("Fetched data:", data);
      if (Array.isArray(data.menu)) {
        setMenuItemData(data.menu);
      } else {
        console.error("Fetched data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching Menu items:", error);
    }
  };

  const deleteMenuItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/menu/menudelete/${id}`);
      getMenuItem();
    } catch (error) {
      console.error("Error deleting Menu item:", error);
    }
  };

  const handleFormSubmit = async (values) => {
    const transformedValues = {
      ...values,
      menuItemPrices: {
        menuItemHalfPrice: values.menuItemPrices.menuItemHalfPrice,
        menuItemFullPrice: values.menuItemPrices.menuItemFullPrice,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/menu/menuitems",
        transformedValues
      );
      console.log("Menu Item added:", response.data);
      addForm.resetFields();
      getMenuItem();
    } catch (error) {
      console.error("Error adding Menu item:", error);
    }
  };

  const handleFormSubmitUpdate = async (values) => {
    const transformedValues = {
      ...values,
      menuItemPrices: {
        menuItemHalfPrice: values.menuItemPrices.menuItemHalfPrice,
        menuItemFullPrice: values.menuItemPrices.menuItemFullPrice,
      },
    };

    try {
      const response = await axios.put(
        `http://localhost:8080/api/menu/menuupdate/${editMenuItem._id}`,
        transformedValues
      );
      console.log("Menu Item updated:", response.data);
      closeEditModal();
      getMenuItem();
    } catch (error) {
      console.error("Error updating Menu item:", error);
    }
  };

  const columns = [
    {
      title: "Menu Item Name",
      dataIndex: "menuItemName",
      key: "menuItemName",
    },
    {
      title: "Menu Item Description",
      dataIndex: "menuItemDescription",
      key: "menuItemDescription",
    },
    {
      title: "Menu Item Half Price",
      dataIndex: ["menuItemPrices", "menuItemHalfPrice"],
      key: "menuItemHalfPrice",
    },
    {
      title: "Menu Item Full Price",
      dataIndex: ["menuItemPrices", "menuItemFullPrice"],
      key: "menuItemFullPrice",
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

  const showEditModal = (menuItem) => {
    setEditMenuItem(menuItem);
    setIsModalVisible(true);
    editForm.setFieldsValue(menuItem);
  };

  const closeEditModal = () => {
    setIsModalVisible(false);
    setEditMenuItem(null);
    editForm.resetFields();
  };

  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: "Are you sure delete this Menu item?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteMenuItem(id);
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
              <h1>Add Menu Items</h1>
              <Form
                form={addForm}
                layout="vertical"
                onFinish={handleFormSubmit}
                style={{ maxWidth: 400 }}
              >
                <Form.Item
                  name="menuItemName"
                  label="Menu Item Name"
                  rules={[
                    { required: true, message: "Please enter Menu item name!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="menuItemDescription"
                  label="Menu Item Description"
                  rules={[{ message: "Please enter Menu item description!" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["menuItemPrices", "menuItemHalfPrice"]}
                  label="Menu Item Half Price"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Menu item half price!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["menuItemPrices", "menuItemFullPrice"]}
                  label="Menu Item Full Price"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Menu item full price!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Add Menu Items
                  </Button>
                </Form.Item>
              </Form>
            </div>

            <div>
              <h2>All Menu Items</h2>
              <Table columns={columns} dataSource={menuItemData} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
        </Footer>
      </Layout>

      {/* Edit Item Modal */}
      <Modal
        title="Update Menu Item"
        visible={isModalVisible}
        onCancel={closeEditModal}
        footer={null}
      >
        {editMenuItem && (
          <Form
            form={editForm}
            layout="vertical"
            onFinish={handleFormSubmitUpdate}
          >
            <Form.Item
              name="menuItemName"
              label="Menu Item Name"
              rules={[
                { required: true, message: "Please enter Menu item name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="menuItemDescription"
              label="Menu Item Description"
              rules={[{ message: "Please enter Menu item description!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["menuItemPrices", "menuItemHalfPrice"]}
              label="Menu Item Half Price"
              rules={[
                {
                  required: true,
                  message: "Please enter Menu item half price!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["menuItemPrices", "menuItemFullPrice"]}
              label="Menu Item Full Price"
              rules={[
                {
                  required: true,
                  message: "Please enter Menu item full price!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update Menu Item
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </Layout>
  );
};

export default AddMenuItems;


