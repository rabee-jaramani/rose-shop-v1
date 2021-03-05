import React from 'react'

import './card/card_style.css'
import './navbar/navbar_style.css'
import './cart/cart_style.css'
import './cards_container/cards-container.css'
import './cart/cart_menu/cart_menu.css'
import './cart/cart_items/cart_item.css'
import './header/header_style.css'

import NAVBAR from './navbar/NAVBAR';
import CART from './cart/CART'
import CARDS_CONTAINER from './cards_container/CARDS_CONTAINER';
import CART_MENU from './cart/cart_menu/CART_MENU'
import HEADER from './header/HEADER'
// import { render } from '@testing-library/react'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      counter:0,
      products:[],
      total:0
    }
  }
  inc_counter(){
    this.setState({
      counter:this.state.counter+1
    });
  }
  dec_counter(){
    this.setState({
      counter:this.state.counter-1
    });
  }
  add_new_item_tocart(item) {
    
    this.setState(prevState=>({
      products:[...prevState.products,item],
      total:prevState.total+item.prod_price,
    }));
    console.log('adding same item >> Total is >> '+this.state.total);
  }
  add_existing_item_tocart(list,total) {
    this.setState(prevState=>({
      total:total,
      products:list,
    }))
  }
  render() {
    return <div className="App">
     
      <NAVBAR counter={this.state.counter}/>
      <HEADER/>
      <CARDS_CONTAINER 
      products={this.state.products}
      add_existing_item_tocart={this.add_existing_item_tocart.bind(this)}
      add_new_item_tocart={this.add_new_item_tocart.bind(this)}
      total={this.state.total}
      inc_counter={this.inc_counter.bind(this)}
      dec_counter={this.dec_counter.bind(this)}
      counter={this.state.counter}
      />
      <CART counter={this.state.counter}/>
      <CART_MENU
        add_existing_item_tocart={this.add_existing_item_tocart.bind(this)}
        products={this.state.products}
        total={this.state.total}
        inc_counter={this.inc_counter.bind(this)}
        dec_counter={this.dec_counter.bind(this)}
      />
    </div>
      }
}

export default App;
