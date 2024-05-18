import { Component } from 'react';
import '../css/about.css';
import PagesJson from '../data/PagesJson';
export default class About extends Component {
    render() {
        const aboutus=PagesJson.find(about=>about.pageName==="AboutUs");
        return (
            <div className="about-us">
                <div className="container">
                    <div className="row">
                        <div className="flex">
                        <div className="abouTitle"><p>{aboutus.title}</p></div>
                         <p>{aboutus.cont}</p>
                         <a className="about-btn">{aboutus.btn}</a>
                        </div>
                        <div  className="flex">< img src={aboutus.img}/>
                        </div>
                    </div>
                    </div> 
                </div>
                );         
    }
}
