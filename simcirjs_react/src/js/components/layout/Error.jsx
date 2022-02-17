import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";


class Error extends React.Component {
    render(){
        return (
            <div className="container">
                <header style={headerStyle}>
                    <h1>SimcirJS</h1>
                    <a href="/">Volver a intentarlo</a>
                </header>
                <body>
                    <h1>Usuario no regitrado</h1>
                </body>
            </div>
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

export default Error;

const wrapper = document.getElementById("error-header");
wrapper ? ReactDOM.render(<Error />, wrapper) : false;

