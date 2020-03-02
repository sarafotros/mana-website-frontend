import React from 'react';
import User from '../components/User';

// import ServicesPhoto from '../public/mainContainer/services.png';

const MainContainer = ({ users }) => {

    const renderUsers = () => {
        return users.map(user => <User name={user.name}/>)
    }

    return (
        <div>
            {renderUsers()}
    
        </div>
    )

}
 
export default MainContainer;