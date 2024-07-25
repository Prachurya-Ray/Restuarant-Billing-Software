import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import CreateItems from "./components/CreateItems";
import UpdateItems from "./components/UpdateItems";
// import RoutingLogin from "./pages/Login/SignUp";
// import RoutingSignup from "./pages/Login/SignIn";
// import RoutingForgetPwd from "./pages/Login/ForgetPwd";
// import RoutingCreatePwd from "./pages/Login/CreatePwd";
// import RoutingSignupc from "./pages/Login/SignUp copy";
import Main from "./pages/Main/index.jsx";
import Signup from "./pages/Singup/index.jsx";
import Login from "./pages/Login/index.jsx";
import EmailVerify from "./pages/EmailVerify/index.jsx";
import ForgetPassword from "./pages/ForgetPassWord/index";
import ResetPassword from "./pages/PasswordReset/index.jsx";
import Dashboard from "./components/MainFile/Main";
// import Error from "./components/Error.js";

import MainBillingDashboard from "./pages/billing-dashboard/MainBilling";
import BillingDashboardSwipeCard from "./pages/billing-dashboard/SwipeCard";
import BillingDashboardPasscode from "./pages/billing-dashboard/PassCode";

import BillingDashboardBilling from "./pages/billing-dashboard/modules/Billing";
import BillingDashboardOperation from "./pages/billing-dashboard/modules/Operations.jsx";
import BillingDashboardCheckUpdates from "./pages/billing-dashboard/modules/CheckUpdates";
import BillingDashboardLiveView from "./pages/billing-dashboard/modules/Orders/Orders.jsx";
import BillingDashboardSettings from "./pages/billing-dashboard/modules/Settings";
import RoutingReport from "./pages/billing-dashboard/modules/report-submodules/routing-reportmodules/route";
import RoutingOperation from "./pages/billing-dashboard/modules/operation-submodules/routing-operationmodules/route.js";
import RoutingSetting from "./pages/billing-dashboard/modules/setting-submodules/routing-settingmodules/route.js";

import AdminDashboardInventory from "./pages/add-items-Admin/Inventory.jsx";
import AdminDashboardAddMenuItem from "./pages/add-menu-item/AddMenuItem.jsx";

// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import AdminOrder from "./components/AdminOrder/AdminOrder.jsx";
import UserOrder from "./components/UserOrder/UserOrder.jsx";



function App() {
  // const notify = () => toast("Wow so easy!");
  const user = localStorage.getItem("token");

  return (
    <>
      {/* <button onClick={notify}>Notify!</button> */}
      {/* <ToastContainer /> */}
      <BrowserRouter>
        <Routes>


        {user && <Route path="/" exact element={<Dashboard />} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />


          <Route path="/create" element={<CreateItems />} />
          <Route path="/home" element={<Home />} />
          <Route path="/updateitems/:bid" element={<UpdateItems />} />
          {/* <Route path="/signup" element={<RoutingLogin />} />
          <Route path="/signin" element={<RoutingSignup />} />
          <Route path="/forgetpwd" element={<RoutingForgetPwd />} />
          <Route path="/createpwd" element={<RoutingCreatePwd />} />
          <Route path="/signupc" element={<RoutingSignupc />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/mainbillingdashboard"
            element={<MainBillingDashboard />}
          />
          <Route
            path="/billingdashboardbilling"
            element={<BillingDashboardBilling />}
          />
          <Route
            path="/billingdashboardoperation"
            element={<BillingDashboardOperation />}
          />
          <Route
            path="/billingdashboardcheckupdates"
            element={<BillingDashboardCheckUpdates />}
          />
          <Route
            path="/billingdashboardsettings"
            element={<BillingDashboardSettings />}
          />
          <Route
            path="/billingdashboardliveview"
            element={<BillingDashboardLiveView />}
          />
          <Route
            path="/billingdashboardswipecard"
            element={<BillingDashboardSwipeCard />}
          />
          <Route
            path="/billingdashboardpasscode"
            element={<BillingDashboardPasscode />}
          />

          <Route
            path="/inventory"
            element={<AdminDashboardInventory />}
          />
            <Route
            path="/menuitem"
            element={<AdminDashboardAddMenuItem />}
          />
         
          {/* Orders section for Admin and User accounts */}
          <Route path="/admin/orders" element={<AdminOrder />} />
          <Route path="/user/orders" element={<UserOrder />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <RoutingReport />
        <RoutingOperation />
        <RoutingSetting />


      </BrowserRouter>
    </>
  );
}

export default App;
