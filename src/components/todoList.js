import React from 'react'
import { List } from 'semantic-ui-react'




class TodoList extends React.Component {
	constructor () {
		super()
		this.state = {
			todo : []
		}

	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then(response => response.json())
			.then(
				(response) => {
					this.setState(() => ({todo : [ ...response] }))
				},
				(error) =>	 {
					this.setState(() => ({	todo : error  }))
				}
			)
	}
	searchIndicator = () => {
		if (!this.props.actionSearch && this.props.searchingTerm !== '') {
			return (<h1>search for {this.props.searchingTerm}</h1>)
		}
	}

	render()
		{ if (this.state.todo.length > 10) {
			return (
				<List className="list" >
				{this.searchIndicator()}
				{this.state.todo
						//filter every item.title to see if context interesting 
						.filter(item => item.title.includes(this.props.searchingTerm))
						//display the interesting one 
						.map(item => {								return (				
						<List.Item key={item.id} className="list-item">
									  <List.Content >
								<List.Header as='a'> # {item.id} is {item.completed ? 'done' : 'still to be done'}</List.Header>
								<List.Description as='a'>{item.title}</List.Description>
									  </List.Content>
						</List.Item>)					
						})
				}
						
						
						
					</List>	
			)
		
		} else {
		return (<h1>loading</h1>) 
		
		
		}}
	
}


export default TodoList
