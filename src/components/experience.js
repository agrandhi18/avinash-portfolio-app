import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

const defaultClassName = "experience-content";
class Experience extends Component {
    render() {
        return (
            <div className="contact-body">
               <Grid className = {`${defaultClassName}__grid`}>
                    <Cell col= {5}>
                        <div className = {`${defaultClassName}__grid__text--orange`}>
                            present
                        </div>
                        <div>
                            Cerner
                        </div>
                        <div>
                            Senior Systems Engineer
                        </div>
                        <div>
                            Responsible for creating a framework which would create facilitate providers to see patients results.
                        </div>
                    </Cell>
                    <Cell col= {1}></Cell>
                    <Cell col= {5}>Haf Page</Cell>
               </Grid>
            </div>
        )
    }
}

export default Experience;