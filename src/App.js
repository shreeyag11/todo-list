import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import todoData from './components/todoData';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData,
      isLogged: true
    }
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if(todo.id === id)
          todo.completed = !todo.completed;
        return todo;
      })
      return updateTodos;
    })
  }

  // handleClick() {
  //   this.setState({isLogged: !this.state.isLogged})
  // }

  render() {
    const todoComponents = this.state.todos.map(todo => <TodoList
      key={todo.id}
      item={todo}
      onchange={this.handleChange}
    />);
    return (
      <div>
        {/* <h3>{this.state.isLogged? 'Logged In' : 'Logged Out'}</h3>
        <button onClick={this.handleClick}>{this.state.isLogged? 'Log Out' : 'Log In'}</button> */}
        <NavBar />
        {todoComponents}
        <Footer />
      </div>
    );
  }
}

export default App;
