import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";


class WorkspaceHeader extends React.Component {
    render(){
        return (
            <header style={headerStyle}>
                <h1>SimcirJS</h1>
                <a href="/welcome.html?username=osquitar">Dashboard</a>
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

export default WorkspaceHeader;

const wrapper = document.getElementById("workspace-header");
wrapper ? ReactDOM.render(<WorkspaceHeader />, wrapper) : false;

