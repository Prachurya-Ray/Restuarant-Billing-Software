import { useState } from "react"
// import Back from "../../Header_Component/BackButton"
import Current from "./CurrentOrders/CurrentOrders"
import OnlineOrder from "./OnlineOrders/OnlineOrder"
const Orders = ()=>{
    const [currentOrder, setCurrentOrder] = useState(false)
    const [onlineOrder, setonlineOrder] = useState(false)
    const [advanceOrder, setadvanceOrder] = useState(false)

    const togglecurrentOrder = ()=>{
        setCurrentOrder(!currentOrder)
        setonlineOrder(false)
        setadvanceOrder(false)
    }

    const toggleonlineOrder = ()=>{
        setCurrentOrder(false)
        setonlineOrder(!onlineOrder)
        setadvanceOrder(false)
    }

    const toggleadvanceOrder = ()=>{
        setCurrentOrder(false)
        setonlineOrder(false)
        setadvanceOrder(!advanceOrder)
    }

    return(
        <div>
            <h1>Orders</h1>
            <div className="d-flex justify-content-between align-items-center p-1" style={{backgroundColor:'#c7c8cc'}}>
                <div>
                    <span className="pe-3 cursor-pointer" onClick={togglecurrentOrder}>Current Orders</span>
                    <span className="pe-3 cursor-pointer" onClick={toggleonlineOrder}>Online Orders</span>
                    <span className="cursor-pointer" onClick={toggleadvanceOrder}>Advance Orders</span>
                </div>
                {/* <Back/> */}
            </div>
            {
                currentOrder && <Current/>
            }
            {
                onlineOrder && <OnlineOrder/>
            }
            {
                advanceOrder && <h1>Advance Orders</h1>
            }
        </div>
    )
}

export default Orders