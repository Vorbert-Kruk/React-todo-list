import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import TodoList from './components/todoList';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Navbar>
          Create a convenient todo list!
        </Navbar>
        <div className="content-wrapper">
          <TodoList />
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;
