import { Component } from 'react';
import '../css/menu.css';
import MenuJson from '../data/MenuJson';
import PagesJson from '../data/PagesJson';
const headerLogo=PagesJson.find(res=>res.pageId===8);
export default class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <a className="logo"><img className={headerLogo.cssClass}  src={headerLogo.img}/></a>
                <nav>
                    <div className="nav-div">
                        <ul className="nav-links">
                            {MenuJson.map((headerMenu) => (
                                <li> 
                                    <a href={headerMenu.url} className={headerMenu.cssClass} >{headerMenu.text}</a>
                                </li>))}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

