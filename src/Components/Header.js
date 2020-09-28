import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import DepartmentSelection from './DepartmentSelection.js';
import ShoppingCart from './ShoppingCart.js';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        return(
            <header>
                <div className="header-container">
                    <div className="brand-area"><p>{this.props.storename}</p>
                        <SearchBar />
                    </div>
                </div>
                <section className="bottom-nav-area">
                    <DepartmentSelection />
                    <ShoppingCart itemsInCart={this.props.itemsInCart}/>
                </section>
            </header>
        );
    }
}
