import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import Todo from './Todos';
import uuid from 'uuid';
import ReactDOM from 'react-dom';

class CrearEjercicios extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        todos: [
        {
            id: uuid.v4(),
            title: 'Take out the trash',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Dinner',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Meeting',
            completed: false
        },
        ]
    }
    }

  componentDidMount() {
    axios.get()
      .then(res => this.setState({ todos: res.data }))
 }  //Marcar completo o incompleto
  markComplete(id){
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo(id){
    this.setState({ todos: [...this.state.todos.filter(
      todo => todo.id!== id)] });
  }

  addTodo(title){
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }
  
  render(){
    return (
      
       
          <div className="containter">
            <BrowserRouter>
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete} 
                  delTodo={this.delTodo} />
                </React.Fragment>
              )} />
            </BrowserRouter>
          </div>
        
      
    );
  }  
}

export default CrearEjercicios;

const wrapper = document.getElementById("crear-ejercicios");
wrapper ? ReactDOM.render(<CrearEjercicios />, wrapper) : false;