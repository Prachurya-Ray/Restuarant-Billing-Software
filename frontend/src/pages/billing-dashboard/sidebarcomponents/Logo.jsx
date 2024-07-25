import React from 'react';
import {FireFilled} from '@ant-design/icons'
import Logo2 from "../../../assets/ClickUptel.png"
const Logo = () => {
  return (
    <div className="logo">
      <div className='logo-icon'>
        {/* <FireFilled/> */}
        <img src={Logo2} alt="" className='logo-icon'/>
         </div>
    </div>
  );
}

export default Logo;