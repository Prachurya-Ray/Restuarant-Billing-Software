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

function CounterSummery() {
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
      name:'Total',
      comOrd:0,
      SRord:0,
      Cord:0,
      Sord:1,
      nAmt:35,
      tDiscount:0,
      tTax:0,
      tSales:35,
      cash:0,
      card:0,
      duePay:0,
      other:35,
      wallet:0,
      onlineCash:0,
      onlinePaid:0,
    },
  ]

  const columns = [
    {
      title: "Counter Name",
      dataIndex: "name",
    },
    {
        title: "Complementary Orders",
        dataIndex: "comOrd",
      },
      {
        title: "Sales Return Orders",
        dataIndex: "SRord",
      },
      {
        title: "Canceled Order",
        dataIndex: "Cord",
      },
      {
        title: "Success Order",
        dataIndex: "Sord",
      },
      {
        title: "Net Amount",
        dataIndex: "nAmt",
      },
      {
        title: "Total Discount",
        dataIndex: "tDiscount",
      },
      {
        title: "Total Tax",
        dataIndex: "tTax",
      },
      {
        title: "Total Sales",
        dataIndex: "tSales",
      },
      {
        title: "Cash",
        dataIndex: "cash",
      },
      {
        title: "Card",
        dataIndex: "card",
      },
      {
        title: "Due Payment",
        dataIndex: "duePay",
      },
      {
        title: "Others",
        dataIndex: "other",
      },
      {
        title: "Wallet",
        dataIndex: "wallet",
      },
      {
        title: "Online Cash",
        dataIndex: "onlineCash",
      },
      {
        title: "Online Paid",
        dataIndex: "onlinePaid",
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
            <h3>Counter Summary</h3>
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
              Counter Summary - 25-05-2024</h6>
              <Table
                      // dataSource={dataSource}
                      scroll={{
                        x: 1300,
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

export default CounterSummery;
