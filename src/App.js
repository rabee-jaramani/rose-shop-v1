import React,{useState} from 'react'
import CARD from './card/CARD'
import './card/card_style.css'
import './navbar/navbar_style.css'
import './cart/cart_style.css'
import rose from './card/rose.jpeg'
import NAVBAR from './navbar/NAVBAR';
import CART from './cart/CART'
function App() {
  const [counter, setcounter] = useState(0);
  return (
    <div className="App">
      <NAVBAR counter={counter}/>
      <CART counter={counter}/>
      <CARD 
      image={rose}
      counter={counter}
      setcounter={setcounter}
      />
    </div>
  );
}

export default App;
