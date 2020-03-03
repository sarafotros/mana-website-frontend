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
        const configurationObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/login', configurationObject)
					.then(response => response.json())
					.then(json => this.props.logIn(json.user));
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