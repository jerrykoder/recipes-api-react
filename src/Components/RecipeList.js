import React, { Component } from 'react'
import Recipe from './Recipe'

export default class RecipeList extends Component {
	displayRecipes = () => {
		const { recipes } = this.props
		const { deleteRecipe } = this.props

		return recipes.map(recipe => {
			return <Recipe key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />
		})
	}

	render() {
		return <div className='row'>{this.displayRecipes()}</div>
	}
}
