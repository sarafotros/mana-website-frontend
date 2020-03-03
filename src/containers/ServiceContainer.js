import React, { Component } from 'react';
import ServiceShow from '../components/ServiceShow'

class ServiceContainer extends Component {
    state = { 
        service: null
     }

     componentDidMount(){
         fetch(`http://localhost:3000/services/${this.props.match.params.id}`)
         .then(response => response.json())
         .then(service => this.setState({service}))
     }

 
        render() { 
            return  this.state.service? 
            <ServiceShow service={this.state.service} />
            : 
            <h1>Loading...</h1>
        }
}
  
export default ServiceContainer;