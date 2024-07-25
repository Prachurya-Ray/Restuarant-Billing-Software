import { useState } from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaPrint } from "react-icons/fa";
import { Button, Layout, Avatar, Flex } from "antd";
import { Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { theme } from "antd"; // Ensure this path matches your project structure
import { Card, Col, Row } from "antd";
import Logo from "../sidebarcomponents/Logo";
import MenuList from "../sidebarcomponents/MenuList";
import ToggleThemeButton from "../sidebarcomponents/ToggleThemeButton";

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
            <Button
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>

          <Layout>
            <Content>
              <div className="">
                <div className="setting-container">
                  <div className="d-flex">
                    <div className="billing-screen1">
                      <div>
                        <div></div>
                        <Link to='/display-settings'  className="noUnderline text-dark">   
                        <Flex gap='1rem'>
                        <Meta avatar={<Avatar src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-computer-pc-icon-vectors-png-image_5090335.jpg" />}/>                 
                        
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
                          <Meta avatar={<Avatar src="https://static-00.iconduck.com/assets.00/calculator-minimalistic-icon-2048x2046-73qvgwb6.png" />}/>                 
                        
                          <div><h5>Calculations</h5>
                          <p>Configure how invoice gets calculate</p>
                        </div>
                          </Flex>
                          </Link>
                      </div>
                    </div>
                    <div className="billing-screen3">
                      <div>
                        <div></div>
                        <Link to='/connected-services-settings'  className="noUnderline text-dark">   
                        <Flex gap='1rem'>
                        <Meta avatar={<Avatar src="https://w7.pngwing.com/pngs/118/498/png-transparent-globe-earth-world-computer-icons-globe-miscellaneous-globe-logo.png" />}/>                 
                          
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
                          
                          <Meta avatar={<Avatar src="https://media.istockphoto.com/id/1222797590/vector/printing-machine-icon-flat-vector-template-design-trendy.jpg?s=612x612&w=0&k=20&c=Ww2_Q3MfW11A65TjQKew7q5rXlx1IKGjVKil9q1Epxo=" />}/>                 
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
                        <Meta avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" />}/>                 
                          
                          <div><h5>Customer</h5>
                          <p>Configure the billing screen and it's component</p>
                        </div>
                          </Flex>
                          </Link>
                      </div>
                    </div>
                  </div>

                  <h3 style={{ margin: "16px" }}>
                    <u>Online / Advance Order</u>
                  </h3>
                  <div className="billing-screen3">
                    <div>
                      <div></div>
                      <Link to='/online-advance-order'  className="noUnderline text-dark">   
                      <Flex gap='1rem'>
                        <Meta avatar={<Avatar src="https://w7.pngwing.com/pngs/669/416/png-transparent-restaurant-hotel-food-menu-dish-restaurant-angle-furniture-business.png" />}/>                 
                        
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

                  <h3 style={{ margin: "16px" }}>
                    <u>System Setting</u>
                  </h3>
                  <div className="billing-screen3">
                    <div>
                      <div></div>
                      <Link to='/billing-system-settings'  className="noUnderline text-dark">   
                      <Flex gap='1rem'>
                        <Meta avatar={<Avatar src="https://w7.pngwing.com/pngs/669/416/png-transparent-restaurant-hotel-food-menu-dish-restaurant-angle-furniture-business.png" />}/>                 
                        
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
