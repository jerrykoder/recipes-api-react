import React, { Component } from 'react'
import Button from './Button'
import { recipes } from './recipes'

class App extends Component {
	state = {
		recipes: recipes,
		title: 'Featured Recipes'
	}

	render() {
		console.log(this.state)

		return (
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12 text-center mt-5'>
						<h1>{this.state.title}</h1>
						<Button />
					</div>
				</div>
				<div className='row'>
					{this.state.recipes.map(recipe => {
						return (
							<div className='col-sm-4 mt-5' key={recipe.id}>
								<h5>{recipe.title}</h5>
								<img className='img-fluid' src={recipe.image_url} alt='' />
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default App
