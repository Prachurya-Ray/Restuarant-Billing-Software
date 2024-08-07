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
} from "@ant-design/icons";
import LogoMini from "../../../sidebarcomponents/Logo Mini";

import Logo from "../../../sidebarcomponents/Logo";
import MenuList from "../../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../../sidebarcomponents/ToggleThemeButton";

const { Header, Content, Footer, Sider } = Layout;

function KOT() {
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

  //Table

 


  //Table

  const dataSource = [
    {
      key: "1",
      kot:1,
      order:"Take Away",
      num:'',
      name:'',
      noItem:1,
      status:'Used in Bills',
      created:'15-05-2024',
      printDt:'15-05-2024',
      duration:'-',
           

    },
  ]

  const columns = [
    {
      title: "KOT No",
      dataIndex: "kot",
    },
    {
        title: "Order Type",
        dataIndex: "order",
      },
      {
          title: "Customer Number",
          dataIndex: "num",
        },
        {
            title: "Customer Name",
            dataIndex: "name",
          },

    
          {
            title: "No of Items",
            dataIndex: "noItem",
          },
          {
              title: "Status",
              dataIndex: "status",
            },
            {
                title: "Created",
                dataIndex: "created",
              },
              {
                  title: "Bill Print Date",
                  dataIndex: "printDt",
                },
                {
                    title: "Complete Duration",
                    dataIndex: "duration",
                  },

                  {
                    title: "Action",
                    key: "action",
                    render: (text, record) => (
                      <Flex style={{gap:'1rem'}}>
                        <Link to='view'>
                        <Button className='green-hover'>
                           View
                        </Button>
                        </Link>
                        
                        <Button className='green-hover'>
                          Reprint
                        </Button>
                      </Flex>
                    ),
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
    <h3>KOT</h3>
    <Button icon={<ArrowLeftOutlined />}>Back</Button>
</Flex>

             
          </Header>
          <Layout
          style={{ 
            margin: "64px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 64px)",
          }}>
            <Flex gap="middle" justify="space-between" style={{margin:'1rem'}}>
              
                  <Button icon={<SearchOutlined />} className='green-hover'>Search</Button>
                  <div className="d-flex">
                    <span  className="me-2">
                        <div className="circle gray"></div>
                        Used in Bills
                    </span> 
                    <span  className="me-2">
                    <div className="circle green"></div>Active</span>
                    <span  className="me-2">
                    <div className="circle orange"></div>Canceled</span>
                    <span  className="me-2">
                    <div className="circle blue"></div>Not Prepared</span>
                    <span  className="me-2">
                    <div className="circle blue"></div>Preparing</span>
                  </div>
          
             
            </Flex>

            {/* {Body} */}


            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px'}}>


              <Table
                      // dataSource={dataSource}
                      scroll={{
                        x: 100,
                      }}
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

export default KOT;
