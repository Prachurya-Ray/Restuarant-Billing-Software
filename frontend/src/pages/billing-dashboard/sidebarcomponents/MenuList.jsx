import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { IoMdGitNetwork } from "react-icons/io";
import { TbReport } from "react-icons/tb";
import { MdOutlineUpdate } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  PayCircleOutlined,
  SettingOutlined,
  AreaChartOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const MenuList = ({ darkTheme }) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="billing">
        <Link to="/billingdashboardbilling" className="noUnderline"><CiViewList /> Billing</Link>
      </Menu.Item>
      <Menu.Item key="operations" icon={<IoMdGitNetwork />}>
        <Link to="/billingdashboardoperation" className="noUnderline"> Operations</Link>
      </Menu.Item>

      <Menu.SubMenu key="reports" icon={<TbReport />} title="Reports">
        <Menu.Item key="categorySummary">
          <Link to="/category-summary" className="noUnderline"> Category Summary</Link>
        </Menu.Item>
        <Menu.Item key="itemSummary">
          <Link to="/item-summary" className="noUnderline"> Item Summary</Link>
        </Menu.Item>
        <Menu.Item key="salesSummary">
          <Link to="/sales-summary" className="noUnderline"> Sales Summary</Link>
        </Menu.Item>
        <Menu.Item key="orderSummary">
          <Link to="/order-summary" className="noUnderline"> Order Summary</Link>
        </Menu.Item>
        <Menu.Item key="executiveSalesSummary">
          <Link to="/executive-sales-summary" className="noUnderline"> Executive Sales Summary</Link>
        </Menu.Item>
        <Menu.Item key="employeeSummary">
          <Link to="/employee-summary" className="noUnderline"> Employee Summary</Link>
        </Menu.Item>
        <Menu.Item key="groupSummary">
          <Link to="/group-summary" className="noUnderline"> Group Summary</Link>
        </Menu.Item>
        <Menu.Item key="variationSummary">
          <Link to="/variation-summary" className="noUnderline"> Variation Summary</Link>
        </Menu.Item>
        <Menu.Item key="coverSizeSummary">
          <Link to="/cover-size-summary" className="noUnderline">Cover Size Summary</Link>
        </Menu.Item>
        <Menu.Item key="tipSummary">
          <Link to="/tip-summary" className="noUnderline"> Tip Summary</Link>
        </Menu.Item>
        <Menu.Item key="counterSummary">
          <Link to="/counter-summary" className="noUnderline"> Counter Summary</Link>
        </Menu.Item>
        <Menu.Item key="localityWiseSummary">
          <Link to="/locality-wise-summary" className="noUnderline"> Locality Wise Summary</Link>
        </Menu.Item>
        <Menu.Item key="captiainWiseSummary">
          <Link to="/captain-summary" className="noUnderline"> Captian Wise Summary</Link>
        </Menu.Item>
        <Menu.Item key="ncItemSummary">
          <Link to="/nc-item-summary" className="noUnderline"> Nc Item Summary</Link>
        </Menu.Item>

        {/* <Menu.SubMenu key='subtasks' title="Subtasks">
        <Menu.Item key='subtasks-1'>Subtasks 1</Menu.Item>
        <Menu.Item key='subtasks-2'>Subtasks 2</Menu.Item>
      </Menu.SubMenu> */}
      </Menu.SubMenu>

      <Menu.Item key="inventory" icon={<MdOutlineLiveTv />}>
        <Link to="/billingdashboardliveview" className="noUnderline"> Live View</Link>
      </Menu.Item>
      <Menu.Item key="marketPlace"  icon={<SettingOutlined />}>
        <Link to="/billingdashboardsettings" className="noUnderline"> Settings</Link>
      </Menu.Item>

      <Menu.Item key="suppliersHub" icon={<MdOutlineUpdate />}>
        Check Updates
        <Link to="/billingdashboardcheckupdates" className="noUnderline"> Check Updates</Link>
      </Menu.Item>

      <Menu.Item key="setting">
        <Link to="/mainbillingdashboard" className="noUnderline"><IoMdLogOut /> Logout</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
