import React, { Component } from 'react';

export default class ContentArea extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return(
            <section className="main-content-section">
                <div className="main-content-cart-wrapper">
                    <section className="cart-notifyer-section">
                        <h2>Your {this.props.storeName} cart {this.props.cartStatus}</h2>
                        <p>
                            Your Shopping Cart lives to serve. Give it purpose and fill it with
                            groceries, clothing, household supplies, electronics, and more.
                            Continue shopping on the <a href="#">{this.props.storeName}.com homepage</a>,
                            learn about <a href="#">today's deals</a>, or visit your <a href="#">Wish List</a>.
                        </p>
                    </section>
                    <section className="your-items-section">
                        <h2>Your Items</h2>
                        <ul className="items-navigation">
                            <li></li>
                            <li></li>
                        </ul>
                    </section>
                </div>
            </section>
        );
    }
}