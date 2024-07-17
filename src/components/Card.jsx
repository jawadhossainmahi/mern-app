import React from 'react';

const Card = (props) => {
    const { title, description, image, id, options } = props;

    return (
        <>
            <div key={id} className="card mt-3" style={{ width: "20rem", maxHeight: "430px" }}>
                <img className="card-img-top" style={{ height: "13rem" }} src={image} alt={title} />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description.substring(0, 50)}</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100  bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            {
                                (Object.keys(options)).map((data)=>{
                                    return (
                                        <option  value={data}>{data}</option>
                                    )
                                })
                            }

                        </select>
                        <div className='d-inline h-100 fs-5'>Total Price</div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Card;
