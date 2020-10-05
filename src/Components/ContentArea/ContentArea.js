import React, { Component } from 'react';

import RightSideBar from './RideSideBar.js';

import items from '../../data/items.js';


export default class ContentArea extends Component {
    constructor() {
        super();
        this.state = {
            items
        }
    }
    render() {
        return(
            <section className="main-content-section">
                <section className="main-content-cart-wrapper">
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
                            <li>No items saved for later</li>
                            <li>Buy it again</li>
                        </ul>
                    </section>
                </section>
                <section className="right-side-content-wrapper">
                    <RightSideBar buyAgain={this.state.items}/>
                </section>
            </section>
        );
    }
}