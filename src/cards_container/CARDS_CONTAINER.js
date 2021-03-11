// import { render } from '@testing-library/react';
import React from 'react'
import CARD from '../card/CARD'
// import {$} from 'react-jquery-plugin'
// import rose from '../card/rose.jpeg'
import items from '../items'
export default class CARDS_CONTAINER extends React.Component {

state={
  items:[],
  item:{},
  inputValue:'',
  items_:items
}

  onChangeHandler=(e)=>{
    this.setState({
      inputValue:e.target.value,
    });
    // console.log("ON change>>>>>> "+ this.state.inputValue)
  }
  // searchHandler=()=>{
  //   var lis=this.state.items_;
  //  // lis=lis.includes(x=>x.item_name.includes(this.state.inputValue));
  //   console.log('LISTT>> '+lis[0].item_name.includes('Polyantha'));
  //   // this.setState({
  //   //   items_: lis
  //   // });
  
  // }
  componentDidUpdate(){
 
    console.log("ON change>>>>>> "+ this.state.inputValue)
  }
    render(){
    return (
        <>
            <div className='cards-main' id='cards'>
            <div className='search-div'>
                <input placeholder='search...' onChange={this.onChangeHandler}></input>
                <i class="fas fa-search" onClick={this.searchHandler}></i>
            </div>
            <div className='cards-container' id='cards'>
              {
                this.state.items_.map((item)=>(
                  <CARD 
                  key={item.id}
                  id={item.id}
                  item_name={item.item_name}
                  item_price={item.item_price}
                  item_stock={item.item_stock}
                  item_qty={0}
                  item_img={item.image}
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
             </div>
        </>
    )}
}
