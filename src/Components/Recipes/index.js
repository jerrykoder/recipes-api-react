import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import RecipeList from './RecipeList'
import Form from './Form'
import { recipes } from './data'

let counter = 5

class App extends Component {
	state = {
		recipes: recipes,
		heading: 'Featured Recipes',
		title: '',
		publisher: ''
	}

	// Handle Input Fields Data
	handleInput = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	// Add new recipe
	hanldeData = e => {
		e.preventDefault()

		const newRecipe = {
			id: counter++,
			title: this.state.title,
			publisher: this.state.publisher
		}

		this.setState(
			prevState => {
				return {
					recipes: [...prevState.recipes, newRecipe],
					title: '',
					publisher: ''
				}
			},
			() => {
				console.log(this.state.recipes)
			}
		)
	}

	// Delete recipe
	deleteRecipe = id => {
		const recipes = this.state.recipes.filter(recipe => recipe.id !== id)

		this.setState(
			{
				recipes
			},
			() => {
				console.log(this.state)
			}
		)
	}

	render() {
		return (
			<div className='container' id='recipes'>
				<div className='row'>
					<div className='col-sm-12 text-center mt-5'>
						<h1>{this.state.heading}</h1>
					</div>
				</div>
				<Form
					hanldeData={this.hanldeData}
					handleInput={this.handleInput}
					title={this.state.title}
					publisher={this.state.publisher}
				/>
				{this.state.recipes.length === 0 ? (
					<h1>No Recipes</h1>
				) : (
					<RecipeList recipes={this.state.recipes} deleteRecipe={this.deleteRecipe} />
				)}
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
