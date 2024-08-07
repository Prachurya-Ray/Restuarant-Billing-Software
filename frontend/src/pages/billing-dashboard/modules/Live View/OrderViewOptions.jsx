import { RiGalleryView2 } from "react-icons/ri";
import { RiEBikeLine } from "react-icons/ri";
import swiggy from '../../../../assets/Swiggy_logo.png'
import zomato from '../../../../assets/zomato.png'


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
    Avatar
  } from "antd";
  import {
    WifiOutlined,
    ShoppingCartOutlined,
  } from "@ant-design/icons";
  
const OrderViewOptions = ()=>{
    return(
                
                <ul class="list-group list-group-horizontal">
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                    <RiGalleryView2 />
                        <span className='padding-1rem padding-top-0'>All</span>
                    </li>
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                    <RiEBikeLine /> 
                        <span className='padding-1rem padding-top-0'>Delivery</span>
                    </li>
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                    <ShoppingCartOutlined />
                        <span className='padding-1rem padding-top-0'>Take Away</span>
                    </li>
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                    <WifiOutlined />
                        <span className='padding-1rem padding-top-0'>Online</span>
                    </li>
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                        <Avatar src={swiggy} />
                        <span className='padding-1rem padding-top-0'>Swiggy</span>
                    </li>
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                    <Avatar src={zomato} />
                        <span className='padding-1rem padding-top-0'>Zomato</span>
                    </li>
                </ul>
        
    )
}

export default OrderViewOptions