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
  Flex,
  Divider,
  Modal,
  Select
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  DownOutlined,
  SmileOutlined,
  PrinterOutlined,
  ArrowLeftOutlined,
  EditOutlined,
} from "@ant-design/icons";
import LogoMini from "../../../sidebarcomponents/Logo Mini";

import Logo from "../../../sidebarcomponents/Logo";
import MenuList from "../../../sidebarcomponents/MenuList";
const { Header, Content, Footer, Sider } = Layout;

const { Option } = Select;


function PrinterListing() {
    const [selectedRows, setSelectedRows] = useState([]);
  const [dropdownValues, setDropdownValues] = useState({});

  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();



  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

    // Table data source state
    const dataSource =[
        {
            key:1,
            name:'eBill Printer',
            printerType:'eBill Printer',
            print:'No',
        },
        
        {
            key:2,
            name:'Bill N KOT',
            printerType:'General',
            print:'Yes',
        },
        
      ];

  const columns = [
     {
      title: "Department Wise Printer Name",
      dataIndex: "name",
    },
    {
        title: "Printer Type",
        dataIndex: "printerType",
      },
      {
        title: "Report Print",
        dataIndex: "print",
      },
      
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Flex style={{ gap: "1rem" }}>
            <Button type="link" className='green-button'>
              <EditOutlined />
            </Button>
          </Flex>
        ),
      },
      {
        title: "Printer Assign",
        key: "assign",
        render: (text, record) => (
          <Flex style={{ gap: "1rem" }}>
            <Button type="link" className='green-button'>
              Assign
            </Button>
          </Flex>
        ),
      },
  ];

  const showEditModal = (item) => {
    setEditItem(item);
    form.setFieldsValue(item);
    setIsModalVisible(true);
  };


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
              <h3>Item Listings</h3>
              <Button icon={<ArrowLeftOutlined />} className='green-hover'>Back</Button>
            </Flex>
          </Header>

          <Layout
          style={{ 
            margin: "64px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 64px)",
          }}>
            <Flex
              justify="flex-start"
              style={{ margin: "1rem" }}
            >
              <Button icon={<SearchOutlined />} className='green-hover'>Search</Button>

            </Flex>
            

            <Layout
              style={{
                margin: "2rem",
                border: "solid 1px grey",
                borderRadius: "10px",
              }}
            >
              <Table
                pagination={false}
                dataSource={dataSource}
                columns={columns}
              />
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

export default PrinterListing;
