import React from 'react'
import { Button ,  Input } from 'semantic-ui-react'




export default class InputBar extends React.Component {
	constructor () {
		super()
		this.state =  {
			searchingTerm : '',
			actionSearch : false
		}
		this.toggleFunction = this.toggleFunction.bind(this);  
	}

	
	toggleFunction () {
		this.setState(() => ({actionSearch :  !this.state.actionSearch}))
		this.props.handleChangeInputFunction(this.state.actionSearch)
	}
	

	filterList = (e) => {
		let searchingTerm = e.target.value 
		this.props.filtering(searchingTerm)	
	}
	
	
	addList (e) {
		
		console.log(e.target.value);
	}
	
	render(){
		return (
			<div>
				<Button 
					onClick={this.toggleFunction}
					icon={this.state.actionSearch ? 
						'plus' : 
						'filter' 
					} 
				/>
				<Input 
					onChange={ this.state.actionSearch ? this.addList : this.filterList  }
					placeholder={this.state.actionSearch ? 
						'add a new todo' :
						'search for todos' 
				} />

			</div>
			

		)
	}
}
