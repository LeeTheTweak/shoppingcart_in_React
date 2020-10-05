import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Importing the components from the Components folder.
import Header from './Components/Header.js';
import ContentArea from './Components/ContentArea/ContentArea.js';
// Import styles and data
import '../src/styles/index.css';
{/**
import Footer from '/.Components/Footer.js'
*/}

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            cartStatus: '',
            itemsInCart: 5,
            savedItems: 0,
            storeName: 'ShopAround',
            language: 'EN',
            userName: 'Christopher'
        }
        this.cartChecker = this.cartChecker.bind(this)
    }

    // When component mounts, call the cartChecker function.

    componentDidMount() {
        this.cartChecker();
    }

    // Checks the cart amount. Lets user know how much items they have in their account.

    cartChecker = () => {
        if(this.state.itemsInCart == 0) {
            this.setState({
                cartStatus: ` is empty`
            });
        } else if(this.state.itemsInCart == 1) {
            this.setState({
                cartStatus: ` has ${this.state.itemsInCart} item.`
            });
        } else {
            this.setState({
                cartStatus: ` has ${this.state.itemsInCart} items.`
            });
        }
            
    }

    render() {
        return(
            <div className="container">
                <Header 
                    storeName={this.state.storeName} 
                    itemsInCart={this.state.itemsInCart} 
                    languageSelection={this.state.language}
                    userName={this.state.userName}
                />
                <ContentArea 
                    storeName={this.state.storeName}
                    itemsInCart={this.state.itemsInCart}
                    cartStatus={this.state.cartStatus}
                />
                {/**
                 * <Footer />
                 */}
            </div>
        );
    }
}



const webPage = document.getElementById("webPage");

ReactDOM.render(
    <App />,
    webPage
);