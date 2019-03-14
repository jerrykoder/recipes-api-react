import React, { Component } from 'react'

let counter = 5

export default class Form extends Component {
	state = {
		title: '',
		publisher: ''
	}

	hanldeData = e => {
		e.preventDefault()

		const newRecipe = {
			id: counter++,
			title: this.state.title,
			publisher: this.state.publisher
		}

		this.props.addRecipe(newRecipe)

		this.state.title = ''
		this.state.publisher = ''
	}

	handleInput = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.hanldeData}>
					<input
						type='text'
						onChange={this.handleInput}
						name='title'
						placeholder='Title'
						value={this.state.title}
					/>
					<input
						type='text'
						onChange={this.handleInput}
						name='publisher'
						placeholder='Publisher'
						value={this.state.publisher}
					/>
					<button>Add</button>
				</form>
			</div>
		)
	}
}
