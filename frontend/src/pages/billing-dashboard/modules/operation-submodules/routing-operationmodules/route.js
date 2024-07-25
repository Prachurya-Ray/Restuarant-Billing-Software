import React from 'react'
import { Routes, Route } from 'react-router-dom'
import KOT from '../KOT/KOT.jsx'
import KOTview from '../KOT/KOTview.jsx'
import Contacts from '../Customers/contacts.jsx'
import Cashflow from '../Cashflow/cashflow.jsx'
import CashTopUp from '../Cash Top Up/CashTopUp.jsx'
import Withdraw from '../Withdraw/Withdraw.jsx'
import WithdrawManagement from '../Withdraw/WithdrawlManagement.jsx'
import AddCashTopUp from '../Cash Top Up/Topup.jsx'
import Expense from '../Expenses/Expense.jsx'
import ExpenseDetails from '../Expenses/ExpenseDetails.jsx'
import AddExpense from '../Expenses/Add.jsx'
import Help from '../Help/Help.jsx'
import Notifications from '../Notification/Notification.jsx'
import Inventory from '../Inventory/Inventory.jsx'
import CurrentStock from '../Inventory/Current Stock/CurrentStock.jsx'
import OpeningClosing from '../Inventory/Opening Closing/OpeningCLosing.jsx'
import Indent from '../Inventory/Indent Management/Indent.jsx'
import BillerProfile from '../Biller Profile/BillerProfile.jsx'
import Feedback from '../Feedback/Feedback.jsx'
import LiveView from '../Live View/LiveView.jsx'
import Orders from '../Orders/Orders.jsx'

const route = () => {
  return (
    <>
      <Routes>
        <Route path="orders" element={<Orders />} />



        <Route path="kot" element={<KOT />} />
 
        <Route path="kot/view" element={<KOTview />} />

        <Route path="contacts" element={<Contacts />} />

        <Route path="cashflow" element={<Cashflow />} />

        <Route path="cashtopup" element={<CashTopUp />} />
        <Route path="cashtopup/add" element={<AddCashTopUp />} />
        <Route path="withdraw" element={<Withdraw />} />

        <Route path="withdraw/management" element={<WithdrawManagement />} />

        <Route path="expense" element={<Expense />} />

        <Route path="expense/details" element={<ExpenseDetails />} />

        <Route path="expense/add" element={<AddExpense />} />
        <Route path="help" element={<Help />} />
        <Route path="notification" element={<Notifications />} />

        <Route path="inventorys" element={<Inventory />} />

        <Route path="inventorys/currentstock" element={<CurrentStock />} />

        <Route path="inventorys/openingclosing" element={<OpeningClosing />} />
        <Route path="inventorys/indent" element={<Indent />} />
        <Route path="billerprofile" element={<BillerProfile />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="liveview" element={<LiveView />} />
      </Routes>
    </>
  )
}

export default route
