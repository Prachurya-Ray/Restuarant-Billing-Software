import React from 'react';
// import "./OutletSettings.css";
import {  useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BillingSystemSettings = () => {
  const location = useLocation();
  const currentUrl = window.location.href.split('#')[0]; 
  console.log(currentUrl);
  return (
    <div>
      <section className='d-flex justify-content-between align-items-center pt-3 px-3'>
        <ul className="breadcrumb d-flex text-decoration-none gap-2 align-items-center justify-content-center" style={{ textDecoration: "none" }}>
          <a href="/outlet-settings">Outlet Settings </a>
          <span> &gt; </span>
          <a href={currentUrl}> Billing System</a>
        </ul>
        <button className='btn btn-outline-secondary'>&larr; Back</button>
      </section>
      <hr />
      <div className='d-flex '>
        <nav className='d-flex gap-4 flex-column mini-nav py-4 '>
          <a
              href="#order-sync"
            className={`nav-link ${location.hash === '#order-sync' ? 'active-nav' : 'inactive-nav'}`}
          >
            Order and Order Sync Settings
          </a>
          <a
              href="#payment-sync"
              className={`nav-link ${location.hash === '#payment-sync' ? 'active-nav' : 'inactive-nav'}`}
          >
            Payment Sync Settings
          </a>
          <a
              href="#display"
              className={`nav-link ${location.hash === '#display' ? 'active-nav' : 'inactive-nav'}`}
          >
            Display Settings
          </a>
          <a
              href="#security"
              className={`nav-link ${location.hash === '#security' ? 'active-nav' : 'inactive-nav'}`}
          >
            Security Settings
          </a>
        </nav>

        <div className='border rounded p-3 m-3 w-100 form-div billing-form'>
          <h4 id="order-sync">Order and Order Sync Settings</h4>
          <p>The following settings are related to Order synchronization and finalize settings.</p>

          <div className='ms-3 mb-5 mt-5'>
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="closing-hours">Restaurant Closing Hours</label>
              <select name="closing-hours-hour" id="closing-hours-hour">
                <option value="00">00</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
              </select>
              <select name="closing-hours-minute" id="closing-hours-minute">
                <option value="00">00</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>

          <div className='ms-3 mb-5 mt-3'>
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="sync-batch-packet-size">Sync Batch Packet Size</label>
              <select name="sync-batch-packet-size" id="sync-batch-packet-size">
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
              </select>
            </div>
          </div>

          <div className='ms-3 mb-5 mt-3'>
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="default-order-limit">Default Order Limit* :</label>
              <input type="text" name="default-order-limit" id="default-order-limit" placeholder="5000" />
            </div>
          </div>

          <div className='ms-3 mb-5 mt-3'>
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="default-auto-sync-time">Default Auto Sync Time</label>
              <select name="default-auto-sync-time" id="default-auto-sync-time">
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
              <span>Min</span>
            </div>
          </div>

          <div className='ms-3 mb-5 mt-3'>
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="default-pending-order-sync-time">Default Pending Order Sync Time</label>
              <select name="default-pending-order-sync-time" id="default-pending-order-sync-time">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <span>Sec</span>
            </div>
          </div>

          <div className='ms-3 mb-5 mt-3'>
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="default-captain-order-sync-time">Default Captain Order Intranet Sync Time</label>
              <select name="default-captain-order-sync-time" id="default-captain-order-sync-time">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <span>Sec</span>
            </div>
          </div>

          <div className='ms-3 mb-5 mt-3'>
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="edit-order-minutes">No. of Minutes to Edit Orders</label>
              <input type="text" name="edit-order-minutes" id="edit-order-minutes" value={2880} disabled />
            </div>
          </div>

          <div className='ms-3 mb-5 mt-3'>
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="auto-settle-minutes">No. of Minutes to Auto Settle After Print* :</label>
              <input type="text" name="auto-settle-minutes" id="auto-settle-minutes" value="" disabled />
            </div>
          </div>

          <div className='ms-3 mb-5 form-div'>
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="map-digital-transaction" id="map-digital-transaction" />
              <label htmlFor="map-digital-transaction">Map digital transaction entries against invoices</label>
            </div>
          </div>

          <hr />
          <h4 id="payment-sync" >Payment Sync Settings</h4>
          <p>The following settings are related to Payment synchronization settings.</p>

          <div className='ms-3 mb-5 mt-5'>
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="payment-request-sync-time">Payment request sync time* :</label>
              <input type="text" name="payment-request-sync-time" id="payment-request-sync-time" value={5} />
              <span>Sec</span>
            </div>
          </div>

          <div className='ms-3 mb-5 mt-3'>
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="check-payment-request-sync-time">Check payment request sync time* :</label>
              <input type="text" name="check-payment-request-sync-time" id="check-payment-request-sync-time" value={5} />
              <span>Sec</span>
            </div>
          </div>

          <hr />
          
          <h4 id="display">Display Settings</h4>
          <span>The following settings help in determining the settings related to the security of the application.</span>

          <div className='ms-3 mb-5 mt-5'>
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="billing-screen-refresh">Billing Screen Refresh After No. Of Bill Print* :</label>
              <input type="text" name="billing-screen-refresh" id="billing-screen-refresh" value={0} disabled />
            </div>
          </div>

          <hr />


          <h4 id="security">Security Settings</h4>
          <div className='ms-3 mb-5 mt-5'>
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="manager-password">Default Manager Password for Desktop Use :</label>
              <input type="text" name="manager-password" id="manager-password" disabled />
            </div>
          </div>

          <div className='ms-3 mb-5 mt-5'>
            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="user-idle-time">User Idle time for Logout</label>
              <input type="text" name="user-idle-time" id="user-idle-time" value={0} disabled />
              <span>Min</span>
            </div>
          </div>


          <div className='d-flex justify-content-end gap-3 settings-footer'>
            <Button variant='outline-secondary'>Cancel</Button>
            <Button variant='danger'>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSystemSettings;
