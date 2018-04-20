import React, {Component} from 'react';

const defaultClassName = "flippingCard";
export default class FlippingCard extends Component {
    render(){
        return <div className={defaultClassName}>
            <div className={`${defaultClassName}-front`}>
                <img src = {this.props.cardIcon} alt={"ding"} style={{}} ></img>
            </div>
            <div className={`${defaultClassName}-back`}>
                <img src = {this.props.cardIcon} alt={"ding"} style={{}} ></img>
            </div>
        </div>
    }
}