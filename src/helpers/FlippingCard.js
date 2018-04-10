import React, {Component} from 'react';

const defaultClassName = "flippingCard";
export default class FlippingCard extends Component {
    render(){
        return <div className={defaultClassName}>
            <img src = {this.props.cardIcon} alt={"ding"} style={{}} ></img>
        </div>
    }
}