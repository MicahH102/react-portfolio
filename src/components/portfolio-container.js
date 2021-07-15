import React, { Component } from "react";
export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Welcome to my portfolio"
        ,data: [
        { title: "Quip" },
        { title: "Eventbrite" } ,
        { title: "Ministry Safe" } ,
        { title: "SwingAway" },
            ]
        }



    }


    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
            </div>
            
        )
    }
}