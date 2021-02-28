import React from 'react'
import { $ }  from 'react-jquery-plugin'
export default function CART_ITEM(props) {
    function add_pack_to_cart(){
            var total=props.total;
            let list=props.products;
            console.log(list[0].prod_name)
            var index=list.findIndex(x=> x.prod_name===props.name);
            console.log(index);
            list[index].prod_qty=list[index].prod_qty+1;
            total=total+list[index].prod_price;
            props.add_existing_item_tocart(list,total);
            props.inc_counter();
            $('.cart-icon').addClass('cart-animation');
            $('.cart-main').addClass('cart-animation');
            setTimeout(()=>{$('.cart-icon').removeClass('cart-animation')},1000);
            setTimeout(()=>{$('.cart-main').removeClass('cart-animation')},1000);
        }
    return (
        <>
            <div className='cart-item'>
                <div className='item-name'>{props.name}</div>
                <div className='item-price'>{props.price}</div>
                <div className='item-qty'>{props.qty}</div>
                <div className='plus' onClick={add_pack_to_cart}><i className="fas fa-plus i-card "></i></div>
                <div className='minus'><i className="fas fa-minus i-card"></i></div>   
            </div> 
        </>
    )
}
