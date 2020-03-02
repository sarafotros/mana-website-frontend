import React, { Component } from 'react';
import Service from '../components/Service'

class Services extends Component {
    state = {  }

    mapServices = () => {
        return this.props.services.map(service => <Service service={service} />)
    }

    render() { 
        return (
        <div>{this.mapServices()}</div>
        )
    }
}
 
export default Services;