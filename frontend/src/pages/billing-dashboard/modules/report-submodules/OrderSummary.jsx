import { useState } from "react";
import {
  Button,
  Layout,
  Table,
  theme,
  Radio,
  Form,
  Input,
  Tag,
  Space,
  Checkbox,
  Dropdown,
  Menu,
  Flex,
  Divider
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  DownOutlined,
  SmileOutlined,
  PrinterOutlined,
} from "@ant-design/icons";

import Logo from "../../sidebarcomponents/Logo";
import MenuList from "../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../sidebarcomponents/ToggleThemeButton";
import LogoMini from "../../sidebarcomponents/Logo Mini";

const { Header, Content, Footer, Sider } = Layout;

function OrderSummery() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const [value, setValue] = useState(1);

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

  //Table

  const dataSource = [
    {
      key: "1",
      orderStatus:'Saved',
      myAmount: 0.00,
      total:0,
      orders:0
    },
    {
      key: "2",
      orderStatus:'Printed',
      myAmount: 35.00,
      total:35,
      orders:1
    },
    {
      key: "3",
      orderStatus:'Canceled',
      myAmount: 0.00,
      total:0,
      orders:0
    },
    {
      key: "4",
      orderStatus:'Complimentary',
      myAmount: 0.00,
      total:0,
      orders:0
    },
    {
      key: "5",
      orderStatus:'Sales Return',
      myAmount: 0.00,
      total:0,
      orders:0
    },
    {
      key: "6",
      orderStatus:'Total',
      myAmount: 35.00,
      total:35,
      orders:1,
    },
  ]

  const columns = [
    {
      title: "Order Status",
      dataIndex: "orderStatus",
      key: "orderStatus",
    },
    {
      title: "My Amount",
      dataIndex: "myAmount",
      key: "myAmount",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Orders",
      dataIndex: "orders",
      key: "orders",
    },
  ];


  //Table

  const dataSource1 = [
    {
      key: "1",
      paymentType:'Cash',
      total:0,
    },
    {
      key: "2",
      paymentType:'Card',
      total:35
    },
    {
      key: "3",
      paymentType:'Due Payment',
      total:0,
    },
    {
      key: "4",
      paymentType:'Others[UPI]',
      total:35,
    },
  ]

  const columns1 = [
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
  ];

  // const dataSource = [
  //   {
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //   },
  // ];

  //dropdown

  const menu = (
    <Menu>
      <Menu.Item key="1">UPI</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );
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
            <Flex align="center">
            <Button
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
            <h3>Order Summery</h3>
            </Flex>
             
          </Header>
          <Layout 
          style={{
            margin: "64px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 64px)",
          }}>
            <Flex gap="middle" justify="space-between" style={{margin:'1rem'}}>
              <Flex gap='middle'>
                  <Button icon={<SearchOutlined />} className='green-hover'>Search</Button>
          
                  <Button icon={<PrinterOutlined />} className='green-hover'>Print Configuration</Button>
              </Flex>
              <Flex gap='middle'>
                  <Button className='green-hover'>Yesterday Orders</Button>
          
                  <Button className='green-hover'>Today Orders</Button>
              </Flex>

            </Flex>

            {/* {Body} */}

            <Divider/>

            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px'}}>

            <Flex gap='middle' justify="flex-end" style={{ padding:'1rem',paddingBottom:'0' }}>
                  <Button className='green-hover'>Export Excell</Button>
          
                  <Button className='green-hover'>Print</Button>
              </Flex>

              <Divider/>

              <div style={{backgroundColor:'#B5C0D0', padding:'5px'}}>
                <b>Order Summery Report - </b>
                12-07-2024

              </div>
              <h5 style={{ padding:'5px'}}>Order Status</h5>

              <Table
                      // dataSource={dataSource}
                      pagination={false}
                      dataSource={dataSource}
                      columns={columns}
                    />

              <h6 style={{ padding:'5px'}}>Sucess Orders (1)</h6>

              <Table
                      // dataSource={dataSource}
                      pagination={false}
                      dataSource={dataSource1}
                      columns={columns1}
                    />


            </Layout>
            
      
          </Layout>

          <Footer style={{ textAlign: "center" }}>
              Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
            </Footer>
          
        </Layout>

        

        
      </Layout>
    </>
  );
}

export default OrderSummery;
