import React, { Component } from 'react';
import '../componentsStyling/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="content-wrapper">
                    {this.props.children}
                </div>
            </nav>
        );
    }
}

export default Navbar;