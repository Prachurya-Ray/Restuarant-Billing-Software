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
    Switch
  } from "antd";
  import {
    FilterOutlined,
    RetweetOutlined,
    ArrowLeftOutlined,
  } from "@ant-design/icons";
  

const HeaderMenu =()=>{
    return(
        <Flex gap='1rem' align='center'>
                <Flex gap='0.5rem'>
                    <label className='margin-right-1rem' htmlFor='detailView'>View Details</label>
                    <Switch defaultChecked id='detailView'/>
                </Flex>

                <ul class="list-group list-group-horizontal margin-right-1rem container-list-height">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    <FilterOutlined />
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span className='pe-1'>Foodready </span>
                        <span class="badge bg-danger rounded-pill">0</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span className='pe-1'>Dispatch</span>
                        <span class="badge bg-danger rounded-pill">0</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span  className='pe-1'>Delivery</span>
                        <span class="badge bg-danger rounded-pill">0</span>
                    </li>
                </ul>
                <Button>
                <RetweetOutlined />
                    </Button>
                <Button><ArrowLeftOutlined />Back</Button>
                </Flex>
    )
}

export default HeaderMenu