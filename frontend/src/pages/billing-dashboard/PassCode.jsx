import { useState } from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

import { Layout, Input, Card, Col, Row } from "antd";
import { theme } from "antd"; // Ensure this path matches your project structure
// import Logo from "../sidebarcomponents/Logo";
// import MenuList from "../sidebarcomponents/MenuList";
// import ToggleThemeButton from "../sidebarcomponents/ToggleThemeButton";
import BillingImage from "../../assets/billing.png";

const { Header, Content, Footer, Sider } = Layout;

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
        {/* <Sider
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
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider> */}

        <Layout>
          <Header
            style={{ padding: 20, background: colorBgContainer }}
            className="passcode-h"
          >
            {/* <Button
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            /> */}
            <div className="d-flex justify-content-between">
              <h4>Click Uptel</h4>

              <div>
                <div className="refno-p">Chai Bar</div>
                <div className="refno-p">Ref. : 326578</div>
              </div>
            </div>
          </Header>

          <Layout>
            <Content>
              <div className="">
                <div className="mainbilling-container">
                  <div className="d-flex">
                    <div className="billing-icon">
                      <img src={BillingImage} alt="billing" />
                    </div>
                    <div className="billing-login">
                      <div className="d-flex justify-content-center">
                        <div>
                          <h3>
                            Enter the Passcode to access this Billing Station
                          </h3>
                          <div>
                            <Input />
                          </div>
                          <div className="d-flex justify-content-center">
                            <div>
                              <p>1</p>
                              <p>4</p>
                              <p>7</p>
                              <FaBeer />
                            </div>
                            <div>
                              <p>2</p>
                              <p>5</p>
                              <p>8</p>
                              <p>0</p>
                            </div>
                            <div>
                              <p>1</p>
                              <p>4</p>
                              <p>7</p>
                              <FaBeer />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="billing-side-icon">
                      {" "}
                      <Col gutter={16}>
                        <Row span={3}>
                          <Card bordered={false} className="side-login-icon">
                            <FaBeer />
                            <div>Login</div>
                          </Card>
                        </Row>
                        <Row span={3}>
                          <Card bordered={false} className="side-login-icon">
                            <FaBeer />
                            <div>Passcode</div>
                          </Card>
                        </Row>
                        <Row span={3}>
                          <Card bordered={false} className="side-login-icon">
                            <FaBeer />
                            <div>Swipe Card</div>
                          </Card>
                        </Row>
                      </Col>
                    </div>
                  </div>
                </div>
              </div>
            </Content>
            <Footer
              style={{ textAlign: "center" }}
              className="d-flex justify-content-between"
            >
              <div>
                {" "}
                Need Quick Help? 0709876988 Contact for Support
                support@clickuptel.com
              </div>{" "}
              <div>Version:0.0.0.1</div>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default App;