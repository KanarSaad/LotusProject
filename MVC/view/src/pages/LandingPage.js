import { Component } from 'react';
import '../css/home.css';
import { fetchPageData } from './FechDataPage';
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landPage: null,
    };
  }
  componentDidMount() {
    const pageName="LandingPage";
    const pagePath="pages";
    fetchPageData(pagePath,pageName)
    .then(pages => {
        this.setState({landPage: pages });
    })
    .catch(error => console.error('Error fetching data:', error));
  }
  render() {
    const { landPage } = this.state;
    if (!landPage) {
      return <div>Home Page Is Loading</div>;
    }
    return (

      <div className="main-container">

        <div className="text-img"><p>{landPage.cont[0]}<br />
          {landPage.cont[1]} <span className="first-spane" >{landPage.cont[2]} </span>
          {landPage.cont[3]} <br />{landPage.cont[4]} <span className="second-span">{landPage.cont[5]}</span>
        </p>
          <a className="start-btn" href="Service">{landPage.btn}</a>
          <div className="line-img-div">
            <img className="lineImg" src={landPage.img1} />
          </div>
        </div>
        <div className="imgBox">
          <img className="textoneImg" src={landPage.img2} />
        </div>
      </div>
    );


  }
}

