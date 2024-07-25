import { useState } from "react";
import { Link } from "react-router-dom";
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
  ArrowLeftOutlined,
} from "@ant-design/icons";

import Logo from "../../../sidebarcomponents/Logo";
import MenuList from "../../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../../sidebarcomponents/ToggleThemeButton";
const { Header, Content, Footer, Sider } = Layout;

function CashTopUp() {
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

 


  //Table

  const dataSource = [
    
  ]

  const columns = [
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
          // style={{
          //   overflow: 'auto',
          //   height: '100vh',
          //   position: 'fixed',
          //   left: 0,
          //   top: 0,
          //   bottom: 0,
          // }}
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          {/* <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} /> */}
        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
          <Flex align="center" justify="space-between">
    <Button
        className="toggle"
        onClick={() => setCollapsed(!collapsed)}
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    />
    <h3>Cash Top-Up Listing</h3>
    <Flex style={{gap:'1rem'}} align="center">
      <Link to='add'>
      <Button type="primary" danger>Add Cash Top-Up</Button></Link>
        <Button icon={<ArrowLeftOutlined />}>Back</Button>
    </Flex>
    
</Flex>

             
          </Header>
          <Layout>
            
            {/* {Body} */}


            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px'}}>


              <Table
                    //   scroll={{
                    //     x: 100,
                    //   }}
                      pagination={false}
                    //   dataSource={dataSource}
                    //   columns={columns}
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

export default CashTopUp;
