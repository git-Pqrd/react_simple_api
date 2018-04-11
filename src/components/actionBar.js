import React from 'react'
import { Button ,  Input } from 'semantic-ui-react'




export default class InputBar extends React.Component {
	constructor () {
		super()
		this.state =  {
			search : false
		}
		this.toggleFunction = this.toggleFunction.bind(this);  
	}

	
	toggleFunction () {
		this.setState(() => ({search :  !this.state.search}))
	}

	filterList (e) {
		console.log('filtering');
		console.log(e.target.value );
	}
	
	
	addList (e) {
		
		console.log(e.target.value);
	}
	
	render(){
		return (
			<div>
				<Button 
					onClick={this.toggleFunction}
					icon={this.state.search ? 
						'more' : 
						'filter' 
					} 
				/>
				<Input 
					onKeyPress={ this.state.search ? this.addList : this.filterList  }
					placeholder={this.state.search ? 
						'search for todos' : 
						'add a new todo' 
				} />

			</div>
			

		)
	}
}
