import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const OnlineAdvanceOrderSettings = () => {

    const location = useLocation();

    return (
        <div>
            <section className='d-flex justify-content-between align-items-center pt-3 px-3'>
                <ul className="breadcrumb d-flex text-decoration-none gap-2 align-items-center justify-content-center" style={{ textDecoration: "none" }}>
                    <a href="/outlet-settings">Outlet Settings</a>
                    <span> &gt; </span>
                    <a href={window.location.href}>Online/Advance Order Settings</a>
                </ul>

                <button className='btn btn-outline-secondary'>&larr; Back</button>
            </section>

            <hr />

            <div className='d-flex'>
                <nav className='d-flex gap-4 flex-column mini-nav py-4'>
                    <a
                        href="#auto-acceptance"
                        className={`nav-link ${location.hash === '#auto-acceptance' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Online Order Auto Acceptance
                    </a>
                    <a
                        href="#system-configuration"
                        className={`nav-link ${location.hash === '#system-configuration' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Online Orders System Configuration
                    </a>
                    <a
                        href="#preparation-time"
                        className={`nav-link ${location.hash === '#preparation-time' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Delivery and Preparation Time
                    </a>
                    <a
                        href="#advance-order-settings"
                        className={`nav-link ${location.hash === '#advance-order-settings' ? 'active-nav' : 'inactive-nav'}`}
                    >
                        Advance Order Settings
                    </a>
                </nav>

                <div className='border rounded p-3 m-3 w-100 form-div'>
                    <h4 id="auto-acceptance">Online Order Auto Acceptance</h4>
                    <p>If Auto acceptance of an online order is enabled then choose the next step after acceptance of an order. To enable an auto accept, do visit settings of Swiggy, Zomato, online ordering widget, Menu QR under marketplace section.</p>

                    <div className='ms-3 mb-5 mt-5'>
                        <div className='d-flex gap-5 align-items-center row'>
                            <div className='d-flex gap-3 align-items-center'>
                                <input type="checkbox" name="kot-print-after-auto-accept" id="kot-print-after-auto-accept" />
                                <label htmlFor="kot-print-after-auto-accept">KOT print after auto accept</label>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <input type="checkbox" name="kot-in-advance-order" id="kot-in-advance-order" />
                                <label htmlFor="kot-in-advance-order">KOT in Advance order</label>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <input type="checkbox" name="bill-print-after-auto-accept" id="bill-print-after-auto-accept" />
                                <label htmlFor="bill-print-after-auto-accept">Bill print after auto accept</label>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <input type="checkbox" name="do-not-create-memo-for-advance-orders" id="do-not-create-memo-for-advance-orders" />
                                <label htmlFor="do-not-create-memo-for-advance-orders">Do not create memo for advance orders (Offline Orders Only)</label>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <input type="checkbox" name="create-kot-on-creating-memo-for-advance-orders" id="create-kot-on-creating-memo-for-advance-orders" />
                                <label htmlFor="create-kot-on-creating-memo-for-advance-orders">Create KOT on creating memo for advance orders (Offline Orders Only)</label>
                            </div>

                            <div className='mb-5 form-div'>
                                <div className='d-flex gap-3 align-items-center'>
                                    <p>Default action while pressing (Ctrl + A) Online order accept</p>

                                    <input type="radio" name="default-action-pressing-ctrl-plus-a" id="save" />
                                    <label htmlFor="save">Save</label>

                                    <input type="radio" name="default-action-pressing-ctrl-plus-a" id="save-print" />
                                    <label htmlFor="save-print">Save & Print</label>

                                    <input type="radio" name="default-action-pressing-ctrl-plus-a" id="save-ebill" />
                                    <label htmlFor="save-ebill">Save & eBill</label>

                                    <input type="radio" name="default-action-pressing-ctrl-plus-a" id="kot" />
                                    <label htmlFor="kot">KOT</label>

                                    <input type="radio" name="default-action-pressing-ctrl-plus-a" id="kot-print" />
                                    <label htmlFor="kot-print">KOT & Print</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <h4 id="system-configuration">Online Orders System Configuration</h4>
                    <p>The following settings pertain to configuring the Online Orders System Configuration.</p>

                    <div className='ms-3 mb-5 mt-5'>
                        <div className='d-flex gap-3 align-items-center'>
                            <input type="checkbox" disabled id="ignore-online-order-delivery-charge" />
                            <label className="disabled-label" htmlFor="ignore-online-order-delivery-charge">Ignore Online Order Delivery Charge</label>
                        </div>
                    </div>

                    <div className='ms-2 mb-5 d-flex gap-5 row form-div'>
                        <div className='d-flex gap-3 align-items-center'>
                            <label htmlFor="delivery-charges">Delivery Charges :</label>
                            <input value={0} disabled type="text" id="delivery-charges" />
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <label htmlFor="minimum-order-amount">Minimum Order Amount</label>
                            <input value={0} disabled type="text" id="minimum-order-amount" />
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <label htmlFor="auto-cancel-duration">Auto Cancel Duration</label>
                            <input value={15} disabled type="text" id="auto-cancel-duration" />
                            <span>Min</span>
                        </div>
                    </div>

                    <div className='ms-3 d-flex gap-5 row mb-5 form-div'>
                        <div className='d-flex gap-3 align-items-center'>
                            <input disabled type="checkbox" id="accept-online-payment" />
                            <label className="disabled-label" htmlFor="accept-online-payment">Accept Online Payment</label>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <input disabled type="checkbox" id="generate-invoices-when-orders-accepted" />
                            <label className="disabled-label" htmlFor="generate-invoices-when-orders-accepted">Generate invoices when orders accepted using the acceptance app or web dashboard?</label>
                        </div>
                    </div>

                    <div className='ms-3 mb-5 form-div'>
                        <label htmlFor="set-sound">Set Sound</label> &nbsp; &nbsp; &nbsp;
                        <select id="set-sound">
                            <option value="sound1">Sound 1</option>
                            <option value="sound2">Sound 2</option>
                            <option value="sound3">Sound 3</option>
                        </select>
                    </div>

                    <div className='ms-3 mb-5 form-div'>
                        <div className='d-flex row gap-5 align-items-center'>
                            <div className='d-flex gap-3 align-items-center'>
                                <input type="checkbox" id="show-online-order-delivery-notification" />
                                <label htmlFor="show-online-order-delivery-notification">Do you want to show Online order delivery notification section?</label>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <input type="checkbox" id="hide-order-after-mark-food-ready" />
                                <label htmlFor="hide-order-after-mark-food-ready">Hide order after mark food ready/dispatched in live view</label>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <input type="checkbox" id="print-rider-temperature-mask-details" />
                                <label htmlFor="print-rider-temperature-mask-details">Print rider temperature/mask details in bill</label>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <input type="checkbox" id="notify-about-item-going-out-of-stock" />
                                <label htmlFor="notify-about-item-going-out-of-stock">Notify about the item(s) going out of stock</label>
                            </div>

                            <div className='d-flex gap-3 align-items-center'>
                                <p>Save customer information for orders</p>
                                <input type="checkbox" name="zomato" id="zomato" />
                                <label htmlFor="zomato">Zomato</label>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <label htmlFor="change-the-delivery-status-after">Change the delivery status after</label>
                                <input type="text" name="change-the-delivery-status-after" id="change-the-delivery-status-after" />
                                <span>Min</span>
                            </div>
                            <span className='text-primary' style={{ fontSize: "14px", marginTop: "-40px" }}> [Minimum 1 - Maximum 150]
                                Please set the time to change the delivery status once online order gets accepted.
                            </span>
                            <div className='d-flex gap-3 align-items-center'>
                                <label htmlFor="">Reminder for changing delivery status</label>
                                <select name="reminder-for-changing-delivery-status" id="reminder-for-changing-delivery-status">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                </select>
                                <span>Min</span>
                            </div>
                            <span className='text-primary' style={{ fontSize: "14px", marginTop: "-40px" }}>
                                Please set the time to change the delivery status once online order gets accepted.
                            </span>

                        </div>
                    </div>

                    <hr />

                    <h4 id="preparation-time">Delivery and Preparation time</h4>
                    <p>The following settings relate to the time taken to prepare and deliver your orders</p>

                    <div className='d-flex gap-3 row ms-3 mb-5 mt-5'>
                        <div className='d-flex gap-3 align-items-center'>
                            <label htmlFor="minimum-preparation-time">Minimum Preparation Time * :</label>
                            <input placeholder='30' type="text" id="minimum-preparation-time" />
                            <span>Min</span>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <label htmlFor="minimum-delivery-time">Minimum Delivery Time * :</label>
                            <input placeholder='30' type="text" id="minimum-delivery-time" />
                            <span>Min</span>
                        </div>
                    </div>

                    <hr />

                    <h4 id="advance-order-settings">Advance Order Settings</h4>
                    <p>The following settings relate to advance orders</p>

                    <div className='d-flex gap-3 row ms-3 mb-5 mt-5'>
                        <div className='d-flex gap-3 align-items-center'>
                            <label htmlFor="prior-reminder-for-advance-order">Prior reminder for advance order</label>
                            <select id="prior-reminder-for-advance-order">
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                                <option value="60">60</option>
                                <option value="75">75</option>
                                <option value="90">90</option>
                                <option value="105">105</option>
                                <option value="120">120</option>
                                <option value="135">135</option>
                                <option value="150">150</option>
                                <option value="165">165</option>
                                <option value="180">180</option>
                            </select>
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
    )
}

export default OnlineAdvanceOrderSettings;
