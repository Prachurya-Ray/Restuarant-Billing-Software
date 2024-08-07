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
  Divider,
  DatePicker
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  DownOutlined,
  SmileOutlined,
  PrinterOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

import Logo from "../../sidebarcomponents/Logo";
import MenuList from "../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../sidebarcomponents/ToggleThemeButton";
import LogoMini from "../../sidebarcomponents/Logo Mini";

const { Header, Content, Footer, Sider } = Layout;

function SalesSummery() {
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
      ordNo:'Total',
      date:'-',
      payTp:'-',
      ordTp:'-',
      areaTp:'-',
      myAmt:35,
      tDiscount:0,
      dChr:0,
      cChr:0,
      sChr:0,
      aChr:0,
      wOff:0,
      total:35,
      assigned:'-',
      biller:'-',
      reason:'-',
      tip:0,
      tTip:35
    },
    
    {
      key: "2",
      ordNo:6678,
      date:'15-05-2024',
      payTp:'Other [UPI]',
      ordTp:'Take Away',
      areaTp:'-',
      myAmt:35,
      tDiscount:0,
      dChr:0,
      cChr:0,
      sChr:0,
      aChr:'-',
      wOff:0,
      total:35,
      assigned:'-',
      biller:'Biller',
      reason:'-',
      tip:0,
      tTip:35
    },
    {
      key: "3",
      ordNo:'Total',
      date:'-',
      payTp:'-',
      ordTp:'-',
      areaTp:'-',
      myAmt:35,
      tDiscount:0,
      dChr:0,
      cChr:0,
      sChr:0,
      aChr:0,
      wOff:0,
      total:35,
      assigned:'-',
      biller:'-',
      reason:'-',
      tip:0,
      tTip:35
    },
  ]

  const columns = [
    {
      title: "Order Number",
      dataIndex: "ordNo",
    },
    {
        title: "Date",
        dataIndex: "date",
      },
      {
        title: "Payment Type",
        dataIndex: "payTp",
      },
      {
        title: "Order Type",
        dataIndex: "ordTp",
      },
      {
        title: "Area Type",
        dataIndex: "areaTp",
      },
      {
        title: "My Amount",
        dataIndex: "myAmt",
      },
      {
        title: "Discount",
        dataIndex: "tDiscount",
      },
      {
        title: "Delivery Charge",
        dataIndex: "dChr",
      },
      {
        title: "Container Charge",
        dataIndex: "cChr",
      },
      {
        title: "Service Charge",
        dataIndex: "sChr",
      },
      {
        title: "Additional Charge",
        dataIndex: "aChr",
      },
      {
        title: "Waived Off",
        dataIndex: "wOff",
      },
      {
        title: "Total",
        dataIndex: "total",
      },
      {
        title: "Assigned to",
        dataIndex: "assigned",
      },
      {
        title: "Biller Name",
        dataIndex: "biller",
      },
      {
        title: "Reason",
        dataIndex: "reason",
      },
      {
        title: "Tip",
        dataIndex: "tip",
      },
      {
        title: "Total + Tip",
        dataIndex: "tTip",
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
            <h3>Sales Summary</h3>
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
                  <Button icon={<SearchOutlined />} className="green-hover">Search</Button>
          
                  <Button icon={<PrinterOutlined />} className="green-hover">Print Configuration</Button>
              </Flex>

              <Flex gap='middle'>
                  <Button className="green-hover">Yesterday Sales</Button>
          
                  <Button className="green-hover">Today Sales</Button>
              </Flex>

            </Flex>

            {/* {Body} */}

            <Divider/>

            
            
            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px'}}>


              <Flex justify="space-between" style={{margin:'1rem'}}>
                
              <Flex style={{gap:'1rem'}}>
                  
                <Button type="primary"  className="green-button">Column</Button>
                  <Button  className='green-hover'>Save preference</Button>
                  </Flex>

                
                  <Flex style={{gap:'1rem'}}>
                  
                  <Button className='green-hover'>Export Excel</Button>
                  <Button className='green-hover'>Print</Button>
                  </Flex>

              </Flex>


              <Divider/>
              <h6 style={{padding:'1rem'}}>
              Sales Summary - 25-05-2024</h6>
              <Table
                      // dataSource={dataSource}
                      scroll={{
                        x: 1300,
                      }}
                      pagination={false}
                      dataSource={dataSource}
                      columns={columns}
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

export default SalesSummery;
