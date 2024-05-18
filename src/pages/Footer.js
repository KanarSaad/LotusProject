import { Component } from 'react';
import '../css/style.css';
import PagesJson from '../data/PagesJson';

export default class Footer extends Component {

    render() {
        const foo=PagesJson.find(res=>res.pageId===7);
        return (

            <div className={foo.cssClass}>
                <p>{foo.title} &copy;</p>
            </div>

        );
    }
}