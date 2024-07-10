import React from 'react';

const Card = () => {
    return (
        <>
         <div class="card mt-3" style={{width:"18rem",maxHeight:"360px"}}>
                    <img class="card-img-top" style={{height:"13rem"}} src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=M3wzNTUzOTJ8MHwxfHNlYXJjaHwxfHxidXJnZXJ8ZW58MHx8fHwxNzIwNTUzNzM1fDA&ixlib=rb-4.0.3" alt="Title" />
                    <div class="card-body">
                        <h4 class="card-title">Title</h4>
                        <p class="card-text">This is some important text</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100  bg-success rounded'>
                                {Array.from(Array(6),(e,i)=>{
                                    return(
                                        <option key={i+1} value={i+1}>{i+1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100  bg-success rounded'>
                                <option value={"half"}>Half</option>
                                <option value={"full"}>Full</option>
                            </select>
                            <div className='d-inline h-100 fs-5'>Total Price</div>
                        </div>
                    </div>
                </div>   
        </>
    );
}

export default Card;
