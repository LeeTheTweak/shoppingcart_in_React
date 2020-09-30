import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Importing the components from the Components folder.
import Header from './Components/Header.js';

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
            cartNumber: 50,
            storeName: 'ShopAround',
            language: 'EN',
            userName: 'Christopher'
        }
    }
    render() {
        return(
            <div className="container">
                <Header 
                    storename={this.state.storeName} 
                    itemsInCart={this.state.cartNumber} 
                    languageSelection={this.state.language}
                    userName={this.state.userName}
                />
                <section className="main-content-area">

                </section>
                {/**
                 * 
                 * <Advertisement />
                 * 
                 * <RightSideBar itemsInCart={this.state.cartNumber}/>
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