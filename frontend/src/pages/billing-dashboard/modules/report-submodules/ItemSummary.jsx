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
  GlobalOutlined,
} from "@ant-design/icons";

import Logo from "../../sidebarcomponents/Logo";
import MenuList from "../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../sidebarcomponents/ToggleThemeButton";

const { Header, Content, Footer, Sider } = Layout;

function ItemSummery() {
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
      category:'Without Milk',
      
    },
    {
      key: "2",
      item:'Tulsi Honey Lemon',
      code:154,
      qty:1,
      total:35,
    },
    {
        key: "3",
        category:'Sub Total',
        qty:1,
        total:35,
      },
  ]

  const columns = [
    {
      title: "Category",
      dataIndex: "category",
    //   key: "orderStatus",
    },
    {
        title: "Item",
        dataIndex: "item",
      //   key: "orderStatus",
      },
      {
        title: "Code",
        dataIndex: "code",
      //   key: "orderStatus",
      },
      {
        title: "Qty",
        dataIndex: "qty",
      //   key: "orderStatus",
      },
      {
        title: "Total",
        dataIndex: "total",
      //   key: "orderStatus",
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
            <h3>Item Summary</h3>
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
                <Flex justify="flex-end" style={{gap:'1rem'}}>
                  
                <Button icon={<GlobalOutlined />}danger>Search from Web</Button>
                <Button icon={<SearchOutlined />} type="primary" danger>Search</Button>
                </Flex>
                


            </Layout>

            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px'}}>


              <Flex justify="space-between" style={{margin:'1rem'}}>
                
              <Flex style={{gap:'1rem'}}>
                  
                <Button type="primary" danger>Column</Button>
                  <Button >Save preference</Button>
                  </Flex>

                
                  <Flex style={{gap:'1rem'}}>
                  
                  <Button>Export Excel</Button>
                  <Button>Print</Button>
                  </Flex>

              </Flex>


              <Divider/>
              <h6 style={{padding:'1rem'}}>
              Item Summary - 25-05-2024</h6>
              <Table
                      // dataSource={dataSource}
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

export default ItemSummery;