import { Component } from "react";
import '../css/services.css';
import { fetchPageData } from "./FechDataPage";
export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servicedata: null,
        };
      }
      componentDidMount() {
        const pageName="Service";
        const pagePath="pages";
        fetchPageData(pagePath,pageName)
        .then(pages => {
            this.setState({ servicedata: pages });
        })
        .catch(error => console.error('Error fetching data:', error));
      }
    render() {
        const { servicedata } = this.state;
        if (!servicedata) {
          return <div>Loading Home Page...</div>;
        }
        const element=servicedata.specialElementg;
        return (
            <div>
                <div className="ttsArea">
                    <div>
                        <ul className="mabtns">
                            {
                                element.map((sdata) => (
                                    <li key={sdata.id}><a className={sdata.cssClass} href={sdata.url}>{sdata.text}</a></li>
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