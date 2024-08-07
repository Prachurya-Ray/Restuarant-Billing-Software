import { useState } from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaPrint } from "react-icons/fa";
import { Button, Layout, Avatar, Flex, Divider } from "antd";
import { Link } from "react-router-dom";
import displayImg from '../../../assets/display.png'
import calculatorImg from '../../../assets/calculator.png'
import globeImg from '../../../assets/globe.png'
import printImg from '../../../assets/printing.png'
import userImg from '../../../assets/user.png'
import dineImg from '../../../assets/table-etiquette.png'
import billImg from '../../../assets/bill.png'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { theme } from "antd"; // Ensure this path matches your project structure
import { Card, Col, Row } from "antd";
import Logo from "../sidebarcomponents/Logo";
import MenuList from "../sidebarcomponents/MenuList";
import ToggleThemeButton from "../sidebarcomponents/ToggleThemeButton";
import LogoMini from "../sidebarcomponents/Logo Mini";
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

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
            left: collapsed ? 80 : 200, }}>
            <Button
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>

          <Layout>
            <Content style={{
            margin: "64px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 64px)",
          }}>
              <div className="">
                <div className="setting-container">
                  <div className="d-flex flex-wrap">
                    <div className="billing-screen1">
                      <div>
                        <div></div>
                        <Link to='/display-settings'  className="noUnderline text-dark">   
                        <Flex gap='1rem'>
                        <Meta avatar={<Avatar src={displayImg} />}/>                 
                        
                          <div><h5>Display</h5>
                          <p>
                            Configure the billing screen display, look & values
                          </p></div>
                          
                        </Flex>
                        </Link>
                      </div>
                    </div>
                    <div className="billing-screen2">
                      <div>
                        <div></div>
                        <Link to='/calculations-settings'  className="noUnderline text-dark">   
                        <Flex gap='1rem'>
                          <Meta avatar={<Avatar src={calculatorImg} />}/>                 
                        
                          <div><h5>Calculations</h5>
                          <p>Configure how invoice gets calculate</p>
                        </div>
                          </Flex>
                          </Link>
                      </div>
                    </div>
                    <div className="billing-screen3">
                      <div>
                        <Link to='/connected-services-settings'  className="noUnderline text-dark">   
                        <Flex gap='1rem'>
                        <Meta avatar={<Avatar src={globeImg} />}/>                 
                          
                          <div><h5>Connected Services</h5>
                          <p>Configure how different services gets connects</p>
                        </div>
                          </Flex>
                          </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="billing-screen3">
                      <div>
                        <div></div>
                        <Link to='/print-settings'  className="noUnderline text-dark">   
                        
                        <Flex gap='1rem'>
                          
                          <Meta avatar={<Avatar src={printImg} />}/>                 
                            <div>
                            <h5>Print</h5>
                          <p>
                            Configure the print settings of the Bill and KOT.
                          </p>
                            </div>
                          
                        </Flex>
                        </Link>
                      </div>
                    </div>
                    <div className="billing-screen1">
                      <div>
                        <div></div>
                        <Link to='/customer-settings'  className="noUnderline text-dark">   
                        <Flex gap='1rem'>
                        <Meta avatar={<Avatar src={userImg} />}/>                 
                          
                          <div><h5>Customer</h5>
                          <p>Configure the billing screen and it's component</p>
                        </div>
                          </Flex>
                          </Link>
                      </div>
                    </div>
                  </div>
                  <Divider/>
                  <h3 style={{ margin: "16px" }}>
                    Online / Advance Order
                  </h3>
                  <div className="billing-screen3">
                    <div>
                      <div></div>
                      <Link to='/online-advance-order'  className="noUnderline text-dark">   
                      <Flex gap='1rem'>
                        <Meta avatar={<Avatar src={dineImg} />}/>                 
                        
                        <div>
                        <h5>Online/ Advance Order Configuration</h5>
                        <p>
                          Configure auto accept, Duration, Cancel timings etc.
                          of Online Orders
                        </p>
                        </div>
                        
                      </Flex>
                      </Link>
                    </div>
                  </div>
                  <Divider/>

                  <h3 style={{ margin: "16px" }}>
                    System Setting
                  </h3>
                  <div className="billing-screen3">
                    <div>
                      <div></div>
                      <Link to='/billing-system-settings'  className="noUnderline text-dark">   
                      <Flex gap='1rem'>
                        <Meta avatar={<Avatar src={billImg} />}/>                 
                        
                        <div>
                        <h5>Billing System</h5>
                        <p>
                          Configure auto accept, Duration, Cancel timings etc.
                          of Online Orders
                        </p>
                        </div>
                        
                      </Flex>
                      </Link>
                    </div>
                  </div>

                </div>
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
