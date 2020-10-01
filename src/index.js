import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Importing the components from the Components folder.
import Header from './Components/Header.js';
import ContentArea from './Components/ContentArea/ContentArea.js';

import '../src/styles/index.css';
{/**
import Advertisement from './Components/Advertisement.js'
import RightSideBar from './Components/RightSideBar.js'
import Footer from '/.Components/Footer.js'
*/}

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            cartStatus: '',
            itemsInCart: 14,
            savedItems: 0,
            storeName: 'ShopAround',
            language: 'EN',
            userName: 'Christopher'
        }
        this.cartChecker = this.cartChecker.bind(this)
    }

    componentDidMount() {
        this.cartChecker();
    }

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
                 * 
                 * <Advertisement />
                 * 
                 * <RightSideBar itemsInCart={this.state.itemsInCart}/>
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