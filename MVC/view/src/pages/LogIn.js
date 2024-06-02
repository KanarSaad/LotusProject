import { Component } from "react";
import "../css/login.css";
import { fetchPageData } from "./FechDataPage";
export default class LogIn extends Component {
	constructor(props) {
        super(props);
        this.state = {
            logfiltered: null,
        };
    }
    componentDidMount() {
        
        const pageName = "LogIn";
		const pagePath="forms";
		fetchPageData(pagePath,pageName)
        .then(pages => {
            this.setState({ logfiltered: pages });
        })
        .catch(error => console.error('Error fetching data:', error));
    }
    render() {
        const {logfiltered } = this.state;
        if (!logfiltered) {
            return <div>Login page is not found</div>;
        }
		return (
			<div className="login-container">
				<div className="panel left-panel">
					<div className="content">
						<img src="textone.png" className="sIimage" alt="" />
						<div className="account-sign"><p>Don't have an account?</p><a href="#" className="btn transparent" >
							Sign up
						</a></div>
					</div>
				</div>
				<div className="lognform">
					<span>{logfiltered.title}</span>
					<p className="enterdata">{logfiltered.text}</p>
					<form className="login-on-form" action="#" method="post">
						{logfiltered.cont.map((headerMenu) => (
							<input type={headerMenu.type} placeholder={headerMenu.placeholder} className={headerMenu.cssClass} required />
						))}
						<a className="log-input log-btn" type="submit" value="Log In" >Log In</a>
						<div className="fogotPass"><p>Forgot Password? <a href="#">Press Here</a></p></div>
						<div className="loginmedia">
							<p>Or Continue with</p>
							<div className="continueWithgoogle">
							<a className="goGoogle" href="#">Google Account</a>
							
							</div>

						</div>
					</form>
				</div>
			</div>



		);
	}

	


}