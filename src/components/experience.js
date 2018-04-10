import React, {Component} from 'react';

import image2 from "../images/mountain2.jpg";
import GridContainer from "../helpers/GridContainer";

/*const defaultClassName = "experience-content";*/
class Experience extends Component {
    render() {
        return (
            <div className="experience-body" style={ {backgroundImage: `url(${image2})`}} >
               {/* <img src = {image2} alt={"ding"} style={{position: "absolute", zIndex: -5}} ></img>*/}
                <GridContainer
                    yearsValue = "2016 - present"
                    companyName = "cerner"
                    jobPosition = "Associate Senior Software Engineer"
                    description = "Involved in designing and creating worklist pages for hospitals"
                />
                <GridContainer
                    yearsValue = "2015 - 2016"
                    companyName = "cerner"
                    jobPosition = "Software Engineer"
                    description = "Involved in designing and creating worklist pages for hospitals"
                />
                <GridContainer
                    yearsValue = "2012 - 2014"
                    companyName = "Infosys"
                    jobPosition = "Systems Engineer"
                    description = "Created Hybrid mobile applications using phone gap and sencha touch"
                    /*isLeftContainer = {true}*/
                />
            </div>
        )
    }
}

export default Experience;