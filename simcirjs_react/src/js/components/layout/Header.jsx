import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";


class Header extends React.Component {
    render(){
        return (
            <header style={headerStyle}>
                <h1>SimcirJS</h1>
                
            </header>
        )
    }
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    marginBottom: '20px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;

const wrapper = document.getElementById("login-header");
wrapper ? ReactDOM.render(<Header />, wrapper) : false;

