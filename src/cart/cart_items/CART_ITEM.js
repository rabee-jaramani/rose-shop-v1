import React from 'react'

export default function CART_ITEM(props) {
    return (
        <>
            <div className='cart-item'>
                <div className='item-name'>{props.name}</div>
                <div className='item-price'>{props.price}</div>
                <div className='item-qty'>{props.qty}</div>
                <div className='plus'><i className="fas fa-plus i-card"></i></div>
                <div className='minus'><i className="fas fa-minus i-card"></i></div>   
            </div> 
        </>
    )
}
