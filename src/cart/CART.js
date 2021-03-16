import React from 'react'

function CART(props) {
    function show_cart() {
        document.querySelector('.cart-menu').classList.add('show-cart-menu');
    }
    return (
        <>
           <div className="pack"><i className="fas fa-box-open"></i></div>
           <div className="pack-remove"><i className="fas fa-box-open"></i></div>
            <div className="cart-main" onMouseOver={show_cart}>
            <div className="counter">{props.counter}</div>
            <i className="fas fa-shopping-cart cart-icon"></i>
            </div>

    

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
     integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
     crossorigin="anonymous">
    </script>

        </>
    )
}
export default CART;