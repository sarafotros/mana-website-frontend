import React from 'react';

import './App.css';

const userUrl = "http://localhost:3000/users"

class App extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch(userUrl)
      .then(resp => resp.json())
      .then(data => this.setState({ users: data }))
  }
  
  render() {

    return (

      <div className="App">
        <h1> {this.state.users.map(user => user.name)} </h1>
      
      </div>
    );
  }
}

export default App;
