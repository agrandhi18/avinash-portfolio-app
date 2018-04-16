import React, {Component} from 'react';


class Resume extends Component {
    render() {
        return (
            <div>
                <div className="experience-body container"  >
                    <a className="btn btn-primary" href={"AvinashGrandhi_Resume.pdf"} aria-label="Download" download>
                        <i class="fa fa-cloud-download" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Resume;