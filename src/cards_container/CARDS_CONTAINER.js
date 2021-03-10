// import { render } from '@testing-library/react';
import React from 'react'
import CARD from '../card/CARD'
// import {$} from 'react-jquery-plugin'
// import rose from '../card/rose.jpeg'
import items from '../items'
export default class CARDS_CONTAINER extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(){
 
 
  }
    render(){
    return (
        <>
            <div className='cards-container' id='cards'>
              {
                items.map((item)=>(
                  <CARD 
                  key={item.id}
                  id={item.id}
                  item_name={item.item_name}
                  item_price={item.item_price}
                  item_stock={item.item_stock}
                  item_qty={0}
                  image={item.image}
                  info={item.info}
                  inc_counter={this.props.inc_counter}
                  dec_counter={this.props.dec_counter}
                  counter={this.props.counter}
                  products={this.props.products}
                  total={this.props.total}
                  add_existing_item_tocart={this.props.add_existing_item_tocart}
                  add_new_item_tocart={this.props.add_new_item_tocart}
                  />))
              }
             </div>
        </>
    )}
}
