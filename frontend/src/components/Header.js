import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <h2>User Management System</h2>
        <div>
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/add">
                <p>Add User</p>
            </Link>
            <Link to="/about">
                <p>About</p>
            </Link>
        </div>
    </div>
  )
}

export default Header