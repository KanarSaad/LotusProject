import { Component } from "react";
import FormJson from "../data/FormJson";
import "../css/login.css";
const logfiltered = FormJson.find(user => user.formId === 1);
export default class LogIn extends Component {
	render() {
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
					<span>{logfiltered.formName}</span>
					<p className="enterdata">{logfiltered.text}</p>
					<form className="login-on-form" action="#" method="post">
						{logfiltered.cont.map((headerMenu) => (
							<input type={headerMenu.type} placeholder={headerMenu.placeholder} className={headerMenu.cssClass} required />
						))}
						<a className="log-input log-btn" type="submit" value="Log In" >Log In</a>
						<div className="fogotPass"><p>Forgot Password? <a href="#">Press Here</a></p></div>
						<div className="loginmedia"><p>Or Continue with</p><a href="#" ><img className="googleicon" src="google.png"></img></a></div>
					</form>
				</div>
			</div>



		);
	}



}