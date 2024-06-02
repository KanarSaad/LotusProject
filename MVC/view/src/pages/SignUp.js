import { Component } from "react";
import '../css/signup.css';
import { fetchPageData } from "./FechDataPage";
export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filtered: null,
		};
	}
	componentDidMount() {

		const pageName = "SignUp";
		const pagePath = "forms";
		fetchPageData(pagePath, pageName)
			.then(pages => {
				this.setState({ filtered: pages });
			})
			.catch(error => console.error('Error fetching data:', error));

	}
	render() {
		const { filtered } = this.state;
		if (!filtered) {
			return <div>SignUp page is not found</div>;
		}



		return (
			<div className="sign-container">
				<div className="signform">
					<span>{filtered.title}</span>
					<p>{filtered.text1}<br></br>{filtered.text2}</p>
					<form className="signup-form" action="#" method="post">
						{filtered.cont.map((headerMenu) => (
							<input type={headerMenu.type} value={headerMenu.value} placeholder={headerMenu.placeholder} className={headerMenu.cssClass} required />
						))}
						<div className="loginmedia">
							<p>Or Continue with</p>
							<div className="continueWithgoogle">
							<a className="goGoogle" href="#">Google Account</a>
							
							</div>

						</div>
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