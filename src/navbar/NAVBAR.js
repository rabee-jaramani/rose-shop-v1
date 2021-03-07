import React from 'react'
import { Link } from 'react-router-dom';

export default function NAVBAR(props) {
    function show_home() {
        document.querySelector('.hdr-msg-div').classList.remove('hide');
        // document.querySelector('.hdr-msg-div').classList.add('move-down');
    }
    function show_about() {
        document.querySelector('.hdr-msg-div').classList.add('hide');
    }
  
    function close_cart_menu() {
        document.querySelector('.cart-menu').classList.toggle('show-cart-menu');
    }
    function menu_bars_clicked(){
        document.querySelector('.navbar-mobile').classList.toggle('navbar-mobile-clicked');
        document.querySelector('.fa-bars').classList.toggle('hide');
        document.querySelector('.fa-times').classList.toggle('hide');
        document.querySelector('.menu-bars').classList.toggle('menu-close-bars');
    }
    return (
        <>
       <div className="navbar">
        <div className="home" onClick={show_home}><Link className='Link' to='/'>Home</Link></div>
        <div className="about" onClick={show_about}><Link className='Link' to='/about'>About</Link></div>
        <div className="events">Events</div>
        {/* <Link className='search' to='/cards'>linkkkkkkk</Link> */}
        <div className="search">Search</div>
        <div className="login">Log In</div>
        <div className="cart" onClick={close_cart_menu}>
        <div className="cart-counter">{props.counter}</div>
        <i className="fas fa-shopping-cart"></i>
            
        </div>
    </div>
    <div className="navbar-mobile">
        <div className="menu-bars" onClick={menu_bars_clicked}>
            <i className="fas fa-bars"></i>
            <i className="fas fa-times hide"></i>
        </div>
        <div className="home-m">Home</div>
        <div className="about-m">About</div>
        <div className="events-m">Events</div>
        <div className="search-m">Search</div>
        <div className="login-m">Log In</div>
        <div className="cart-m">
            <div className="cart-counter">{props.counter}</div>
            <i className="fas fa-shopping-cart"></i>
        </div>
    </div>
        </>
    )
}
