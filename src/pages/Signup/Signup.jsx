import React from 'react';
import { Link } from "react-router-dom";

import "./Signup.scss";

const Signup = () => {
	return (
		<div className="Signup container">
			<h3 className="Signup-title">Create Account</h3>
			<input type="text" placeholder="Full Name" />
			<input type="email" name="email" id="email" placeholder="Email" />
			<input type="password" name="password" id="password" placeholder="Password" />
			<Link to="/" className="btn-submit">Create Account</Link>
			<span>Already have an account? <Link to="/">Log In</Link></span>
		</div>
	)
}

export default Signup;