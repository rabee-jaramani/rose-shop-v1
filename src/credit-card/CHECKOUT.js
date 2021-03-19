import React,{useEffect, useState} from 'react'
import Cards from 'react-credit-cards'
import validator from 'validator'
import JSON1 from '../countries.json'
// import {$} from 'react-jquery-plugin'

export default function CHECKOUT(props) {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    const [validation_message, setValidation_message] = useState('');
    // //////////////////////////////////////////////////////
                //get data from json file
const [data, setData] = useState([])
//get countries from data
const [countries, setCountries] = useState([]);
//get country from user selection
const [country, setCountry] = useState('')
//get cities from data depending on user selection
const [cities, setCities] = useState([]);

 function get_countries(){
      var result=[];
            for(var i in JSON1){
                result.push([i, JSON1[i]]);
            }
            setData(result);
            var list_cnt=[];
            for(var j=0;j<result.length;j++){
              list_cnt.push(result[j][0]);
            }
            setCountries(list_cnt);
  }

    function citiesHandler() {
            var ctsss=[]
            for (let k = 0; k < data.length; k++) {
              if(data[k][0]===country){
                ctsss=data[k][1];
              }
            }
            setCities(ctsss);
        }

    // /////////////////////////////////////////////////////

    function submit() {
        return ''
    }

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
    useEffect(()=>{
        if(number.length>40 || /\D/.test(number)){
            setNumber(number.slice(0,number.length-1));
            setValidation_message('card number max chars is 40')
        }
        if(!(/^(?! )[A-Za-z\s]*$/.test(name))){
            
            setName(name.slice(0,name.length-1));
            setValidation_message('Name can be letters only');
        }
        if( expiry.length>4 || !/^[0-9]*$/.test(expiry))  {
            setExpiry(expiry.slice(0,expiry.length-1));
            
        }
        if(cvc.length>3 || !/^[0-9]*$/.test(cvc)){
            setCvc(cvc.slice(0,cvc.length-1));

        }
    },[name,number,expiry,cvc])
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
            
                        <input type='text' placeholder='First Name' id='fname'></input>
                        <div className='error-v-error' id='fname_e'></div>

                        <input type='text' placeholder='Last Name' id='lname'></input>
                        <div className='error-v-error' id='lname_e'></div>

                        <input type='email' placeholder='Email' id='email'></input>
                        <div className='error-v-error' id='email_e'></div>


                   {/* /////////////////////////////////////// */}
                        <select id='country' onClick={get_countries}  onChange={e=>setCountry(e.target.value)}>
                        <option className='dropdown-placeholder' value="" disabled selected>Select your country</option>
                            {countries.map((country)=>{
                            return <option > {country} </option>
                            })}              
                        </select>

                        <select id='city' onClick={citiesHandler}>
                        <option className='dropdown-placeholder' value="" disabled selected>Select your city</option>
                        {  cities.map((city)=>{ return<option>{city}  </option> })    }         
                        </select> 
                   {/* ///////////////////////////////////////////// */}

                        <input type='text' placeholder='Address' id='address'></input>
                        <div className='error-v-error' id='address_e'></div>

                        <input type='text' placeholder='Mobile' id='mobile'></input>
                        <div className='error-v-error' id='mobile_e'></div>

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
                type='tel'
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
                  (validation_message==='Card number is invalid'
                  ||validation_message==='Card is invalid'
                  ||validation_message==='card number max chars is 40'
                  ||validation_message==='Name can be letters only'
                  )?
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
                <div className='checkout-btn' onClick={submit}>Submit</div>
                </div>
            </div>
            </div>
        </>
    )
}
