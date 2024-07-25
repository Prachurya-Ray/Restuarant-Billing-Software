import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Form, Button, Card, Container } from 'react-bootstrap';
import "./OutletSettings.css"



const Print = () => {
  const location = useLocation();
  return (
    <div>
      <section className='d-flex justify-content-between align-items-center pt-3 px-3'>
        <ul className="breadcrumb d-flex text-decoration-none gap-2 align-items-center justify-content-center" style={{ textDecoration: "none" }}>
          <a className='/outlet-settings' >Outlet Settings </a>
          <span> &gt; </span>
          <a href={window.location.href} > Print</a>
        </ul>
        <button className='btn btn-outline-secondary'>&larr; Back</button>
      </section>

      <hr />

      <div className='d-flex '>

        <nav className='d-flex gap-4 flex-column mini-nav py-4 '>

          <a
            href="#both"
            className={`nav-link ${location.hash === '#both' ? 'active-nav' : 'inactive-nav'}`}
          >
            Both
          </a>

          <a
            href="#kot-print"
            className={`nav-link ${location.pathname === '#kot-print' ? 'active-nav' : 'inactive-nav'}`}
          >
            KOT Print
          </a>
          <a
            href="#bill-print"
            className={`nav-link ${location.pathname === '#bill-print' ? 'active-nav' : 'inactive-nav'}`}
          >
            Bill Print
          </a>

        </nav>

        <Container className='my-3'>
          <Card className='border rounded p-3 m-3'>
            <Card.Body>
              <Card.Title id='both'>Both</Card.Title>
              <Card.Text>The following section helps in configuring Bill/KOT print settings.</Card.Text>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="keyboard"
                  label="Show barcode on Bill/KOT to MFR and Swiggy DE pickup."
                />
                <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                  This would work for all delivery pick-up orders & all KOTs. Activating this configuration would enable it for all the general printers. Enable/Disable barcode print from the printer wise configuration in PoS.
                </Form.Text>
              </Form.Group>

              <hr />

              <Card.Title id='kot-print'>KOT Print</Card.Title>
              <Card.Text>The following section helps in configuring KOT print settings.</Card.Text>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="print-kot-on-print-bill"
                  label="Print KOT on Print Bill"
                />
                <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                  This setting will only work when the print bill action is initiated for the first time for the reprint of KOT. The user must do that from KOT listing in the PoS.
                </Form.Text>
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="print-only-modified-kot"
                  label="Print Only Modified KOT"
                />
                <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                  This setting when enabled print only the KOT where modification (i.e item change or item deletion) with the label "Modified" on the top of the KOT.
                </Form.Text>
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="print-only-modified-items-in-kot"
                  label="Print Only Modified items in KOT"
                />
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="print-cancelled-kot"
                  label="Print Cancelled KOT"
                />
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="print-add-ons-and-special-notes"
                  label="Print add-ons and special notes below item row in KOT"
                />
                <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                  Print add-ons and special notes for the particular item below the item name row in KOT.
                </Form.Text>
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="show-duplicates"
                  label="Show Duplicate in KOT in case of multiple prints"
                />
                <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                  When a KOT is re-printed. It would show Duplicate at the top of the KOT.
                </Form.Text>
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="print-deleted-items-in-kot"
                  label="Print Deleted items in KOT"
                />
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="print-deleted-items-in-separate-kot"
                  label="Print Deleted items in separate KOT"
                  disabled
                />
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="show-online-orders-mark-ready"
                  label="Show online orders mark food ready bar code on printed KOT"
                />
                <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                  This bar code when scanned by compatible application and hardware will mark the food ready. This currently works for Online orders.
                </Form.Text>
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="while-moving-kot-items-print-kot"
                  label="While moving KOT items from one table to another table print KOT"
                />
              </Form.Group>

              <hr />

              <Card.Title id='bill-print'>Bill Print</Card.Title>
              <Card.Text>The following section helps in configuring Bill print settings.</Card.Text>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="print-category-wise-tax"
                  label="Print Category wise Tax(CWT) bifurcation on bill"
                />
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Label>Select item price print option in bill print :</Form.Label>
                <div className='d-flex row gap-4'>
                  <Form.Check
                    type="radio"
                    id="without-backward-tax"
                    name="select-item-price-to-print"
                    label="Individual item price will be shown (without backward tax) on printed bill."
                  />
                  <Form.Check
                    type="radio"
                    id="including-backward-tax"
                    name="select-item-price-to-print"
                    label="Individual item price will be shown (including backward tax) on printed bill."
                  />
                </div>
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="show-backward-tax-on-printed-bill"
                  label="Show Backward tax on printed bill"
                />
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="show-duplicate-on-printed-bill"
                  label="Show Duplicate on a bill in case of multiple prints"
                />
                <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                  When a bill is re-printed, it would show Duplicate at the top of the bill.
                </Form.Text>
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="show-customer-paid"
                  label="Show Customer paid and return to customer in bill print"
                />
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="print-kot-as-token-no"
                  label="Print KOT number on bill as Token No."
                />
                <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                  [Note: If this options selected then it shows KOT no. on those bills whose KOT's are available in desktop application]
                </Form.Text>
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="show-addons-in-bill-print"
                  label="Show add-ons in bill print"
                />
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="online-orders-mark-ready"
                  label="Show online orders mark food ready bar code on printed bill"
                />
                <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                  This bar code when scanned by compatible application and hardware will mark the food ready. This currently works for Online orders.
                </Form.Text>
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="merge-duplicate-item"
                  label="Merge Duplicate Item"
                />
                <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                  This setting enables merging same items on bill is printed.
                </Form.Text>
              </Form.Group>

              <Form.Group className='ms-3 mb-5 mt-3'>
                <Form.Check
                  type="checkbox"
                  id="merge-e-bill-and-print-bill"
                  label="Merge e-bill and print bill"
                />
                <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                  This settings send e-bill when the bill is printed.
                </Form.Text>
              </Form.Group>

              <div className='d-flex justify-content-end gap-3 settings-footer'>
                <Button variant='outline-secondary'>Cancel</Button>
                <Button variant='danger'>Save Changes</Button>
              </div>
            </Card.Body>
          </Card>
        </Container>


      </div>

    </div>


  )
}

export default Print