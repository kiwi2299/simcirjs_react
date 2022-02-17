import React, { Component } from 'react';
import { BrowserRouter,Redirect, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: '',
                projects: []
            },
            redirect: false
        };
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('session'));
        if(user != null) {
            this.setState({
                user: {
                    ...this.state.user,
                    username: user.username
                }
            });
            fetch(`http://localhost:2272/SimcirJS/DashboardServlet?username=${user.username}`)
                .then(resp => resp.json())
                .then(resp => {
                    console.log(resp);
                    this.setState({
                        user: {
                            ...this.state.user,
                            projects: resp.projects
                        }
                    });
                });
        }
    }

    removeCircuit(id) {
        if(confirm('¿Seguro que quieres borrar el proyecto?')) {
            fetch(`http://localhost:2272/SimcirJS/RemoveCircuit?id=${id}`)
            .then(resp => resp.json())
            .then(resp => {
                if(resp.ok) {
                    alert(`Se ha eliminado el proyecto ${resp.name}`);
                    window.location.reload();
                }
            });
        }
    }

    renderProject(project) {
        return (
            <tr>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>
                    <BrowserRouter>
                        <a className='p-action' href={`/viewEjercicio.html?id=${project.id}&name=${project.name}`} ><i className="fas fa-eye">Ver</i></a>
                        <Link className='p-action' to={`/modify/${project.id}`} ><i className="fas fa-pen">Editar</i></Link>
                        <Link className='p-action' onClick={ () => { this.removeCircuit(project.id) } } ><i className="fas fa-trash">Borrar</i></Link>
                    </BrowserRouter>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                 
                <div className="container">
                    <table className='table table-striped'>
                        <tbody>
                        <tr>
                            <td>ID</td>
                            <td>Nombre del circuito</td>
                            <td>Acciones</td>
                        </tr>
                        { this.state.user.projects.map(project => this.renderProject(project)) }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Dashboard;

const wrapper = document.getElementById("dashboard");
wrapper ? ReactDOM.render(<Dashboard />, wrapper) : false;