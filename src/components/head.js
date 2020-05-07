import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class header extends Component {

    handleLogout = () => {
        this.props.onLogout();
        alert("눌림");
    }

    render() {
        return (
            <header className="header_wrap">
                {this.props.loginState ?
                    <Link to="/Login" >
                        <div className="header_menu" onClick={this.handleLogout}>logout</div>
                    </Link>
                    :
                    <Link to="/Login" >
                        <div className="header_menu">login</div>
                    </Link>
                }
                <Link to="/write">
                    <div className="header_menu">write</div>
                </Link>
                <Link to="/Board">
                    <div className="header_menu">board</div>
                </Link>
                <Link to="/">
                    <div className="header_menu">Home</div>
                </Link>
            </header>
        );
    }
}

export default header;