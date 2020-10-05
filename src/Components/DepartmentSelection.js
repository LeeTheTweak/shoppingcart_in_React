import React, { Component } from 'react';

export default class DepartmentSelection extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            showPopup: 'department-list-area'
        }
    }

    // When user hovers over department selection h4, change div class to show-department-list-area while false.
    showDepartmentPop = () => {
        if(this.state.active == false) {
            this.setState({
                active: true,
                showPopup: 'show-department-list-area'
            });
        }
    }
    // When user's mouse leaves the department selection div, close the department popup.
    closeDepartmentPop = () => {
        if(this.state.active == true) {
            this.setState({
                active: false,
                showPopup: 'department-list-area'
            });
        }
    }

    render() {
        return(
            <section className="department-selection-section">

                 {/************** The department div element **************** */}

                <div onMouseOver={this.showDepartmentPop} onMouseLeave={this.closeDepartmentPop} className="department-selection">
                    <h4>Department<span><i class="fas fa-sort-down"></i></span></h4>
                </div>
                
                {/*************** The department popup *********************** */}

                <div onMouseOver={this.showDepartmentPop} onMouseLeave={this.closeDepartmentPop} className={this.state.showPopup}>
                    <ul>
                        <li>Electronics & Computers</li>
                        <li>Office Products</li>
                        <li>Software</li>
                        <li>Books</li>
                        <li>ShopAround Books</li>
                        <li>Industrial</li>
                        <li>Janitorial Supplies</li>
                        <li>Safety</li>
                        <li>Lab & Healthcare</li>
                        <li>Tools & Home Improvement</li>
                        <li>Patio, Lawn & Garden</li>
                        <li>ShopAroundFresh</li>
                        <li>Food Service</li>
                        <li>Automotive</li>
                        <li>Grocery</li>
                        <li>Explore Quantity Discounts</li>
                        <li>Full Store Directory</li>
                    </ul>
                </div>
            </section>
        );
    }
}