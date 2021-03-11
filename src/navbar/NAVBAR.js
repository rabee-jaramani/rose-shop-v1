import React from 'react'
import { Link } from 'react-router-dom';

export default function NAVBAR(props) {

    function show_home() {
        document.querySelector('.hdr-msg-div').classList.remove('hide');
        document.querySelector('.cart-main').classList.remove('show');
        // document.querySelector('.hdr-msg-div').classList.add('move-down');
    }
    function show_about() {
        document.querySelector('.cart-main').classList.remove('show');
        document.querySelector('.hdr-msg-div').classList.add('hide');
        setTimeout(()=>{document.querySelector('.about-container').classList.add('hide-opacity')},0);
        document.querySelector('.loading').classList.remove('hide')
        setTimeout(()=>{document.querySelector('.about-container').classList.remove('hide-opacity')},2000)
        setTimeout(()=>{document.querySelector('.loading').classList.add('hide')},2000)
    }
    function show_events() {
        document.querySelector('.cart-main').classList.remove('show');
        document.querySelector('.hdr-msg-div').classList.add('hide');
        setTimeout(()=>{document.querySelector('.events1').classList.add('hide-opacity')},0);
        document.querySelector('.loading').classList.remove('hide')
        setTimeout(()=>{document.querySelector('.events1').classList.remove('hide-opacity')},2000)
        setTimeout(()=>{document.querySelector('.loading').classList.add('hide')},2000)
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
        <div className="events" onClick={show_events}><Link className='Link' to='/events'>Events</Link></div>
        {/* <Link className='search' to='/cards'>linkkkkkkk</Link> */}
        <div className="search">Search</div>
        <div className="login">Log In</div>
        <div className="cart" onClick={close_cart_menu}>
        <div className="cart-counter">{props.counter}</div>
        <i className="fas fa-shopping-cart"></i>
            
        </div>
    </div>
    <div className="navbar-mobile" onClick={menu_bars_clicked}>
        <div className="menu-bars" >
            <i className="fas fa-bars"></i>
            <i className="fas fa-times hide"></i>
        </div>
        <div className="home-m" onClick={show_home}><Link className='Link' to='/'>Home</Link></div>
        <div className="about-m" onClick={show_about}><Link className='Link' to='/about'>About</Link></div>
        <div className="events-m" onClick={show_events}><Link className='Link' to='/events'>Events</Link></div>
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
