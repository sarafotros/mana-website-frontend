import React, { Component } from 'react';
import API from '../API';

class Login extends Component {
	state = {
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
		API.logingFetch(this.state)
			.then(json => this.props.logIn(json.user, json.token));
      }
    

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<label>Email:</label>
					<input type="text" name="email" onChange={this.handleChange}/> <br />
					<label>Password</label>
					<input type="password" name="password" onChange={this.handleChange}/> <br />
					<input type="submit" value="Sign In" />
				</form>
			</div>
		);
	}
}
 
export default Login;