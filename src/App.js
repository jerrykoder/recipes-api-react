import React, { Component } from 'react'
import Button from './Components/Button'
import RecipeList from './Components/RecipeList'
import Form from './Components/Form'
import { recipes } from './recipes'

class App extends Component {
	state = {
		recipes: recipes,
		title: 'Featured Recipes 123'
	}

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

	loadingRecipes = () => {
		if (this.state.recipes.length === 0) {
			return <h1>No recipes</h1>
		} else {
			return <RecipeList recipes={this.state.recipes} deleteRecipe={this.deleteRecipe} />
		}
	}

	addRecipe = recipe => {
		console.log('Added', recipe)

		this.setState(
			prevState => {
				return {
					recipes: [...prevState.recipes, recipe]
				}
			},
			() => {
				console.log(this.state.recipes)
			}
		)
	}

	render() {
		return (
			<div className='container' id='recipes'>
				<div className='row'>
					<div className='col-sm-12 text-center mt-5'>
						<h1>{this.state.title}</h1>
						<Button />
					</div>
				</div>
				<Form addRecipe={this.addRecipe} />
				{this.state.recipes.length === 0 ? (
					<h1>No Recipes</h1>
				) : (
					<RecipeList recipes={this.state.recipes} deleteRecipe={this.deleteRecipe} />
				)}
			</div>
		)
	}
}

export default App
