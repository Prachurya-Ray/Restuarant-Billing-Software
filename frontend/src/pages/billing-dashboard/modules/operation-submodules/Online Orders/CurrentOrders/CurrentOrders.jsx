import { CgMenuGridR } from "react-icons/cg";
import { ImSpoonKnife } from "react-icons/im";
import { RiEBikeFill } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import SearchBarSection from "../SearchBarSection";
import { useState } from "react";
import All from "./All";
import Dine from "./Dine";
import Delivery from "./Delivery";
import TakeAway from "./TakeAway";

const Current =()=>{
    const [all, setAll] = useState(false)
    const [dine, setDine] = useState(false)
    const [delivery, setDelivery] = useState(false)
    const [takeAway, setTakeAway] = useState(false)

    const toggleAll = ()=>{
        setAll(!all)
        setDine(false)
        setDelivery(false)
        setTakeAway(false)
    }

    const toggleDine = ()=>{
        setDine(!dine)
        setAll(false)
        setDelivery(false)
        setTakeAway(false)
    }

    const toggleDelivery = ()=>{
        setDelivery(!delivery) 
        setAll(false)
        setDine(false)
        setTakeAway(false)
    }

    const toggleTakeAway =()=>{
        setTakeAway(!takeAway)
        setAll(false)
        setDine(false)
        setDelivery(false)
    }

    return(
        <>
        <div className="d-flex justify-content-between align-items-center shadow-sm mb-5 bg-white rounded p-0">
            
                    <ul class=" list-group list-group-horizontal margin-right-1rem container-list-height" >
                            
                            <li class="dropDown-orderView-options-menu mouse-pointer list-group-item d-flex justify-content-between align-items-center"  onClick={toggleAll}>
                            <CgMenuGridR />
                                <span className='padding-1rem  padding-top-0'
                                   >All</span>
                            </li>
                            <li class="dropDown-orderView-options-menu  mouse-pointer list-group-item d-flex justify-content-between align-items-center"   onClick={toggleDine}>
                            <ImSpoonKnife />
                                <span className='padding-1rem padding-top-0'
                                   >Dine In</span>
                            </li>
                            <li class="dropDown-orderView-options-menu mouse-pointer  list-group-item d-flex justify-content-between align-items-center"  onClick={toggleDelivery}>
                            <RiEBikeFill />

                                <span className='padding-1rem padding-top-0'
                                    >Delivery</span>
                               
                            </li>
                            <li class="dropDown-orderView-options-menu  mouse-pointer list-group-item d-flex justify-content-between align-items-center"  onClick={toggleTakeAway}>
                            <IoFastFoodOutline />

                                <span className='padding-1rem padding-top-0'
                                    
                                >Take Away</span>
                            </li>
                        </ul>

                        <button type="button" class="btn btn-outline-success m-3">Get Past Orders</button>
            
        </div>
        <SearchBarSection/>
        {
            all && <All/>
        }
        {
            dine && <Dine/>
        }
        {
            delivery && <Delivery/>
        }
        {
            takeAway && <TakeAway/>
        }
        </>
    )
}
export default Current