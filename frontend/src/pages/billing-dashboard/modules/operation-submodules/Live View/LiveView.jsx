import { useState } from "react";
import { Link } from "react-router-dom";
import { MdEventNote } from "react-icons/md";
import { CiMemoPad } from "react-icons/ci";

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
  EyeOutlined,
  StarFilled,
  StarOutlined,
  ClearOutlined,
  ExclamationCircleOutlined,
  RightOutlined,
  CalculatorOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import LogoMini from "../../../sidebarcomponents/Logo Mini";

import Logo from "../../../sidebarcomponents/Logo";
import MenuList from "../../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../../sidebarcomponents/ToggleThemeButton";
import HeaderMenu from './HeaderMenu';
import OrderViewContent from './OrderViewContent';
import KotViewContent from './KotViewContent';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileLines } from '@fortawesome/free-solid-svg-icons';
// import { faFile } from '@fortawesome/free-solid-svg-icons';


const { Header, Content, Footer, Sider } = Layout;

function LiveView() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  

  const [value, setValue] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const [isOrderViewVisible, setIsOrderViewVisible] = useState(false);
    const [isKotVisible, setIsKotVisible] = useState(false);
  
    const toggleVisibility = () => {
        setIsOrderViewVisible(!isOrderViewVisible);
        setIsKotVisible(false);
    };
    const toggleKotVisibility = () => {
        setIsKotVisible(!isKotVisible);
        setIsOrderViewVisible(false);
    };

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

  
  const dataSource = [
    {
        name:1,
        name_Original:'biller',
        type:'Biller'
    }
  ];

  const columns = [
    {
        title:"Biller Name",
        dataIndex: 'name'
    },
    {
        title:"Biller Original Name",
        dataIndex: 'name_Original'
    },
    {
        title:"Type",
        dataIndex: 'type'
    },


  ]
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
    <h3>Live View</h3>
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
            <Flex className="p-2" justify="space-between" align="center" style={{height:'5rem', backgroundColor:'#C7C8CC'}}>
                <Flex gap='1rem'>
                  
                        <span className="cursor-pointer" onClick={toggleVisibility}><MdEventNote />
                        Order View </span>
                        <span  className="cursor-pointer" onClick={toggleKotVisibility}><CiMemoPad />Kot View</span>
                </Flex>
                {
                !isKotVisible && (<HeaderMenu />)
                }
                       
            </Flex>
            {
                isOrderViewVisible && (<OrderViewContent/>)
            }
            {
                isKotVisible && (<KotViewContent/>)
            }


            {/* <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px', padding:'1rem', gap:'1rem'}}>

                <Table 
                      pagination={false}
                      dataSource={dataSource}
                      columns={columns}
                />

            

            </Layout> */}
            
      
          </Layout>

          <Footer style={{ textAlign: "center" }}>
              Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
            </Footer>
          
        </Layout>

        

        
      </Layout>
    </>
  );
}

export default LiveView;
