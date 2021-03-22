import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import './App_style.css'
import './card/card_style.css'
import './navbar/navbar_style.css'
import './cart/cart_style.css'
import './cards_container/cards-container.css'
import './cart/cart_menu/cart_menu.css'
import './cart/cart_items/cart_item.css'
import './header/header_style.css'
import './header_message/header_message_style.css'
import './about/about_style.css'
import './events/events_style.css'
import './loading/loading_style.css'
import './footer/footer_style.css'
import 'react-credit-cards/es/styles-compiled.css'
import './credit-card/credit_card_style.css'


// import {$} from 'react-jquery-plugin'

import NAVBAR from './navbar/NAVBAR';
import CART from './cart/CART'
import CARDS_CONTAINER from './cards_container/CARDS_CONTAINER.js';
import CART_MENU from './cart/cart_menu/CART_MENU'
import HEADER from './header/HEADER'
import HEADER_MESSAGE from './header_message/HEADER_MESSAGE';
import ABOUT from './about/ABOUT';
import EVENTS from './events/EVENTS';
import LOADING from './loading/LOADING';
import FOOTER from './footer/FOOTER';
import CHECKOUT from './credit-card/CHECKOUT';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      counter:0,
      products:[],
      total:0
    }
  }

   start_shopping() {
    document.querySelector('.hdr-msg-div').classList.add('move-up-anim');
    document.querySelector('.body').classList.add('change-bk');
    setTimeout(()=>{document.querySelector('.cards-main').classList.add('hide-opacity')},0);
    document.querySelector('.loading').classList.remove('hide')
    setTimeout(()=>{document.querySelector('.cards-main').classList.remove('hide-opacity')},2000)
    setTimeout(()=>{document.querySelector('.loading').classList.add('hide')},2000)
    
    setTimeout(()=>{document.querySelector('.hdr-msg-div').classList.add('hide')},1000);
    setTimeout(()=>{document.querySelector('.hdr-msg-div').classList.remove('move-up-anim');},1000)  
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
    
  }
  add_existing_item_tocart(list,total) {
    this.setState(prevState=>({
      total:total,
      products:list,
    }));
   
  }
  componentDidMount(){
}
  componentDidUpdate(){
    // console.log('PRODUCTS >> '+this.state.products[0].prod_qty);
  }
  render() {
    return (
      <BrowserRouter>

    <div className="App">
    <NAVBAR counter={this.state.counter}
    start_shopping={this.start_shopping}
    />

    <LOADING/>
      <HEADER/>
      
      <Route path='/' render={props=><HEADER_MESSAGE start_shopping={this.start_shopping} />}/>
      <Route  path='/about'  render={props=><ABOUT/> }/>
      <Route  path='/events'  render={props=><EVENTS/>}/>
      <Route  path='/checkout'  render={props=><CHECKOUT
      total={this.state.total}
      products={this.state.products}
      />}/>
      
      <Route  path='/cards'  render={props =><CARDS_CONTAINER 
          products={this.state.products}
          add_existing_item_tocart={this.add_existing_item_tocart.bind(this)}
          add_new_item_tocart={this.add_new_item_tocart.bind(this)}
          total={this.state.total}
          inc_counter={this.inc_counter.bind(this)}
          dec_counter={this.dec_counter.bind(this)}
         
          counter={this.state.counter}
      />}
      />
      <CART counter={this.state.counter}/>
      <CART_MENU
        add_existing_item_tocart={this.add_existing_item_tocart.bind(this)}
        products={this.state.products}
        total={this.state.total}
        inc_counter={this.inc_counter.bind(this)}
        dec_counter={this.dec_counter.bind(this)}
      />
        <FOOTER/>
    </div>
   
    </BrowserRouter>
    )
      }
}

export default App;
