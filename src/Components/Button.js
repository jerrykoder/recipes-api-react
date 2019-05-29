import React, { Component } from 'react'
import ReactDOM from 'react-dom'

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

ReactDOM.render(<Button />, document.getElementById('button'))
