import { useState } from "react";
import { Button, Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { theme } from "antd"; // Ensure this path matches your project structure
import Logo from "../sidebarcomponents/Logo";
import MenuList from "../sidebarcomponents/MenuList";
import ToggleThemeButton from "../sidebarcomponents/ToggleThemeButton";
import LogoMini from "../sidebarcomponents/Logo Mini";

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
                  {collapsed?<LogoMini />:<Logo/>}
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
                <div className="checkupdate-container">
                  <div>
                    <div className="">
                      <h4>Application details</h4>
                    </div>
                    <div>
                      <p className="d-flex justify-content-center">
                        Existing Version
                      </p>
                      <h3 className="d-flex justify-content-center">0.0.01</h3>,
                      <div className="d-flex justify-content-center">
                        <Button type="primary" className="green-button">Check Updates</Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h2 className="d-flex justify-content-center mt-5">
                        Click Uptel
                      </h2>
                      {/* <div className="d-flex justify-content-center">
                        ©{new Date().getFullYear()} Click Uptel, All Rights
                        Reserved
                      </div> */}
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
