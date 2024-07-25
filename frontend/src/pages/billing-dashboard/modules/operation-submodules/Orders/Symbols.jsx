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
const Symbols= ()=>{
    return(
        <Flex gap='0.5rem' align="center">
            <>
                <div className="circle orange"></div>
                <span>Delivery</span>
                <div className="symbolClr"></div>
                <span>Delivery</span>
                <div className="symbolClr"></div>
                <span>Delivery</span>
                <div className="symbolClr"></div>
                <span>Delivery</span>
            </>
        </Flex>
    )
}

export default Symbols