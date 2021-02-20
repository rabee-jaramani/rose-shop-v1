import React from 'react'


export default function CARD(props) {
    return (
        <>
        <div className="card">
        <img src={props.image} alt=""/>
        <div className="card-details">
        <div className="card-title">Red Roses</div>
        <div className="available">In stock</div>
        <div className="add-to-cart">
            <div className="price">150 AED</div>
            <div className="plus-counter-minus">
                <div className="plus"><i className="fas fa-plus i-card"></i></div>
                <div className="counter">0</div>
                <div className="minus"><i className="fas fa-minus i-card"></i></div>
            </div>
            
        </div>
        <div className="more-info"><i className="fas fa-info i-card"></i></div>
        
    </div>
    </div>
    </>
    )
}
