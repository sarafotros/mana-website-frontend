import React from 'react';
import API from '../API';
import MainContainer from './MainContainer';
import Header from './Header'

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
				<Header />
				{/* <Banner /> */}
                <MainContainer users={this.state.users}/>
				{/* <Instagram /> */}
				{/* <Footer /> */}
			</div>
		);
	}
}
 
export default Welcome;