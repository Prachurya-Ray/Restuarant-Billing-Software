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
import LogoMini from "../../sidebarcomponents/Logo Mini";
import MenuList from "../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../sidebarcomponents/ToggleThemeButton";

const { Header, Content, Footer, Sider } = Layout;

function EmpSummery() {
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
      billUser:'biller',
      pType:'',
      total:1,
    },
    {
        key: "2",
        billUser:'Order Punched :1',
        pType:'Cash',
        total:0,
      },
      {
        key: "3",
        billUser:'Order Success: 1',
        pType:'Card',
        total:0,
      },
      {
        key: "4",
        billUser:'Order Cancelled: 0',
        pType:'Due Payment',
        total:0,
      },
      {
        key: "5",
        billUser:'Orders Discounted: 0',
        pType:'Other',
        total:35,
      },
      {
        key: "6",
        billUser:'Orders Modified: 0',
        pType:'Wallet',
        total:0,
      },
      {
        key: "7",
        billUser:'Orders Reprinted: 0',
        pType:'Online Paid',
        total:0,
      },
      {
        key: "8",
        billUser:'',
        pType:'Online COD',
        total:0,
      },
      {
        key: "9",
        billUser:'Sub Total',
        pType:'',
        total:35,
      },
  ]

  const columns = [
    {
      title: "Billing User",
      dataIndex: "billUser",
    },
    {
        title: "Payment Type",
        dataIndex: "pType",
      },
      {
        title: "Total",
        dataIndex: "total",
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
            <h3>Employee Report</h3>
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


            </Flex>

            {/* {Body} */}

            <Divider/>

            
            
            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px'}}>


              <Flex justify="flex-end" style={{margin:'1rem'}}>
                

                
                  <Flex style={{gap:'1rem'}}>
                  
                  <Button className='green-hover'>Export Excel</Button>
                  <Button className='green-hover'>Print</Button>
                  </Flex>

              </Flex>


              <Divider/>
              <h6 style={{padding:'1rem'}}>
              Employee Report - 25-05-2024</h6>
              <h6 style={{padding:'1rem'}}>
              Biller Report - 25-05-2024</h6>
              <Table
                      // dataSource={dataSource}
                      
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

export default EmpSummery;
