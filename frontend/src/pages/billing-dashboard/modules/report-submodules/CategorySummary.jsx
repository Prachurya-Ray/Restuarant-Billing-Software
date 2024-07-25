import React, { useState } from 'react'
import SearchBox from './PrintingFiles/SearchBox.jsx'
import PrintConfiguration from './PrintingFiles/PrintConfiguration.jsx'
import PrintConfigurationButton from './PrintingFiles/PrintConfigurationButton.jsx'
const CategorySummary = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h1>Category Report</h1>
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

                <div className='text-sm font-bold mx-4 fw-bold'> <span className='fw-normal'>Cover Size Report - 12-07-2024 </span></div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Orders</th>
                                <th>Items</th>
                                <th>Net Ammount(&#x20B9;)</th>
                                <th>Total Discount(&#x20B9;)</th>
                                <th>Total Tax(&#x20B9;)</th>
                                <th>Total Sales(&#x20B9;)</th>
                                <th>Percentage(%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <PrintConfiguration show={showModal} handleClose={handleCloseModal} />

            </div>

        </div>
    )
}

export default CategorySummary 