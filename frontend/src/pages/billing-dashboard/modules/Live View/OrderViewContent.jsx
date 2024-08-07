
import OrderViewOptions from './OrderViewOptions';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
    Select
  } from "antd";
  import {
    SearchOutlined,
  } from "@ant-design/icons";
  
const OrderViewContent = ()=>{
    return (
        <Flex align='center' gap='1rem' className='mx-2 px-2 border border-2 rounded-bottom'>
                <Button>
                <SearchOutlined />
                </Button>
                <OrderViewOptions />
                <button type="button" className="menu-right-orderView container-list-height btn btn-light margin-right-1rem" >
                    {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                    </button>
                <Flex gap='0.5rem'>
                    <input type="text" className="form-control" placeholder="Enter Order No." aria-label="Search" />
                    <Button type='primary' danger>MRF</Button>
                </Flex>
            </Flex>
    )
}

export default OrderViewContent