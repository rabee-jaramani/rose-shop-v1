// import { render } from '@testing-library/react';
import React from 'react'
import CARD from '../card/CARD'
// import {$} from 'react-jquery-plugin'
// import rose from '../card/rose.jpeg'
import items from '../items'
import valantine_items from '../valantine'
import mother_items from '../mother_day'
import sorry_items from '../sorry'

export default class CARDS_CONTAINER extends React.Component {

state={
  items:[],
  item:{},
  inputValue:'',
  items_:items,
}

loading=()=>{
 // loading
 setTimeout(()=>{document.querySelector('.cards-container').classList.add('hide-opacity')},0);
 document.querySelector('.loading').classList.remove('hide');
 setTimeout(()=>{document.querySelector('.cards-container').classList.remove('hide-opacity')},2000);
 setTimeout(()=>{document.querySelector('.loading').classList.add('hide')},2000);
}

showCats=(e)=>{
  document.querySelector('.cat-tab').classList.toggle('move-cat-tab');
  document.querySelector('.cat-div').classList.toggle('visibil-true');
  document.querySelector('.cat-1').classList.toggle('add-anim-1');
  document.querySelector('.cat-2').classList.toggle('add-anim-2');
  document.querySelector('.cat-3').classList.toggle('add-anim-3');
  document.querySelector('.cat-4').classList.toggle('add-anim-4');
  document.querySelector('.cat-5').classList.toggle('add-anim-5');
}

valantine_handler=()=>{
  this.setState({
    items_:valantine_items
  });
  document.querySelector('.cat-1').classList.remove('focused');
 this.loading(); 
}
sorry_handler=()=>{
  this.setState({
    items_:sorry_items
  });
  this.loading();
  document.querySelector('.cat-1').classList.remove('focused');
}
mother_handler=()=>{
  this.setState({
    items_:mother_items
  });
  document.querySelector('.cat-1').classList.remove('focused');
  this.loading();
}
special_handler=()=>{
  this.setState({
    items_:items
  })
  this.loading();
}
see_all=()=>{
  this.setState({
    items_:items.concat(mother_items,sorry_items,valantine_items)
  });
  this.loading();
}
onChangeHandler=(e)=>{
  this.setState({
    inputValue:e.target.value,
  });
}

componentDidMount(){
  document.querySelector('.hdr-msg-div').classList.add('hide');
  document.querySelector('.body').classList.add('change-bk');
}
    render(){
    return (
        <>
            <div className='cards-main' id='cards'>
            <div className='search-div'>
            <input placeholder='search...' onChange={this.onChangeHandler}></input>
            </div>

            <div className='cat-div'>
              <div className='cat-1 focused' contenteditable tabindex="1" onClick={this.special_handler}>Special</div>
              <div className='cat-2' contenteditable tabindex="2" onClick={this.valantine_handler}>Valantine's day</div>
              <div className='cat-3' contenteditable tabindex="3" onClick={this.mother_handler}>Mother's day</div>
              <div className='cat-4' contenteditable tabindex="4"  onClick={this.sorry_handler}>I'm sorry</div>
              <div className='cat-5' contenteditable tabindex="5"  onClick={this.see_all}>See All</div>
            </div>

            <div className='cat-tab'  onClick={this.showCats}>
            <div className='animate__animated animate__flash animate__infinite	infinite'>
              Choose Your Occasions</div>
            </div>
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
