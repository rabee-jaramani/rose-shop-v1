// import { render } from '@testing-library/react';
import React from 'react'
import CARD from '../card/CARD'
// import {$} from 'react-jquery-plugin'
// import rose from '../card/rose.jpeg'
import items from '../items'
import valantine_items from '../valantine'
export default class CARDS_CONTAINER extends React.Component {

state={
  items:[],
  item:{},
  inputValue:'',
  items_:items,
}

showCats=(e)=>{
  document.querySelector('.fa-arrow-circle-down').classList.toggle('move-cat-tab-i')
  document.querySelector('.cat-tab').classList.toggle('move-cat-tab');
  document.querySelector('.cat-div').classList.toggle('visibil-true');
  document.querySelector('.cat-1').classList.toggle('add-anim-1');
  document.querySelector('.cat-2').classList.toggle('add-anim-2');
  document.querySelector('.cat-3').classList.toggle('add-anim-3');
  document.querySelector('.cat-4').classList.toggle('add-anim-4');
}
valantine_handler=()=>{
  this.setState({
    items_:valantine_items
  });
  document.querySelector('.cat-1').classList.remove('focused');
}
forAll_handler=()=>{
  this.setState({
    items_:items
  })
}
  onChangeHandler=(e)=>{
    this.setState({
      inputValue:e.target.value,
    });
   
  }

  componentDidMount(){
   
  }
    render(){
    return (
        <>
            <div className='cards-main' id='cards'>
            <div className='search-div'>
                <input placeholder='search...' onChange={this.onChangeHandler}></input>
            </div>

           
            
            <div className='cat-div'>
                  <div className='cat-1 focused '  contenteditable tabindex="1" onClick={this.forAll_handler}>For All</div>
                  <div className='cat-2 '  contenteditable tabindex="2" onClick={this.valantine_handler}>Valantine's day</div>
                  <div className='cat-3 '  contenteditable tabindex="3">Mother's day</div>
                  <div className='cat-4 '  contenteditable tabindex="4">I'm sorry</div>
                </div>
                <div className='cat-tab' onClick={this.showCats}>Chose Your Occasions <i class="fas fa-arrow-circle-down "></i></div>
            <div className='cards-container' id='cardss'>
              
              {
                this.state.items_.filter((item)=>{
                  if(this.state.inputValue===""){
                    return item
                  }
                  if(item.item_name.toLocaleLowerCase().includes(this.state.inputValue.toLocaleLowerCase())){
                    return item
                  }
                 else{
                   return ''
                 }
                }).map((item)=>(
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
