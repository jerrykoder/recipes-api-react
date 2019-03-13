import React, { Component } from 'react'

class Button extends Component {
	state = { liked: false }

	render() {
		if (this.state.liked) {
			return 'You liked this.'
		}

		return (
			<button className='btn btn-primary btn-lg' onClick={() => this.setState({ liked: true })}>
				View More Recipes
			</button>
		)
	}
}

export default Button
