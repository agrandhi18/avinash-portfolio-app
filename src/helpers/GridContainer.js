import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';



export default class GridContainer extends Component {
    render() {
        if (this.props.isLeftContainer) {
            return (
                <Grid>
                    <Cell col= {5} style = {{textAlign: "right"}}>
                        <div >
                            { this.props.yearsValue }
                        </div>
                        <div>
                            { this.props.companyName }
                        </div>
                        <div>
                            { this.props.jobPosition }
                        </div>
                        <div>
                            { this.props.description }
                        </div>
                    </Cell>
                    <Cell col= {2} style = {{textAlign: "center"}} className= "testThis" >
                        <svg height="25" width="25">
                            <circle cx="10" cy="10" r="10"  fill="green" />
                        </svg>
                        {/*<svg height="210" >*/}
                            {/*<line x1="200" y1="0" x2="200" y2="200" style= {{stroke: 'rgb(255,0,0)', strokeWidth:2}} />*/}
                        {/*</svg>*/}
                        {/*<div className= "testThis"></div>*/}
                    </Cell>
                    <Cell col= {5}></Cell>
                </Grid>
            )
        } else {
            return (
                <Grid style = {{color: "white"}}>

                    <Cell col= {5} style = {{textAlign: "left", position: "relative", margin: "0px", padding: "2em", paddingLeft: "4em" }}>
                        <div className={"testClass"}>
                            { this.props.yearsValue }
                        </div>
                        <div>
                            { this.props.companyName }
                        </div>
                        <div>
                            { this.props.jobPosition }
                        </div>
                        <div>
                            { this.props.description }
                        </div>
                    </Cell>
                </Grid>
            )
        }

    }
}
