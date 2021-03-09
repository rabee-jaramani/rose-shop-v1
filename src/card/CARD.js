import React,{useState} from 'react'
import { $ }  from 'react-jquery-plugin'
export default function CARD(props) {
  
     const [card_counter, setcard_counter] = useState(0);

     function show_info(e) {
        
        // document.getElementById(`${props.id}`).classList.add('show-item');
        // document.getElementById('0').classList.add('show-item');
        var list=document.querySelectorAll('.item-info');
       list[props.id].classList.add('show-info');
      }
      function hide_info() {
        var list=document.querySelectorAll('.item-info');
        list[props.id].classList.remove('show-info');
      }
    function add_pack_to_cart(){
        let newitem={
            prod_name:props.item_name,
            prod_price:props.item_price,
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
            setcard_counter(list[index].prod_qty);
            
        }
        else{
        props.add_new_item_tocart(newitem);
        setcard_counter(card_counter+1);
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

    function remove_pack_from_cart(){
        console.log('GENER Counter>> '+props.counter);
        if(props.counter===0){
            alert('cart is empty');
        }
        else
        if(!props.products.find(x=> x.prod_name===props.item_name)){
            alert('this item not in the cart');
            }
        
        else{
       
        if(props.products.find(x=> x.prod_name===props.item_name)){
            var total=props.total;
            let list=props.products;
            var index=props.products.findIndex(x=> x.prod_name===props.item_name);
            list[index].prod_qty=list[index].prod_qty-1;
            setcard_counter(card_counter-1);
            total=total-list[index].prod_price;
            if(list[index].prod_qty===0){
                list.splice(index,1);
                setcard_counter(0);
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

    return (
        <>
        <div className='card' id={props.id}>
    
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
        <div className="counter"></div>
        <div className="minus btn-removefromcart" >
            <i className="fas fa-minus i-card" onClick={remove_pack_from_cart}></i>
        </div>
    </div> 
    :
    <div className="plus-counter-minus">
            
            <div className="plus btn-addtocart" >
                <i className="fas fa-plus i-card" onClick={add_pack_to_cart}></i>
            </div>

            <div className="counter">  {card_counter}    </div>
            <div className="minus btn-removefromcart" >
                <i className="fas fa-minus i-card" onClick={remove_pack_from_cart}></i>
            </div>
        </div> 
    }
        {/* <div className="plus-counter-minus">
            
            <div className="plus btn-addtocart" >
                <i className="fas fa-plus i-card" onClick={add_pack_to_cart}></i>
            </div>
            <div className="counter"></div>
            <div className="minus btn-removefromcart" >
                <i className="fas fa-minus i-card" onClick={remove_pack_from_cart}></i>
            </div>
        </div>       */}
        
        {/* <div className="more-info"><i className="fas fa-info i-card"></i></div> */}
    </div>
    <div className='card-more-info' ><i className="far fa-question-circle" onMouseOut={hide_info} onMouseOver={show_info}></i></div>
 
    </div>
    </>
    )
}
