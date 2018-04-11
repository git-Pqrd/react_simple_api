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
		actionSearch  : false ,
		searchingTerm : '',  
		logged : false 
	}
  }
	handleSearching = (searchingTerm) => {
	  this.setState (() => ({
		  searchingTerm : searchingTerm

	  }))
	}
	handleChangeInputFunction = ((actionSearch) => {
		this.setState((actionSearch) => ({
			actionSearch : actionSearch
		}))
	})
  render() {
    return (
      <div className="App">
		  <MenuTodo userLogged={this.state.logged} style={{width:'100%'}}/>
		  
		  <InputBar 
			  handleChangeInputFunction={this.handleChangeInputFunction} 
			  filtering={this.handleSearching}/>
		 
		  <TodoList 
			  actionSearch={this.state.actionSearch}
			  searchingTerm={this.state.searchingTerm}/>
      </div>
    );
  }
}

export default App;
