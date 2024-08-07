import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";
import { TbBrandPagekit } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { GiExpense } from "react-icons/gi";
import { PiHandWithdraw } from "react-icons/pi";
import { GiCash } from "react-icons/gi";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaSyncAlt } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoMdLaptop } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import { RiGalleryView2 } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoLanguageSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoMdPrint } from "react-icons/io";
import { FaPercent } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { LuScreenShare } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { TbStatusChange } from "react-icons/tb";

import { Button, Divider, Flex, Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { theme } from "antd"; // Ensure this path matches your project structure
import { Card, Col, Row } from "antd";
import Logo from "../sidebarcomponents/Logo";
import LogoMini from "../sidebarcomponents/Logo Mini";

import MenuList from "../sidebarcomponents/MenuList";
import ToggleThemeButton from "../sidebarcomponents/ToggleThemeButton";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            zIndex: 100,
          }}
          
        >
          {/* <Logo /> */}
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
            <Button
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>

          <Layout>
            <Content style={{
            margin: "64px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 64px)",
          }}>



              <Flex  className="operation-container" wrap>
                
                    <div className="card-cont">
                      <Link to="/orders" className="noUnderline text-dark">
                        <FaRegFileAlt className="operation-logo-size" />

                        <div>Orders</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/onlineorders" className="noUnderline text-dark">
                        <RiGalleryView2 className="operation-logo-size" />

                        <div>Online Orders</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/kot" className="noUnderline text-dark">
                        <TbBrandPagekit className="operation-logo-size" />
                        <div>KOTs</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/contacts" className="noUnderline text-dark">
                        <FaUsers className="operation-logo-size" />
                        <div>Customers</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/cashflow" className="noUnderline text-dark">
                        <BsCashCoin className="operation-logo-size" />
                        <div>Cash Flow</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/expense" className="noUnderline text-dark">
                        <GiExpense className="operation-logo-size" />
                        <div>Expense</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/withdraw" className="noUnderline text-dark">
                        <PiHandWithdraw className="operation-logo-size" />
                        <div>Withdrawal</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/inventorys" className="noUnderline text-dark">
                        <MdOutlineInventory2 className="operation-logo-size" />
                        <div>Inventory</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/notification" className="noUnderline text-dark">
                        <FaRegBell className="operation-logo-size" />
                        <div>Notification</div>
                      </Link>
                    </div>

                    <div className="card-cont">
                      <Link to="" className="noUnderline text-dark">
                        <FaSyncAlt className="operation-logo-size" />
                        <div>Manual Sync</div>
                      </Link>
                    </div>

                    <div className="card-cont">
                      <Link to="/help" className="noUnderline text-dark">
                        <GrHelpBook className="operation-logo-size" />
                        <div>Help</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/liveview" className="noUnderline text-dark">
                        <MdOutlineLiveTv className="operation-logo-size" />
                        <div>Live View</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="" className="noUnderline text-dark">
                        <RiSecurePaymentLine className="operation-logo-size" />
                        <div>Due Payment</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/cashtopup" className="noUnderline text-dark">
                        <GiCash className="operation-logo-size" />
                        <div>Cash Top-up</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="" className="noUnderline text-dark">
                        <IoLanguageSharp className="operation-logo-size" />
                        <div>Language Profile</div>
                      </Link>
                    </div>

                    <div className="card-cont">
                      <Link to="/billerprofile" className="noUnderline text-dark">
                        <ImProfile className="operation-logo-size" />
                        <div>Billing User Profile</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/currencyconversion" className="noUnderline text-dark">
                        <MdCurrencyExchange className="operation-logo-size" />
                        <div>Currency Conversion</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/feedback" className="noUnderline text-dark">
                        {" "}
                        <MdOutlineFeedback className="operation-logo-size" />
                        <div>Feedback</div>{" "}
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="" className="noUnderline text-dark">
                        {" "}
                        <MdDeliveryDining className="operation-logo-size" />
                        <div>Delivery Boy</div>{" "}
                      </Link>
                    </div>

                    <div className="card-cont">
                      <Link to="" className="noUnderline text-dark">
                        {" "}
                        <IoMdLaptop className="operation-logo-size" />
                        <div>LED Display</div>{" "}
                      </Link>
                    </div>
                    </Flex>
                  <Divider/>
                  <h3 style={{ marginTop: "20px" }}>
                    Set The Configuration for the Resturant
                  </h3>
                  <Flex  className="operation-container" wrap>

                    <div className="card-cont">
                      <Link to="/menuconfig" className="noUnderline text-dark">
                        <BiSolidFoodMenu className="operation-logo-size" />
                        <div>Menu</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/billkotconfig" className="noUnderline text-dark">
                        <IoMdPrint className="operation-logo-size" />
                        <div>Bill / KOT Print</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/tax" className="noUnderline text-dark">
                        <FaPercent className="operation-logo-size" />
                        <div>Tax</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/discount" className="noUnderline text-dark">
                        <CiDiscount1 className="operation-logo-size" />
                        <div>Discount</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/billingscreen" className="noUnderline text-dark">
                        <LuScreenShare className="operation-logo-size" />
                        <div>Billing Screen</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/settings" className="noUnderline text-dark">
                        <IoSettingsSharp className="operation-logo-size" />
                        <div>Settings</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/itemonoff" className="noUnderline text-dark">
                        <FaBookOpen className="operation-logo-size" />
                        <div>Menu Item On off</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/servicerenew" className="noUnderline text-dark">
                        <CgDanger className="operation-logo-size" />
                        <div>Service Renewal</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/orderstatus" className="noUnderline text-dark">
                        <TbStatusChange className="operation-logo-size" />
                        <div>Customer Order Status</div>
                      </Link>
                    </div>
                  
                
              </Flex>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
