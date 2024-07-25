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
  EditOutlined,
  EyeOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";

import Logo from "../../../../sidebarcomponents/Logo";
import MenuList from "../../../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../../../sidebarcomponents/ToggleThemeButton";
const { Header, Content, Footer, Sider } = Layout;

function OpeningClosing() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  

  const [value, setValue] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteChange = (e) => {
    setIsFavorite(e.target.checked);
  };

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
    <h3>Current Stock</h3>
    <Flex style={{gap:'1rem'}} align="center">
        <Button icon={<ArrowLeftOutlined />}>Back</Button>
    </Flex>
    
</Flex>

             
          </Header>
          <Layout>
            
            {/* {Body} */}
            <Flex justify="space-between" className="m-3">
                <Flex gap='1rem'>
                <Button><SearchOutlined/>Search</Button>
                <Button>Configure Column</Button>
                </Flex>
                <Flex gap='1rem'>
                    <Button><PrinterOutlined/>Print</Button>
                    <Button>Export Excel</Button>
                </Flex>
            </Flex>


            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px'}}>


            {/* <Table bordered> */}
            <section style={{}} className="m-5">
                                        <thead className=" bg-light">
                                    <tr>
                                    <th rowSpan="2" className="p-3 border border-dark">Raw Material</th>
                                    <th colSpan="2" className="p-3 border border-dark">15 May 2024</th>
                                    </tr>
                                    <tr>
                                    <th className="p-3 border border-dark">Opening</th>
                                    <th className="p-3 border border-dark">Closing</th>
                                    </tr>
                                </thead>
                                <tbody className=" bg-light">
                                    <tr>
                                    <td className="p-3 border border-dark">Milk</td>
                                    <td className="p-3 border border-dark">12Ltr</td>
                                    <td className="p-3 border border-dark">12Ltr</td>
                                    </tr>
                                </tbody>
                    {/* </Table> */}
                    </section>


                    <h6 className="text-danger">Total Average Purchase Price : 0</h6>


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

export default OpeningClosing;
