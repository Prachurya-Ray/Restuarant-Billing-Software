import React from 'react';
import { GrDocumentConfig } from "react-icons/gr";

const PrintConfigurationButton = ({ handleShowModal }) => {
  return (
    <div className='d-flex align-items-center' style={{cursor:"pointer", position: "relative", right:"22px"}}>
      <GrDocumentConfig style={{ position: "relative", left: "40px" }} />
      <div
        style={{ width: '250px', height: "38px",  }}
        className='form-control '  
        onClick={handleShowModal}
      >
        <span style={{ marginLeft: "50px" }}>
          PrintConfiguration
        </span>
      </div>
    </div>
  );
};

export default PrintConfigurationButton;
