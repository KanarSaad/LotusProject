import { Component } from 'react';
import PagesJson from '../data/PagesJson';
import '../css/home.css';
const land=PagesJson.find(landing=>landing.pageId===1);
export default class LandingPage extends Component {
    render() {
        return (
            
            <div className="main-container">
                
                <div className="text-img"><p>{land.cont[0]}<br/> 
                {land.cont[1]} <span  className="first-spane" >{land.cont[2]} </span> 
                {land.cont[3]} <br/>{land.cont[4]} <span className="second-span">{land.cont[5]}</span>
                </p>
                  <a className="start-btn" href="#">{land.btn}</a>
                <div className="line-img-div">
                   <img className="lineImg" src={land.img1}/>
                </div>
                </div>
                <div className="imgBox">
                   <img className="textoneImg" src={land.img2}/>
                </div>
            </div>
        );


    }
}

