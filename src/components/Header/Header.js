import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth()
    
    return (
        <div className="menu">
            <Link to="/">Home</Link>
            {user.email && <Link to="/addService">Add a new Service</Link>}
            
            {user.email && <span style={{ color: 'orange' }}>Hello {user.displayName} </span>}
                {
                    user.email ?
                        <button onClick={logOut}>log out</button>
                        :
                        <NavLink to="/login">Login</NavLink>}
        </div>
    );
};

export default Header;