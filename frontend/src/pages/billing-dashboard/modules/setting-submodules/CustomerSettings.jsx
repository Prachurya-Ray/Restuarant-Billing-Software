import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import "./OutletSettings.css";


const CustomerSettings = () => {
  const location = useLocation();

  const currentUrl = window.location.href
  // console.log(currentUrl);

  return (
    <div>
      <section className='d-flex justify-content-between align-items-center pt-3 px-3'>
        <ul className="breadcrumb d-flex text-decoration-none gap-2 align-items-center justify-content-center" style={{ textDecoration: "none" }}>
          <a className='/outlet-settings' >Outlet Settings </a>
          <span> &gt; </span>
          <a  href={window.location.href} > Customer</a>
        </ul>

        <button className='btn btn-outline-secondary'>&larr; Back</button>
      </section>

      <hr />

      <div className='d-flex '>

        <nav className='d-flex gap-4 flex-column mini-nav py-4 '>

          <a
            href={"#customer-settings"}
            className={`nav-link ${location.pathname === '/#customer-settings' ? 'active-nav' : 'inactive-nav'}`}
          >
            Customer Settings
          </a>

          <a
            href="#due-payment"
            className={`nav-link ${location.pathname === '#due-payment' ? 'active-nav' : 'inactive-nav'}`}
          >
            Due Payment Settings
          </a>

        </nav>

        <Container className='border rounded p-3 m-3 form-div'>
          <h4 id='customer-settings'>Customer Settings</h4>
          <p>The following settings define default values for the components of the billing screen.</p>

          <Row className='mb-5 mt-3'>
            <Col>
              <Form.Group>
                <Form.Label>Customer phone validation on billing screen:</Form.Label>
                <Form.Check
                  type="checkbox"
                  id="delivery"
                  label="Delivery"
                  disabled
                  checked
                />
                <Form.Check
                  type="checkbox"
                  id="takeAway"
                  label="Take Away"
                  disabled
                />
                <Form.Check
                  type="checkbox"
                  id="dineIn"
                  label="Dine In"
                  disabled
                />
              </Form.Group>
              <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                This settings enables validation of phone number of customer. <br />
                This setting is only available in cloud login.
              </Form.Text>
            </Col>
          </Row>

          <Row className='mb-5 mt-3'>
            <Col>
              <Form.Group>
                <Form.Label>
                  Minimum length <br /> for phone number <br /> (in digits) * :
                </Form.Label>
                <Form.Control
                  type="text"
                  id="minLength"
                  placeholder='10'
                  disabled
                />
              </Form.Group>
              <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                This setting is only available in cloud login.
              </Form.Text>
            </Col>
          </Row>

          <Row className='mb-5 mt-3'>
            <Col>
              <Form.Group>
                <Form.Label>
                  Maximum length <br /> for phone number <br /> (in digits) * :
                </Form.Label>
                <Form.Control
                  type="text"
                  id="maxLength"
                  placeholder='10'
                  disabled
                />
              </Form.Group>
              <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                This setting is only available in cloud login.
              </Form.Text>
            </Col>
          </Row>

          <hr />

          <h4 id='due-payment' >Due Payment Settings</h4>
          <p>The following settings define default values for the components of the billing screen.</p>

          <Row className='mb-5 mt-3'>
            <Col>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  id="mandatoryPhone"
                  label="Customer phone number mandatory when the due payment is selected"
                  disabled
                  checked
                />
              </Form.Group>
              <Form.Text className='text-primary' style={{ fontSize: "14px" }}>
                This setting is only available in cloud login.
              </Form.Text>
            </Col>
          </Row>

          <div className='d-flex justify-content-end settings-footer'>
            <Button variant='outline-secondary'>Cancel</Button>
          </div>
        </Container>



      </div>



    </div>
  )
}

export default CustomerSettings