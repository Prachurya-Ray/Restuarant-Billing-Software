import { useState } from "react";
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
  DatePicker
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  DownOutlined,
  SmileOutlined,
  PrinterOutlined,
} from "@ant-design/icons";

import Logo from "../../sidebarcomponents/Logo";
import MenuList from "../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../sidebarcomponents/ToggleThemeButton";

const { Header, Content, Footer, Sider } = Layout;

function NcItemSummery() {
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

  const dataSource = [
    {
      key: "1",
      orderStatus:'Saved',
      myAmount: 0.00,
      total:0,
      orders:0
    },
    {
      key: "2",
      orderStatus:'Printed',
      myAmount: 35.00,
      total:35,
      orders:1
    },
    {
      key: "3",
      orderStatus:'Canceled',
      myAmount: 0.00,
      total:0,
      orders:0
    },
    {
      key: "4",
      orderStatus:'Complimentary',
      myAmount: 0.00,
      total:0,
      orders:0
    },
    {
      key: "5",
      orderStatus:'Sales Return',
      myAmount: 0.00,
      total:0,
      orders:0
    },
    {
      key: "6",
      orderStatus:'Total',
      myAmount: 35.00,
      total:35,
      orders:1,
    },
  ]

  const columns = [
    {
      title: "Order Status",
      dataIndex: "orderStatus",
      key: "orderStatus",
    },
    {
      title: "My Amount",
      dataIndex: "myAmount",
      key: "myAmount",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Orders",
      dataIndex: "orders",
      key: "orders",
    },
  ];


  //Table

  const dataSource1 = [
    {
      key: "1",
      paymentType:'Cash',
      total:0,
    },
    {
      key: "2",
      paymentType:'Card',
      total:35
    },
    {
      key: "3",
      paymentType:'Due Payment',
      total:0,
    },
    {
      key: "4",
      paymentType:'Others[UPI]',
      total:35,
    },
  ]

  const columns1 = [
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
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
            <Flex align="center">
            <Button
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
            <h3>NC Item Summary</h3>
            </Flex>
             
          </Header>
          <Layout>
            <Flex gap="middle" justify="space-between" style={{margin:'1rem'}}>
              <Flex gap='middle'>
                  <Button icon={<SearchOutlined />}>Search</Button>
          
                  <Button icon={<PrinterOutlined />}>Print Configuration</Button>
              </Flex>

            </Flex>

            {/* {Body} */}

            <Divider/>

            
            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px', padding:'1rem'}}>


                    <Flex justify="space-between">
                            
                            <Flex align="center">

                                    <span>From : </span>
                                        <DatePicker
                                    showTime
                                    onChange={(value, dateString) => {
                                    console.log('Selected Time: ', value);
                                    console.log('Formatted Selected Time: ', dateString);
                                    }}
                                    />

                                    </Flex>



                                    <Flex align="center">

                                    <span>To : </span>
                                        <DatePicker
                                    showTime
                                    onChange={(value, dateString) => {
                                    console.log('Selected Time: ', value);
                                    console.log('Formatted Selected Time: ', dateString);
                                    }}
                                    />

                                    </Flex>


                    </Flex>

    

                <Divider/>
                <Flex justify="flex-end">
                <Button icon={<SearchOutlined />} type="primary" danger>Search</Button>
                </Flex>
                


            </Layout>

            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px'}}>


              <Table
                      // dataSource={dataSource}
                      pagination={false}
                    //   dataSource={dataSource}
                    //   columns={columns}
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

export default NcItemSummery;
