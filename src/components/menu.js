import React, { Component } from 'react'
import { Image, Button  ,Menu } from 'semantic-ui-react'


export default class MenuTodo extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid borderless alignment='right'>
		  <Menu.Item
			position='left'
			name='logo'
        >
	  <Image src='https://react.semantic-ui.com/logo.png' size='mini' circular />
        </Menu.Item>
		
		<Menu.Item
          name='editorials'
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

		<Menu.Item
          name='reviews'
		  className={this.props.userLogged ? 'hidden' : ''}
          onClick={this.handleItemClick}
	  >
   <Button content='login' secondary />
        </Menu.Item>

      </Menu>
    )
  }
}

