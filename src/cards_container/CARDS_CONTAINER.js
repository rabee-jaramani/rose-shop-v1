import React from 'react'
import CARD from '../card/CARD'
// import rose from '../card/rose.jpeg'
import items from '../items'
export default function CARDS_CONTAINER(props) {
    
    return (
        <>
            <div className='cards-container'>
              {
                items.map((item)=>(
                  <CARD 
                  key={item.id}
                  item_name={item.item_name}
                  item_price={item.item_price}
                  item_qty={0}
                  image={item.image}
                  inc_counter={props.inc_counter}
                  // setcounter={props.setcounter}
                  // setproducts={props.setproducts}
                  products={props.products}
                  total={props.total}
                  add_existing_item_tocart={props.add_existing_item_tocart}
                  add_new_item_tocart={props.add_new_item_tocart}
                  />
                  
                ))
              }
           
             {/* <CARD 
                image={rose}
                counter={props.counter}
                setcounter={props.setcounter}
                />
             <CARD 
                image={rose}
                counter={props.counter}
                setcounter={props.setcounter}
                />
                  <CARD 
                image={rose}
                counter={props.counter}
                setcounter={props.setcounter}
                />
                  <CARD 
                image={rose}
                counter={props.counter}
                setcounter={props.setcounter}
                />
                  <CARD 
                image={rose}
                counter={props.counter}
                setcounter={props.setcounter}
                />
                  <CARD 
                image={rose}
                counter={props.counter}
                setcounter={props.setcounter}
                />
                  <CARD 
                image={rose}
                counter={props.counter}
                setcounter={props.setcounter}
                />
                  <CARD 
                image={rose}
                counter={props.counter}
                setcounter={props.setcounter}
                />
                  <CARD 
                image={rose}
                counter={props.counter}
                setcounter={props.setcounter}
                />
                        <CARD 
                image={rose}
                counter={props.counter}
                setcounter={props.setcounter}
                />
                        <CARD 
                image={rose}
                counter={props.counter}
                setcounter={props.setcounter}
                />
                        <CARD 
                image={rose}
                counter={props.counter}
                setcounter={props.setcounter}
                />
                        <CARD 
                image={rose}
                counter={props.counter}
                setcounter={props.setcounter}
                /> */}
            </div>
        </>
    )
}
