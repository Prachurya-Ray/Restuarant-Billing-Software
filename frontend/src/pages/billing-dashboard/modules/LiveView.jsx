import { useState } from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { Button, Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { theme, Form, Switch } from "antd"; 
import Logo from "../sidebarcomponents/Logo";
import MenuList from "../sidebarcomponents/MenuList";
import ToggleThemeButton from "../sidebarcomponents/ToggleThemeButton";

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
                <div className="liveview-container">
                  <div className="d-flex justify-content-between">
                    <div>Order View</div>
                    <div>KOT View</div>
                    <div>
                      <Form.Item label=" View Details" valuePropName="checked">
                        <Switch />
                      </Form.Item>
                    </div>
                    <div>filter Foodready Dispatch Deliver</div>
                    <div><Button>Reload</Button></div>
                    <div><Button>Back</Button></div>
                  </div>

                  <h3 style={{ marginTop: "20px" }}>
                    <u>Set The Configuration for the Resturant</u>
                  </h3>
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
