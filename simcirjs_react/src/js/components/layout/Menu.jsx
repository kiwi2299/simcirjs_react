import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";


class Menu extends React.Component {
    render(){
        return (
            <header style={headerStyle}>
                <h1>SimcirJS</h1>
                <a href="/crearEjercicios2.html">Crear Ejercicio</a>
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

export default Menu;

const wrapper = document.getElementById("menu-header");
wrapper ? ReactDOM.render(<Menu />, wrapper) : false;

