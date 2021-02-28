import React from 'react'

import CART_ITEM from '../cart_items/CART_ITEM'

export default function CART_MENU(props) {

    return (
        <>
             <div className='cart-menu' >
                <div className='cart-title'>Cart</div>
                <div className='total-title'>Total:</div>
                <div className='total-aed'>{props.total} AED</div>
                    <div className='items-title'>Items</div>
                    <div className='cart-details'>
                        {props.products.map((product)=>(
                            <CART_ITEM
                            add_existing_item_tocart={props.add_existing_item_tocart}
                            name={product.prod_name}
                            price={product.prod_price}
                            qty={product.prod_qty}
                            products={props.products}
                            total={props.total}
                            inc_counter={props.inc_counter}
                            />
                        ))}
                        
                    </div>
                
            </div>
        </>
    )
}
