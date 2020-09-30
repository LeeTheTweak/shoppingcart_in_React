import React, { Component } from 'react';

export default class RightNavigation extends Component {
    constructor() {
        super();
        this.state = {
            wishList: [ ],
            listNumber: 0
        }
        this.addToWishList = this.addToWishList.bind(this);
    }


    addToWishList = () => {

        let addListBox = document.getElementsByClassName("addListBox")[0];

        let addListBoxValue =  addListBox.value;

        let joined = this.state.wishList.concat(addListBoxValue)
        

        this.setState({
            wishList: joined,
            listNumber: this.state.wishList.length + 1
        }, () => {
            
        });
    }


    render() {

        let greeting = `Hello, ${this.props.userName}`;

        return(
            <div className="right-navigation-section">

                <section className="language-section">
                    <p>{this.props.languageSelection}</p>
                    <i class="fas fa-globe"><span><i class="fas fa-sort-down"></i></span></i>
                </section>

                <section className="greeting-section">
                    <p>{greeting}</p>
                </section>

                <section className="lists-section">
                    <p>Lists <span><i class="fas fa-sort-down"></i></span></p>
                    <div className="lists-box">
                        <h3>Your Wish List <span>{this.state.listNumber}</span></h3>
                        <div className="list">
                            {this.state.wishList}
                        </div>
                        <div className="addListBox-area">
                            <input className="addListBox" type="text" name="Add_List_Box" placeholder="Enter wish list name"/>
                        </div>
                        <button onClick={this.addToWishList}>Add to Wish List</button>
                    </div>
                </section>

                <section className="try-prime-section">
                    <p>Try<br/>ShopAround Prime</p>
                </section>

            </div>
        );
    }
}