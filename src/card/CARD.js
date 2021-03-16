import React from 'react'
import { $ }  from 'react-jquery-plugin'
export default function CARD(props) {
  

     function show_info(e) {
        document.getElementById(`${props.id}`).childNodes[0].classList.add('rotate-anim');
         document.getElementById(`${props.id}`).childNodes[0].classList.add('show-info');
         setTimeout(()=>{document.getElementById(`${props.id}`).childNodes[1].classList.add('rotate-anim')},0)
         setTimeout(()=>{document.getElementById(`${props.id}`).childNodes[1].classList.add('hide-opacity')},0)
         
      }
      function hide_info() {
        document.getElementById(`${props.id}`).childNodes[0].classList.remove('rotate-anim');
        document.getElementById(`${props.id}`).childNodes[0].classList.remove('show-info');
        document.getElementById(`${props.id}`).childNodes[1].classList.remove('rotate-anim');
        document.getElementById(`${props.id}`).childNodes[1].classList.remove('hide-opacity');
      }
    function add_pack_to_cart(){
        let newitem={
            prod_name:props.item_name,
            prod_price:props.item_price,
            prod_img:props.item_img,
            prod_qty:1
        };
        //check if the item is already in the cart
        if(props.products.find(x=> x.prod_name===props.item_name)){
            var total=props.total;
            let list=props.products;
            var index=props.products.findIndex(x=> x.prod_name===props.item_name);
            list[index].prod_qty=list[index].prod_qty+1;
            total=total+list[index].prod_price;
            props.add_existing_item_tocart(list,total);
            
        }
        else{
        props.add_new_item_tocart(newitem);
        
        // var minus_list=document.querySelectorAll('.minus-icon');
        // console.log("CARD ID >> "+props.id);
        // console.log("MINUS LIST >> "+minus_list.length)
        // if(minus_list.length<props.id){
        //     minus_list[minus_list.length-1].classList.remove('hide');
        // }
        // else{
        //     minus_list[props.id].classList.remove('hide');
        // }
    }
        $('.btn-addtocart').addClass('disable');
        $('.pack').addClass('pack-animation');
        $('.cart-main').addClass('show');
        
        setTimeout(dely_item,2000);
    }

    function dely_item(){
        props.inc_counter();
        $('.pack').removeClass('pack-animation');
        $('.btn-addtocart').removeClass('disable');
        // props.setcounter(props.counter+1);
        $('.cart-icon').addClass('cart-animation');
        $('.cart-main').addClass('cart-animation');
        setTimeout(()=>{$('.cart-icon').removeClass('cart-animation')},1000);
        setTimeout(()=>{$('.cart-main').removeClass('cart-animation')},1000);  
        
    }

    // function remove_pack_from_cart(){
    //     console.log('GENER Counter>> '+props.counter);
    //     if(props.counter===0){
    //         alert('cart is empty');
    //     }
    //     else
    //     if(!props.products.find(x=> x.prod_name===props.item_name)){
    //         alert('this item not in the cart');
    //         }
        
    //     else{
       
    //     if(props.products.find(x=> x.prod_name===props.item_name)){
    //         var total=props.total;
    //         let list=props.products;
    //         var index=props.products.findIndex(x=> x.prod_name===props.item_name);
    //         list[index].prod_qty=list[index].prod_qty-1;
    //         total=total-list[index].prod_price;
    //         if(list[index].prod_qty===0){
    //             list.splice(index,1);
    //         }
    //         props.add_existing_item_tocart(list,total);
    //         props.dec_counter();
            
    //     }
    //     $('.btn-removefromcart').addClass('disable');
    //     $('.pack').addClass('pack-animation-remove');
    //     $('.cart-icon').addClass('cart-animation');
    //     $('.cart-main').addClass('cart-animation');
        
    //     // props.setcounter(props.counter-1);
    //     setTimeout(dely_item_minus,2000);
    //     }
    // }
    // function dely_item_minus(){
    //     $('.pack').removeClass('pack-animation-remove');
    //     $('.btn-removefromcart').removeClass('disable');
    //     $('.cart-icon').removeClass('cart-animation');
    //     $('.cart-main').removeClass('cart-animation'); 
    // }

    return (
        <>
        <div className='card'  id={props.id}>
    
                  <div className='item-info'>
                <div >Name: {props.item_name}</div>
                <div >Price in AED: {props.item_price}</div>
                  <div >Quantity in stock: {props.item_stock}</div>
                  <div>Info: {props.info}</div>
               </div>
     
        <img src={props.image} alt=""/>
   
        <div className="card-details">
        <div className="card-title">{props.item_name}</div>
        {
            (props.item_stock===1) ? 
            <div className="limited-stock">Limited Stock</div> 
            :((props.item_stock===0)? <div className="not-available">Available </div>
            :<div className="available">Available</div>
            )
        }
            <div className="price">{props.item_price} AED</div>
        {props.item_stock===0?
        <div className="plus-counter-minus hide">
            
        <div className="plus btn-addtocart" >
            <i className="fas fa-plus i-card" onClick={add_pack_to_cart}></i>
        </div>
        {/* <div className="minus btn-removefromcart" >
            <i className="fas minus-icon fa-minus i-card hide" onClick={remove_pack_from_cart}></i>
        </div> */}
    </div> 
    :
    <div className="plus-counter-minus">
            
            <div className="plus btn-addtocart" >
                <i className="fas fa-plus i-card" onClick={add_pack_to_cart}></i>
            </div>
            {/* <div className="minus btn-removefromcart" >
                <i className="fas minus-icon fa-minus i-card hide" onClick={remove_pack_from_cart}>{props.id}</i>
            </div> */}
        </div> 
    }
    </div>
    <div className='card-more-info'  onMouseOut={hide_info} onMouseOver={show_info}>
        <i className="far fa-question-circle"></i>
    </div>
 
    </div>
    </>
    )
}
