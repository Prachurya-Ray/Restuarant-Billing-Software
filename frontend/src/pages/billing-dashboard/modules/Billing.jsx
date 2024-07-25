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
  Card
} from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
} from "@ant-design/icons";

import Logo from "../sidebarcomponents/Logo";
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
  const [gst, setGst] = useState('')
  

  const [form] = Form.useForm();
  const { Option } = Select;

  //to post
  const [bill, setBill] = useState({
    customerName: "",
    mobileNumber: "",
    address: "",
    grandTotal:"",
    subTotal:"",
    menuItemName: "",
    menuItemPrices: "",
    menuItemAmount:"",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    // console.log(gst)
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/billingpage/billings",
        bill
      );
      console.log(response.data);
      setBill({
        customerName: "",
        mobileNumber: "",
        address: "",
        grandTotal:"",
        subTotal:"",
        menuItemName: "",
        menuItemPrices: "",
        menuItemAmount:"",
      });
    } catch (error) {
      console.log(error);
    }
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




  const changePrice=(key,priceItem)=>{
    return(
      <>
          {

            selectedItems.map((item, index) => {
              
              if(item.key===key){
                item.price=priceItem
                // console.log("Item.price: ",item.price)
                changeAmount(key,item.price)
              }


            })
          }
      </>
    )
  }

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

  const handleSubTotal = ()=>{
    var total=0
    return(
      <>
          {
            
            selectedItems.map((item,index)=>{
              total=total+item.amount
              
            })
            
          }
          {
            setSubTotal(total)
          }
      </>
    )
  }

  const handleGrandTotal = ()=>{
    var total=0
    total = (subTotal*gst)/100
    setGrandTotal(total+subTotal)
  }

  const columns = [
    {
      title: "Menu Item Name",
      dataIndex: "menuItemName",
      key: "menuItemName",
    },

    {
      title: "Special Notes",
      dataIndex: "specialNotes",
      key: "specialNotes",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleQuantityChange(record.key, e.target.value)}
          style={{ width: 50 }}
        />
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
          }}>
            Full
          </Button>
          <Button onClick={() => {
            setPrice(record.itemPrices.menuItemHalfPrice)
            changePrice(record.key,record.itemPrices.menuItemHalfPrice)
          }}>
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
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <span>
          <Button onClick={() => onEdit(record)}>Edit</Button>
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

  //tabel quantiy
  const handleQuantityChange = (key, value) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map((menu) =>
        menu.key === key ? { ...menu, qty: value } : menu
      )
    );
  };
  // Ant Design Dropdown menu
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
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          {/* <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} /> */}
        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>

          <Layout>
            <Content>
              <div className="billing-container-main">
                <div className="billing-container">
                  <div className="billing-form">
                    <Form
                      // form={billForm}
                      layout="vertical"
                      onSubmit={handleFormSubmit}
                    >
                      {/* <div className="d-flex"> */}

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
                          <div>
                            + Applied Discounts(<a href="#">Show Details</a>)
                          </div>
                          <Flex>
                            <Button 
                              className="green-button"
                              onClick={handleSubTotal}
                            >Sub-Total</Button>
                          
                          <Form.Item name="subTotal">
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
                          
                          <div>
                            <Form.Item label="GST" name="gst">
                              <Input
                                placeholder="0.00"
                                name="gst"
                                value={bill.gst}
                                onChange={(e) => setGst( e.target.value)}

                              />
                            </Form.Item>
                          </div>
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
                          <div>
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
                          </div>
                        </div>

                        {/* <div className="d-flex justify-content-between">
                          <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Cash</Radio>
                            <Radio value={2}>Card</Radio>
                            <Radio value={2}>Due Payment</Radio>
                            <Radio value={2}>Others</Radio>
                            <Radio value={2}>Part Payment</Radio>
                          </Radio.Group>
                          <div>
                            <Button type="primary">Split</Button>
                            <Button type="primary">Advance Order</Button>
                            <Button type="">Reset</Button>
                            <Button type="primary">KOT & Print</Button>
                            <Button type="">Hold</Button>
                          </div>
                        </div> */}
                        {/* <div className="d-flex">
                          <div>
                            <AntDropdown overlay={menu}>
                              <Button>
                                Dropdown <DownOutlined />
                              </Button>
                            </AntDropdown>
                          </div>
                          <div className="d-flex">
                            <Button type="primary">KOT</Button>

                            <Link to="/billingdashboardbilling">
                              <Button type="primary">Save</Button>
                            </Link>
                          </div>
                          <Button type="primary" onClick={handleFormSubmit}>
                            Submit
                          </Button>
                        </div> */}
                        <Flex justify="center" gap='3rem'>
                          <Button className="green-button" >Reset</Button>
                          <Button className="green-button" >Save</Button>
                          <Button className="green-button" >Submit</Button>
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
