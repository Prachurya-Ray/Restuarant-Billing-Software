import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Layout,
  Table,
  theme,
  Form,
  Dropdown as AntDropdown,
  Select,
  Card,
  Row, 
  Col, 
  Statistic 
} from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

import Logo from "./sidebarcomponents/Logo";
import LogoMini from "./sidebarcomponents/Logo Mini";
import MenuList from "./sidebarcomponents/MenuList";

const { Header, Content, Footer, Sider } = Layout;

function CustomerDetails() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  
  

  const [form] = Form.useForm();
  const { Option } = Select;
  

const { Column } = Table;

  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching");
        const response = await axios.get('http://localhost:8080/api/billingpage/billingview');
        console.log("fetched", response.data);

        const rawData = response.data.billing;

        // Ensure rawData is an array
        if (Array.isArray(rawData)) {
          const indexedData = rawData.map((record, index) => ({
            ...record,
            index: index + 1, // start index from 1
          }));

          setData(indexedData);

          // Calculate the total amount
          const total = rawData.reduce((sum, record) => sum + parseFloat(record.grandTotal || 0), 0);
          setTotalAmount(total);
        } else {
          console.error('Fetched data is not an array:', rawData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();




  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("Dropdown toggled:", !isOpen);
  };



  //edit button table
  const onEdit = (menu) => {
    setEditingItem(menu);
    form.setFieldsValue(menu);
    setIsModalOpen(true);
  };


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
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            zIndex: 100,
          }}
        >
                  {collapsed?<LogoMini />:<Logo/>}
          <MenuList darkTheme={darkTheme} />
        </Sider>

        <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
          <Header style={{background: colorBgContainer,
            padding: 0,
            position: "fixed",
            zIndex: 100,
            width: `calc(100% - ${collapsed ? 80 : 200}px)`,
            left: collapsed ? 80 : 200, }} >
            <Button
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>

          <Layout>
            <Content
          style={{
            margin: "64px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 64px)",
          }}>
             {/* Code Here */}
             <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Total Customers" value={data.length} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Amount" value={totalAmount} precision={2} prefix="₹" />
        </Col>
      </Row>

      <Card title="Customer Billing Records" style={{ marginTop: '20px' }}>
        <Table dataSource={data} rowKey="_id">
          <Column title="Index" dataIndex="index" key="index" render={text => text || 'N/A'} />
          <Column 
            title="Date" 
            dataIndex="date" 
            key="date" 
            render={(text) => {
              if (!text) return 'N/A';
              const date = new Date(text);
              return date.toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
            }} 
          />

          <Column title="Customer Name" dataIndex="customerName" key="customerName" render={text => text || 'N/A'} />
          <Column title="Mobile Number" dataIndex="mobileNumber" key="mobileNumber" render={text => text !== null ? text : 'N/A'} />
          <Column title="Address" dataIndex="address" key="address" render={text => text || 'N/A'} />
          <Column 
            title="Items" 
            key="items" 
            render={(text, record) => (
              <ul>
                {record.items.map((item, index) => (
                  <li key={index}>
                    {item.menuItemName}: ₹{parseFloat(item.menuItemAmount || 0).toFixed(2)}
                  </li>
                ))}
              </ul>
            )}
          />
          <Column title="Grand Total" dataIndex="grandTotal" key="grandTotal" render={text => `₹${parseFloat(text || 0).toFixed(2)}`} />
        </Table>
      </Card>
    </div>

            </Content>
          </Layout>
        </Layout>
      </Layout>
     
    </>
  );
}

export default CustomerDetails;



