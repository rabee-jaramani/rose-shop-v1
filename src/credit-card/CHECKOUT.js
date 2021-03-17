import React,{useState} from 'react'
import Cards from 'react-credit-cards'
import validator from 'validator'

export default function CHECKOUT(props) {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    const [validation_message, setValidation_message] = useState('');

    function credit_validation(number) {
        
        var valid=validator.isCreditCard(number); 
            if(!valid){
            return 'Card is invalid'
            }
            else{
            return 'Valid'
            }
        
    }

    function to_step_2(e) {
        document.querySelector('.personal-info').classList.toggle('hide');
        document.querySelector('.credit-card').classList.toggle('hide');
        document.querySelector('.credit-card').classList.toggle('move-in');
        document.getElementById('checkout-steps').childNodes[0].classList.toggle('step-focused');
        document.getElementById('checkout-steps').childNodes[1].classList.toggle('step-focused');
        
    }
     function to_step_3(e) {
        // card number validation
        setValidation_message('checking');
        setTimeout(()=>{
            var v_message= credit_validation(number); 
            setValidation_message(v_message);
            if(v_message==='Valid'){
            document.querySelector('.credit-card').classList.toggle('hide');
            document.querySelector('.review').classList.toggle('hide');
            document.querySelector('.review').classList.toggle('move-in');
            document.getElementById('checkout-steps').childNodes[1].classList.toggle('step-focused');
            document.getElementById('checkout-steps').childNodes[2].classList.toggle('step-focused');
            setValidation_message('Valid');
            }
            else{
                return ''
            }
        },2000)
       
        
    }
    function back_step_1(e) {
        document.querySelector('.personal-info').classList.toggle('hide');
        document.querySelector('.credit-card').classList.toggle('hide');
        document.querySelector('.credit-card').classList.toggle('move-in');
        document.getElementById('checkout-steps').childNodes[0].classList.toggle('step-focused');
        document.getElementById('checkout-steps').childNodes[1].classList.toggle('step-focused');
        
    }
    function back_step_2(e) {
        document.querySelector('.credit-card').classList.toggle('hide');
        document.querySelector('.review').classList.toggle('hide');
        document.querySelector('.review').classList.toggle('move-in');
        document.getElementById('checkout-steps').childNodes[1].classList.toggle('step-focused');
        document.getElementById('checkout-steps').childNodes[2].classList.toggle('step-focused');
        
    }
    
    return (
        <>
        <div className='checkout-container'>
            <div className='checkout-title'>Checkout</div>
            <div className='checkout-steps' id='checkout-steps'>
                <div className='step-focused'>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <div className='personal-info'>
            
            <input type='text' placeholder='First Name'></input>
            <input type='text' placeholder='Last Name'></input>
            <input type='email' placeholder='Email'></input>
            <input type='text' placeholder='Country'></input>
            <input type='text' placeholder='City'></input>
            <input type='text' placeholder='Address'></input>
            <input type='text' placeholder='Mobile'></input>
            <div className='checkout-btn' onClick={to_step_2}>Next</div>
            </div>
            <div className='credit-card hide'>
            <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
            />
            <form>
                
                <input
                type='tel'
                name='number'
                placeholder='Card Number'
                value={number}
                onChange={e=>setNumber(e.target.value)}
                onFocus={e=>setFocus(e.target.name)}
                />
               
                <input
                type='text'
                name='name'
                placeholder='Name'
                value={name}
                onChange={e=>setName(e.target.value)}
                onFocus={e=>setFocus(e.target.name)}
                />
                
                  <input
                type='text'
                name='expiry'
                placeholder='MM/YY Expiry'
                value={expiry}
                onChange={e=>setExpiry(e.target.value)}
                onFocus={e=>setFocus(e.target.name)}
                />
                <input
                type='tel'
                name='cvc'
                placeholder='CVC'
                value={cvc}
                onChange={e=>setCvc(e.target.value)}
                onFocus={e=>setFocus(e.target.name)}
                />
                {
                  (validation_message==='checking')?
                  <div class="lds-dual-ring"></div>:
                  (validation_message==='Card is invalid')?
                  <div className='validation'>{validation_message}</div>:
                  <div className='valid'>{validation_message}</div>
                  
                }
                
                <label>TOTAL: {props.total} AED</label>
                {/* <div class="lds-dual-ring"></div> */}
                <div className='next-prev-btns'>
                <div className='checkout-btn' onClick={back_step_1}>Prev</div>
                <div className='checkout-btn' onClick={to_step_3}>Next</div>
                </div>
                
            </form>
            </div>
            <div className='review hide'>
            <div className='cart-details'>
                        {props.products.map((product)=>( 
                            <div className='checkout-item'>
                                <div className='ch-item-name'>{product.prod_name}</div>
                                <div className='ch-item-name'>{product.prod_price} AED</div>
                                <div className='ch-item-name'>{product.prod_qty}</div>
                                <img className='image' src={product.prod_img} alt=""/> 
                            </div>
                        
                        ))}
                         
             </div>
             <div className='ch-total'>TOTAL: {props.total} AED</div>
             <div className='next-prev-btns'>
                <div className='checkout-btn' onClick={back_step_2}>Prev</div>
                <div className='checkout-btn' >Submit</div>
                </div>
            </div>
            </div>
        </>
    )
}
