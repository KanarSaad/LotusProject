import { Component } from "react";
import FormJson from "../data/FormJson";
import '../css/signup.css';
export default class SignUp extends Component {
	render() {
		//Getting the form with id 3, the contact form
		const filtered = FormJson.find(user => user.formId === 3);
		return (
			<div className="sign-container">
				<div className="signform">
					<span>{filtered.formName}</span>
					<p>{filtered.text1}<br></br>{filtered.text2}</p>
					<form className="signup-form" action="#" method="post">
						{filtered.cont.map((headerMenu) => (
							<input type={headerMenu.type} value={headerMenu.value} placeholder={headerMenu.placeholder} className={headerMenu.cssClass} required />
						))}		
						<div className="loginmedia"><p>Or Continue with</p><a href="#"><img className="googleicon" src="google.png"></img></a></div>
					</form>
					<div>
					</div>
				</div>
				<div className="right-panel">
					<div className="signup-content">
						<img src="textone.png" className="signu-image" alt="" />
						<div className="account-sign"><p>Already Have An Account ?</p><a href="#" className="btn transparent" >
							Log in
						</a></div>

					</div>
				</div>

			</div>

		);
	}



}