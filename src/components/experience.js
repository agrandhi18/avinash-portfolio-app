import React, {Component} from 'react';

import image2 from "../images/cover1.svg";
import GridContainer from "../helpers/GridContainer";
import { CardStack, Card } from 'react-cardstack';

import cernerImage from "../images/cernerImage.png";
import infosysImage from "../images/infosysImage.png";

class Experience extends Component {
    render() {
        return (
            <div className="experience-body container" style={ {backgroundImage: `url(${image2})`}}  >
                {/* <img src = {image2} alt={"ding"} style={{position: "absolute", zIndex: -5}} ></img>*/}
                <CardStack
                    height={500}
                    width={400}
                    background= {'#f8f8f8'}
                    hoverOffset={25} >

                    <Card background="#4483CE">
                        <GridContainer
                            yearsValue = "2017 - Present"
                            companyName = "cerner"
                            jobPosition = "Associate Senior Software Engineer"
                            description = {[
                                "Developing Worklist framework and involved in technical and design decisions in the project",
                                "Mentor for two teams who consume the framework to assist in their development",
                                "Improved performance of the app by creating a shared resource utility which reduces the service calls",
                                "Building internal ecosystem tools using Node.js for automation",
                                "Contributing to a utility for automating grey box tests using selenium tool",
                                "Performing deployment using electric commander and running Jenkins jobs",
                                "Following agile methodology by attending the daily stand up and completing tasks in sprints "
                            ]}
                            image = {cernerImage}
                            key = "gridContainer_1"
                        />
                    </Card>

                    <Card background='#27AE60'>
                        <GridContainer
                            yearsValue = "2016 - 2017"
                            companyName = "cerner"
                            jobPosition = "Software Engineer"
                            description = {[
                                "Worked on “MPages” which provides interactive, visually rich views of real-time clinical information",
                                "Reduced development time for others engineers on the team by 40%, by creating reusable components",
                                "Implementing unit testing using Jasmine Framework (100% code coverage)",
                                "Involved in writing CCL queries (SQL based) to save and retrieve data from the database",
                                "Participated in code reviews and brainstorm to implement the functionality"
                            ]}
                            image = {cernerImage}
                            key = "gridContainer_2"
                        />
                    </Card>

                    <Card background='#E67E22'>
                        <GridContainer
                            yearsValue = "2012 - 2014"
                            companyName = "Infosys"
                            jobPosition = "Systems Engineer"
                            description = {[
                                "Developed a cross-platform hybrid mobile application for car manufacturing company using phone gap",
                                "Created a responsive web application to account for cross-browser environment",
                                "Developed Android application prototypes for the sales team to show cast the product",
                                "Performed quality assurance tests to discover errors and optimize usability"
                            ]}
                            image = {infosysImage}
                            key = "gridContainer_3"
                        />
                    </Card>
                </CardStack>

                <div className="experience-body-resume"  >
                    <a className="btn btn-primary" href={"avinash-portfolio-app/AvinashGrandhi_Resume.pdf"} aria-label="Download" download>
                        <i className="fa fa-cloud-download jump" aria-hidden="true"></i> Download Resume
                    </a>
                </div>
            </div>
        )
    }
}

export default Experience;