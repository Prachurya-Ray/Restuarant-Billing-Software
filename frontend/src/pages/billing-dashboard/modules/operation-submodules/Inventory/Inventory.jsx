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


import Logo from "../../../sidebarcomponents/Logo";
import MenuList from "../../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../../sidebarcomponents/ToggleThemeButton";
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

function Inventory() {
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
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          {/* <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} /> */}
        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Space align="center" style={{ width: "100%", justifyContent: "space-between" }}>
              <Button
                className="toggle"
                onClick={() => setCollapsed(!collapsed)}
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              />
              <h3>Inventory</h3>
              <Space style={{ gap: "1rem" }} align="center">
                <Button icon={<ArrowLeftOutlined />}>Back</Button>
              </Space>
            </Space>
          </Header>
          <Layout style={{ margin: "2rem", border: "solid 1px grey", borderRadius: "10px", padding:'1rem' }}>

            <h3>Reports</h3>
            <Flex gap='middle' className="p-3">
            <Card
              style={{ width: 300 }}
              actions={[
                <Link to='currentstock'>
                    <ArrowRightOutlined />
                </Link>
              ]}
                >
              <Meta
                avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTqNG68eYLcEF_34TOZw14hjaUyThvu6Xk6vW0WhoG0Afany0A11WfmrtjKByzkh12o0&usqp=CAU" />}
                title="Current Stock"
                style={{height:'10rem'}}
                description="Update Clossing Stock of the raw material with ease"
              />
            </Card>

            <Card
              style={{ width: 300 }}
              actions={[
                <Link to="openingclosing">
                  <ArrowRightOutlined />
                </Link>
              ]}
                >
              <Meta
                avatar={<Avatar src="https://static.vecteezy.com/system/resources/previews/010/882/199/original/people-with-clipboard-document-illustration-business-checklist-with-character-concept-icon-questionnaire-work-report-and-holding-sign-human-with-note-board-mark-and-happy-avatar-employee-vector.jpg" />}
                title="Opening Closing Report"
                style={{height:'10rem'}}
                description="Know your raw material stock status and purchase/consumption history."
              />
            </Card>

            <Card
              style={{ width: 300 }}
              actions={[
                <Link to="indent">
                  <ArrowRightOutlined />
                </Link>
              ]}
                >
              <Meta
                avatar={<Avatar src="https://static.vecteezy.com/system/resources/previews/036/242/429/original/calculator-icon-clipart-avatar-logotype-isolated-illustration-vector.jpg" />}
                title="Indent Management"
                style={{height:'10rem'}}
                description="Calculate raw materials required to prepare specific items in bulk."
              />
            </Card>

            </Flex>

            

          </Layout>
          <Footer style={{ textAlign: "center" }}>
            Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Inventory;
