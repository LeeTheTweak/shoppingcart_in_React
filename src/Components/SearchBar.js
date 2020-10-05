import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            optionsLength: 0
        }
        this.getOptionsValue = this.getOptionsValue.bind(this)
    }

    // If user clicks an option, get its value and set state to the option's value.
    getOptionsValue = (event) => {
        // Get the event clicked value.
        let optionTargetValue = event.target.value;
        let optionTargetLength = optionTargetValue.length;

        console.log(optionTargetValue);

        this.setState({
            optionsLength: optionTargetLength
        }, () => {
            // For testing to see if the data shows up on console.
            this.state.optionsLength >= 10 ? console.log("Greater than or equal to 10") : console.log("Less than 10")
        })

        
    }  

    render() {
        return(
            <div className="searchbar-area">
                <span className="select-button-container">
                    <select onChange={this.getOptionsValue}>
                        <option defaultValue value="All">All</option>
                        <option value="Electronics & Computers">Electronics & Computers</option>
                        <option value="Office Products">Office Products</option>
                        <option value="Software">Software</option>
                        <option value="Books">Books</option>
                        <option value="ShopAround Books">ShopAround Books</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Janitorial Supplies">Janitorial Supplies</option>
                        <option value="Safety">Safety</option>
                        <option value="Lab & Healthcare">Lab & Healthcare</option>
                        <option value="Tools & Home Improvement">Tools & Home Improvement</option>
                        <option value="Patio, Lawn & Garden">Patio, Lawn & Garden</option>
                        <option value="ShopAroundFresh">ShopAroundFresh</option>
                        <option value="Food Services">Food Service</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Explore Quantity Discounts">Explore Quantity Discounts</option>
                        <option value="Full Store Directory">Full Store Directory</option>
                    </select>
                </span>
                <input type="text" placeholder="Enter keyword or product number"></input>
                <span className="search-button-container">
                    <i class="fas fa-search"></i>
                </span>
            </div>
        );
    }
}