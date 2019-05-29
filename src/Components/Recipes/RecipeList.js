import React, { Component } from 'react'
import Recipe from './Recipe'

const RecipeList = ({ recipes, deleteRecipe }) => {
	const displayRecipes = () => {
		return recipes.map(recipe => {
			return <Recipe key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />
		})
	}

	return <div className='row'>{displayRecipes()}</div>
}

export default RecipeList
