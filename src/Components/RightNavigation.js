import React, { Component } from 'react';

export default class RightNavigation extends Component {
    constructor() {
        super();
        this.state = {
            wishList: [],
            listNumber: 0,
            wishListClass: 'lists-box'
        }
        this.addToWishList = this.addToWishList.bind(this);
        this.showListToggle = this.showListToggle.bind(this);
    }

    /************ Function for toggling the wishlist popup ********** */

    showListToggle = () => {
        if(this.state.wishListClass == 'lists-box') {
            this.setState({
                wishListClass: 'show-list-box'
            });
        } else if(this.state.wishListClass == 'show-list-box') {
            this.setState({
                wishListClass: 'lists-box'
            });
        }
    }

    /*************** Function when add to wishlist button is clicked, add name of item to the wishlist array ************ */

    addToWishList = () => {

        // Get the add list box input

        let addListBox = document.getElementsByClassName("addListBox")[0];

        // Declared a variable called, wishListArray and assigning it to the wishlist array state.

        let wishListArray = this.state.wishList;
        wishListArray.push(addListBox.value)            // Push whatever is in the addListBox's input value to the wishListArray.
        
        /**
         * Set wishList state to the created wishListArray. 
         * Function to set the listNumber state to the new wishListArray + 1.
         */

        this.setState({
            // Set wishList state to wishListArray
            wishList: wishListArray
        }, () => {
            // Set listNumber state to the wishListArray's length.
            this.state.listNumber = wishListArray.length
        });
    }


    render() {

        // A quick greeting variable.

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

                    <p onClick={this.showListToggle}>Lists <span><i class="fas fa-sort-down"></i></span></p>

                    <div className={this.state.wishListClass}>
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