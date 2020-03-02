import React from 'react';
import API from '../API';
import MainContainer from './MainContainer';

class Welcome extends React.Component {
	state = {
		users: []
	};

	getUsers = () => {
		API.getUsers().then(users => this.setState({ users }));
	};

	componentDidMount() {
		this.getUsers();
	}

    render() {
        console.log(this.state.users)
		return (
			<div>
                <MainContainer users={this.state.users}/>
			</div>
		);
	}
}
 
export default Welcome;