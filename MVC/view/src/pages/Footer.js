import { Component } from 'react';
import '../css/style.css';
import { fetchPageData } from './FechDataPage';
export default class Footer extends Component {
        constructor(props) {
            super(props);
            this.state = {
             foo: null,
            };
          }
          componentDidMount() {
            const pageName = "Footer";
            const pagePath="pages";
            fetchPageData(pagePath,pageName)
            .then(pages => {
                this.setState({ foo: pages });
            })
            .catch(error => console.error('Error fetching data:', error));
          }
          render() {
            const { foo } = this.state;
            if (!foo) {
              return <div>Header...</div>;
            }
    
        return (

            <div className={foo.cssClass}>
                <p>{foo.title} &copy;</p>
            </div>

        );
    }
}