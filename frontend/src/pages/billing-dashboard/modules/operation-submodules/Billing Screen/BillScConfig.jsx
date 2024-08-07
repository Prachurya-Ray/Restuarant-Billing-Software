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
const {Option} = Select;

function BillScConfig() {
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
              <h3>Prefered Configuration</h3>
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
          <Layout style={{ margin: "2rem", border: "solid 1px grey", borderRadius: "10px", padding:'1rem', gap:'1rem' }}>

          
          <Flex>
            <Layout style={{gap:'1rem'}}>
                <h6>Default Order Type</h6>
                <h6>Default Payment Type</h6>
                <h6>Default Table Type</h6>
                <br />
                <br />
                <br />
                <h6>Default Delivery Charge (Only for Delivery)</h6>
                <br />
                <h6>Calculate Container Charge Automatically</h6>

            </Layout>
            <Layout style={{gap:'1rem'}}>
            <Select
                    defaultValue="takeaway"
                    style={{
                        width: 170,
                    }}
                    // onChange={handleChange}
                    options={[
                        {
                        value: 'takeaway',
                        label: 'Take Away',
                        },
                        {
                        value: 'lucy',
                        label: 'Lucy',
                        },
                        {
                        value: 'Yiminghe',
                        label: 'yiminghe',
                        },
                    ]}
                    />
                <Select
                    defaultValue="other"
                    style={{
                        width: 170,
                    }}
                    // onChange={handleChange}
                    options={[
                        {
                        value: 'other',
                        label: 'Other',
                        },
                        {
                        value: 'lucy',
                        label: 'Lucy',
                        },
                        {
                        value: 'Yiminghe',
                        label: 'yiminghe',
                        },
                    ]}
                    />
                <Input/>
                <Checkbox>Display and Calculate Delivery Charge</Checkbox>
                <Input placeholder="0"/>
                <Checkbox>Display and Calculate Container Charge</Checkbox>
                <Flex>
                <Checkbox>Delivery</Checkbox>
                <Checkbox>Take Away</Checkbox>

                </Flex>


            </Layout>
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

export default BillScConfig;
