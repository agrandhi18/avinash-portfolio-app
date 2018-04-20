import React, {Component} from 'react';
import backgroundImage from "../images/mountain2.jpg";

const defaultClassName = "contact";

class Contact extends Component {
    render() {
        return (
            <div className={`${defaultClassName} container`} style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className={`${defaultClassName}-text-container`}>
                    <h1 className={`${defaultClassName}-header`}>Nice to </h1>
                    <h1>Meet you</h1>
                    <hr/>

                    <div className={`${defaultClassName}-text-container-details`}>
                        <div>
                            <p><i class="fa fa-phone-square" aria-hidden="true"></i> Phone</p>
                            <p>660-528-5884</p>
                        </div>
                        <div>
                            <p><i class="fa fa-envelope" aria-hidden="true"></i> Email</p>
                            <p>agrandhi18@gmail.com</p>
                        </div>
                        <div>
                            <p><i class="fa fa-map-marker" aria-hidden="true"></i> Address</p>
                            <p>14100 Russell St, Overland park, KS, 66223</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;

// https://docs.google.com/forms/d/e/1FAIpQLSfQtgsRX56J67tJy-G66XDuW9jFGi1yJSG7l9IHtWa3J9pLAg/viewform?usp=pp_url&entry.2005620554&entry.1045781291&entry.1065046570&entry.1166974658&entry.839337160