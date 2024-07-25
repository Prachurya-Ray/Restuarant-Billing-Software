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
  Select,
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
  EyeOutlined
} from "@ant-design/icons";

import Logo from "../../../sidebarcomponents/Logo";
import MenuList from "../../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../../sidebarcomponents/ToggleThemeButton";
const { Header, Content, Footer, Sider } = Layout;

function Notifications() {
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
        key:'1',
        module:'System',
        date:'15-05-2024',
        status:'Active',
        created:'15-05-2024',
        msg:'Zomato Delivery'
        
        
    }
  ]

  const columns = [
    {
        title: <Checkbox></Checkbox>,
        key: "action",
        render: (text, record) => (
          <Flex style={{ gap: '1rem' }}>
            <Checkbox></Checkbox>
          </Flex>
        ),
      },
    {
        title: "Module",
        dataIndex: "module",
    },
    {
        title: "Message",
        dataIndex: "msg",
    },
    {
        title: "Date",
        dataIndex: "date",
    },
    {
        title: "Status",
        dataIndex: "status",
    },
    {
        title: "Created",
        dataIndex: "created",
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
          <Flex align="center" justify="space-between">
    <Button
        className="toggle"
        onClick={() => setCollapsed(!collapsed)}
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    />
    <h3>Notification</h3>
    <Flex style={{gap:'1rem'}} align="center">
        <Button icon={<ArrowLeftOutlined />}>Back</Button>
    </Flex>
    
</Flex>

             
          </Header>
          <Layout>
            
            {/* {Body} */}


            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px'}}>
                <Flex justify="space-between" align="" className="p-3">
                    <Flex>
                        <Select
                            showSearch
                            placeholder="Read"
                            optionFilterProp="label"
                            className="w-100 pe-1"
                            options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'tom',
                                label: 'Tom',
                            },
                            ]}
                            />
                            <Button>Change Status</Button>

                    </Flex>
                    <Flex align="center">
                        <div className="circle red"></div>
                        <span className="pe-2">Discard</span>
                        <div className="circle green"></div>
                        <span className="pe-2">Unread</span>
                        <div className="circle gray"></div>
                        <span>Read</span>
                    </Flex>

                </Flex>


              <Table
                    //   scroll={{
                    //     x: 100,
                    //   }}
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

export default Notifications;
