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

function TipSummery() {
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
      emp:'Other',
      amt:0
    },
  ]

  const columns = [
    {
      title: "Employee",
      dataIndex: "emp",
      key: "emp",
    },
    {
      title: "Amount",
      dataIndex: "amt",
      key: "amt",
    },
  ];



  
  const dataSource1 = [
    {
      key: "1",
      tbl:'Delivery/Take Away',
      amt:0
    },
  ]

  const columns1 = [
    {
      title: "Table",
      dataIndex: "tbl",
      key: "tbl",
    },
    {
      title: "Amount",
      dataIndex: "amt",
      key: "amt",
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
            <h3>Tip Summary</h3>
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
              Tip Summary - 25-05-2024</h6>
              <h6 style={{padding:'1rem'}}>
              Total Tip - Rs. 0</h6>
              <h6 style={{padding:'1rem'}}>
              Employee wise Tip</h6>
              <Table
                      // dataSource={dataSource}
                      pagination={false}
                      dataSource={dataSource}
                      columns={columns}
                    />
                    
              <h6 style={{padding:'1rem'}}>
              Table wise Tip</h6>
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

export default TipSummery;
