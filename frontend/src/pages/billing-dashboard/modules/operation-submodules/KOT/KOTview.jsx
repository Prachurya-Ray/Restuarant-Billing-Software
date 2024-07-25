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

import Logo from "../../../sidebarcomponents/Logo";
import MenuList from "../../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../../sidebarcomponents/ToggleThemeButton";

const { Header, Content, Footer, Sider } = Layout;

function KOTview() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [viewPage, setViewPage] = useState(false)

  function setView(){
    setViewPage(!viewPage)
  }

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
      created:'15-05-2024',
      bill:1,
      type:'Take Away'
           

    },
  ]

  const columns = [
    {
      title: "KOT No",
      dataIndex: "kot",
    },
    {
        title: "Billing User",
        dataIndex: "bill",
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
              title: "Customer Address",
              dataIndex: "add",
            },
            {
                title: "Customer Locality",
                dataIndex: "num",
              },
              
            {
              title: "Order Type",
              dataIndex: "type",
            },

            
            {
              title: "Number of Person",
              dataIndex: "numP",
            },

              {
                  title: "Created",
                  dataIndex: "created",
                },
                  
  ];


  const dataSource1 =[
    {
      key: '1',
      name:"Tulsi Honey Lemon",
      note:'-',
      qunatity:1

    }
  ]

  const columns1 =[
    {
      title: " Item Name",
      dataIndex: "name",
    },
    {
      title: "Special Note",
      dataIndex: "note",
    },
    {
      title: " Quantity",
      dataIndex: "qunatity",
    }
  ]

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
    {  console.log(viewPage)}
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
    <h3>View</h3>
    <Button icon={<ArrowLeftOutlined />}>Back</Button>
</Flex>

             
          </Header>
          <Layout>
            

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

            
            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px'}}>
                  <h4>KOT Item</h4>

              <Table
                      // dataSource={dataSource}
                      scroll={{
                        x: 100,
                      }}
                      pagination={false}
                      dataSource={dataSource1}
                      columns={columns1}
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

export default KOTview;
