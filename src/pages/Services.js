import PagesJson from "../data/PagesJson";
import { Component } from "react";
import '../css/services.css';
const servicedata=PagesJson.find(res=>res.pageName==="Service");
const element=servicedata.specialElementg;
export default class Services extends Component {
    render() {
        return (
            <div>
                <div className="ttsArea">
                    <div>
                        <ul className="mabtns">
                            {
                                element.map((sdata) => (
                                    <li><a className={sdata.cssClass} href={sdata.url}>{sdata.text}</a></li>
                            ))}
                         </ul>
                    </div>
                    <div className="audio-area">     
                      <textarea className="textArea" rows="14"> </textarea>
                      <audio controls  muted ><source src="Free_Test_Data_5MB_MP3.mp3"></source></audio>
                      
                      </div>
                </div>
            </div>
        );
    }
}