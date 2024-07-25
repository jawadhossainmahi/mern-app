import React, { useContext, useEffect, useRef, useState } from 'react';
import mainContext from '../context/mainContext';

const Card = (props) => {
    const { foodItem } = props;

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState('');
    const priceRef = useRef();
    const { state, dispatch } = useContext(mainContext);
    let finalPrice = qty * parseInt(foodItem.options[0][size]);
    const handleAddToCard = async () => {
        
        await dispatch({ type: "ADD", ...foodItem, qty: qty, finalPrice: finalPrice });
    }
    useEffect(() => {

        setSize(priceRef.current.value);
        return () => {

        };
    }, []);

    return (
        <>
            <div key={foodItem._id} className="card mt-3" style={{ width: "20rem", height: "fit-content" }}>
                <img className="card-img-top" style={{ height: "13rem" }} src={foodItem.img} alt={foodItem.name} />
                <div className="card-body">
                    <h4 className="card-title">{foodItem.name}</h4>
                    <p className="card-text">{foodItem.description.substring(0, 50)}</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100  bg-success rounded' onChange={(e) => { setQty(e.target.value) }}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select ref={priceRef} className='m-2 h-100  bg-success rounded' onChange={(e) => { setSize(e.target.value); }}>

                            {
                                (Object.keys(foodItem.options[0])).map((data) => {
                                    return (
                                        <option value={data}>{data}</option>
                                    )
                                })
                            }

                        </select>
                        <div className='d-inline h-100 fs-5'>${finalPrice}</div>
                        <hr />
                        <button onClick={handleAddToCard} className='btn btn-success'>Add to cart</button>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Card;
