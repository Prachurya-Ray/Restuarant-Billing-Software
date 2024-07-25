import React from 'react';
// import "./OutletSettings.css";
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';




const Calculations = () => {
  const location = useLocation();

  return (
    <div>
      <section className='d-flex justify-content-between align-items-center pt-3 px-3'>
        <ul className="breadcrumb d-flex text-decoration-none gap-2 align-items-center justify-content-center" style={{ textDecoration: "none" }}>
          <a className='/outlet-settings' >Outlet Settings </a>
          <span> &gt; </span>
          <a href={window.location.pathname} > Calculations</a>
        </ul>

        <button className='btn btn-outline-secondary'>&larr; Back</button>
      </section>

      <hr />

      <div className='d-flex '>

        <nav className='d-flex gap-4 flex-column mini-nav py-4 '>

          <a
            href="#round-off"
            className={`nav-link ${location.pathname === '#round-off' ? 'active-nav' : 'inactive-nav'}`}
          >
            Round-Off Options
          </a>
          <a
            href="#service-charge"
            className={`nav-link ${location.pathname === '#service-charge' ? 'active-nav' : 'inactive-nav'}`}
          >
            Service Charge
          </a>
          <a
            href="#container-charge"
            className={`nav-link ${location.pathname === '#container-charge' ? 'active-nav' : 'inactive-nav'}`}
          >
            Container Charge
          </a>
          <a
            href="#delivery-charge"
            className={`nav-link ${location.pathname === '#delivery-charge' ? 'active-nav' : 'inactive-nav'}`}
          >
            Delivery Charge
          </a>
          <a
            href="#discount"
            className={`nav-link ${location.pathname === '#discount' ? 'active-nav' : 'inactive-nav'}`}
          >
            Discount
          </a>
          <a
            href="#kot-bill"
            className={`nav-link ${location.pathname === '#kot-bill' ? 'active-nav' : 'inactive-nav'}`}
          >
            KOT/Bill
          </a>
          <a
            href="#special-notes"
            className={`nav-link ${location.pathname === '#special-notes' ? 'active-nav' : 'inactive-nav'}`}
          >
            Special Notes
          </a>
          <a
            href="#surcharge"
            className={`nav-link ${location.pathname === '#surcharge' ? 'active-nav' : 'inactive-nav'}`}
          >
            Surcharge
          </a>

        </nav>
        
        <div className='border rounded p-3 m-3 w-100 form-div'>
          <h4 id='round-off'>Round-Off Options</h4>
          <p>The following settings portains to configuring the Round-Off Options.</p>

          <div className='ms-3 mb-5 mt-3 form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <p>Round off  options for   billing :</p>

              <input type="radio" name="round-off-options" id="Normal" />
              <label htmlFor="Normal">Normal</label>
              <input type="radio" name="round-off-options" id="Round off up" />
              <label htmlFor="Round off up">Round off up</label>
              <input type="radio" name="round-off-options" id="Round off down" />
              <label htmlFor="Round off down">Round off down</label>
              <input type="radio" name="round-off-options" id="None" />
              <label htmlFor="None">None</label>

            </div>
          </div>

          <div className='ms-3 mb-5 mt-3  form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <p>Round the  number of the   increments of * :</p>
              <label htmlFor="round-the-number"></label>
              <select name="round-the-number" id="round-the-number">
                <option value="1">1(Default)</option>
                <option value="0.5">0.5</option>
                <option value="0.25">0.25</option>
                <option value="0.05">0.05</option>
              </select>
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>In this, the number would be rounded to the increment that is selected for example, if round-up option is selected and the increment is selected of 0.25, then the number 2.20 would be rounded to 2.25</span>
          </div>

          <div className='ms-3 mb-5 mt-3  form-div' >
            <div className='d-flex gap-3 align-items-center'>
              <p>Select decimal points for invoice calculation and Menu price input* :</p>
              <label htmlFor="select-decimal-points"></label>
              <select name="select-decimal-points" id="select-decimal-points">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <span className='text-primary' style={{ fontSize: "14px" }}>The rounding calculation related to invoice would be based on the number selected in the dropdown. For example if is selected 0.9277 would be rounded to 1.0</span>
          </div>

          <hr />

          <div className=' py-3 ' >
            <h4 id='service-charge'>Service Charge</h4>
            <p className='w-100'>The following settings describes the settings related to the service charge in the billing screen.</p>

            <div className="d-flex row gap-3 py-3 px-3">
              <div className='d-flex mb-3 gap-3 align-items-center'>
                <input type="checkbox" name="display-and-calculate-service-charge" id="display-and-calculate-service-charge" />
                <label htmlFor="display-and-calculate-service-charge">Display & Calculate Service Charge</label>
              </div>
              <span className='text-primary' style={{ fontSize: "14px", marginTop: "-15px" }}>Note: As per guidelines issued by the Central Consumer Protection Protection Authority, service charges can not be automatically (or by default) added to a bill in addition to a bill in addition, outlet can not charge taxes on service charges</span>
            </div>
          </div>

          <hr />

          <div className=' form-div py-3 ' >
            <h4 id='container-charge'>Container Charge</h4>
            <p className='w-100'>The following settings describes the settings related to the container charge in the billing screen.</p>

            <div className="d-flex row gap-4 py-3 px-3">
              <div className='d-flex mb-3 gap-3 align-items-center'>
                <input type="checkbox" name="show-container" id="show-container" />
                <label htmlFor="show-container">Show Container Charge On Billing Screen</label>
              </div>


              <div className='d-flex mb-3 gap-3 align-items-center'>
                <label htmlFor="container-charge-label">Container Charge Label</label>
                <input type="text" placeholder="Container Charge" name="container-charge-label" id="container-charge-label" />
              </div>

              <div className='d-flex mb-3 gap-3 align-items-center'>
                <p>Round off options for billing:</p>
                <input type="radio" name="container-charge" id="item-wise" />
                <label htmlFor="item-wise">Item wise</label>
                <input type="radio" name="container-charge" id="order-wise" />
                <label htmlFor="order-wise">Order wise</label>
              </div>
              <span className='text-primary' style={{ fontSize: "14px", marginTop: "-40px" }}>This setting defines wheather the container charge is item wise and order wise.</span>

              <div className='d-flex mb-3 gap-3 align-items-center'>
                <p>Calculate Container Charge Automatically :</p>
                <input type="checkbox" name="calculate-container-charge-automatically" id="delivery" />
                <label htmlFor="delivery">Delivery</label>
                <input type="checkbox" name="calculate-container-charge-automatically" id="take-away" />
                <label htmlFor="take-away">Take Away</label>
              </div>
              <span className='text-primary' style={{ fontSize: "14px", marginTop: "-40px" }}>This setting enables container charge without pressing a button beside the label in billing screen</span>

              <div className='d-flex mb-3 gap-3 align-items-center'>
                <input type="checkbox" placeholder="0" name="calculate-tax-on-container-charge" id="calculate-tax-on-container-charge" />
                <label htmlFor="calculate-tax-on-container-charge">Calculate Tax On Container Charge</label>
              </div>

              <div className='d-flex mb-3 gap-3 align-items-center'>
                <p>Set a specific amount to calculate :</p>
                <input type="radio" name="amount-to-calculate" id="greater-than" />
                <label htmlFor="grearadio">Greater Than</label>
                <input type="radio" name="amount-to-calculate" id="less-than" />
                <label htmlFor="less-than">Less Than</label>
                <input type="radio" name="amount-to-calculate" id="none" />
                <label htmlFor="">None</label>
              </div>

              <div className='d-flex mb-3 gap-3 align-items-center'>
                <label htmlFor="Amount">Amount :</label>
                <input type="number" placeholder="0" name="Amount" id="Amount" />
              </div>

            </div>


          </div>

          <hr />


          <h4 id='delivery-charge'>Delivery Charge</h4>
          <p>The following settings describes the settings related to the delivery charge in the billing screen.</p>
          <div className="d-flex gap-3 py-2 row">


            <div className='ms-3 mt-3  form-div' >
              <div className='d-flex gap-3 align-items-center'>
                <div className='d-flex mb-3 gap-3 align-items-center'>
                  <input type="checkbox" name="show-delivery-charges" id="show-delivery-charges" />
                  <label htmlFor="show-delivery-charges">Show Delivery Charge on Billing Screen</label>
                </div>
              </div>
              <span className='text-primary' style={{ fontSize: "14px" }}>This setting defines wheather the container charge is item wise and order wise.</span>
            </div>

            <div className='ms-2 mb-5 mt-3 form-div d-flex gap-4 row' >
              <div className='d-flex gap-3 align-items-center'>
                <label htmlFor="default-delivery-charge">Default Delivery Charge <br /> (Only for Delivery) :</label>
                <input type="number" placeholder="0" name="default-delivery-charge" id="default-delivery-charge" />
              </div>

              <div className='d-flex mb-3 gap-3 align-items-center'>
                <input type="checkbox" name="calculate-tax-on-delivery-charge" id="calculate-tax-on-delivery-charge" />
                <label htmlFor="calculate-tax-on-delivery-charge">Calculate tax on Delivery Charge</label>

              </div>

              <div className='d-flex mb-3 gap-3 align-items-center'>
                <p>Set a specific amount to calculate :</p>
                <input type="radio" name="amount-to-calculate" id="greater-than" />
                <label htmlFor="grearadio">Greater Than</label>
                <input type="radio" name="amount-to-calculate" id="less-than" />
                <label htmlFor="less-than">Less Than</label>
                <input type="radio" name="amount-to-calculate" id="none" />
                <label htmlFor="">None</label>
              </div>

              <div className='d-flex mb-3 gap-3 align-items-center'>
                <label htmlFor="Amount">Amount :</label>
                <input type="number" placeholder="0" name="Amount" id="Amount" />
              </div>
            </div>
          </div>

          <hr />

          <h4 id='discount'>Discount</h4>
          <p>The following settings help in describing the discount in the billing screen.</p>

          <div className='ms-3 mb-5 mt-3 d-flex row gap-5' >
            <div className='d-flex mt-4 gap-3 align-items-center'>
              <input type="checkbox" name="calculate-tax-before-discount-calculation" id="calculate-tax-before-discount-calculation" />
              <label htmlFor="calculate-tax-before-discount-calculation">Calculate Tax Before Discount Calculation</label>
            </div>

            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="calculate-backward-tax-after-discount" id="calculate-backward-tax-after-discount" />
              <label htmlFor="calculate-backward-tax-after-discount">Calculate Backward Tax After Discount</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px", marginTop: "-40px" }} >Note: Ignore this settings if you are using forward tax configuration for your outlet</span>

            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="item-category-discount-auto-applied" id="item-category-discount-auto-applied" />
              <label htmlFor="item-category-discount-auto-applied">Item/Category wise discount box auto-applied</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px", marginTop: "-40px" }} >Note: Ignore this settings if you are using forward tax configuration for your outlet</span>

            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="show-item-category-wise-discount-box" id="show-item-category-wise-discount-box" />
              <label htmlFor="show-item-category-wise-discount-box">Show Item/Category wise discount box while adding an item</label>
            </div>

            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="apply-bogo-automatically" id="apply-bogo-automatically" />
              <label htmlFor="apply-bogo-automatically">Apply Bogo Automatically</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px", marginTop: "-40px" }} >This setting enables Bogo discount without pressing a button in billing screen.</span>

            <div className='d-flex gap-3 align-items-center'>
              <input disabled type="checkbox" name="common-coupon-discount" id="common-coupon-discount" />
              <label className='disabled-label' htmlFor="common-coupon-discount">Common Coupon Discount</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px", marginTop: "-40px" }} >This settings enables the coupon configured by HO/Chain outlet to be applicable in the outlet. <br />
              This setting is only available in cloud login.</span>

            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="ignore-add-on-price" id="ignore-add-on-price" />
              <label htmlFor="ignore-add-on-price">Ignore add-on price while calculating discount (works for all types for discount)</label>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="special-discount-reason-mandatory" id="special-discount-reason-mandatory" />
              <label htmlFor="special-discount-reason-mandatory">Special discount reason mandatory</label>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="display-discount-coupon-textbox" id="display-discount-coupon-textbox" />
              <label htmlFor="display-discount-coupon-textbox">Display Discount/Coupon Textbox</label>
            </div>

          </div>

          <hr />

          <h4 id='kot-bill'>KOT/Bill</h4>
          <p>The following settings help in describing the discount in the billing screen.</p>
          <div className='ms-3 mb-5 mt-5 d-flex row gap-5' >
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="assign-bill-sales-to-kot-punched-user" id="assign-bill-sales-to-kot-punched-user" />
              <label htmlFor="assign-bill-sales-to-kot-punched-user">Assign Bill sales to KOT punched user</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px", marginTop: "-40px" }} >When this setting is enabled the bill sales would be assigned to the user who punched the KOT in the relevant reports.</span>

            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="save-kot-on-save-bill" id="save-kot-on-save-bill" />
              <label htmlFor="save-kot-on-save-bill">Save KOT On Save Bill (Only first time not in edit)</label>
            </div>

            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="consider-non-prepared-kot-in-bill" id="consider-non-prepared-kot-in-bill" />
              <label htmlFor="consider-non-prepared-kot-in-bill">Consider Non Prepared KOT in Bill</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px", marginTop: "-40px" }} >When this setting is enabled even the KOT which is not marked as prepared in the system would be considered while printing bill.</span>


            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="merge-duplicate-items" id="merge-duplicate-items" />
              <label htmlFor="merge-duplicate-items">Merge duplicate items</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px", marginTop: "-40px" }} >This setting enables merging same items on billing screen</span>

            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="split-a-bill-when-multiple-groups" id="split-a-bill-when-multiple-groups" />
              <label htmlFor="split-a-bill-when-multiple-groups">Split a bill when multiple groups are present</label>
            </div>

            <div className='d-flex gap-3 align-items-center'>
              <input disabled type="checkbox" name="auto-finalize-order" id="auto-finalize-order" />
              <label className='disabled-label' htmlFor="auto-finalize-order">Auto Finalize Order</label>
            </div>
            <span className='text-primary' style={{ fontSize: "14px", marginTop: "-40px" }} >This setting is only available in cloud login.</span>

            <div className='d-flex gap-3 align-items-center'>
              <label htmlFor="everyday-reset-kot-number-from">Everyday reset KOT <br /> number from* :</label>
              <input type="number" name="everyday-reset-kot-number-from" id="everyday-reset-kot-number-from" />
            </div>
            <span className='text-primary' style={{ fontSize: "14px", marginTop: "-40px" }} >When this setting is enabled, the KOT number would reset to this particular number at the start of every day</span>

            <div className='d-flex gap-3 align-items-center'>
              <p>Split Bill <br /> Options</p>
              <input type="radio" name="split-bill-options" id="print-group-wise" />
              <label htmlFor="print-group-wise">Print Group Wise</label>
              <input type="radio" name="split-bill-options" id="generate-separate-bills" />
              <label htmlFor="generate-separate-bills">Generate Separate Bills</label>
            </div>
          </div>

          <hr />

          <h4 id='complimentary-bill'>Complimentary Bill</h4>
          <p>The following settings configures the Complimentary order in billing screen.</p>
          <div className='ms-3 mb-5 mt-4 d-flex row gap-4' >
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="disable-taxes-and-other-charges" id="disable-taxes-and-other-charges" />
              <label htmlFor="disable-taxes-and-other-charges">Disable Taxes and other Charges (Packing charge, Delivery charge, Service charge) on Complimentary Bill.</label>
            </div>
          </div>

          <hr />

          <h4 id='special-notes' >Special Notes</h4>
          <p>The following settings describes the settings related to the special notes in the billing screen.</p>
          <div className='ms-3 mb-5 mt-4 d-flex row gap-4' >
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="save-special-notes-master" id="save-special-notes-master" />
              <label htmlFor="save-special-notes-master">Save special note into special notes master while saving kot/orders.</label>
            </div>
          </div>

          <hr />

          <h4 id='surcharge' >Surcharge</h4>
          <p>The following settings describes the settings related to the surcharge in the billing screen.</p>
          <div className='ms-3 mb-5 mt-4 d-flex row gap-4' >
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" name="display-and-calculate-surcharge" id="display-and-calculate-surcharge" />
              <label htmlFor="display-and-calculate-surcharge">Display & Calculate Surcharge</label>
            </div>
          </div>

          <div className='d-flex justify-content-end gap-3 settings-footer'>
            <Button variant='outline-secondary'>Cancel</Button>
            <Button variant='danger'>Save Changes</Button>
          </div>


        </div>


      </div >

    </div>
  );
}

export default Calculations;
