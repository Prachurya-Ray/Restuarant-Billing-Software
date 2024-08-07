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
} from "@ant-design/icons";



import SearchBox from './PrintingFiles/SearchBox.jsx'
import PrintConfiguration from './PrintingFiles/PrintConfiguration.jsx'
import PrintConfigurationButton from './PrintingFiles/PrintConfigurationButton.jsx'

import Logo from "../../sidebarcomponents/Logo";
import MenuList from "../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../sidebarcomponents/ToggleThemeButton";
import LogoMini from "../../sidebarcomponents/Logo Mini";

const { Header, Content, Footer, Sider } = Layout;

function GroupSummary() {
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
  

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
      setShowModal(true);
  };

  const handleCloseModal = () => {
      setShowModal(false);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //Table


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
            <Flex align="center">
            <Button
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
            <h3>Group Report</h3>
            </Flex>
             
          </Header>
          <Layout 
          style={{ 
            margin: "64px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 64px)",
          }}>
            
            <hr />

            <div className="--bs-secondary-color d-inline-flex">
                <SearchBox />
                <PrintConfigurationButton handleShowModal={handleShowModal} />
            </div>

            <div className='border py-3 mx-3 mt-3 rounded'>
                <div className='d-flex justify-content-between px-2'>
                    <div className=''>
                        <button type="button" style={{}} className="col btn border bg-danger text-white">Columns</button>
                        <button type="button" style={{ marginLeft: "10px" }} className="col btn border">Save Preference</button>
                    </div>
                    <div className=''>
                        <button type="button" style={{}} className="col btn border">Export Excel</button>
                        <button type="button" style={{ marginLeft: "10px" }} className="col btn border">Print</button>
                    </div>
                </div>
                <hr style={{ color: '#808080' }} />

                <div className='text-sm font-bold mx-4 fw-bold'>Group Report : <span className='fw-normal'>12-07-2024 </span></div>
                <div className="table-container">
                    <table>
                        <thead >
                            <tr>
                                <th>Group</th>
                                <th>Item</th>
                                <th>Qty.</th>
                                <th>My Amount(&#x20B9;)</th>
                                <th>Total Discount(&#x20B9;)</th>
                                <th>Net Amount(&#x20B9;) <br /> (M.A - T.D)</th>
                                <th>Total Tax(&#x20B9;)</th>
                                <th>Total Sales(&#x20B9;)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Others</td>
                            </tr>
                            <tr>
                                <td>-</td>
                                <td>Tulsi Honey Lemon</td>
                                <td>1</td>
                                <td>35.00</td>
                                <td>0.00</td>
                                <td>35.00</td>
                                <td>0.00</td>
                                <td>35.00</td>
                            </tr>
                            <tr className='fw-semibold'>
                                <td>Sub Total</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <PrintConfiguration show={showModal} handleClose={handleCloseModal} />

            </div>



      
          </Layout>

          <Footer style={{ textAlign: "center" }}>
              Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
            </Footer>
          
        </Layout>

        

        
      </Layout>
    </>
  );
}

export default GroupSummary;






