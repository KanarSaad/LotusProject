//Header Component 
//Returns the header navn=bar with its buttons
import { Component } from 'react';
import '../css/menu.css';
import { fetchPageData } from './FechDataPage';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          headerPage: null,
        };
      }
      componentDidMount() {
        const pageName = "Header";
        const pagePath="pages";
        fetchPageData(pagePath,pageName)
        .then(pages => {
            this.setState({ headerPage: pages });
        })
        .catch(error => console.error('Error fetching data:', error));
      }
      render() {
        const { headerPage } = this.state;
         
        if (!headerPage) {
          return <div>Header...</div>;
        }
        const headerLogo=headerPage.imgs[0];
        return (
            <div className="navbar">
                <a className="logo" href="Home"><img className={headerLogo.cssClass}  src={headerLogo.img}/></a>
                <nav>
                    <div className="nav-div">
                        <ul className="nav-links">
                            {headerPage.specialElementg.map((headerMenu) => (
                                <li key={headerMenu.id}> 
                                    <a  href={headerMenu.url} className={headerMenu.cssClass} >{headerMenu.text}</a>
                                </li>))}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

