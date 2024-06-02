import { Component } from 'react';
import '../css/contact.css';
import { fetchPageData } from './FechDataPage';
export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactus: null,
        };
    }
    componentDidMount() {

        const pageName = "ContactUs";
        const pagePath="forms";
        fetchPageData(pagePath,pageName)
        .then(pages => {
            this.setState({ contactus: pages });
        })
        .catch(error => console.error('Error fetching data:', error));
    }
    render() {
        const { contactus } = this.state;
        if (!contactus) {
            return <div>Contact page is not found</div>;
        }

        return (
            <div className="contact-us-container">
                <div className="form-container"><span>{contactus.title}</span>
                    <p> {contactus.text}</p>
                    <form className="form-cont" action="#" method="post">
                        {
                            contactus.cont.map((conatc,index) =>
                                <input key={index} className={conatc.cssClass} placeholder={conatc.placeholder} type={conatc.type} required />
                            )
                        }
                        <textarea className="form-input textarea" placeholder="Enter Your Message... " name="message" rows="4" required></textarea >
                        <input className="contact-btn" type="submit" value="Send Message" />
                    </form>
                </div>
                <div className="imgBox">
                    <img className="contact" src="newcontact.png" />
                </div>

            </div>
        );
    }
}
