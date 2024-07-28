import React, { useContext } from 'react';
import AllStates from '../global_states/All_States';
import mainContext from '../context/mainContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(mainContext);
    const removeItem = async (index) => {
        await dispatch({ type: "REMOVE", index: index });
    }
    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");
        if (!userEmail) {
            navigate("/login");
            return;
        }
        else {
            let response = await fetch("http://localhost:5000/api/create-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    order_data: state,
                    email: userEmail,
                    order_date: new Date().toDateString()
                })
            });
            if (response.status === 200) {
                dispatch({ type: "DROP" })
            }
        }
    }
    let total_amount = 0;
    return (
        <>
            <div className='container my-5'>
                <div
                    class="table-responsive"
                >
                    <table
                        class="table"
                    >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Size</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(state && state.length > 0 ?
                                <>
                                    {state.map((data, index) => {
                                        total_amount += data.finalPrice;
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{data.name}</td>
                                                <td>{data.qty}</td>
                                                <td>{data.size}</td>
                                                <td>{data.finalPrice}</td>
                                                <td className=''><button onClick={() => { removeItem(index) }} className='btn btn-danger'> <i class="fa-solid fa-trash-can"></i></button></td>
                                            </tr>
                                        )
                                    })}
                                </> :
                                <>
                                    <td colSpan={5} className='text-center'>No item in the cart</td>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
                <div>
                    <p>Total Amount: {total_amount}  </p>
                    <button type='button' className='btn btn-dark' onClick={handleCheckOut}>Checkout</button>
                </div>

            </div>

        </>
    );
}

export default Cart;
