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
  Divider,
  Card,
  Avatar,
  Select,
  Flex,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import LogoMini from "../../../sidebarcomponents/Logo Mini";

import Logo from "../../../sidebarcomponents/Logo";
import MenuList from "../../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../../sidebarcomponents/ToggleThemeButton";
import stockImg from "../../../../../assets/stock.png"
import reportImg from "../../../../../assets/report.png"
import calculatorImg from "../../../../../assets/calculator-color.png"

const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

function BillingScreen() {
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
            <Space align="center" style={{ width: "100%", justifyContent: "space-between" }}>
              <Button
                className="toggle"
                onClick={() => setCollapsed(!collapsed)}
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              />
              <h3>Billing Screen Configuration</h3>
              <Space style={{ gap: "1rem" }} align="center">
                <Button icon={<ArrowLeftOutlined />}>Back</Button>
              </Space>
            </Space>
          </Header>
          <Layout
          style={{ 
            margin: "64px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 64px)",
          }}>
          <Layout style={{ margin: "2rem", border: "solid 1px grey", borderRadius: "10px", padding:'1rem' }}>

          
            <Flex gap='middle' className="p-3">
              <Link to='deliverydist'>
              <Card
                style={{
                width: 300,
                }}
            >
                <p>Distance Management</p>
            </Card>
              </Link>
            

            <Link to='billscconfig'>
            <Card
                style={{
                width: 300,
                }}
            >
                <p>Billing Screen Configuration</p>
            </Card>
            </Link>

            
           
            

            </Flex>

            

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

export default BillingScreen;
