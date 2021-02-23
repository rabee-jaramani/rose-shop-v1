import React,{useState} from 'react'

import './card/card_style.css'
import './navbar/navbar_style.css'
import './cart/cart_style.css'
import './cards_container/cards-container.css'

import NAVBAR from './navbar/NAVBAR';
import CART from './cart/CART'
import CARDS_CONTAINER from './cards_container/CARDS_CONTAINER';
function App() {
  const [counter, setcounter] = useState(0);
  return (
    <div className="App">
      <NAVBAR counter={counter}/>
      <CARDS_CONTAINER 
      setcounter={setcounter}
      counter={counter}/>
      <CART counter={counter}/>
      
    </div>
  );
}

export default App;
