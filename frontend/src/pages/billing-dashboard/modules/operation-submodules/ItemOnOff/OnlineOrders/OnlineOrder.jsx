import { CgMenuGridR } from "react-icons/cg";
import SearchBarSection from "../SearchBarSection";
// import All from "../CurrentOrders/All";
import Swiggy from './Swiggy'
import Zomato from "./Zomato";
import swiggyImg from '../../../../../../assets/Swiggy_logo.png'
import zomatoImg from '../../../../../../assets/zomato.png'
import { FaClockRotateLeft } from "react-icons/fa6";



import {
    Avatar
  } from "antd";

import { useState } from "react"
const OnlineOrder =()=>{
    const [all, setAll] = useState(false)
    const [swiggy, setSwiggy] = useState(false)
    const [zomato, setZomato] = useState(false)

    const toggleAll = ()=>{
        setAll(!all)
        setSwiggy(false)
        setZomato(false)
    }

    const toggleSwiggy=()=>{
        setSwiggy(!swiggy)
        setAll(false)
        setZomato(false)
    }

    const toggleZomato=()=>{
        setZomato(!zomato)
        setAll(false)
        setSwiggy(false)
    }
    return(
        <>
            <div className="d-flex justify-content-start align-items-center shadow-sm mb-5 bg-white rounded p-0">
            
            <ul class=" list-group list-group-horizontal margin-right-1rem container-list-height" >
                    
                    <li class="dropDown-orderView-options-menu mouse-pointer list-group-item d-flex justify-content-between align-items-center" onClick={toggleAll}>
                    <FaClockRotateLeft />
                        <span className='padding-1rem  padding-top-0'
                           >Recent</span> 
                    </li>
                    
                    <li class="dropDown-orderView-options-menu mouse-pointer list-group-item d-flex justify-content-between align-items-center" onClick={toggleAll}>
                    <CgMenuGridR />
                        <span className='padding-1rem  padding-top-0'
                           >All</span> 
                    </li>

                    <li class="dropDown-orderView-options-menu mouse-pointer list-group-item d-flex justify-content-between align-items-center" onClick={toggleSwiggy}>
                    <Avatar src={swiggyImg} />
                    
                        <span className='padding-1rem  padding-top-0'
                           >Swiggy</span>
                    </li>

                    <li class="dropDown-orderView-options-menu mouse-pointer list-group-item d-flex justify-content-between align-items-center" onClick={toggleZomato}>
                    <Avatar src={zomatoImg} />
                        <span className='padding-1rem  padding-top-0'
                           >Zomato</span>
                    </li>
                    
                </ul>

    
                </div>
                <div>
                    <SearchBarSection/>
                </div>
                
                {
                    swiggy && <Swiggy/>
                }
                {
                    zomato && <Zomato/>
                }
                </>
       
    )
}

export default OnlineOrder