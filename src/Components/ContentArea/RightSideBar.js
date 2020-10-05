import React, { Component } from 'react';

export default class RightSideBar extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {


        return(
            <div>
                <div className="sidebar-title">Buy it again</div>
                <div className="buy-again-list">
                    <div className="buy-again-item">
                        <div className="buy-again-image" style=
                            {{
                                backgroundRepeat: `no-repeat`,
                                backgroundSize: `contain`, 
                                backgroundImage: `url(${this.props.buyAgain[0].picture})`
                            }}>
                        </div>
                        <div className="buy-again-info">
                            <p>{this.props.buyAgain[0].itemName}</p>
                            <p>${this.props.buyAgain[0].price}</p>
                            <p>{this.props.buyAgain[0].stock}</p>
                            <p>{this.props.buyAgain[0].reviews} out of 5</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
