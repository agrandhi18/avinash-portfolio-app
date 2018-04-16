import React, {Component} from 'react';

export default class GridContainer extends Component {
    render() {
        return (
            <div style={{color: "white"}}>

                <div style={{
                    textAlign: "left",
                    position: "relative",
                    margin: "0px",
                    padding: "2em",
                    paddingLeft: "4em"
                }}>
                    <div className={"testClass"}>
                        {this.props.yearsValue}
                    </div>
                    <div>
                        {this.props.companyName}
                    </div>
                    <div>
                        {this.props.jobPosition}
                    </div>
                    <div>
                        {this.props.description}
                    </div>
                </div>
            </div>
        )
    }
}
