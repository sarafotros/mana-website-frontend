import React from 'react';
import Welcome from './containers/Welcome';
import { Route } from 'react-router-dom'
import './App.css';



class App extends React.Component {
  
  render() {

    return (

      <div>
       {/* <Route exact path="/" component={() => }/> */}
        <Welcome />
      </div>
    );
  }
}

export default App;
