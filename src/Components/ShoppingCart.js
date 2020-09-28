import React, { Component } from 'react';


export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            popupClass: 'cart-popup',
        }
        this.showPopup = this.showPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    showPopup = () => {
        if(this.state.active == false) {
            this.setState({
                active: true,
                popupClass: 'show-cart-popup'
            });
        }
    }
    closePopup = () => {
        if(this.state.active == true) {
            this.setState({
                active: false,
                popupClass: 'cart-popup'
            });
        }
    }

    render() {
        return(
            <section className="shopping-cart-area">
                <span className="cart-number">{this.props.itemsInCart}</span>
                <span className="cart-icon-area"><i onMouseEnter={this.showPopup} onClick={this.showPopup} className="fas fa-shopping-cart"></i></span>
                <div className={this.state.popupClass} onMouseLeave={this.closePopup} onClick={this.closePopup}>
                    <p>You have {this.props.itemsInCart} items in your shopping cart.</p>
                    <a href="#" target="new"><button>View Cart ({this.props.itemsInCart} items)</button></a>
                </div>
            </section>
        );
    }
}