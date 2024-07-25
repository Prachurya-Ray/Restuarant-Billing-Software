import React from 'react';
import {  Routes, Route } from "react-router-dom";
// Nested routes - BillingDashboard > Outlet Settings

import DisplaySettings from "../DisplaySettings.jsx";
import Calculations from "../Calculations.jsx";
import ConnectedServices from "../ConnectedServices.jsx";
import Print from "../Print.jsx";
import CustomerSettings from "../CustomerSettings.jsx";
import BillingSystemSettings from "../BillingSystemSettings.jsx";
import OnlineAdvanceOrderSettings from "../OnlineAdvanceOrderSettings.jsx";

const route = () => {
  return (
    <>
      <Routes>
        {/* Settings in Billing Dashboard  */}

          <Route path="/display-settings" element={<DisplaySettings />} />

          <Route path="/calculations-settings" element={<Calculations />} />

          <Route path="/connected-services-settings" element={<ConnectedServices />} />

          <Route path="/print-settings" element={<Print />} />

          <Route path="/customer-settings" element={<CustomerSettings />} />

          <Route path="/online-advance-order" element={<OnlineAdvanceOrderSettings />} />

          <Route path="/billing-system-settings" element={<BillingSystemSettings />} />
      </Routes>

    </>
  );
}

export default route;
