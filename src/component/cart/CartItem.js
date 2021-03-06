import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function CartItem({value, item}) {
    console.log(value)
    const { img ,id ,title,total,count,price}= item ;
    const { increment, decrement, removeItem} = value;
    console.log(value)
    return (
        <div className="row mt-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
            <img src={img} className="img-fluid" style={{width:"5rem", height:"5rem"}} alt="cartlist"/>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none"> Product:</span>{title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none"> Price:</span>#{price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-l2 my-lg-0">
            <div className="d-flex justify-content-center">
              <div>
              <span className="btn btn-secondary mx-1" onClick={()=>decrement(id)}>-</span>
            <span className="btn btn-black btn-primary mx-1" >{count}</span>
            <span className="btn btn-secondary mx-1" onClick={()=>increment(id)}>+</span>
              </div>

            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <button onClick={()=>removeItem(id)}> remove </button>
            <div className="cart-icon" onClick={()=>removeItem(id)}>
                <i className="fas fa-trash"/>
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <strong>item Total:#{total}</strong>
        </div>

    </div>
    )
}
