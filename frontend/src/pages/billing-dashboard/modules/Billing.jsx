import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Layout,
  Table,
  theme,
  Radio,
  Form,
  Input,
  Menu,
  Dropdown as AntDropdown,
  Checkbox,
  Modal,
  Select,
  Flex,
  Card,
  Divider
} from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
} from "@ant-design/icons";

import Logo from "../sidebarcomponents/Logo";
import LogoMini from "../sidebarcomponents/Logo Mini";
import MenuList from "../sidebarcomponents/MenuList";
import ToggleThemeButton from "../sidebarcomponents/ToggleThemeButton";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [itemMenuData, setItemMenuData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [iPrice, setPrice] = useState(0);
  const [iAmount, setAmount] = useState(0);
  const [iQuantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState('');
  const [grandTotal, setGrandTotal] = useState('');
  const [discount, setDiscount] = useState('');
  
  

  const [form] = Form.useForm();
  const { Option } = Select;

  //to post
  const [bill, setBill] = useState({
    customerName: "",
    mobileNumber: "",
    address: "",
    grandTotal:"",
    subTotal:"",
    discount:"",
    items:[],
    date:"2015-04-13",
  });

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const dates = today.getDate();
    console.log('Today: ', today)
    const dateData = `${year}-${month < 10 ? `0${month}` : month}-${dates < 10 ? `0${dates}` : dates}`;
    console.log(dateData);

    setBill(prevBill => ({
      ...prevBill,
      date: dateData,
    }));

    
  }

  useEffect(()=>{
    
    getDate();
  },[])



  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {

      console.log('Date:',bill.date)
        

      const items= selectedItems.map(item => ({
        menuItemName: item.menuItemName,
        menuItemPrices: item.price,
        menuItemAmount: item.amount
      }))

      const updatedBill = {
        ...bill,
        subTotal: subTotal,
        grandTotal: grandTotal,
        items: items
        
      };

  
      const response = await axios.post(
        "http://localhost:8080/api/billingpage/billings",
        updatedBill
      );
      
      console.log(response.data);
  
      setBill({
        customerName: "",
        mobileNumber: "",
        address: "",
        subTotal: "",
        grandTotal: "",
        items: [],
        date:"",
      });
      setSelectedItems([]);
      setSubTotal(0);
      setGrandTotal(0);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setBill({
      ...bill,
      [name]: value,
    });
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




  

  const changeAmount=(key,priceItem)=>{
    return(
      <>
          {selectedItems.map((item, index) => {
              if(item.key===key){
                console.log(item)
                item.amount=priceItem*item.qty
              }


            })}
      </>
    )
  }

 
  useEffect(() => {
    const calculateSubTotal = () => {
      let total = 0;
      selectedItems.forEach((item) => {
        let amount = item.amount;
        if (item.menuItemGst > 0) {
          amount += amount * item.menuItemGst / 100;
        }
        if (item.menuItemDiscount > 0) {
          amount -= amount * item.menuItemDiscount / 100;
        }
        total += amount;
      });
      setSubTotal(total);
    };
    calculateSubTotal();
  }, [selectedItems]);
  

  const handleGrandTotal = ()=>{
    var total=0
    total = (subTotal*discount)/100
    setGrandTotal(subTotal-total)
  }

  const columns = [
    {
      title: "Menu Item Name",
      dataIndex: "menuItemName",
      key: "menuItemName",
    },

    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
      render: (text, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap:'0.5rem' }}>
          <Button
            onClick={() => handleQuantityChange(record.key, record.qty - 1)}
            disabled={record.qty <= 1} // Prevent quantity from going below 1
            className="green-button"
          >
            -
          </Button>
          <Input
            value={text}
            onChange={(e) => handleQuantityChange(record.key, Number(e.target.value))}
            style={{ width: 50, textAlign: 'center' }}
          />
          <Button onClick={() => handleQuantityChange(record.key, record.qty + 1)} className="green-button">
            +
          </Button>
        </div>
      ),
    },
    {
      title: "Half And Full",
      dataIndex: "menuItemPrices",
      key: "menuItemPrices",
      render: (text, record) => (
        <>
        {/* {console.log("Record: ",record)} */}
          <Button onClick={() => {
            setPrice(record.itemPrices.menuItemFullPrice)
            changePrice(record.key,record.itemPrices.menuItemFullPrice)
          }}
          className="green-hover">
            Full
          </Button>
          <Button onClick={() => {
            setPrice(record.itemPrices.menuItemHalfPrice)
            changePrice(record.key,record.itemPrices.menuItemHalfPrice)
          }}
          className="green-hover">
            Half
          </Button>
        </>
       
      ),
    },

    
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "GST",
      dataIndex: "menuItemGst",
      key: "menuItemGst",
    },
    {
      title: "Discount",
      dataIndex: "menuItemDiscount",
      key: "menuItemDiscount",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <span>
          <Button onClick={() => onDelete(record.key)} danger>
            Delete
          </Button>
        </span>
      ),
    },
  ];


  useEffect(() => {
    getMenuItem();
  }, []);

  const getMenuItem = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/menu/menuview"
      );
      const data = response.data;
      console.log("Fetched data:", data); // Debugging log
      if (Array.isArray(data.menu)) {
        setItemMenuData(data.menu);
        setFilteredItems(data.menu);
      } else {
        console.error("Fetched data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  

  const deleteMenuItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/menu/menudelete/${id}`);
      getMenuItem(); // Refresh items after deletion
    } catch (error) {
      console.error("Error deleting menu item:", error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("Dropdown toggled:", !isOpen);
  };

  const handleDropdownItemClick = (menu) => {
    setSelectedItems((prevSelectedItems) => [
      ...prevSelectedItems,
      {
        key: menu._id,
        menuItemName: menu.menuItemName,
        // specialNotes: "", // Add your data here
        menuItemPrices: {
          halfPrice: menu.menuItemHalfPrice,
          fullPrice: menu.menuItemFullPrice,
        },
        price: iPrice, // Assuming you want to set the default price to fullPrice
        amount: iAmount*iQuantity, // Example amount
        itemPrices: menu.menuItemPrices, // Assuming you want to set the default price to fullPrice
        menuItemDiscount:menu.menuItemDiscount,
        menuItemGst:menu.menuItemGst,
        qty: 1,
      },
    ]);
    setIsOpen(false);
    // Close dropdown after selection
  };

  //edit button table
  const onEdit = (menu) => {
    setEditingItem(menu);
    form.setFieldsValue(menu);
    setIsModalOpen(true);
  };



  const changePrice = (key, priceItem) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map((item) => {
        if (item.key === key) {
          const updatedItem = { ...item, price: priceItem, amount: priceItem * item.qty };
          return updatedItem;
        }
        return item;
      })
    );
  };
  
  const handleQuantityChange = (key, value) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map((item) => {
        if (item.key === key) {
          const updatedItem = { ...item, qty: value, amount: item.price * value };
          return updatedItem;
        }
        return item;
      })
    );
  };
  

  //delete button table

  const onDelete = (key) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((menu) => menu.key !== key)
    );
  };

  //oK Button button table
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.map((menu) =>
            menu.key === editingItem.key ? { ...menu, ...values } : menu
          )
        );
        setIsModalOpen(false);
        setEditingItem(null);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };
  //Cancel Button button table

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  //dropdown search
  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);
    setFilteredItems(
      itemMenuData.filter((menu) =>
        menu.menuItemName.toLowerCase().includes(searchText)
      )
    );
  };

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
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            zIndex: 100,
          }}
        >
                  {collapsed?<LogoMini />:<Logo/>}
          <MenuList darkTheme={darkTheme} />
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
            <Content
          style={{
            margin: "64px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 64px)",
          }}>
              <div className="billing-container-main">
                <div className="billing-container">
                  <div className="billing-form">
                    <Form
                      // form={billForm}
                      layout="vertical"
                      onSubmit={handleFormSubmit}
                    >
                      <Flex justify="space-around">

                      <Form.Item
                        label="Name"
                        name="customerName"
                        style={{ maxWidth: 400 }}
                      >
                        <Input
                          placeholder="Enter Name of Customer"
                          name="customerName"
                          value={bill.customerName}
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                      <Form.Item
                        label="Mobile"
                        name="mobileNumber"
                        style={{ maxWidth: 400 }}
                      >
                        <Input
                          placeholder="Enter min. 10 digit number"
                          name="mobileNumber"
                          value={bill.mobileNumber}
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                      {/* </div> */}
                      {/* <div className="d-flex"> */}
                      <Form.Item
                        label="Address"
                        name="address"
                        style={{ maxWidth: 400 }}
                      >
                        <Input
                          placeholder="Enter address"
                          name="address"
                          value={bill.address}
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                      </Flex>
                      <Divider/>
                      <div className="d-flex">
                        <div className="dropdown">
                          <button
                          
                            onClick={toggleDropdown}
                            className="dropdown-toggle green-button"
                          >
                            Item List
                          </button>
                          <ul
                            className={`dropdown-menu ${isOpen ? "show" : ""}`}
                            style={{
                              maxHeight: "180px", // Adjust max height as needed
                              overflowY: "auto", // Enable scrolling
                            }}
                          >
                            <li className="dropdown-item">
                              <Input
                                placeholder="Search items"
                                value={searchText}
                                onChange={handleSearch}
                              />
                            </li>
                            {filteredItems.map((menu) => (
                              <li
                                key={menu._id}
                                className="dropdown-item"
                                onClick={() => handleDropdownItemClick(menu)}
                              >
                                {menu.menuItemName}
                                {/* {console.log(selectedItems)} */}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Table
                        dataSource={selectedItems}
                        pagination={false}
                        columns={columns}
                      />
                      <div>
                        <div className="d-flex justify-content-between">
                          <Form.Item name="complimentary">
                            <Checkbox>Complimentary</Checkbox>
                          </Form.Item>
                          <Flex align="center" gap='1rem'>
                            
                          
                            <Form.Item label="Total" name="subTotal">
                              <Card 
                                style={{ 
                                  width: 150, 
                                  height: 50, 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  justifyContent: 'center', 
                                  textAlign: 'center' 
                                }}
                              >
                                {subTotal}
                              </Card>
                            
                            
                            </Form.Item>
                          </Flex>
                          
                          <Flex>
                            <Form.Item label="Discount/Coupon" name="discount">
                              <Input
                                placeholder="0.00"
                                name="discount"
                                value={bill.discount}
                                onChange={(e) => setDiscount( e.target.value)}

                              />
                            </Form.Item>
                          </Flex>
                          {/* <Form.Item label="Round Off" name="roundOff">
                            <Input
                              placeholder="0"
                              name="roundOff"
                              value={bill.roundOff}
                              onChange={handleInputChange}
                            />
                          </Form.Item> */}
                        </div>

                        <div className="d-flex justify-content-between">
                          <div>
                            <Form.Item name="orderWiseComments">
                              <Input placeholder="Order Wise Comments" />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item name="customerAlreadyPaid">
                              <Checkbox>
                                Customer Already Paid for this Order
                              </Checkbox>
                            </Form.Item>
                          </div>
                          <Flex align="center" gap='1rem'>
                            <Button
                              className="green-button"
                                onClick={handleGrandTotal}
                            >Grand Total</Button>
                            <Form.Item name="grandTotal">
                            <Card 
                              style={{ 
                                width: 150, 
                                height: 50, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                textAlign: 'center' 
                              }}
                            >
                              {grandTotal}
                            </Card>
                            </Form.Item>
                          </Flex>
                        </div>
                        <Flex justify="center" gap='3rem'>
                          <Button className="green-button" >Reset</Button>
                          <Button className="green-button" >Save</Button>
                          <Button className="green-button" onClick={handleFormSubmit} >Submit</Button>
                        </Flex>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      <Modal
        title="Edit Item"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="menuItemName" label="Menu Item">
            <Input />
          </Form.Item>
          {/* <Form.Item name="checkItems" label="Check Items">
            <Input />
          </Form.Item> */}
          <Form.Item name="specialNotes" label="Special Notes">
            <Input />
          </Form.Item>
          <Form.Item name="qty" label="Qty.">
            <Input />
          </Form.Item>
          <Form.Item name="menuItemPrices" label="Price">
            <Input />
          </Form.Item>
          <Form.Item name="menuItemAmount" label="Amount">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default App;
