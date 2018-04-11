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
	
	render()
		{ if (this.state.todo.length > 10) {
			return (
				<List className="list" >
				{this.state.todo.map(item =>  {
					return (
						<List.Item key={item.id} className="list-item">
							  <List.Content >
	<List.Header as='a'> # {item.id} is {item.completed ? 'done' : 'still to be done'}</List.Header>
			<List.Description as='a'>{item.title}</List.Description>
							  </List.Content>
						</List.Item>
						)})}			
					</List>	
			)
		
		} else {
		return (<h1>loading</h1>) 
		
		
		}}
	
}


export default TodoList
