import { useState } from "react";
import { TbPasswordFingerprint } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { GiSwipeCard } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { Button, Layout, Checkbox, Form, Input, Card, Col, Row, Flex } from "antd";
import { theme } from "antd"; // Ensure this path matches your project structure
// import Logo from "../sidebarcomponents/Logo";
// import MenuList from "../sidebarcomponents/MenuList";
// import ToggleThemeButton from "../sidebarcomponents/ToggleThemeButton";
import BillingImage from "../../assets/billing.png";
import Logo from "../../assets/ClickUptel.png"
import LogoMini from "./sidebarcomponents/Logo Mini";

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

  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform any login logic here
    // On successful login, navigate to the desired path
    navigate("/billingdashboardbilling"); // Replace '/dashboard' with your desired path
  };
  return (
    <>
      <Layout>
        <Layout>
         
          <Header
            style={{ padding: 10, background: colorBgContainer, boxShadow:'0px 3px 5px gray'}}
            className="passcode-h z-1"
          >
            <div className="d-flex justify-content-between">
              
              <img src={Logo} alt="" style={{height:'70px'}}/>

              <div>
                <div className="refno-p">Chai Bar</div>
                <div className="refno-p">Ref. : 326578</div>
              </div>
            </div>
          </Header>
          
          <Layout>
            <Content style={{backgroundColor:'white'}}>
              <div className="mt-2">
                <div className="mainbilling-container">
                  <div className="d-flex">
                    <div className="billing-icon">
                      <img src={BillingImage} alt="billing" />
                    </div>
                    <div className="billing-login">
                      <Flex justify="center" align="center">
                        <div className=" mt-5">
                          <h3>Login to Billing Station</h3>
                          <div>
                            <Form
                              name="basic"
                              labelCol={{
                                span: 8,
                              }}
                              wrapperCol={{
                                span: 16,
                              }}
                              style={{
                                maxWidth: 600,
                              }}
                              initialValues={{
                                remember: true,
                              }}
                              autoComplete="off"
                            >
                              <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your username!",
                                  },
                                ]}
                              >
                                <Input  style={{width:'12rem', height:'2.5rem'}}/>
                              </Form.Item>

                              <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your password!",
                                  },
                                ]}
                              >
                                <Input.Password style={{width:'12rem', height:'2.5rem'}}/>
                              </Form.Item>

                              <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                  offset: 8,
                                  span: 16,
                                }}
                              >
                                <Checkbox>Remember me</Checkbox>
                              </Form.Item>

                              <Form.Item
                                wrapperCol={{
                                  offset: 8,
                                  span: 16,
                                }}
                              >
                                <Button
                                  type="primary"
                                  onClick={handleLogin}
                                  htmlType="submit"
                                  className="green-button ms-3 w-75"
                                >
                                  Login
                                </Button>
                              </Form.Item>
                            </Form>
                          </div>
                        </div>
                      </Flex>
                    </div>
                    <div className="billing-side-icon">
                      <div>
                        <Flex className="side-login-icon" vertical justify="center" align="center">

                          <TiUser  className="side-login-icon-logo"/>
                          <p>Login</p>
                        </Flex>
                        <Flex className="side-login-icon" vertical justify="center" align="center">

                          <TbPasswordFingerprint className="side-login-icon-logo"/>
                          <p>Passcode</p>
                        </Flex>
                        <Flex className="side-login-icon" vertical justify="center" align="center">
                          <GiSwipeCard  className="side-login-icon-logo"/>
                          <p>Swipe Card</p>
                        </Flex>
                      </div>
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
