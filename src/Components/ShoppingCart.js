import React, { Component } from 'react';


export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            popupClass: 'cart-popup',
        }
        this.toggleCartPopup= this.toggleCartPopup.bind(this);
    }

    // Switch the cart popup class

    toggleCartPopup = () => {
        if(this.state.popupClass == 'cart-popup') {
            this.setState({
                popupClass: 'show-cart-popup'           
            });
        } else if(this.state.popupClass == 'show-cart-popup') {
            this.setState({
                popupClass: 'cart-popup'
            });
        }
    }

    render() {
        return(
            <section className="shopping-cart-area">
                <span className="cart-number">{this.props.itemsInCart}</span>
                <span className="cart-icon-area"><i onMouseEnter={this.toggleCartPopup} onClick={this.toggleCartPopup} className="fas fa-shopping-cart"></i></span>
                <div className={this.state.popupClass} onMouseLeave={this.toggleCartPopup} onClick={this.toggleCartPopup}>
                    <p>You have {this.props.itemsInCart} items in your shopping cart.</p>
                    <a href="#" target="new"><button>View Cart ({this.props.itemsInCart} items)</button></a>
                </div>
            </section>
        );
    }
}