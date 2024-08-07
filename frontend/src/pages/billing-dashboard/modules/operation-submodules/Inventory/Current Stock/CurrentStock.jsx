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
  Divider
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
  EyeOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import LogoMini from "../../../../sidebarcomponents/Logo Mini";

import Logo from "../../../../sidebarcomponents/Logo";
import MenuList from "../../../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../../../sidebarcomponents/ToggleThemeButton";
const { Header, Content, Footer, Sider } = Layout;

function CurrentStock() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  

  const [value, setValue] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteChange = (e) => {
    setIsFavorite(e.target.checked);
  };

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

  //Table

 


  //Table

  const dataSource = [
    {
        key:'1',
        category:'',
        raw:'Milk',
        date:'15-05-2024',
        stock:'12Ltr',
        prc:'0/Ltr',
        Tprc:'0'
        
    }
  ]

  const columns = [
    
    {
      title: "Mark as Favourite",
      key: "fav",
      render: (text, record) => (
        <Flex style={{ gap: '1rem' }}>
              <Checkbox
                  checked={isFavorite}
                  onChange={handleFavoriteChange}
                  style={{ fontSize: '24px', color: isFavorite ? '#fadb14' : '#d9d9d9' }} // yellow for filled, gray for outline
                >
                  {isFavorite ? <StarFilled /> : <StarOutlined />}
                </Checkbox>
        </Flex>
      ),
    },
    {
        title: "Category",
        dataIndex: "category",
    },
    {
        title: "Raw Material",
        dataIndex: "raw",
    },
    {
        title: "Current Stock",
        dataIndex: "stock",
    },
    {
        title: "Average Purchase Price",
        dataIndex: "prc",
    },
    {
        title: "Total Average Purchase Price",
        dataIndex: "Tprc",
    },
    {
        title: "Last Updated",
        dataIndex: "date",
    },
  ];

  // const dataSource = [
  //   {
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //   },
  // ];

  //dropdown


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
            <Flex align="center" justify="space-between">
    <Button
        className="toggle"
        onClick={() => setCollapsed(!collapsed)}
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    />
    <h3>Current Stock</h3>
    <Flex style={{gap:'1rem'}} align="center">
        <Button icon={<ArrowLeftOutlined />}>Back</Button>
    </Flex>
    
</Flex>

             
          </Header>
          <Layout
          style={{ 
            margin: "64px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 64px)",
          }}>
            
            {/* {Body} */}
            <Flex justify="space-between" className="m-3">
                <Button className='green-hover'><SearchOutlined/>Search</Button>
                <Flex gap='1rem'>
                    <Button className='green-hover'><PrinterOutlined/>Print</Button>
                    <Button className='green-hover'>Export Excel</Button>
                </Flex>
            </Flex>


            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px'}}>


              <Table
                    //   scroll={{
                    //     x: 100,
                    //   }}
                      pagination={false}
                      dataSource={dataSource}
                      columns={columns}
                    />
                    <h6 className="text-danger">Total Average Purchase Price : 0</h6>


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

export default CurrentStock;
