import React from 'react';

const Header = () => (
    <div>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="btn-toolbar text-center well">
                    <a href="https://www.army.mil/standto/archive/2019/08/16//" className="navbar-brand">
                        Welcome to the Family Readiness Group Tracking Application
                    </a>
                    <a href="http://localhost:8080/login" className="btn btn-primary mb-2"  role="button">Login</a>
                    <h3>s</h3>
                    <a href="http://localhost:8080/logout" className="btn btn-primary mb-2" role="button">Logout</a>
                    <h3>s</h3>
                    <a href="/" className="btn btn-primary mb-2" role="button">Home</a>
                </div>
            </nav>
        </header>
    </div>

);

export default Header;