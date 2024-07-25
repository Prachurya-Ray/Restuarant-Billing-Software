import React, { useState } from 'react'
import SearchBox from './PrintingFiles/SearchBox.jsx'
import PrintConfiguration from './PrintingFiles/PrintConfiguration.jsx'
import PrintConfigurationButton from './PrintingFiles/PrintConfigurationButton.jsx'


const CoverSizeSummary = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

  return (
    <div>
    <h1>Cover Size Report</h1>
    <hr />

    <div className="--bs-secondary-color d-inline-flex">
        <SearchBox />
                <PrintConfigurationButton handleShowModal={handleShowModal} />
    </div>

    <div className='border py-3 mx-3 mt-3 rounded'>
        <div className='d-flex justify-content-between px-2'>
            <div className=''>
                <button type="button" style={{}} className="col btn border bg-danger text-white">Columns</button>
                <button type="button" style={{ marginLeft: "10px" }} className="col btn border">Save Preference</button>
            </div>
            <div className=''>
                <button type="button" style={{}} className="col btn border">Export Excel</button>
                <button type="button" style={{ marginLeft: "10px" }} className="col btn border">Print</button>
            </div>
        </div>
        <hr style={{ color: '#808080' }} />


        <div className='text-sm mx-4 fw-semibold'>Cover Size Report -  <span className='fw-normal'>12-07-2024 </span></div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>No. of Persons (Success Orders)</th>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <th>0</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <PrintConfiguration show={showModal} handleClose={handleCloseModal} />

                </div>


</div>  )
}

export default CoverSizeSummary