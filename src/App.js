import React, { Component } from 'react';
import  InputBar  from './components/actionBar.js';
import  TodoList  from './components/todoList.js';
import  MenuTodo  from './components/menu.js';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  constructor () {
	super()
	this.state = {
		logged : false 
	}
  }  
  render() {
    return (
      <div className="App">
		  <MenuTodo userLogged={this.state.logged} style={{width:'100%'}}/>
		  <InputBar/>
		  <TodoList />
      </div>
    );
  }
}

export default App;
