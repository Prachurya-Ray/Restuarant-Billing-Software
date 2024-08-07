import { useState } from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaPrint } from "react-icons/fa";
import { Button, Layout, Avatar, Flex } from "antd";
import { Link } from "react-router-dom";
import React, { useEffect} from "react";
import { Input,  message,   } from "antd";
import { HiArrowsRightLeft } from "react-icons/hi2";
import CurrencyDropdown from "./dropdown";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { theme } from "antd"; // Ensure this path matches your project structure
import { Card, Col, Row } from "antd";
import Logo from "../../../sidebarcomponents/Logo";
import MenuList from "../../../sidebarcomponents/MenuList";
import LogoMini from "../../../sidebarcomponents/Logo Mini";

// import ToggleThemeButton from "../sidebarcomponents/ToggleThemeButton";

const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || ["INR", "EUR"]
  );

  
  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      message.error("Error fetching currencies");
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const convertCurrency = async () => {
    if (!amount) return;
    setConverting(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
    } catch (error) {
      message.error("Error converting currency");
      console.error("Error Fetching", error);
    } finally {
      setConverting(false);
    }
  };

  const handleFavorite = (currency) => {
    let updatedFavorites = [...favorites];
    if (favorites.includes(currency)) {
      updatedFavorites = updatedFavorites.filter((fav) => fav !== currency);
    } else {
      updatedFavorites.push(currency);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

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
            <Flex justify="space-between" align="center">
            <Button
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
            <h2>
                          Currency Converter
                        </h2>
                        
                        <Button  icon={<ArrowLeftOutlined />}>Back</Button>
                        </Flex>
          </Header>
          

          <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>

          <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >

                  <Card style={{ width: "100%", maxWidth: "600px" }}>
                        
                        <Row gutter={[16, 16]} align="middle">
                          {/* <Flex align="center"> */}
                              <Col xs={24} sm={10}>
                                <CurrencyDropdown
                                  favorites={favorites}
                                  currencies={currencies}
                                  title="From:"
                                  currency={fromCurrency}
                                  setCurrency={setFromCurrency}
                                  handleFavorite={handleFavorite}
                                />
                              </Col>
                          
                              <Col xs={24} sm={4}>
                                <Button
                                  onClick={swapCurrencies}
                                  icon={<HiArrowsRightLeft  />}
                                />
                              </Col>
                          
                              <Col xs={24} sm={10}>
                                <CurrencyDropdown
                                  favorites={favorites}
                                  currencies={currencies}
                                  currency={toCurrency}
                                  setCurrency={setToCurrency}
                                  title="To:"
                                  handleFavorite={handleFavorite}
                                />
                              </Col>
                          {/* </Flex> */}
                        </Row>
                        

                        <div >
                          <label htmlFor="amount">
                            Amount:
                          </label>
                          <Input
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            type="number"/>
                        </div>

                        <div >
                          <Button
                            onClick={convertCurrency}
                            type="primary"
                            className={`${converting ? "animate-pulse" : ""}`}
                            loading={converting}
                            
                          >
                            Convert
                          </Button>
                        </div>

                        {convertedAmount && (
                          <div >
                          <h4>
                          Converted Amount: {convertedAmount}
                            </h4>  
                          </div>
                        )}
                      </Card>

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




























