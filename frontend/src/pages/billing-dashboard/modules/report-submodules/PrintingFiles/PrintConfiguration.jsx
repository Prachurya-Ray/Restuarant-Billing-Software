import React from 'react';
import { RxCross2 } from "react-icons/rx";


const PrintConfiguration = ({ show, handleClose }) => {
  return (
    <div className={`modal-container rounded  ${show ? 'show' : ''}`}>
      <div className="modal-content px-0">
        <div onClick={handleClose} className='d-flex align-items-center px-3 justify-content-between '>
          <h5 >Print Configuration</h5>
          <RxCross2 style={{ cursor: "pointer", height: "30px" }} />
        </div>

        <hr />

        <form className='px-3 d-flex row gap-4'>
          <div className='d-flex justify-content-between'>
            <div className='d-flex gap-1 align-items-center'>
              <input type="radio" name="exampleRadios" id="exampleRadio1" value="option1" style={{ width: '16px', height: '16px' }} />
            <label htmlFor="checkbox1">Show Bill Header</label>

            </div>
            <div className='d-flex gap-1 align-items-center'>
              <input type="radio" name="exampleRadios" id="exampleRadio2" value="option2" style={{ width: '16px', height: '16px' }} />
            <label htmlFor="checkbox2">Show Bill Footer</label>

            </div>
            <div className='d-flex gap-1 align-items-center'>
              <input type="radio" name="exampleRadios" id="exampleRadio3" value="option3" style={{ width: '16px', height: '16px' }} />
            <label htmlFor="checkbox3">None</label>
            </div>
          </div>


          <div className='d-flex gap-1 align-items-center'>
            <input type="checkbox" id="checkbox1" style={{ width: '16px', height: '16px' }} />
            <label htmlFor="checkbox1">Display <span className='fw-semibold'>To Date</span> on Print</label>
          </div>
          <div className='d-flex gap-1 align-items-center'>
            <input type="checkbox" id="checkbox2" style={{ width: '16px', height: '16px' }} />
            <label htmlFor="exampleRadio2">Display <span className='fw-semibold'>Time</span> on Print</label>
            </div>
          <div className='d-flex gap-1 align-items-center'>
            <input type="checkbox" id="checkbox3" style={{ width: '16px', height: '16px' }} />
            <label htmlFor="exampleRadio3">Display <span className='fw-semibold'>Summary Box</span> on Print</label>

          </div>

          <div className='d-flex w-100 gap-3'>
            <div className='w-50'>
              <label htmlFor="main-width">Main Width</label><br />
              <input type="number" id="main-width" placeholder="500" className='border p-1 width-fontsize rounded w-100' />
            </div>

            <div className='w-50'>
              <label htmlFor="font-size">Font-Size</label><br />
              <input type="number" id="font-size" placeholder="12" className='border p-1 width-fontsize rounded  w-100' />
            </div>
          </div>

        </form>

        <div className="modal-buttons d-flex justify-content-end">
          <button className="btn btn border left-2" onClick={handleClose}>Cancel</button>
          <button className="btn btn-danger">Save</button>
        </div>
      </div>

    </div>
  );
};

export default PrintConfiguration 