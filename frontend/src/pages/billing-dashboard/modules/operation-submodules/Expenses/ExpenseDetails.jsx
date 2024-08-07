import { useState } from "react";
import {
  Button,
  Layout,
  Table,
  theme,
  Form,
  Input,
  Flex,
  Modal,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ArrowLeftOutlined,
  EditOutlined,
} from "@ant-design/icons";
import LogoMini from "../../../sidebarcomponents/Logo Mini";

import Logo from "../../../sidebarcomponents/Logo";
import MenuList from "../../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../../sidebarcomponents/ToggleThemeButton";
const { Header, Footer, Sider } = Layout;

function ExpenseDetails() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      reason: 'Milk',
      amt: 500,
      explain: '60pkts',
      emp: 'biller',
      paid: "Cash"
    },

  ]);
  const [form] = Form.useForm();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const showEditModal = (item) => {
    setEditItem(item);
    form.setFieldsValue(item);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        const newData = dataSource.map(item =>
          item.key === editItem.key ? { ...item, ...values } : item
        );
        setDataSource(newData);
        setIsModalVisible(false);
        setEditItem(null);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditItem(null);
  };

  const columns = [
    {
      title: "Reason",
      dataIndex: "reason",
    },
    {
      title: "Amount",
      dataIndex: "amt",
    },
    {
      title: "Explanation",
      dataIndex: "explain",
    },
    {
      title: "Employee",
      dataIndex: "emp",
    },
    {
      title: "Paid From",
      dataIndex: "paid",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Flex style={{ gap: '1rem' }}>
          <Button type="link" onClick={() => showEditModal(record)}>
            <EditOutlined />
          </Button>
        </Flex>
      ),
    },
  ];

  return (
    <>
      <Layout>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? "dark" : "light"}
          className="sidebar"
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
        {collapsed?<LogoMini />:<Logo/>}
          <MenuList darkTheme={darkTheme} />
          {/* <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} /> */}
        </Sider>

        <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
          
          <Header style={{background: colorBgContainer,
            padding: 0,
            position: "fixed",
            zIndex: 100,
            width: `calc(100% - ${collapsed ? 80 : 200}px)`,
            left: collapsed ? 80 : 200, }} >
            <Flex align="center" justify="space-between">
              <Button
                className="toggle"
                onClick={() => setCollapsed(!collapsed)}
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              />
              <h3>Expense Details</h3>
              <Flex style={{ gap: '1rem' }} align="center">
                <Button icon={<ArrowLeftOutlined />}>Back</Button>
              </Flex>
            </Flex>
          </Header>

          <Layout
          style={{ 
            margin: "64px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 64px)",
          }}>
            <Layout style={{ margin: '2rem', border: 'solid 1px grey', borderRadius: '10px' }}>
              <h5 className="m-2">Date: 15-05-2024</h5>
              <Table
                pagination={false}
                dataSource={dataSource}
                columns={columns}
              />
              <h5 style={{padding:'1rem'}}>
                <span style={{paddingRight:'5rem'}}>Total</span>
                <span>500</span>
              </h5>
            </Layout>
          </Layout>

          <Footer style={{ textAlign: "center" }}>
            Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
          </Footer>
        </Layout>

        <Modal
          title="Edit Expense"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            form={form}
            layout="vertical"
            name="edit_form"
            initialValues={editItem}
          >
            <Form.Item
              name="reason"
              label="Reason"
              rules={[{ required: true, message: 'Please input the reason!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="amt"
              label="Amount"
              rules={[{ required: true, message: 'Please input the amount!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="explain"
              label="Explanation"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="emp"
              label="Employee"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="paid"
              label="Paid From"
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </Layout>
    </>
  );
}

export default ExpenseDetails;
