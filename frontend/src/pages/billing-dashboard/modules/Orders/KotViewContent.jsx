import Symbols from './Symbols';
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
  
const KotViewContent =()=>{
    return(
        <Flex justify='space-between' className='m-3'>
            <Button><SearchOutlined/>Search</Button>
            <Symbols/>
        </Flex>
       
    )
}

export default KotViewContent