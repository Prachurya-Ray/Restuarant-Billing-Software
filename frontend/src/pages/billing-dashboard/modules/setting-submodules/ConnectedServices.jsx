import React from 'react';
// import "./OutletSettings.css";
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const ConnectedServices = () => {

  const location = useLocation();

  return (
    <div>
      <section className='d-flex justify-content-between align-items-center pt-3 px-3'>
        <ul className="breadcrumb d-flex text-decoration-none gap-2 align-items-center justify-content-center" style={{ textDecoration: "none" }}>
          <a className='' >Outlet Settings </a>
          <span> &gt; </span>
          <a  href={window.location.href}  > Connected Services</a>
        </ul>
        <button className='btn btn-outline-secondary'>&larr; Back</button>
      </section>

      <hr className='' />

      <div className='d-flex '>

        <nav className='d-flex gap-4 flex-column  mini-nav py-4'>

          <a
            href="#inventory"
            className={`nav-link ${location.pathname === '#inventory' ? 'active-nav' : 'inactive-nav'}`}
          >
            Inventory Settings
          </a>
          <a
            href="#day-end"
            className={`nav-link ${location.pathname === '#day-end' ? 'active-nav' : 'inactive-nav'}`}
          >
            Day End Settings
          </a>
          <a
            href="#loyalty"
            className={`nav-link ${location.pathname === '#loyalty' ? 'active-nav' : 'inactive-nav'}`}
          >
            Loyalty Settings
          </a>
          <a
            href="#kds"
            className={`nav-link ${location.pathname === '#kds' ? 'active-nav' : 'inactive-nav'}`}
          >
            KDS Settings
          </a>
          <a
            href="#captain"
            className={`nav-link ${location.pathname === '#captain' ? 'active-nav' : 'inactive-nav'}`}
          >
            Captain App Settings
          </a>
          <a
            href="#e-invoice"
            className={`nav-link ${location.pathname === '#e-invoice' ? 'active-nav' : 'inactive-nav'}`}
          >
            E-Invoice Settings
          </a>
          <a
            href="#barcode"
            className={`nav-link ${location.pathname === '#barcode' ? 'active-nav' : 'inactive-nav'}`}
          >
            Barcode Settings
          </a>
          <a
            href="#expense"
            className={`nav-link ${location.pathname === '#expense' ? 'active-nav' : 'inactive-nav'}`}
          >
            Expense Settings
          </a>
          <a
            href="#invoice"
            className={`nav-link ${location.pathname === '#invoice' ? 'active-nav' : 'inactive-nav'}`}
          >
            Invoice Structure
          </a>

        </nav>


        <div className='border rounded px-4 py-5 m-3  settings-section '>
          <h4 id='inventory'>Inventory Settings</h4>
          <p>The following settings configures the inventory module in billing screen.</p>

          <div className='ms-3 mb-5 mt-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <input disabled type="checkbox" name="enable-auto-consumption-for-inventory" id="enable-auto-consumption-for-inventory" />
              <label className='disabled-label' htmlFor="enable-auto-consumption-for-inventory">Enable auto consumption for inventory</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
          </div>

          <div className='ms-3 mb-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="reset-your-stock-on-a-day-start" id="reset-your-stock-on-a-day-start" />
              <label htmlFor="reset-your-stock-on-a-day-start">Reset your stock on a day start.</label>
            </div>
          </div>

          <div className='ms-3 mb-5 form-div'>
            <div className='d-flex gap-3 align-items-center'>
              <p>Action when <br /> items goes <br /> out of stock</p>
              <input type="radio" name="action-when-items-goes-out-of-stock" id="hide-items" />
              <label htmlFor="hide-items">Hide Items</label>
              <input type="radio" name="action-when-items-goes-out-of-stock" id="disable-items" />
              <label htmlFor="disable-items">Disable Items</label>
            </div>
          </div>

          <div className='ms-2 mb-5 d-flex row gap-4'>
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="use-real-time-stock-management" id="use-real-time-stock-management" />
              <label htmlFor="use-real-time-stock-management">Use Real-Time stock management</label>
            </div>
          </div>

          <hr />

          <h4 id='day-end'>Day End Settings</h4>
          <p>The following settings helps in configures enabling day end module in billing screen.</p>

          <div className='ms-3 mb-5 mt-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <input disabled type="checkbox" name="enable-manual-day-end" id="enable-manual-day-end" />
              <label className="disabled-label" htmlFor="enable-manual-day-end">Enable Manual Day End</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
          </div>

          <div className='ms-3 mb-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <input disabled type="checkbox" name="dont-allow-day-end-if-there-is-any-active-tabledont" id="dont-allow-day-end-if-there-is-any-active-tabledont" />
              <label className="disabled-label" htmlFor="dont-allow-day-end-if-there-is-any-active-tabledont">Don't allow Day End if there is any active table on Table View Screen.</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
          </div>

          <div className='ms-3 mb-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <input disabled type="checkbox" name="dont-allow-day-end-if-there-is-any-async-orders-data" id="dont-allow-day-end-if-there-is-any-async-orders-data" />
              <label className="disabled-label" htmlFor="dont-allow-day-end-if-there-is-any-async-orders-data">Don't allow Day End if there is any a-async orders data</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
          </div>

          <div className='ms-3 mb-3 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <input disabled type="checkbox" name="restrict-editing-the-order-once-the-manual-day-end" id="restrict-editing-the-order-once-the-manual-day-end" />
              <label className="disabled-label" htmlFor="restrict-editing-the-order-once-the-manual-day-end">Restrict editing the order once the manual day end operation has been completed.</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
          </div>

          <hr />

          <h4 id='loyalty'>Loyalty Settings</h4>
          <p>The following settings pertains to configuring the Loyalty settings in the billing screen.</p>

          <div className='ms-3 mb-5 mt-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="make-send-loyalty-option" id="make-send-loyalty-option" />
              <label htmlFor="make-send-loyalty-option">Make "Send Loyalty" option set as default on Billing screen.</label>
            </div>
          </div>

          <div className='ms-3 mb-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <p>Apply Loyalty points when order punched as</p>
              <input disabled type="checkbox" checked name="apply-loyalty-points" id="delivery" />
              <label className='disabled-label' htmlFor="delivery">Delivery</label>
              <input disabled type="checkbox" checked name="apply-loyalty-points" id="take-away" />
              <label className='disabled-label' htmlFor="take-away">Take Away</label>
              <input disabled type="checkbox" checked name="apply-loyalty-points" id="dine-in" />
              <label className='disabled-label' htmlFor="dine-in">Dine In</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>Above settings enabled POS system to apply loyalty points on selected order types. <br />
              This setting is only available in cloud login.</span>
          </div>

          <div className='ms-3 mb-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <p>Send Loyalty Data (Only for Table Order):</p>
              <input type="radio" name="send-loyalty-data" id="print-bill" />
              <label htmlFor="print-bill">Print Bill</label>
              <input type="radio" name="send-loyalty-data" id="settle-and-save" />
              <label htmlFor="settle-and-save">Settle & Save</label>
            </div>
          </div>

          <hr />

          <h4 id='kds'>KDS Settings</h4>
          <p>This following settings would be used to configure the Kitchen Display System or KDS</p>

          <div className='ms-3 mb-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="kds-settings" id="send-update-to-order-screen" />
              <label htmlFor="send-update-to-order-screen">From KDS/KOT live screen send update to order screen.</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>In case of any update (like marking on item/order ready) in KDS live view. the update would be also be present in Order screen.</span>
          </div>
          <div className='ms-3 mb-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="mark-kot-as-done" id="mark-kot-as-done" />
              <label htmlFor="mark-kot-as-done">On marking done all items on KDS. Mark KOT as done.</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>Enabling the setting would mark the full KOT done at all places (including online aggeregators) when all the items are marked done.</span>
          </div>

          <hr />

          <h4 id='captain'>Captain App settings</h4>
          <p>This following settings pertains to configuring the Captain App print settings.</p>

          <div className='ms-3 mb-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="print-kot-from-captain-app" id="print-kot-from-captain-app" />
              <label htmlFor="print-kot-from-captain-app">Print KOT from Captain App.</label>
            </div>
          </div>

          <div className='ms-3 mb-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <input disabled type="checkbox" name="print-kot-from-captain-app" id="print-kot-from-captain-app" />
              <label className='disabled-label' htmlFor="print-kot-from-captain-app">Allow Discount from Captain App (Applicable for  Dine in orders only) </label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
          </div>

          <div className='ms-3 mb-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <p>Notify captain users once the food ready is marked</p>
              <input type="radio" name="notify-captain-users" id="items-ready" />
              <label htmlFor="items-ready">Items Ready</label>
              <input type="radio" name="notify-captain-users" id="kot-ready" />
              <label htmlFor="kot-ready">KOT Ready</label>
              <input type="radio" name="notify-captain-users" id="none" />
              <label htmlFor="none">None</label>
            </div>
          </div>

          <hr />

          <h4 id='e-invoice'>e-Invoice Settings</h4>
          <span>The following settings pertains to configuring the e-invoice settings.</span>
          <div className='ms-3 mb-3  form-div' >
            <div className='d-flex gap-3 mt-3 align-items-center'>
              <input disabled type="checkbox" name="enable-e-invoice" id="enable-e-invoice" />
              <label className="disabled-label" htmlFor="">Enable E-Invoice</label>
            </div>
          </div>

          <div className='d-flex row gap-3 ms-3 text-primary '>
            <span className='main-span fw-bold'>Please consider below scenario if you want to generate e-invoice:</span>

            <span>1. Please enter & verify Outlet GST information.</span>
            <span>2. Please enter proper Customer GST no. while printing the bill from POS.</span>
            <span>3. Outlet must have CGST and SGST taxes in their TAX configuration.</span>
            <span>4. Currently IGST tax is not supported.</span>
            <span>5. If you want to cancel  e-Invoice (if already generated) then you must cancel the Order.</span>
            <span>6. Please disable configuration (if any) for apply tax on Delivery charge. Service charge and Packing charge.</span>
            <span>7. Please enter proper HSN No. for every item.</span>
            <span>8. You can not create/cancel e-Invoice older than two days.</span>
            <span>9. Please reacharge e-Invoice credits from marketplace services. Without e-Invoice credits service does not work. <br />
              This setting is only available in cloud login.</span>
          </div>

          <hr />

          <h4 id='barcode'>Barcode Settings</h4>
          <span>The following settings pertains to configuring the barcode settings.</span>

          <div className='ms-3 mb-5 mt-3 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="prefix-for-barcode">Prefix for Barcode :</label>
              <input disabled type="text" name="prefix-for-barcode" id="prefix-for-barcode" />
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>This field is required if want to activate this service settings in POS. <br />
              This setting is only available in cloud login.</span>
          </div>

          <div className='ms-3 mb-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="no-of-characters-to-calculate-weight">No. of Characters to calculate Weight :</label>
              <input value={5} disabled type="text" name="no-of-characters-to-calculate-weight" id="no-of-characters-to-calculate-weight" />
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>This settting is only available in cloud login.</span>
          </div>

          <div className='ms-3 mb-5 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="weight-denominator">Weight Denominator :</label>
              <input disabled type="text" name="weight-denominator" id="weight-denominator" value={1000} />
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>This settting is only available in cloud login.</span>
          </div>

          <hr />

          <h4 id='expense'>Expense Settings</h4>
          <span>The following settings pertains to configuring the Expense settings.</span>

          <div className='ms-3 mb-5 mt-3 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <input disabled type="checkbox" name="restrict-users-to-add-expense" id="restrict-users-to-add-expense" />
              <label className="disabled-label" htmlFor="restrict-users-to-add-expense">Restrict users to add expense and withdrawal for current date only.</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>If the configuration is enabled then the users would only be able to add expense and withdrawal for current date. <br />
              This setting is only available in cloud login.</span>
          </div>

          <hr />

          <h4 id='invoice'>Invoice Structure</h4>
          <span>The following settings pertains to configuring the Invoice Structure.</span>

          <div className='ms-3 mb-3 form-div' >
            <div className='d-flex gap-3 mt-2 align-items-center'>
              <label htmlFor="">Invoice Structure* :</label>
              <input type="text" placeholder='Prefix' name="invoice-structure" id="invoice-structure" />
              <input type="text" placeholder='Number Length' name="invoice-structure" id="invoice-structure" />
              <input type="text" placeholder='Suffix' name="invoice-structure" id="invoice-structure" />
            </div>
          </div>

          <div className='ms-3 text-primary gap-2 d-flex row'>
            <span style={{ marginBottom: "-35px" }}>Note: Enter any values from configured sets:</span> <br />
            <div>
              <span>[yy]:</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <span>Ex. 18 [current year]</span>
            </div>
            <div>
              <span>[yyyy]:</span> &nbsp; &nbsp; &nbsp; &nbsp;
              <span>Ex. 2018 [current year]</span>
            </div>
            <div>
              <span>[mm]:</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <span>Ex. 01 [current month]</span>
            </div>
            <div>
              <span>[nmn]:</span> &nbsp; &nbsp; &nbsp; &nbsp;
              <span>Ex. Jan [current month]</span>
            </div>
            <div>
              <span>[dd]:</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <span>Ex. 01 [current day]</span>
            </div>
            <div>
              <span>If Ex :</span> &nbsp; &nbsp; &nbsp; &nbsp;
              <input type="text" placeholder='[yy]/ABC' /> &nbsp; &nbsp;
              <input type="text" placeholder='2' /> &nbsp; &nbsp;
              <input type="text" />
            </div>

            <div>
              <span>means invoice will be </span>
              <input type="text" placeholder='18/ABC02' />
            </div>

          </div>

          <div className='d-flex justify-content-end gap-3 settings-footer'>
              <Button variant='outline-secondary'>Cancel</Button>
              <Button variant='danger'>Save Changes</Button>
            </div>




        </div>

      </div>

    </div>

  )
}

export default ConnectedServices