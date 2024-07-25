import React from 'react';
// import "./OutletSettings.css";
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';



const DisplaySettings = () => {
    const location = useLocation();


    return (
        <div>
            <section className='d-flex justify-content-between align-items-center pt-3 px-3'>
            <ul className="breadcrumb d-flex text-decoration-none gap-2 align-items-center justify-content-center" style={{ textDecoration: "none" }}>
          <a className='/outlet-settings' >Outlet Settings </a>
          <span> &gt; </span>
          <a  href={window.location.href} > Display</a>
        </ul>

                <button className='btn btn-outline-secondary'>&larr; Back</button>
            </section>

            <hr />

            <div className='d-flex '>

                <nav className='d-flex gap-4 flex-column mini-nav py-4 '>

                    <a
                        href="#display-settings"
                        className={`nav-link ${location.pathname === '#display-settings' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Display Settings
                    </a>
                    <a
                        href="#default-values"
                        className={`nav-link ${location.pathname === '#default-values' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Default Values
                    </a>
                    <a
                        href="#table-settlement"
                        className={`nav-link ${location.pathname === '#table-settlement' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Table Settlement
                    </a>
                    <a
                        href="#discount"
                        className={`nav-link ${location.pathname === '#discount' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Discount
                    </a>
                    <a
                        href="#order-wise-information"
                        className={`nav-link ${location.pathname === '#order-wise-information' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Order Wise Information
                    </a>
                    <a
                        href="#negative-quantity-settings"
                        className={`nav-link ${location.pathname === '#negative-quantity-settings' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Negative Quantity Settings
                    </a>
                    <a
                        href="#order-cancel-reason-settings"
                        className={`nav-link ${location.pathname === '#order-cancel-reason-settings' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Order Cancel Reason Settings
                    </a>
                    <a
                        href="#order-edit-reason-settings"
                        className={`nav-link ${location.pathname === '#order-edit-reason-settings' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Order Edit Reason Settings
                    </a>
                    <a
                        href="#order-complimentary-reason-settings"
                        className={`nav-link ${location.pathname === '#order-complimentary-reason-settings' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Order Complimentary Reason   Settings
                    </a>
                    <a
                        href="#order-sales-return-reason-settings"
                        className={`nav-link ${location.pathname === '#order-sales-return-reason-settings' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Order Sales Return Reason Settings
                    </a>
                    <a
                        href="#lower-higher"
                        className={`nav-link ${location.pathname === '#lower-higher' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Lower / Higher Order Settlement   Amount Reason Settings
                    </a>

                </nav>

                <div className='border rounded p-3 m-3 w-100 form-div'>
                    <h4 id='display-settings'>Display Settings</h4>
                    <p>The following settings define default values for the components of the billing screen.</p>

                    <div className='ms-3 mb-5 mt-3' >
                        <div className='d-flex gap-3 align-items-center'>
                            <p>Layout for  Billing Screen :</p>
                            <input type="radio" name="layout" id="keyboard" />
                            <label htmlFor="keyboard">Keyboard</label>
                            <input type="radio" name="layout" id="touchScreen" />
                            <label htmlFor="touchScreen">Touch Screen</label>
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>Configure the type of display between a touch based or keyboard based</span>
                    </div>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <p>Default Screen  to Display :</p>
                            <input type="radio" name="defaultScreen" id="billing" />
                            <label htmlFor="billing">Billing</label>
                            <input type="radio" name="defaultScreen" id="tableManagement" />
                            <label htmlFor="tableManagement">Table Management</label>
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>Configure the type of display between a touch based or keyboard based</span>
                    </div>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <p>Order Live  View :</p>
                            <input type="radio" name="Order" id="asc" />
                            <label htmlFor="asc">ASC</label>
                            <input type="radio" name="Order" id="desc" />
                            <label htmlFor="desc">DESC</label>
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>This settings describe giw would the orders be displayed in Order live view.</span>
                    </div>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>

                            <p>KOT Live  View :</p>
                            <input type="radio" name="Order" id="asc" />
                            <label htmlFor="asc">ASC</label>
                            <input type="radio" name="Order" id="desc" />
                            <label htmlFor="desc">DESC</label>
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>This settings describe giw would the orders be displayed in KOT live view.</span>
                    </div>

                    <div className='ms-3 mb-5  d-flex gap-2 align-items-center' >
                        <input type="checkbox" name="kptBreachedOrder" id="kptBreachedOrder" />
                        <label htmlFor="kptBreachedOrder">KPT breached order should remain on top of the screen in live view</label>
                    </div>
                    <div className='ms-3 mb-5 d-flex gap-2 align-items-center' >
                        <input type="checkbox" name="displayAlerts" id="displayAlerts" />
                        <label htmlFor="displayAlerts">Display alerts for prep time exceeding or order handover on the live view card</label>
                    </div>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <p>Add New  Item in Cart :</p>
                            <input type="radio" disabled checked name="cart" id="inBottom" />
                            <label className='disabled-label' htmlFor="inBottom">In Bottom</label>
                            <input type="radio" disabled name="cart" id="onTop" />
                            <label className='disabled-label' htmlFor="onTop">On Top</label>
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                    </div>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <p>Default focus while adding item from table view (only for keyboard view) </p>
                            <input type="radio" name="default-focus-while-adding-item-from-table-view" id="add-item" />
                            <label htmlFor="add-item">Add Item</label>
                            <input type="radio" name="default-focus-while-adding-item-from-table-view" id="assign-to" />
                            <label htmlFor="assign-to">Assign To</label>
                        </div>
                    </div>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex row gap-5 align-items-center'>
                            <div>
                                <input type="checkbox" name="enable-virtual-keyboard-in-touch" id="enable-virtual-keyboard-in-touch" /> &nbsp; &nbsp;
                                <label htmlFor="enable-virtual-keyboard-in-touch">Enable virtual keyboard in touch</label>
                            </div>
                            <div>

                                <input disabled type="checkbox" name="open-virtual-keyboard-while-entering-order-number" id="open-virtual-keyboard-while-entering-order-number" /> &nbsp; &nbsp;
                                <label className="disabled-label" htmlFor="open-virtual-keyboard-while-entering-order-number">Open virtual keyboard while entering order number in Online order food ready text box.</label>
                            </div>

                            <div>
                                <input type="checkbox" name="auto-add-items-to-billing-screen-on-select" id="auto-add-items-to-billing-screen-on-select" /> &nbsp; &nbsp;
                                <label htmlFor="auto-add-items-to-billing-screen-on-select">Auto add items to billing screen on select</label>
                            </div>

                            <div>
                                <input type="checkbox" name="auto-add-items-to-billing-screen-form-variation-addon-popup" id="auto-add-items-to-billing-screen-form-variation-addon-popup" /> &nbsp; &nbsp;
                                <label htmlFor="auto-add-items-to-billing-screen-form-variation-addon-popup">Auto add items to billing screeen form variation/addon popup.</label>
                            </div>

                            <div>
                                <input type="checkbox" name="display-search-item-option" id="display-search-item-option" /> &nbsp; &nbsp;
                                <label htmlFor="display-search-item-option">Display search item option on billing screen (Only for Touch view)</label>
                            </div>

                            <div>
                                <input type="checkbox" name="addon-min-max-validation" id="addon-min-max-validation" /> &nbsp; &nbsp;
                                <label htmlFor="addon-min-max-validation">Addon Min-Max Validation.</label>
                            </div>

                            <div>
                                <input type="checkbox" name="display-item-price" id="display-item-price" /> &nbsp; &nbsp;
                                <label htmlFor="display-item-price">Display item price</label>
                            </div>

                            <div>
                                <input type="checkbox" name="display-settle-amount-textbox" id="display-settle-amount-textbox" /> &nbsp; &nbsp;
                                <label htmlFor="display-settle-amount-textbox">Display settle amount Textbox</label>
                            </div>

                            <div>
                                <input disabled type="checkbox" checked name="allow-user-to-settle-with-lower-amount" id="allow-user-to-settle-with-lower-amount" /> &nbsp; &nbsp;
                                <label className="disabled-label" htmlFor="allow-user-to-settle-with-lower-amount">Allow user to settle an order with a lower amount</label> <br />
                                <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                            </div>

                            <div>
                                <input type="checkbox" name="display-settle-and-save-button" id="display-settle-and-save-button" /> &nbsp; &nbsp;
                                <label htmlFor="display-settle-and-save-button">Display Settle and Save button for delivery and pickup orders on live view card</label>
                            </div>

                            <div>
                                <input type="checkbox" name="show-tip" id="show-tip" /> &nbsp; &nbsp;
                                <label htmlFor="show-tip">Show Tip</label>
                            </div>

                            <div>
                                <input type="checkbox" name="show-cwt-bifurcation" id="show-cwt-bifurcation" /> &nbsp; &nbsp;
                                <label htmlFor="show-cwt-bifurcation">Show CWT (Category Wise Taxes) Bifurcation on Billing Screen</label>
                            </div>

                            <div>
                                <input type="checkbox" name="by-default-make-tax-area-open" id="by-default-make-tax-area-open" /> &nbsp; &nbsp;
                                <label htmlFor="by-default-make-tax-area-open">By default make tax area open</label>
                            </div>

                            <div>
                                <input type="checkbox" name="show-kot-details-while-view-merge-kot" id="show-kot-details-while-view-merge-kot" /> &nbsp; &nbsp;
                                <label htmlFor="show-kot-details-while-view-merge-kot">Show KOT details (KOT ID and Time) while View/Merge KOT.</label>
                            </div>

                            <div>
                                <input type="checkbox" name="merge-ebill-and-print-bill" id="merge-ebill-and-print-bill" /> &nbsp; &nbsp;
                                <label htmlFor="merge-ebill-and-print-bill">Merge ebill and print bill.</label><br />
                                <span className='text-primary' style={{ fontSize: "14px" }}>This settings send e-bill when the bill is printed.</span>
                            </div>

                            <div>
                                <input type="checkbox" name="no-of-persons-mandatory" id="no-of-persons-mandatory" /> &nbsp; &nbsp;
                                <label htmlFor="no-of-persons-mandatory">No. of Persons Mandatory</label>
                            </div>

                            <div>
                                <input type="checkbox" name="show-addon-quantity-with-total-item-quantity" id="show-addon-quantity-with-total-item-quantity" /> &nbsp; &nbsp;
                                <label htmlFor="show-addon-quantity-with-total-item-quantity">Show Addon Quantity with the total item quantity (multiplication) to perpare in Bill.</label> <br />
                                <span className='text-primary' style={{ fontSize: "14px" }}>Order/KOT Live view and KDS.</span>
                            </div>

                            <div>
                                <input type="checkbox" name="display-errors-while-checking-printer-status" id="display-errors-while-checking-printer-status" /> &nbsp; &nbsp;
                                <label htmlFor="display-errors-while-checking-printer-status">Display errors while checking printer status.</label>
                            </div>

                            <div>
                                <input type="checkbox" name="custom-payment-info-mandatory" id="custom-payment-info-mandatory" /> &nbsp; &nbsp;
                                <label htmlFor="custom-payment-info-mandatory">Custom Payment Information Mandatory.</label>
                            </div>

                            <div>
                                <input type="checkbox" name="dont-allow-the-biller-to-punch-item-quantity-in-decimal" id="dont-allow-the-biller-to-punch-item-quantity-in-decimal" /> &nbsp; &nbsp;
                                <label htmlFor="dont-allow-the-biller-to-punch-item-quantity-in-decimal">Do not allow the biller to punch item quantity in decimal.</label>
                            </div>

                            <div>
                                <input type="checkbox" name="skip-item-special-notes" id="skip-item-special-notes" /> &nbsp; &nbsp;
                                <label htmlFor="skip-item-special-notes">Skip item special notes focus on billing screen (only for keyboard view)</label>
                            </div>

                        </div>

                        <div className='mb-5  mt-5 form-div' >
                            <div className='d-flex gap-3 align-items-center'>
                                <p>Set option for quick links for items in table view screen.</p>
                                <input type="radio" name="set-option-for-quick-links" id="save-and-print" />
                                <label htmlFor="save-and-print">Save & Print</label>
                                <input type="radio" name="set-option-for-quick-links" id="view-kot" />
                                <label htmlFor="view-kot">View KOT</label>
                                <input type="radio" name="set-option-for-quick-links" id="both" />
                                <label htmlFor="both">Both</label>
                            </div>
                        </div>

                        <div className=' mb-5 form-div' >
                            <div className='d-flex row gap-4 align-items-center'>
                                <div>
                                    <input type="checkbox" name="consider-category-scheduling" id="consider-category-scheduling" /> &nbsp; &nbsp;
                                    <label htmlFor="consider-category-scheduling">Consider category scheduling for offline billing.</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="show-suggested-items" id="show-suggested-items" /> &nbsp; &nbsp;
                                    <label htmlFor="show-suggested-items">Show suggested items against the item selected on billing.</label>
                                </div>
                            </div>
                        </div>

                        <div className=' mb-5 form-div' >
                            <div className='d-flex gap-3 align-items-center'>
                                <p>Assign to validation on billing screen</p>

                                <input disabled type="checkbox" value="delivery" name="delivery" id="delivery" />
                                <label className="disabled-label" htmlFor="delivery">Delivery</label>

                                <input disabled type="checkbox" value="take-away" name="take-away" id="take-away" />
                                <label className="disabled-label" htmlFor="take-away">Take Away</label>

                                <input disabled type="checkbox" value="dine-in" name="dine-in" id="dine-in" />
                                <label className="disabled-label" htmlFor="dine-in">Dine In</label>
                            </div>
                            <span className='text-primary' style={{ fontSize: "14px" }}>Note: Once Configured the bill/KOT must be assigned to an asignee compulsory for the order type selected.</span>
                        </div>

                        <div className='mb-5 form-div' >
                            <div className='d-flex gap-3 align-items-center'>
                                <p>Mark Order and KOT as completed once the bill is settled</p>

                                <input disabled type="checkbox" value="delivery" name="delivery" id="delivery" />
                                <label className="disabled-label" htmlFor="delivery">Delivery</label>

                                <input disabled type="checkbox" value="take-away" name="take-away" id="take-away" />
                                <label className="disabled-label" htmlFor="take-away">Take Away</label>

                                <input checked disabled type="checkbox" value="dine-in" name="dine-in" id="dine-in" />
                                <label className="disabled-label" htmlFor="dine-in">Dine In</label>
                            </div>
                            <span className='text-primary' style={{ fontSize: "14px" }}>Note: Once the bill is settled the order or KOT would be removed from KDS token application. This configuration would not work for online orders.</span>
                        </div>

                    </div>

                        <hr />

                    <h4 id='default-values'>Default Values</h4>
                    <p>The following settings are used to configure the default values of the different settings</p>

                    <div className='ms-3 mb-5 mt-3 default-values form-div' >
                        <div className='d-flex gap-5 row align-items-center'>
                            <div>
                                <label htmlFor="default-order-type">Default Order Type :</label> &nbsp; &nbsp; &nbsp;
                                <select name="default-order-type" id="default-order-type">
                                    <option value="Take-Away">Take Away</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="default-order-type">Default Order Type :</label>  &nbsp; &nbsp; &nbsp;
                                <select name="default-order-type" id="default-order-type">
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="default-custom-payment-type">Default Custom Payment Type :</label>  &nbsp; &nbsp; &nbsp;
                                <select name="default-custom-payment-type" id="default-custom-payment-type">
                                    <option value="Take-Away">Take Away</option>
                                </select>
                            </div>
                        </div>

                        <div className='mt-5 mb-5 form-div' >
                            <div className='d-flex gap-3 align-items-center'>
                                <label htmlFor="default-table-number">Default Table No.</label>
                                <input type="text" name="default-table-number" id="default-table-number" />
                            </div>
                        </div>

                        <div className=' mb-5 form-div' >
                            <div className='d-flex gap-3 align-items-center'>
                                <label htmlFor="default-petty-cash-amount">Default Petty Cash Amount* :</label>
                                <input type="text" placeholder='2000' name="default-petty-cash-amount" id="default-petty-cash-amount" />
                            </div>
                            <span className='text-primary' style={{ fontSize: "14px" }}>This would be the amount of potty cash that would be populated unless another amount is entered.</span>
                            </div>

                        <div className=' mb-5 form-div' >
                            <div className='d-flex gap-3 align-items-center'>
                                <label htmlFor="item-quantity">Item Quantity :</label>
                                <input disabled type="text" name="item-quantity" id="item-quantity" value="1, 2, 3, 5, 10" />
                            </div>
                            <span className='text-primary' style={{ fontSize: "14px" }}>( Comma separated numeric values only ) <br />
                            This setting is only available in cloud login.</span>
                        </div>

                        <div className=' mb-5 form-div' >
                            <div className='d-flex gap-3 align-items-center'>
                                <label htmlFor="item-price">Item Price :</label>
                                <input disabled type="text" name="item-price" id="item-price" value="5, 10, 25, 50, 100" />
                            </div>
                            <span className='text-primary' style={{ fontSize: "14px" }}>( Comma separated numeric values only ) <br />
                            This setting is only available in cloud login.</span>
                        </div>
                        <div className=' mb-5 form-div' >
                            <div className='d-flex gap-3 align-items-center'>
                                <label htmlFor="default-quantity">Default Quantity * :</label>
                                <input disabled type="text" name="default-quantity" id="default-quantity" value="1" />
                            </div>
                            <span className='text-primary' style={{ fontSize: "14px" }}>Default Quantity while adding items to cart <br />
                            Leave it blank if the quantity would be printed manually by this user (In Keyboard Layout) <br />
                            This setting is only available in cloud login.</span>
                        </div>

                        <div className=' mb-5 form-div' >
                            <div className='d-flex gap-3 align-items-center'>
                                <input disabled type="checkbox" name="finalize-order" id="finalize-order" />
                                <label className="disabled-label" htmlFor="finalize-order">Finalize Order</label>
                            </div>
                            <span className='text-primary' style={{ fontSize: "14px" }}>
                            This setting is only available in cloud login.</span>
                        </div>

                        <div className=' mb-5 form-div' >
                            <label htmlFor="font-configuration">Font Configuration :</label> &nbsp; &nbsp; &nbsp;
                            <select name="font-configuration" id="font-configuration">
                                <option value="default">Default</option>
                            </select>
                        </div>
                    </div>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <p>Default Login Screen</p>
                            <input type="radio" name="default-login-screen" id="" />
                            <label htmlFor="">Username/Password</label>
                            <input type="radio" name="default-login-screen" id="" />
                            <label htmlFor="">Passcode</label>
                            <input type="radio" name="default-login-screen" id="" />
                            <label htmlFor="">Swipe Card</label>
                        </div>
                    </div>

                    <hr />

                    <h4 id='table-settlement'>Table Settlement</h4>
                    <p>The following settings helps i configuring  locking and releasing table in billing screen</p>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <p>Lock Active Table :</p>
                            <input type="radio" name="lock-active-table" id="" />
                            <label htmlFor="">Save & Print</label>
                            <input type="radio" name="lock-active-table" id="" />
                            <label htmlFor="">Settle & Save</label>
                            <input type="radio" name="lock-active-table" id="" />
                            <label htmlFor="">None</label>
                        </div>
                    </div>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <p>Release Table On :</p>
                            <input type="radio" name="release-table-on" id="" />
                            <label htmlFor="">Print Bill</label>
                            <input type="radio" name="release-table-on" id="" />
                            <label htmlFor="">Settle & Save</label>
                        </div>
                    </div>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <p>Release Recent Section On :</p>
                            <input type="radio" name="release-recent-section-on" id="" />
                            <label htmlFor="">Print Bill</label>
                            <input type="radio" name="release-recent-section-on" id="" />
                            <label htmlFor="">Settle & Save</label>
                        </div>
                    </div>

                    <hr />

                    <h4 id='discount'>Discount</h4>
                    <span>The following settings help in describing discount in the billing screen.</span>

                    <div className='ms-3 mt-5 mb-5 form-div' >
                        <div className='d-flex row gap-2 align-items-center'>
                            <label htmlFor="discount-label">Discount Label :</label> <br />
                            <input type="text" name="discount-label" id="discount-label" placeholder='Coupon Code' />
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>This setting would describe what would the discount would be dispalyed on</span>
                    </div>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex row gap-2 align-items-center'>
                            <label htmlFor="discount-calculate-button-text">Discount Calculate Button Text* :</label> <br />
                            <input type="text" name="discount-calculate-button-text" id="discount-calculate-button-text" placeholder='Apply' />
                        </div>
                    </div>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <input type="checkbox" name="display-leave-as-it-is-no-discount-screen" id="display-leave-as-it-is-no-discount-screen" />
                            <label htmlFor="display-leave-as-it-is-no-discount-screen">Display "Leave as it is. (No Discount) on Discount Screen ?</label>
                        </div>
                    </div>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <input type="checkbox" name="by-default-make-discount-area-open" id="by-default-make-discount-area-open" />
                            <label htmlFor="by-default-make-discount-area-open">By default make discount area open</label>
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>This settings enables default display of disount area in billing screen.</span>
                    </div>

                    <hr />

                    <h4 id='order-wise-information'>Order Wise Information</h4>
                    <span>The following settings helps in configures enabling as well as configuring Order wise information</span>

                    <div className='ms-3 mt-5 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <input type="checkbox" name="enable-order-wise-information" id="enable-order-wise-information" />
                            <label htmlFor="enable-order-wise-information">Enable Order wise information</label>
                        </div>
                    </div>

                    <hr />
                    <h4 id='negative-quantity-settings' >Negative Quantity Settings</h4>
                    <span>The following settings pertains to configuring the negative quantity settings in the billing screen</span>

                    <div className='ms-3 mt-5 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <p>Negative Quantity Reason :</p>
                            <input type="checkbox" name="allow-negative-quantity" id="allow-negative-quantity" />
                            <label htmlFor="allow-negative-quantity">Allow negative quantity</label>
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                    </div>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <input type="checkbox" name="allow-negative-quantity" id="allow-negative-quantity" />
                            <label htmlFor="allow-negative-quantity">Allow negative quantity</label>
                        </div>
                    </div>

                    <h4 id='order-cancel-reason-settings'>Order Cancel Reason Settings</h4>
                    <span>The following settings pertains to configuring the order cancel settings in the billing scree,.</span>

                    <div className='ms-3 mb-5 mt-5 form-div' >
                        <div className='d-flex gap-3 mt-5 align-items-center'>
                            <label className='label-disabled' htmlFor="order-cancel-reason-one">Order Cancel Reason 1 :</label>
                            <input disabled type="text" name="order-cancel-reason-one" id="order-cancel-reason-one" placeholder='undefined' />
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                        <div className='d-flex gap-3 mt-5 align-items-center'>
                            <label className='label-disabled' htmlFor="order-cancel-reason-two">Order Cancel Reason 2 :</label>
                            <input disabled type="text" name="order-cancel-reason-two" id="order-cancel-reason-two" placeholder='undefined' />
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                        <div className='d-flex gap-3 mt-5 align-items-center'>
                            <label className='label-disabled' htmlFor="order-cancel-reason-three">Order Cancel Reason 3 :</label>
                            <input disabled type="text" name="order-cancel-reason-three" id="order-cancel-reason-three" placeholder='undefined' />
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                        <div className='d-flex gap-3 mt-5 align-items-center'>
                            <label className='label-disabled' htmlFor="order-cancel-reason-four">Order Cancel Reason 4 :</label>
                            <input disabled type="text" name="order-cancel-reason-four" id="order-cancel-reason-four" placeholder='undefined' />
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>


                        <div className=' mb-5 mt-5 form-div' >
                            <div className='d-flex gap-3 align-items-center'>
                                <input type="checkbox" name="show-biller-an-option-to-release-used-kots-while-cancelling-a-bill" id="show-biller-an-option-to-release-used-kots-while-cancelling-a-bill" />
                                <label htmlFor="show-biller-an-option-to-release-used-kots-while-cancelling-a-bill">Show Biller an option to release used KOTs while cancelling a bill. (within same day KOTs only only) (so, biller can create new Bill using the older KOTs.)</label>
                            </div>
                        </div>

                        <div className=' mb-5 form-div' >
                            <div className='d-flex gap-3 align-items-center'>
                                <label htmlFor="order-cancel-otp">Order Cancel OTP :</label>
                                <input disabled type="text" name="order-cancel-otp" id="order-cancel-otp" />
                            </div>
                            <span className='text-primary' style={{ fontSize: "14px" }}>Enter Email ID through which you will receive OTP while cancel order. You can add more than one with, separated . <br />
                                This setting is only available in cloud login.</span>
                        </div>
                    </div>


                    <hr />

                    <h4 id='order-edit-reason-settings'>Order Edit Reason Settings</h4>
                    <span>The following settings pertains to configuring the order edit settings in the billing screen.</span>



                    <div className='d-flex ms-3 gap-3 mt-5 align-items-center'>
                        <label className='label-disabled' htmlFor="order-cancel-reason-one">Order Edit Reason 1 :</label>
                        <input disabled type="text" name="order-cancel-reason-one" id="order-cancel-reason-one" placeholder='' />
                    </div>
                    <span className='text-primary ms-3' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                    <div className='d-flex ms-3 gap-3 mt-5 align-items-center'>
                        <label className='label-disabled' htmlFor="order-cancel-reason-two">Order Edit Reason 2 :</label>
                        <input disabled type="text" name="order-cancel-reason-two" id="order-cancel-reason-two" placeholder='' />
                    </div>
                    <span className='text-primary ms-3' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                    <div className='d-flex ms-3 gap-3 mt-5 align-items-center'>
                        <label className='label-disabled' htmlFor="order-cancel-reason-three">Order Edit Reason 3 :</label>
                        <input disabled type="text" name="order-cancel-reason-three" id="order-cancel-reason-three" placeholder='' />
                    </div>
                    <span className='text-primary ms-3' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                    <div className='d-flex ms-3 gap-3 mt-5 align-items-center'>
                        <label className='label-disabled' htmlFor="order-cancel-reason-four">Order Edit Reason 4 :</label>
                        <input disabled type="text" name="order-cancel-reason-four" id="order-cancel-reason-four" placeholder='' />
                    </div>
                    <span className='text-primary ms-3' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>

                    <div className='mt-5 ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <label htmlFor="order-edit-otp">Order Edit OTP :</label>
                            <input disabled type="text" name="order-edit-otp" id="order-edit-otp" />
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>Enter Email ID through which you will receive OTP while edit order after print. You can add more than one with, separated . <br />
                            This setting is only available in cloud login.</span>
                    </div>

                    <hr />

                    <h4 id='order-complimentary-reason-settings'>Order Complimentary Reason Settings</h4>
                    <span>The following settings pertains to configuring the order complimentary settings in the billing screen.</span>

                    <div className='d-flex ms-3 gap-3 mt-5 align-items-center'>
                        <label className='label-disabled' htmlFor="order-complimentary-reason-one">Order Complimentary Reason 1 :</label>
                        <input disabled type="text" name="order-complimentary-reason-one" id="order-complimentary-reason-one" placeholder='' />
                    </div>
                    <span className='text-primary ms-3' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                    <div className='d-flex ms-3 gap-3 mt-5 align-items-center'>
                        <label className='label-disabled' htmlFor="order-complimentary-reason-two">Order Complimentary Reason 2 :</label>
                        <input disabled type="text" name="order-complimentary-reason-two" id="order-complimentary-reason-two" placeholder='' />
                    </div>
                    <span className='text-primary ms-3' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                    <div className='d-flex ms-3 gap-3 mt-5 align-items-center'>
                        <label className='label-disabled' htmlFor="order-complimentary-reason-three">Order Complimentary Reason 3 :</label>
                        <input disabled type="text" name="order-complimentary-reason-three" id="order-complimentary-reason-three" placeholder='' />
                    </div>
                    <span className='text-primary ms-3' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                    <div className='d-flex ms-3 gap-3 mt-5 align-items-center'>
                        <label className='label-disabled' htmlFor="order-complimentary-reason-four">Order Complimentary Reason 4 :</label>
                        <input disabled type="text" name="order-complimentary-reason-four" id="order-complimentary-reason-four" placeholder='' />
                    </div>
                    <span className='text-primary ms-3' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>

                    <div className='mt-5 ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <label htmlFor="order-complimentary-otp">Order Complimentary OTP :</label>
                            <input disabled type="text" name="order-complimentary-otp" id="order-complimentary-otp" />
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>Enter Email ID through which you will receive OTP while complimentory order after print. You can add more than one with, separated . <br />
                            This setting is only available in cloud login.</span>
                    </div>

                    <h4 id='order-sales-return-reason-settings'>Order Sales Return Reason Settings</h4>
                    <span>The following settings pertains to configuring the order sales return settings in the billing screen.</span>

                    <div className='d-flex ms-3 gap-3 mt-5 align-items-center'>
                        <label className='label-disabled' htmlFor="order-sales-return-reason-one">Order Sales Return Reason 1 :</label>
                        <input disabled type="text" name="order-sales-return-reason-one" id="order-sales-return-reason-one" placeholder='' />
                    </div>
                    <span className='text-primary ms-3' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                    <div className='d-flex ms-3 gap-3 mt-5 align-items-center'>
                        <label className='label-disabled' htmlFor="order-sales-return-reason-two">Order Sales Return Reason 2 :</label>
                        <input disabled type="text" name="order-sales-return-reason-two" id="order-sales-return-reason-two" placeholder='' />
                    </div>
                    <span className='text-primary ms-3' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                    <div className='d-flex ms-3 gap-3 mt-5 align-items-center'>
                        <label className='label-disabled' htmlFor="order-sales-return-reason-three">Order Sales Return Reason 3 :</label>
                        <input disabled type="text" name="order-sales-return-reason-three" id="order-sales-return-reason-three" placeholder='' />
                    </div>
                    <span className='text-primary ms-3' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                    <div className='d-flex ms-3 gap-3 mt-5 align-items-center'>
                        <label className='label-disabled' htmlFor="order-sales-return-reason-four">Order Sales Return Reason 4 :</label>
                        <input disabled type="text" name="order-sales-return-reason-four" id="order-sales-return-reason-four" placeholder='' />
                    </div>
                    <span className='text-primary ms-3' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>

                    <div className='mt-5 ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 align-items-center'>
                            <label htmlFor="order-sales-return-otp">Order Sales Return OTP :</label>
                            <input disabled type="text" name="order-sales-return-otp" id="order-sales-return-otp" />
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>Enter Email ID through which you will receive OTP while sales return order. You can add more than one with, separated . <br />
                            This setting is only available in cloud login.</span>
                    </div>

                    <hr />

                    <h4 id='lower-higher'>Lower / Higher order settlement amount reason Settings</h4>
                    <span>The following settings pertains to configuring the order settlement settings in the billing screen.</span>

                    <div className='ms-3 mb-5 form-div' >
                        <div className='d-flex gap-3 mt-5 align-items-center'>
                            <input disabled type="checkbox" name="reason-for-settling-order-amount" id="reason-for-settling-order-amount" />
                            <label className="disabled-label" htmlFor="reason-for-settling-order-amount">Reason for settling order amount other than the invoice total</label>
                        </div>
                        <span className='text-primary' style={{ fontSize: "14px" }}>This setting is only available in cloud login.</span>
                    </div>


                    <div className='d-flex justify-content-end gap-3 settings-footer'>
              <Button variant='outline-secondary'>Cancel</Button>
              <Button variant='danger'>Save Changes</Button>
            </div>


                </div>
            </div>
        </div >


    );
}

export default DisplaySettings;
