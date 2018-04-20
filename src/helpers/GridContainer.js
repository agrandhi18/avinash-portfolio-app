import React, {Component} from 'react';

const defaultClassName = "experience-body-grid";

export default class GridContainer extends Component {
    render() {
        const detailsList = this.props.description.map((val, i) => <li key = {`listItem__${i}`} className={`${defaultClassName}-li`}>{val}</li>);
        return (
            <div className={defaultClassName}>
                <div>
                    <img src = {this.props.image} alt={"ding"}/>
                    <span>{this.props.yearsValue}</span>
                </div>
                <h1>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                    {this.props.jobPosition}
                </h1>
                <div>
                    <ul>
                    {detailsList}
                    </ul>
                </div>
            </div>
        )
    }
}
