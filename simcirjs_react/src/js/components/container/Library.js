import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Library extends Component {
    render() {
        return (
            <div id='circuit-view' className='simcir'>
                {'{'}
                    "width": 600,
                    "height": 350,
                    "showToolbox": { this.props.showToolbox },
                    "devices": [ { this.props.devices } ],
                    "connectors": [ { this.props.connectors } ]
                {'}'}
            </div>
        );
    }
}

export default Library;

const wrapper = document.getElementById("circuit-view");
wrapper ? ReactDOM.render(<Library />, wrapper) : false;