import React, { Component } from 'react';
import Service from '../components/Service'

class ServiceContainer extends Component {
    state = { 
        service: null
     }

     componentDidMount(){
         fetch(`http://localhost:3000/products/${this.props.match.params.id}`)
         .then(response => response.json())
         .then(service => this.setState({service}))
     }

 
        render() { 
            return  this.state.service? 
            <Service service={this.state.service} />
            : 
            <h1>Loading...</h1>
        }
}
  
export default ServiceContainer;