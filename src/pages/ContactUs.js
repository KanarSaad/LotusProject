import { Component } from 'react';
import '../css/contact.css';
import FormJson from '../data/FormJson';
export default class ContactUs extends Component {
    render() {
        const contactform = FormJson.find(res => res.formId === 2);
        return (
            <div className="contact-us-container">
                <div className="form-container"><span>{contactform.formName}</span>
                    <p> {contactform.text}</p>
                    <form className="form-cont" action="#" method="post">
                        {
                            contactform.cont.map((conatc) =>
                                <input className={conatc.cssClass} placeholder={conatc.placeholder} type={conatc.type} required />
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
