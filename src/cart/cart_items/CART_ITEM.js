import React from 'react'
import { $ }  from 'react-jquery-plugin'
export default function CART_ITEM(props) {
    function add_pack_to_cart(){
            var total=props.total;
            let list=props.products;
            var index=list.findIndex(x=> x.prod_name===props.name);
            list[index].prod_qty=list[index].prod_qty+1;
            total=total+list[index].prod_price;
            props.add_existing_item_tocart(list,total);
            props.inc_counter();
            $('.cart-icon').addClass('cart-animation');
            $('.cart-main').addClass('cart-animation');
            setTimeout(()=>{$('.cart-icon').removeClass('cart-animation')},1000);
            setTimeout(()=>{$('.cart-main').removeClass('cart-animation')},1000);
        }
        // ///////////////////////////////////////////////////////////

        
    function remove_pack_from_cart(){
        console.log('GENER Counter>> '+props.counter);
        if(props.counter===0){
            alert('cart is empty');
        }
        else
        if(!props.products.find(x=> x.prod_name===props.name)){
            alert('this item not in the cart');
            }
        
        else{
       
        if(props.products.find(x=> x.prod_name===props.name)){
            var total=props.total;
            let list=props.products;
            var index=props.products.findIndex(x=> x.prod_name===props.name);
            list[index].prod_qty=list[index].prod_qty-1;
            //setcard_counter(card_counter-1);
            total=total-list[index].prod_price;
            if(list[index].prod_qty===0){
                list.splice(index,1);
                //setcard_counter(0);
            }
            props.add_existing_item_tocart(list,total);
            props.dec_counter();
            
        }
        $('.btn-removefromcart').addClass('disable');
        $('.pack').addClass('pack-animation-remove');
        $('.cart-icon').addClass('cart-animation');
        $('.cart-main').addClass('cart-animation');
        
        // props.setcounter(props.counter-1);
        setTimeout(dely_item_minus,2000);
        }
    }
    function dely_item_minus(){
        $('.pack').removeClass('pack-animation-remove');
        $('.btn-removefromcart').removeClass('disable');
        $('.cart-icon').removeClass('cart-animation');
        $('.cart-main').removeClass('cart-animation'); 
    }

        // ///////////////////////////////////////////////////////////
    return (
        <>
            <div className='cart-item'>
                <div className='item-name'>{props.name}</div>
                <div className='item-price'>{props.price}</div>
                <div className='item-qty'>{props.qty}</div>
                <div className='plus' onClick={add_pack_to_cart}><i className="fas fa-plus i-card "></i></div>
                <div className='minus' onClick={remove_pack_from_cart}><i className="fas fa-minus i-card"></i></div>   
            </div> 
        </>
    )
}
