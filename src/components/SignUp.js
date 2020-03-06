import React, { Component } from 'react';
import API from '../API';

class SignUp extends Component {
state = {
	name: '',
	family_name: '',
	dob:'',
	phone:0,
	email: '',
	password: ''
};



handleChange = (e) => {
	this.setState({
		[e.target.name]: e.target.value
	});
};

handleSubmit = (e) => {
	e.preventDefault()
	API.signup(this.state)
	.then(json => {
		this.props.logIn(json.user, json.token)
	});


}

render(){
	return (			
	<div class="signPage">
		<div class="signContainer">
		<h1 class="signH1">Sign Up</h1>
		<div class="loginForm">
			<form onSubmit={this.handleSubmit}>
				<label>Name:</label>
				<input type="text" name="name" onChange={this.handleChange}/> <br />
				<label>Family Name:</label>
				<input type="text" name="family_name" onChange={this.handleChange}/> <br />
				<label>Email:</label>
				<input type="text" name="email" onChange={this.handleChange}/> <br />
				<label>Date of Birth:</label>
				<input type="date" name="dob" onChange={this.handleChange}/> <br />
				{/* <label>Phone Number:</label>
				<input type="text" name="phone" onChange={this.handleChange}/> <br /> */}
				<label>Password</label>
				<input type="password" name="password" onChange={this.handleChange}/> <br />
				
				<input type="submit" value="Sign up" class="button"/>
			</form>
		</div>
		</div>
	</div>
	);
	}
};
export default SignUp;
