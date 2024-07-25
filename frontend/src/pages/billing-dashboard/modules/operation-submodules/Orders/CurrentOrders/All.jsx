import {data} from '../Config'
const All =()=>{
    return(
        <div>
            <div>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Order Type</th>
                        <th>Order Delivery</th>
                        <th>Amount</th>
                    </thead>
                {   
                    data.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.order_type}</td>
                                <td>{item.order_delivery}</td>
                                <td>{item.amount}</td>
                            </tr>
                                                        
                        )
                    })
                }
                </table>
            </div>
        </div>
    )
}

export default All