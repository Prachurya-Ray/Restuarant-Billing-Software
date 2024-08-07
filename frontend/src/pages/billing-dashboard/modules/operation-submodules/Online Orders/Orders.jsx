import { useState } from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaPrint } from "react-icons/fa";
import { Button, Layout, Avatar, Flex } from "antd";
import { Link } from "react-router-dom";

import Current from "./CurrentOrders/CurrentOrders"
import OnlineOrder from "./OnlineOrders/OnlineOrder"

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { theme } from "antd"; // Ensure this path matches your project structure
import { Card, Col, Row } from "antd";
import Logo from "../../../sidebarcomponents/Logo";
import MenuList from "../../../sidebarcomponents/MenuList";
// import ToggleThemeButton from "../sidebarcomponents/ToggleThemeButton";
import LogoMini from "../../../sidebarcomponents/Logo Mini";

const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  
  const [currentOrder, setCurrentOrder] = useState(false)
  const [onlineOrder, setonlineOrder] = useState(true)
  const [advanceOrder, setadvanceOrder] = useState(false)

  const togglecurrentOrder = ()=>{
      setCurrentOrder(!currentOrder)
      setonlineOrder(false)
      setadvanceOrder(false)
  }

  const toggleonlineOrder = ()=>{
      setCurrentOrder(false)
      setonlineOrder(!onlineOrder)
      setadvanceOrder(false)
  }

  const toggleadvanceOrder = ()=>{
      setCurrentOrder(false)
      setonlineOrder(false)
      setadvanceOrder(!advanceOrder)
  }


  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
            <h3>Orders</h3>
            <Button  icon={<ArrowLeftOutlined />}>Back</Button>
            </Flex>
          </Header>

          <Layout
          style={{ 
            margin: "64px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 64px)",
          }}>
           
           <Content>
                <div>
                    <div className="d-flex justify-content-between align-items-center p-1" style={{backgroundColor:'#c7c8cc'}}>
                        <div>
                            <span className="pe-3 cursor-pointer" onClick={togglecurrentOrder}>Current Orders</span>
                            <span className="pe-3 cursor-pointer" onClick={toggleonlineOrder}>Online Orders</span>
                            <span className="cursor-pointer" onClick={toggleadvanceOrder}>Advance Orders</span>
                        </div>
                        <Button  icon={<ArrowLeftOutlined />}>Back</Button>
                    </div>
                    {
                        currentOrder && <Current/>
                    }
                    {
                        onlineOrder && <OnlineOrder/>
                    }
                    {
                        advanceOrder && <h1>Advance Orders</h1>
                    }
                </div>



           </Content>

            <Footer style={{ textAlign: "center" }}>
              Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default App;































