import React, { Component } from 'react';
import '../css/about.css';
import { fetchPageData } from './FechDataPage';
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutPage: null,
    };
  }
  componentDidMount() {
    const pageName = "AboutUs";
    const pagePath="pages";
    fetchPageData(pagePath,pageName)
    .then(pages => {
        this.setState({ aboutPage: pages });
    })
    .catch(error => console.error('Error fetching data:', error));
  }
  render() {
    const { aboutPage } = this.state;
    if (!aboutPage) {
      return <div>Loading About Us Page...</div>;
    }

    return (
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="flex">
              <div className="abouTitle"><p>{aboutPage.title}</p></div>
              <p>{aboutPage.cont.join(" ")}</p>
              <a className="about-btn" href="https://simple.wikipedia.org/wiki/Text_to_speech">{aboutPage.btn}</a>
            </div>
            <div className="flex"><img src={aboutPage.img} alt={aboutPage.title} /></div>
          </div>
        </div>
      </div>
    );
  }
}
